import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('string'),
  user: DS.attr('string'),
  text: DS.attr('string'),
  created: DS.attr('string')
});
