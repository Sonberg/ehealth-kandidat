import Ember from 'ember';
import rules from '../../utils/rules';

export default Ember.Component.extend({
  classNames: [],
  components: function () {
    return rules.components().sortBy("name");
  }.property('components'),

  _jQuery: function() {
    var sortable = [],
      cate = [];
    var self = this;

    var delay = setTimeout(function() {
      var el = document.getElementById(self.elementId);

      var countItems = function(arr) {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
          if (Ember.$(arr[i]).hasClass("item-sort")) {
            count += 1;
          }
        }
        return count;
      };

      /* Drag category */
      Sortable.create(el, {
        group: {
          name: 'component',
          put: false,
          pull: 'clone',
          sort: false
        },
        sort: false,
        animation: 200,
        onStart: function(evt) {},
        onEnd: function(evt) {}
      });

      clearTimeout(delay);
    }, 500);

  }.on("didInsertElement"),
  actions: {
    toggle: function (index) {
      this.toggleProperty("components." + index + ".open");
    }
  }
});
