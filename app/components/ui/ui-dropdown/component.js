import Ember from 'ember';

export default Ember.Component.extend({
  visible: false,
  _init: function () {
    if (this.get("open")) {
      Ember.$(document).on("click", function (e) {

        if (this.isDestroyed || this.isDestroying || !this.open) {
          return;
        }

        // Link
        if (Ember.$(e.target).has("[data-ember-action]")) {
          return true;
        }

        // Related link
        if (Ember.$(e.target).closest("[data-ember-action]").siblings().is(this.element)) {
          return true;
        }


        // Inside click
        if (Ember.$.contains(this.element, e.target) || Ember.$(e.target).hasClass("fa")) {
          return true;
        }

        this.set("open", false);
      }.bind(this));
    }
  }.observes("open"),

  actions: {
    toggleDropdown() {
      this.toggleProperty("open");
    },
    closeDropdown() {
      this.toggleProperty("open");
    }
  }
});
