import Ember from 'ember';

export default Ember.Service.extend({
  person: null,
  open: false,
  active: null,
  _change: function () {
    if (this.get("person")) {
      Ember.run.once(function () {
        this.get("person").save();
      }.bind(this));
    }
  }.observes("person", "person.content.@each")

});
