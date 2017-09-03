import Ember from 'ember';
import HighchartsThemeMixinMixin from 'i-stockify/mixins/highcharts-theme-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | highcharts theme mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let HighchartsThemeMixinObject = Ember.Object.extend(HighchartsThemeMixinMixin);
  let subject = HighchartsThemeMixinObject.create();
  assert.ok(subject);
});
