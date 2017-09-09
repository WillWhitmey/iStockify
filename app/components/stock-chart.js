import Ember from 'ember';

const { inject, computed, $ } = Ember;

export default Ember.Component.extend({

  store: inject.service(),

  stock: null,
  prices: null,

  chartOptions: {
    chart: {
      events: {
        load: function () {
          var series = this.series[0];
          setInterval(function () {
            $.ajax({
              beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("Accept","application/json");
              },
              type: 'GET',
              dataType: 'json',
              url: `http://localhost:4567/stockSummaries/latestPrice/95f78b17-fdbc-4184-945c-6415a8634494/`,
              success: function(point) {
                let data = [point.prices[0].time, point.prices[0].price];
                let lastPoint = [series.data.slice(-1).pop().x, series.data.slice(-1).pop().y];
                data[0] === lastPoint[0] ? null : series.addPoint(data, true, true);
              },
              cache: false
            })
          }, 2000)
        }
      }
    },
    title: {
      text: 'Live Data'
    },
    rangeSelector: {
      enabled: true,
      buttons: [{
          count: 1,
          type: 'minute',
          text: '1M'
      }, {
          count: 5,
          type: 'minute',
          text: '5M'
      }, {
          type: 'all',
          text: 'All'
      }],
      selected: 3
    }
  },

  series: computed('prices', function() {
    let data = this.get('prices').map(function (x) {
      return x.toJSON();
    })
    .map(function (data) {
      return [data.time, data.price]
    })
    return [{
      name: 'Random data',
      data: data
    }]
  })

});
