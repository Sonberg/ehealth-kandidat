import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('prevent');
  this.route('examination');
  this.route('treatment', function () {
      this.route('edit', { path : '/edit', resetNamespace: true});
      this.route('step', { path : '/step/:index', resetNamespace: true});

      this.route('cellgift', { resetNamespace: true});
      this.route('stralning', { resetNamespace: true});
      this.route('operation', { resetNamespace: true});
      this.route('magnetrontgen', { resetNamespace: true});
  });
  this.route('not-found', { path: '/*path' });
  this.route('contact');

});

export default Router;
