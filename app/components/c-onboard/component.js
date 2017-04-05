import Ember from 'ember';

export default Ember.Component.extend({
  structure: Ember.inject.service(),
  classNames: ["container"],

  actions: {
    setActive: function (index) {
      this.set("structure.active", index);
    },

    next: function () {
      if (this.get("structure.active") == this.get("structure.steps.length") - 1) {
        return false;
      }
      this.set("structure.active", this.get("structure.active") + 1);
    },
    previous: function () {
      if (this.get("structure.active") == 0) {
        return false;
      }
      this.set("active", this.get("structure.active") - 1);
    },
    exit: function () {
      console.log("EXIT!!!");
    }
  }
});
