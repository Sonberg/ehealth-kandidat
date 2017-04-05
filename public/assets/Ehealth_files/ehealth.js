"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('ehealth/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({});
});
define('ehealth/app', ['exports', 'ember', 'ehealth/resolver', 'ember-load-initializers', 'ehealth/config/environment'], function (exports, _ember, _ehealthResolver, _emberLoadInitializers, _ehealthConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _ehealthConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ehealthConfigEnvironment['default'].podModulePrefix,
    Resolver: _ehealthResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _ehealthConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("ehealth/application/controller", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({
    session: _ember["default"].inject.service(),
    steps: ["c-onboard-welcome", "c-onboard-cellgift", "c-onboard-operation", "c-onboard-stralning"],
    open: false,
    actions: {
      start: function start() {
        if (this.get("session.user")) {
          this.set("started", true);
        }
      },
      toggle: function toggle() {
        this.toggleProperty("open");
      }
    }
  });
});
define("ehealth/application/route", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      return this.store.findAll("message");
    }
  });
});
define("ehealth/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "AYzm9gNS", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"wrapper\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"started\"]]],null,2,0],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"box-center\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"s-user-name\"]],false],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"start button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"start\"]],[\"flush-element\"],[\"text\",\"Logga in\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"m-button-float\"],null,[[\"messages\",\"open\",\"toggle\"],[[\"get\",[\"model\"]],[\"get\",[\"open\"]],\"toggle\"]]],false],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"m-chat\"],null,[[\"messages\",\"open\"],[[\"get\",[\"model\"]],[\"get\",[\"open\"]]]]],false],[\"text\",\" \\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"c-onboard\"],null,[[\"steps\"],[[\"get\",[\"steps\"]]]]],false],[\"text\",\"\\n    \\n\"],[\"block\",[\"ui/ui-dropdown\"],null,[[\"open\",\"position\",\"arrow\",\"right\",\"closeDropdown\"],[[\"get\",[\"open\"]],\"right\",\"right\",\"128px\",\"toggleOpen\"]],1]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/application/template.hbs" } });
});
define("ehealth/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _liquidFireComponentsLfGetOutletState) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLfGetOutletState["default"];
    }
  });
});
define('ehealth/components/c-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("ehealth/components/c-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0h0aGqAq", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-content\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"content\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"item\",\"choise\"]]],null,0],[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"item\",\"text\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"choose\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"choise\"]],false],[\"text\",\" ________  \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"chevron-down\"],null],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/c-card/template.hbs" } });
});
define("ehealth/components/c-menu/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    open: false,
    actions: {
      toggle: function toggle() {
        this.toggleProperty("open");
      }
    }
  });
});
define("ehealth/components/c-menu/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YmLKWmk9", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"button_container \",[\"helper\",[\"if\"],[[\"get\",[\"open\"]],\"active\"],null]]]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggle\"]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"top\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"middle\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"bottom\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"overlay \",[\"helper\",[\"if\"],[[\"get\",[\"open\"]],\"open\"],null]]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"overlay-menu\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Home\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"About\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Work\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Contact\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/c-menu/template.hbs" } });
});
define("ehealth/components/c-onboard-cellgift/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    items: _ember["default"].A([{ title: "Cellgift", "class": "large-6", text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt", choise: null }, { title: "Plats", "class": "large-6", text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt", choise: "Jag vill göra min behandling i" }, { title: "Resa", "class": "large-6", text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt", choise: "Jag vill göra min behandling i" }, { title: "Boende", "class": "large-6", text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt", choise: "Jag vill göra min behandling i" }])
  });
});
define("ehealth/components/c-onboard-cellgift/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "e/v2c3f/", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"ui/ui-checkbox\"]],false],[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Cellgift\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"flex-container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row no-max pr1\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"items\"]]],null,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"c-card\"],null,[[\"classNames\",\"item\"],[[\"get\",[\"item\",\"class\"]],[\"get\",[\"item\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"item\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/c-onboard-cellgift/template.hbs" } });
});
define('ehealth/components/c-onboard-operation/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("ehealth/components/c-onboard-operation/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "woLb9sHJ", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Operation\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/c-onboard-operation/template.hbs" } });
});
define("ehealth/components/c-onboard-oval/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    index: 0,
    style: _ember["default"].computed("index", function () {
      if (this.index % 2 == 0) {
        return _ember["default"].String.htmlSafe("top: 3px");
      } else {
        return _ember["default"].String.htmlSafe("top: -8px");
      }
    })
  });
});
define("ehealth/components/c-onboard-oval/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "QDnpDZNU", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"step\"]],[\"helper\",[\"object-at\"],[[\"get\",[\"steps\"]],[\"get\",[\"active\"]]],null]],null],\"active\",\"\"],null],\" pl1 oval\"]]],[\"dynamic-attr\",\"style\",[\"unknown\",[\"style\"]],null],[\"flush-element\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/c-onboard-oval/template.hbs" } });
});
define('ehealth/components/c-onboard-stralning/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("ehealth/components/c-onboard-stralning/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "o6Ka5emf", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Strålning\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/c-onboard-stralning/template.hbs" } });
});
define("ehealth/components/c-onboard-terms/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    validated: true,
    actions: {
      didChangeCheckbox: function didChangeCheckbox(value) {
        this.set("parent.terms", value);
      }
    }
  });
});
define("ehealth/components/c-onboard-terms/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "d4l4aiRD", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Välkommen\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/c-onboard-terms/template.hbs" } });
});
define('ehealth/components/c-onboard-welcome/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    session: _ember['default'].inject.service()
  });
});
define("ehealth/components/c-onboard-welcome/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Tms1g97I", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Välkommen \"],[\"append\",[\"unknown\",[\"session\",\"user\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/c-onboard-welcome/template.hbs" } });
});
define("ehealth/components/c-onboard/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    classNames: ["container"],
    active: 0,
    steps: [],
    coordinates: [],
    style: _ember["default"].computed("active", "coordinates.@each", function () {
      var position = this.get("coordinates." + this.active);
      if (position) {
        return _ember["default"].String.htmlSafe("left: " + (position.left - 160 / 2) + "px; top: " + (position.top - 115) + "px;");
      }
    }),

    _setup: (function () {
      this.resize();

      _ember["default"].$(window).resize((function () {
        this.resize();
      }).bind(this));
    }).on("didInsertElement"),

    resize: function resize() {
      var ovals = _ember["default"].$(".oval");
      if (ovals) {
        this.set("coordinates", []);
        for (var i = 0; i < ovals.length; i++) {
          this.get("coordinates").pushObject(_ember["default"].$(ovals[i]).offset());
        }
      }
    },

    actions: {
      setActive: function setActive(index) {
        this.set("active", index);
      },

      next: function next() {
        if (this.active == this.steps.length - 1) {
          return false;
        }
        this.set("active", this.active + 1);
      },
      previous: function previous() {
        if (this.active == 0) {
          return false;
        }
        this.set("active", this.active - 1);
      },
      exit: function exit() {
        console.log("EXIT!!!");
      }
    }
  });
});
define("ehealth/components/c-onboard/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vg2/LvF8", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"flex-container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"c-sidebar\"],null,[[\"steps\",\"setActive\",\"active\"],[[\"get\",[\"steps\"]],\"setActive\",[\"get\",[\"active\"]]]]],false],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"content px2\"],[\"static-attr\",\"id\",\"content-view\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"component\"],[[\"helper\",[\"object-at\"],[[\"get\",[\"steps\"]],[\"get\",[\"active\"]]],null]],[[\"steps\",\"active\",\"parent\"],[[\"get\",[\"steps\"]],[\"get\",[\"active\"]],[\"get\",[null]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"comment\",\"\\n<div class=\\\"row\\\">\\n  <div class=\\\"grid\\\">\\n    <div class=\\\"row align-center text-center\\\">\\n{{#each steps as | step index | }}\\n          <div class=\\\"columns text-center small-2 {{if (eq step (object-at steps active)) 'active' '' }}\\\"  {{ action \\\"setActive\\\" index }}>\\n            {{c-onboard-oval step=step steps=steps active=active index=index}}\\n            <div class=\\\"link\\\">\\n              {{step}}\\n            </div>\\n          </div>\\n      {{/each}}    </div>\\n  </div>\\n</div>\\n\\n<img src=\\\"assets/output_GA7XZj.gif\\\" alt=\\\"\\\" class=\\\"emoji\\\" style={{style}}>\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/c-onboard/template.hbs" } });
});
define("ehealth/components/c-sidebar/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    actions: {
      toggleTimeline: function toggleTimeline() {
        this.toggleProperty("open");
      },
      setActive: function setActive(index) {
        this.sendAction("setActive", index);
      }
    }
  });
});
define("ehealth/components/c-sidebar/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Gm3Q9c6/", "block": "{\"statements\":[[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"menu vertical\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"header\"],[\"flush-element\"],[\"text\",\"Cancer\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Förebyggande\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Självundersökning\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"active\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleTimeline\"]],[\"flush-element\"],[\"text\",\"Behandling\\n\"],[\"block\",[\"if\"],[[\"get\",[\"open\"]]],null,2,1],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"liquid-if\"],[[\"get\",[\"open\"]]],[[\"class\"],[\"\"]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"timeline\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"c-timeline\"],null,[[\"steps\",\"setActive\",\"active\"],[[\"get\",[\"steps\"]],\"setActive\",[\"get\",[\"active\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"chevron-right float-right\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"chevron-down float-right\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/c-sidebar/template.hbs" } });
});
define("ehealth/components/c-timeline/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    actions: {
      setActive: function setActive(index) {
        this.sendAction("setActive", index);
      }
    }
  });
});
define("ehealth/components/c-timeline/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "kynllBxH", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"timeline\"],[\"flush-element\"],[\"text\",\"\\n   \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"steps\"]]],null,0],[\"text\",\"   \"],[\"close-element\"],[\"text\",\"\\n \"],[\"close-element\"],[\"text\",\" \\n \"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"     \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"setActive\",[\"get\",[\"index\"]]]],[\"flush-element\"],[\"text\",\"\\n       \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"bullet pink \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"step\"]],[\"helper\",[\"object-at\"],[[\"get\",[\"steps\"]],[\"get\",[\"active\"]]],null]],null],\"active\",\"\"],null]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n       \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"title \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"step\"]],[\"helper\",[\"object-at\"],[[\"get\",[\"steps\"]],[\"get\",[\"active\"]]],null]],null],\"active\",\"\"],null]]]],[\"flush-element\"],[\"append\",[\"get\",[\"step\"]],false],[\"text\",\" \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"time\"],[\"flush-element\"],[\"text\",\"5pm\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n       \\n     \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"step\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/c-timeline/template.hbs" } });
});
define('ehealth/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _emberFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('ehealth/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _emberFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaList['default'];
    }
  });
});
define('ehealth/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _emberFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaStack['default'];
    }
  });
});
define("ehealth/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define("ehealth/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("ehealth/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("ehealth/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define("ehealth/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("ehealth/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("ehealth/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("ehealth/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('ehealth/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("ehealth/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("ehealth/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define("ehealth/components/m-button-float/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    actions: {
      toggle: function toggle() {
        this.sendAction("toggle");
      }
    }
  });
});
define("ehealth/components/m-button-float/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ZAP/VgjG", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"button-float\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggle\"]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"open\"]]],null,1,0],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"comments-o\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"times\"],null],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/m-button-float/template.hbs" } });
});
define("ehealth/components/m-chat-field/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    store: _ember["default"].inject.service(),
    session: _ember["default"].inject.service(),

    classNames: ["flex-grid", "flex-container"],
    text: "",

    keyPress: function keyPress(event) {
      if (event.charCode == 13) {
        this.send();
      }
    },
    send: function send() {
      if (this.text.length > 0) {
        var message = this.get("store").createRecord('message', {
          user: this.get("session.user"),
          text: this.text,
          created: moment().format()
        });
        message.save();
        this.set("text", "");
      }
    },
    actions: {
      didClickSend: function didClickSend() {
        this.send();
      }
    }
  });
});
define("ehealth/components/m-chat-field/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+j16KMHw", "block": "{\"statements\":[[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[\"get\",[\"text\"]],\"Skriv här\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"m-chat-send\"],null,[[\"didClickSend\",\"text\"],[\"didClickSend\",[\"get\",[\"text\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/m-chat-field/template.hbs" } });
});
define("ehealth/components/m-chat-message/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    session: _ember["default"].inject.service(),
    classNames: ["large-12"],
    message: null,
    isClicked: false,
    _init: (function () {
      if (this.get("session.user") == this.get("message.user")) {
        this.get("classNames").pushObject("text-right");
      }
    }).on("init"),
    _jQuery: (function () {
      if (this.element) {
        _ember["default"].$("#messages-box").scrollTop(800);
      }
      _ember["default"].$(document).on("click", (function (e) {
        if (this.element) {
          if (_ember["default"].$.contains(this.element, e.target)) {
            return true;
          }

          this.set("isClicked", false);
        }
      }).bind(this));
    }).on("didInsertElement"),
    click: function click(e) {
      if (_ember["default"].$.contains(this.element, e.target)) {
        this.toggleProperty("isClicked");
      }
    }
  });
});
define("ehealth/components/m-chat-message/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "MEkSIm6T", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"not-eq\"],[[\"get\",[\"session\",\"user\"]],[\"get\",[\"message\",\"user\"]]],null]],null,1],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"message-box\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"message\",\"text\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"liquid-if\"],[[\"helper\",[\"and\"],[[\"get\",[\"isClicked\"]],[\"get\",[\"message\",\"created\"]]],null]],null,0],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"mb1\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"scroll-bottom\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"message-date\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"time-ago\"],[[\"get\",[\"message\",\"created\"]]],null],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"message-user\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"message\",\"user\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/m-chat-message/template.hbs" } });
});
define("ehealth/components/m-chat-send/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    actions: {
      didClickSend: function didClickSend() {
        this.sendAction("didClickSend");
      }
    }
  });
});
define("ehealth/components/m-chat-send/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "1dm9tzP3", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"button-send\"],[\"dynamic-attr\",\"disabled\",[\"concat\",[[\"helper\",[\"unless\"],[[\"get\",[\"text\"]],true],null]]]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"didClickSend\"]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"fa-icon\"],[\"envelope-open\"],null],false],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/m-chat-send/template.hbs" } });
});
define("ehealth/components/m-chat/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    session: _ember["default"].inject.service(),
    messages: _ember["default"].A,
    classNameBindings: ["open"],

    _scroll: (function () {
      _ember["default"].run.once((function () {
        var message = this.get("messages.lastObject");

        _ember["default"].$("#messages-box").animate({
          scrollTop: _ember["default"].$("#messages-box").prop("scrollHeight")
        }, 600);

        if (this.get("session.user") && message) {
          if (message.user != this.get("session.user")) {
            _ember["default"].$.titleAlert("(1) Nytt medelande", {
              requireBlur: true,
              stopOnFocus: true,
              duration: 10000,
              interval: 0
            });
          }
        }
      }).bind(this));
    }).on("didInsertElement").observes("messages.@each")
  });
});
define("ehealth/components/m-chat/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3ZlCw8Da", "block": "{\"statements\":[[\"text\",\" \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"chat-user flex-container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"user-image\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"online\"],[\"flush-element\"],[\"text\",\"\\n      \\n    \"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"user-info\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Maria\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Cancergruppen i Halmstad\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n \"],[\"close-element\"],[\"text\",\"\\n \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"flex-container row messages-box\"],[\"static-attr\",\"id\",\"messages-box\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"messages\"]]],null,0],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n \"],[\"append\",[\"unknown\",[\"m-chat-field\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"m-chat-message\"],null,[[\"message\"],[[\"get\",[\"message\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"message\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/m-chat/template.hbs" } });
});
define('ehealth/components/masonry-grid/component', ['exports', 'ember-masonry-grid/components/masonry-grid/component'], function (exports, _emberMasonryGridComponentsMasonryGridComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMasonryGridComponentsMasonryGridComponent['default'];
    }
  });
});
define('ehealth/components/masonry-item/component', ['exports', 'ember-masonry-grid/components/masonry-item/component'], function (exports, _emberMasonryGridComponentsMasonryItemComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMasonryGridComponentsMasonryItemComponent['default'];
    }
  });
});
define('ehealth/components/popover-on-component', ['exports', 'ember-tooltips/components/popover-on-component'], function (exports, _emberTooltipsComponentsPopoverOnComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTooltipsComponentsPopoverOnComponent['default'];
    }
  });
});
define('ehealth/components/popover-on-element', ['exports', 'ember-tooltips/components/popover-on-element'], function (exports, _emberTooltipsComponentsPopoverOnElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTooltipsComponentsPopoverOnElement['default'];
    }
  });
});
define('ehealth/components/s-user-name/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    session: _ember['default'].inject.service()
  });
});
define("ehealth/components/s-user-name/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "lpuBnYnK", "block": "{\"statements\":[[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\"],[\"text\",[\"get\",[\"session\",\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/s-user-name/template.hbs" } });
});
define("ehealth/components/scroll-bottom/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    _didInsert: (function () {
      _ember["default"].run.once(function () {
        _ember["default"].$("#messages-box").animate({ scrollTop: _ember["default"].$("#messages-box").prop("scrollHeight") }, 0);
      });
    }).on("didInsertElement")
  });
});
define("ehealth/components/scroll-bottom/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3Zk8XQYP", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/scroll-bottom/template.hbs" } });
});
define('ehealth/components/tether-popover-on-component', ['exports', 'ember-tooltips/components/tether-popover-on-component'], function (exports, _emberTooltipsComponentsTetherPopoverOnComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTooltipsComponentsTetherPopoverOnComponent['default'];
    }
  });
});
define('ehealth/components/tether-popover-on-element', ['exports', 'ember-tooltips/components/tether-popover-on-element'], function (exports, _emberTooltipsComponentsTetherPopoverOnElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTooltipsComponentsTetherPopoverOnElement['default'];
    }
  });
});
define('ehealth/components/tether-tooltip-on-component', ['exports', 'ember-tooltips/components/tether-tooltip-on-component'], function (exports, _emberTooltipsComponentsTetherTooltipOnComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTooltipsComponentsTetherTooltipOnComponent['default'];
    }
  });
});
define('ehealth/components/tether-tooltip-on-element', ['exports', 'ember-tooltips/components/tether-tooltip-on-element'], function (exports, _emberTooltipsComponentsTetherTooltipOnElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTooltipsComponentsTetherTooltipOnElement['default'];
    }
  });
});
define('ehealth/components/tool-tipster', ['exports', 'ember-cli-tooltipster/components/tool-tipster'], function (exports, _emberCliTooltipsterComponentsToolTipster) {
  exports['default'] = _emberCliTooltipsterComponentsToolTipster['default'];
});
define('ehealth/components/tooltip-on-component', ['exports', 'ember-tooltips/components/tooltip-on-component'], function (exports, _emberTooltipsComponentsTooltipOnComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTooltipsComponentsTooltipOnComponent['default'];
    }
  });
});
define('ehealth/components/tooltip-on-element', ['exports', 'ehealth/config/environment', 'ember-tooltips/components/tooltip-on-element'], function (exports, _ehealthConfigEnvironment, _emberTooltipsComponentsTooltipOnElement) {

  var _didUpdateTimeoutLength = _ehealthConfigEnvironment['default'].environment === 'test' ? 0 : 1000;

  exports['default'] = _emberTooltipsComponentsTooltipOnElement['default'].extend({ _didUpdateTimeoutLength: _didUpdateTimeoutLength });
});
define('ehealth/components/ui/ui-button/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'button',
    classNames: ['button'],
    classNameBindings: ['className'],
    attributeBindings: ['type', 'disabled'],
    type: 'button',
    style: 'default',
    size: 'medium',
    baseClass: 'button',
    click: function click(event) {
      if (this.type !== 'button') {
        return;
      }
      event.preventDefault();
      if (this.target) {
        return this.target.send(this.action);
      }
      return this.sendAction('action');
    },
    className: _ember['default'].computed('size', 'style', function () {
      var baseClass = this.get('baseClass');
      var size = this.get('size');
      var style = this.get('style');

      if (size) {
        return baseClass + '-' + size + ' ' + baseClass + '-' + style;
      } else {
        return baseClass + '-' + style;
      }
    })
  });
});
define("ehealth/components/ui/ui-button/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YZFEjSNA", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"unknown\",[\"title\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/ui/ui-button/template.hbs" } });
});
define('ehealth/components/ui/ui-checkbox/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("ehealth/components/ui/ui-checkbox/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Fk6/O8sy", "block": "{\"statements\":[[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"checkbox\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/ui/ui-checkbox/template.hbs" } });
});
define("ehealth/components/ui/ui-dropdown/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    visible: false,
    _init: (function () {
      if (this.get("open")) {
        _ember["default"].$(document).on("click", (function (e) {

          if (this.isDestroyed || this.isDestroying || !this.get("visible")) {
            return;
          }

          // Related link
          if (_ember["default"].$(e.target).closest("[data-ember-action]").siblings().is(this.element)) {
            return true;
          }

          // Outside click
          if (_ember["default"].$.contains(this.element, e.target)) {
            return true;
          }

          this.set("open", false);
        }).bind(this));
      }
    }).observes("open"),

    actions: {
      toggleDropdown: function toggleDropdown() {
        this.toggleProperty("open");
      },
      closeDropdown: function closeDropdown() {
        this.toggleProperty("open");
      }
    }
  });
});
define("ehealth/components/ui/ui-dropdown/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "nwy5ibHv", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui-dropdown \",[\"helper\",[\"if\"],[[\"get\",[\"open\"]],\"open\"],null]]]],[\"dynamic-attr\",\"position\",[\"unknown\",[\"position\"]],null],[\"dynamic-attr\",\"style\",[\"unknown\",[\"style\"]],null],[\"dynamic-attr\",\"arrow\",[\"unknown\",[\"arrow\"]],null],[\"dynamic-attr\",\"theme\",[\"unknown\",[\"theme\"]],null],[\"flush-element\"],[\"text\",\"\\n  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/components/ui/ui-dropdown/template.hbs" } });
});
define('ehealth/components/zf-accordion-menu', ['exports', 'ember-cli-foundation-6-sass/components/zf-accordion-menu'], function (exports, _emberCliFoundation6SassComponentsZfAccordionMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfAccordionMenu['default'];
    }
  });
});
define('ehealth/components/zf-accordion', ['exports', 'ember-cli-foundation-6-sass/components/zf-accordion'], function (exports, _emberCliFoundation6SassComponentsZfAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfAccordion['default'];
    }
  });
});
define('ehealth/components/zf-drilldown-menu', ['exports', 'ember-cli-foundation-6-sass/components/zf-drilldown-menu'], function (exports, _emberCliFoundation6SassComponentsZfDrilldownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfDrilldownMenu['default'];
    }
  });
});
define('ehealth/components/zf-dropdown-menu', ['exports', 'ember-cli-foundation-6-sass/components/zf-dropdown-menu'], function (exports, _emberCliFoundation6SassComponentsZfDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfDropdownMenu['default'];
    }
  });
});
define('ehealth/components/zf-dropdown', ['exports', 'ember-cli-foundation-6-sass/components/zf-dropdown'], function (exports, _emberCliFoundation6SassComponentsZfDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfDropdown['default'];
    }
  });
});
define('ehealth/components/zf-magellan', ['exports', 'ember-cli-foundation-6-sass/components/zf-magellan'], function (exports, _emberCliFoundation6SassComponentsZfMagellan) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfMagellan['default'];
    }
  });
});
define('ehealth/components/zf-off-canvas', ['exports', 'ember-cli-foundation-6-sass/components/zf-off-canvas'], function (exports, _emberCliFoundation6SassComponentsZfOffCanvas) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfOffCanvas['default'];
    }
  });
});
define('ehealth/components/zf-orbit', ['exports', 'ember-cli-foundation-6-sass/components/zf-orbit'], function (exports, _emberCliFoundation6SassComponentsZfOrbit) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfOrbit['default'];
    }
  });
});
define('ehealth/components/zf-reveal', ['exports', 'ember-cli-foundation-6-sass/components/zf-reveal'], function (exports, _emberCliFoundation6SassComponentsZfReveal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfReveal['default'];
    }
  });
});
define('ehealth/components/zf-slider', ['exports', 'ember-cli-foundation-6-sass/components/zf-slider'], function (exports, _emberCliFoundation6SassComponentsZfSlider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfSlider['default'];
    }
  });
});
define('ehealth/components/zf-tabs', ['exports', 'ember-cli-foundation-6-sass/components/zf-tabs'], function (exports, _emberCliFoundation6SassComponentsZfTabs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfTabs['default'];
    }
  });
});
define('ehealth/components/zf-tooltip', ['exports', 'ember-cli-foundation-6-sass/components/zf-tooltip'], function (exports, _emberCliFoundation6SassComponentsZfTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfTooltip['default'];
    }
  });
});
define('ehealth/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('ehealth/helpers/app-version', ['exports', 'ember', 'ehealth/config/environment'], function (exports, _ember, _ehealthConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _ehealthConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('ehealth/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('ehealth/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('ehealth/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('ehealth/helpers/increment', ['exports', 'ember'], function (exports, _ember) {
  exports.increment = increment;

  function increment(index) {
    var idx = Number(index);
    return idx + 1;
  }

  exports['default'] = _ember['default'].Helper.helper(increment);
});
define('ehealth/helpers/index-of', ['exports', 'ember'], function (exports, _ember) {
  exports.indexOf = indexOf;

  function indexOf(params /*, hash*/) {
    var value = params[0];
    var array = params[1];

    return array.indexOf(value);
  }

  exports['default'] = _ember['default'].Helper.helper(indexOf);
});
define('ehealth/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('ehealth/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _emberTruthHelpersHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual['default'];
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual.isEqual;
    }
  });
});
define('ehealth/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _liquidFireHelpersLfLockModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel['default'];
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel.lfLockModel;
    }
  });
});
define('ehealth/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _liquidFireHelpersLfOr) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr['default'];
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr.lfOr;
    }
  });
});
define('ehealth/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('ehealth/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('ehealth/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('ehealth/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('ehealth/helpers/object-at', ['exports', 'ember'], function (exports, _ember) {
  exports.objectAt = objectAt;

  function objectAt(params /*, hash*/) {
    return params[0][params[1]];
  }

  exports['default'] = _ember['default'].Helper.helper(objectAt);
});
define('ehealth/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('ehealth/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ehealth/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("ehealth/helpers/time-ago", ["exports", "ember"], function (exports, _ember) {
  exports.timeAgo = timeAgo;

  function timeAgo(params /*, hash*/) {
    moment.locale("sv");
    var date = moment(params[0]);
    return date.fromNow();
  }

  exports["default"] = _ember["default"].Helper.helper(timeAgo);
});
define('ehealth/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('ehealth/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ehealth/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _ehealthConfigEnvironment) {
  var _config$APP = _ehealthConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('ehealth/initializers/component-styles', ['exports', 'ember', 'ember-component-css/pod-names', 'ehealth/mixins/style-namespacing-extras'], function (exports, _ember, _emberComponentCssPodNames, _ehealthMixinsStyleNamespacingExtras) {
  exports.initialize = initialize;
  var Component = _ember['default'].Component;
  var ComponentLookup = _ember['default'].ComponentLookup;
  var computed = _ember['default'].computed;
  var getOwner = _ember['default'].getOwner;

  ComponentLookup.reopen({
    componentFor: function componentFor(name, owner) {
      owner = owner.hasRegistration ? owner : getOwner(this);

      if (_emberComponentCssPodNames['default'][name] && !owner.hasRegistration('component:' + name)) {
        owner.register('component:' + name, Component);
      }
      return this._super.apply(this, arguments);
    }
  });

  Component.reopen(_ehealthMixinsStyleNamespacingExtras['default'], {
    componentCssClassName: computed({
      get: function get() {
        return _emberComponentCssPodNames['default'][this.get('_componentIdentifier')] || '';
      }
    }),

    init: function init() {
      this._super.apply(this, arguments);

      if (this.get('_shouldAddNamespacedClassName')) {
        this.classNames = this.classNames.concat(this.get('componentCssClassName'));
      }
    }
  });

  function initialize() {}

  exports['default'] = {
    name: 'component-styles',
    initialize: initialize
  };
});
define('ehealth/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ehealth/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ehealth/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ehealth/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('ehealth/initializers/export-application-global', ['exports', 'ember', 'ehealth/config/environment'], function (exports, _ember, _ehealthConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_ehealthConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _ehealthConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_ehealthConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ehealth/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ehealth/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {

  (0, _liquidFireEmberInternals.initialize)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define('ehealth/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ehealth/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ehealth/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('ehealth/initializers/zf-widget', ['exports', 'ember-cli-foundation-6-sass/initializers/zf-widget'], function (exports, _emberCliFoundation6SassInitializersZfWidget) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassInitializersZfWidget['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassInitializersZfWidget.initialize;
    }
  });
});
define("ehealth/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ehealth/message/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    user: _emberData['default'].attr('string'),
    text: _emberData['default'].attr('string'),
    created: _emberData['default'].attr('string')
  });
});
define('ehealth/mixins/style-namespacing-extras', ['exports', 'ember-component-css/mixins/style-namespacing-extras'], function (exports, _emberComponentCssMixinsStyleNamespacingExtras) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComponentCssMixinsStyleNamespacingExtras['default'];
    }
  });
});
define('ehealth/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ehealth/router', ['exports', 'ember', 'ehealth/config/environment'], function (exports, _ember, _ehealthConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _ehealthConfigEnvironment['default'].locationType,
    rootURL: _ehealthConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('ehealth/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('ehealth/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('ehealth/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define("ehealth/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
define('ehealth/session/service', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    user: null
  });
});
define("ehealth/templates/components/tool-tipster", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GWcH9aD6", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ehealth/templates/components/tool-tipster.hbs" } });
});
define('ehealth/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
define('ehealth/transitions', ['exports'], function (exports) {
  exports['default'] = function () {
    this.transition(this.hasClass('chat'), this.use('scale', { duration: 600 }), this.reverse('scale', { duration: 600 }));

    this.transition(this.hasClass('timeline'), this.use('toDown', { duration: 600 }), this.reverse('toUp', { duration: 600 }));
  };
});
define('ehealth/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('ehealth/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('ehealth/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('ehealth/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('ehealth/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('ehealth/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('ehealth/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('ehealth/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('ehealth/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('ehealth/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('ehealth/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('ehealth/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('ehealth/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('ehealth/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('ehealth/config/environment', ['ember'], function(Ember) {
  var prefix = 'ehealth';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("ehealth/app")["default"].create({"name":"ehealth","version":"0.0.0+cec1deb0"});
}

/* jshint ignore:end */
//# sourceMappingURL=ehealth.map
