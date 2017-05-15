import Ember from 'ember';
import 'npm:array.prototype.move';
import rules from '../../utils/rules';

export default Ember.Component.extend({
  structure: Ember.inject.service(),
  classNames: [],

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
          put: true,
          pull: true
        },
        handle: '.top',
        animation: 200,
        onEnd: function(evt) {
          self.set("structure.content", JSON.parse(JSON.stringify(self.get("structure.person.content").move(evt.oldIndex, evt.newIndex))));
          self.get("structure.person").save();
        },
        onSort: function(evt) {
          var component = rules.byComponent(Ember.$(evt.item).attr("data-type"));
          if (component && evt.from != evt.to) {
            if (!self.get("structure.person.content")) {
              self.set("structure.person.content", Ember.A());
            }
            self.get("structure.person.content").insertAt(evt.newIndex, component);
          }
          Ember.$(evt.item).remove();
          return true;
        }
      });

      clearTimeout(delay);
    }, 500);

  }.on("didInsertElement"),

  actions: {
    toggle: function(index) {
      this.toggleProperty("structure.person.content." + index + ".open");
    },
    remove: function (index) {
      this.get("structure.person.content").removeObject(this.get("structure.person.content." + index));
    },
    complete: function (index) {
      this.set("structure.person.content." + index + ".completed", !this.get("structure.person.content." + index + ".completed"))
    }
  }
});
