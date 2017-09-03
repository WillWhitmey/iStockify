import Ember from 'ember';

export default Ember.Component.extend({
  stock: null,

  chartOptions: {
    chart: {
      events: {
          load: function () {

              // set up the updating of the chart each second
              var series = this.series[0];
              setInterval(function () {
                  var x = (new Date()).getTime(), // current time
                      y = Math.round(Math.random() * 300);
                  series.addPoint([x, y], true, true);
              }, 1000);
          }
      }
    },
    title: {
      text: 'Live random data'
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
      selected: 0
    }
  },

  exporting: {
      enabled: false
  },

  series: [{
      name: 'Random data',
      data: (function () {
          // generate an array of random data
          var data = [],
              time = (new Date()).getTime(),
              i;

          for (i = -999; i <= 0; i += 1) {
              data.push([
                  time + i * 1000,
                  Math.round(Math.random() * 100)
              ]);
          }
          return data;
      }())
  }]
});
