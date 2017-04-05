import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  classNames: ["large-12", "medium-12", "small-12"],
  message: null,
  isClicked: false,
  myMessage: false,
  style: Ember.computed('message.image', function() {
    var image = this.get("message.image");
    if (image) {
      return  Ember.String.htmlSafe("background-image: url('" + image + "')" );
    }
  }),
  _init: function () {
    if (this.get("session.currentUser.displayName") == this.get("message.user")) {
      this.get("classNames").pushObject("text-right");
      this.set("myMessage", true);
    }
  }.on("init"),
  _jQuery: function () {
    if (this.element) {
      Ember.$("#messages-box").scrollTop(800);
    }
    Ember.$(document).on("click", function (e) {
      if (this.element) {
        if (Ember.$.contains(this.element, e.target)) {
          return true;
        }

        this.set("isClicked", false);
      }

    }.bind(this));
  }.on("didInsertElement"),
  click: function (e) {
    if (Ember.$.contains(this.element, e.target)) {
      this.toggleProperty("isClicked");
    }
  }
});
