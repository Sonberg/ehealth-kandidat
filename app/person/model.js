import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  content: DS.attr()
});
