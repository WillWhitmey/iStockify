import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({
  store: inject.service(),

  actions: {
    createStock() {
      let data = this.get('store').createRecord('stock', {
        name: this.get('name'),
        price: this.get('price'),
        image: this.get('image')
      });
      data.save();
    }
  }
});
