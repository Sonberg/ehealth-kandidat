import Ember from 'ember';

export default Ember.Route.extend({
  structure: Ember.inject.service(),
  model(params) {
    this.set("structure.active", params.index);
    return this.get("structure.person.content." + params.index);
  },
  actions: {
    willTransition: function () {
      this.set("structure.active", null);
      this.set("structure.person.content", JSON.parse(JSON.stringify(this.get("structure.person.content"))));
      this.get("structure.person").save();
    }
  }
});
