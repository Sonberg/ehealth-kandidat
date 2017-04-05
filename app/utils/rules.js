export default {
  components: function () {
    return Ember.A([
      {
        name: "Strålning",
        completed: false,
        component: "c-onboard-stralning",
        value: '',
        open: false
      }, {
        name: "Cellgift",
        completed: false,
        component: "c-onboard-cellgift",
        value: '',
        open: false
      }, {
        name: "Operation",
        completed: false,
        component: "c-onboard-operation",
        value: '',
        open: false
      }, {
        name: "Rehablitering",
        completed: false,
        component: "c-onboard-rehab",
        value: '',
        open: false
      }, {
        name: "Magnetröntgen",
        completed: false,
        component: "c-onboard-magnetrontgen",
        value: '',
        open: false
      }
    ])
  },

  byComponent: function (component) {
    var components = this.components();
    for (var i = 0; i < components.length; i++) {
      if (components[i].component == component) {
        return components[i];
      }
    }
  }
}

// bröstrekonstruktion
