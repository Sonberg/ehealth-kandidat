import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  classNames: ['splash'],
  actions: {
    signInAnonymously: function() {
      this.get('session').open('firebase', {provider: 'anonymous'}).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signIn: function(provider) {
      this.get('session').open('firebase', {provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});

//class="{{if (not session.isAuthenticated) 'splash'}}"
