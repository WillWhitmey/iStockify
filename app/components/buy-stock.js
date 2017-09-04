import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({
  store: inject.service(),

  actions: {
    buyStock() {
      let data = this.get('store').createRecord('purchase', {
        companyID: this.get('companyID'),
        price: this.get('price'),
        time: new Date().getTime()
      });
      data.save();
    }
  }
});
