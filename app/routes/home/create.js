import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('stock-summary');
  },

  actions: {
    createStock() {
      let thing = this.modelFor(this.routeName);
      thing.save();
    }
  }
});
