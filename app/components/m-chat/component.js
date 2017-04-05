import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  messages: Ember.A,
  classNameBindings: ["open"],
  maria: {
      user: "Maria",
      text: "Hej, jag heter Maria och kommer vara din kontaktperson här på Behandlingsresan. Finns det något jag kan hjälpa dig med? ",
      created: moment().format()
  },

  _scroll: function() {
    Ember.run.once(function() {
      var message = this.get("messages.lastObject");

      Ember.$("#messages-box").animate({
        scrollTop: Ember.$("#messages-box").prop("scrollHeight")
      }, 600);

      if (this.get("session.user") && message) {
        if (message.user != this.get("session.currentUser.displayName")) {
          Ember.$.titleAlert("(1) Nytt medelande", {
             requireBlur: true,
            stopOnFocus: true,
            duration: 10000,
            interval: 0
          });

          if (!this.open) {

          }
        }
      }

    }.bind(this));
  }.on("didInsertElement").observes("messages.@each")
});
