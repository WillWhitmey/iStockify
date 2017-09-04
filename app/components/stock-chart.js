import Ember from 'ember';

export default Ember.Component.extend({

  chartOptions: {
    chart: {
      events: {
          load: function () {

              // set up the updating of the chart each second
              // var series = this.series[0];
              // setInterval(function () {
              //     var x = (new Date()).getTime(), // current time
              //         y = Math.round(Math.random() * 300);
              //     series.addPoint([x, y], true, true);
              // }, 2000);
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

  series: [{
      name: 'Random data',
      data: (function () {
          // generate an array of random data
          var data = [
            [1283817600000,36.83],
            [1283904000000,37.56]
          ];
          console.log(new Date().getTime());
          return data;
      }())
  }]
});
