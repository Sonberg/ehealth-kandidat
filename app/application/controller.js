import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  structure: Ember.inject.service(),
  open: false,
  menuOpen: false,
  _auth: function() {
    if (this.get("session.isAuthenticated")) {
      this.get("store").findAll("person").then(function(persons) {
        var person = persons.findBy("uid", this.get("session.currentUser.uid"));
        if (!person) {
          var person = this.get("store").createRecord('person', {
            uid: this.get("session.currentUser.uid"),
            content: []
          });
          person.save();
        }

        this.set("structure.person", person);
      }.bind(this))
    }
  }.observes("session.isAuthenticated").on("init"),
  actions: {
    start: function() {
      if (this.get("session.user")) {
        this.set("started", true);
      }
    },
    toggle: function() {
      this.toggleProperty("open");
    },
    toggleMenu: function () {
      this.toggleProperty("menuOpen");
    }
  }
});
