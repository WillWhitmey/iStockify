import DS from 'ember-data';

export default DS.Model.extend({
  companyID: DS.attr(),
  price: DS.attr(),
  time: DS.attr()
});
