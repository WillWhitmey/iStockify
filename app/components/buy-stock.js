import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({
  store: inject.service(),

  stock: null,

  actions: {
    buyStock() {
      let data = this.get('store').createRecord('price', {
        companyID: this.get('stock.id'),
        price: this.get('price'),
        time: new Date().getTime()
      });
      data.save();
    }
  }
});
