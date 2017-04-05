import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  style: Ember.computed('session.currentUser.photoURL', function() {
    console.log(this.get("session.currentUser"));
    var image = this.get("session.currentUser.photoURL");
    if (image) {
      return  Ember.String.htmlSafe("background-image: url('" + image + "')" );
    }
  }),
  actions: {
    signOut: function() {
      this.get('session').close();
    }
  }
});
