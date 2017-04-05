import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),

  classNames: [
    "flex-grid", "flex-container", 'p1 pb0'
  ],
  text: "",

  keyPress: function(event) {
    if (event.charCode == 13) {
      this.send();
    }
  },
  send: function() {
    if (this.text.length > 0) {
      var message = this.get("store").createRecord('message', {
        image: this.get("session.currentUser.photoURL"),
        user: this.get("session.currentUser.displayName"),
        text: this.text,
        created: moment().format()
      });
      message.save();
      this.set("text", "");
    }
  },
  actions: {
    didClickSend: function() {
      this.send();
    }
  }
});
