import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  structure: Ember.inject.service(),
  index: 0,
  grid: Ember.A([
    {
      title: "Din behandling",
      image: null,
      component: 'c-treatment-edit',
      class: "large-8 medium-8 small-12",
    },
    {
      title: "Din behandling",
      image: null,
      component: 'c-treatment-blueprint',
      class: "large-4 medium-4 small-12",
    }
  ]),
  data: Ember.computed("structure.person.content", function () {
    return this.get("structure.person.content." + this.index);
  }),
   actions: {
     didChangeCheckbox: function () {
       this.toggleProperty("structure.person.content." + this.index + ".completed");
     }
   }
});
