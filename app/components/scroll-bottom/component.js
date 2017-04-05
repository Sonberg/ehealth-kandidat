import Ember from 'ember';

export default Ember.Component.extend({
  _didInsert: function () {
      Ember.run.once(function () {
        Ember.$("#messages-box").animate({ scrollTop: Ember.$("#messages-box").prop("scrollHeight")}, 0);
      });
  }.on("didInsertElement")
});
