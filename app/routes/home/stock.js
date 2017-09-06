import Ember from 'ember';

const { RSVP } = Ember;

export default Ember.Route.extend({
  model(params) {
    return RSVP.hash({
      stock: this.store.findRecord('stock', params.stock_id),
      prices: this.store.query('price', params.stock_id).then(function(data) {
        return data;
      })
    });
  }
});
