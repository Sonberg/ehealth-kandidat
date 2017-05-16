/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ehealth',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyCZAsEe-GtUbIuKtPSJ_iOh2_B70COjXj4",
      authDomain: "ehalsa-8b738.firebaseapp.com",
      databaseURL: "https://ehalsa-8b738.firebaseio.com",
      storageBucket: "ehalsa-8b738.appspot.com",
      messagingSenderId: "647775353536"
    },
    torii: {
      // a 'session' property will be injected on routes and controllers
      sessionServiceName: 'session',
      providers: {
        'facebook-oauth2': {
          apiKey:      '270603816698940',
          redirectUri: 'localhost:4000' // default is the current URL
        }
      }
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.rootURL = '/ehealth-kandidat/';
    ENV.torii.providers['facebook-oauth2'].redirectUri = 'https://sonberg.github.io/ehealth-kandidat'

  }

  return ENV;
};
