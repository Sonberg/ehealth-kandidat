import Ember from 'ember';

export default Ember.Component.extend({
  structure: Ember.inject.service(),
  block: false,
  canChoose: true,
  classNames: ['flip'],
  attributeBindings: ['data-equalizer-watch'],
  "data-equalizer-watch": true,
  open: false,


  value: function () {
    return this.get("structure.person.content." + this.get("structure.active") + ".value");
  }.on("init").property(),

  style: Ember.computed('item.image', function() {
    var image = this.get("item.image");
    if (image && this.get("item.floatText")) {
      return  Ember.String.htmlSafe("background-image: url('" + image +"')");
    }
  }),
  actions: {
    toggle: function () {
      this.toggleProperty('open');
    },
    didSelectChoise: function (name, value) {
      var data = this.get("structure.person.content." + this.get("structure.active") + ".value");
      var select = {'name' : name, 'value' : value};
      if (data) {
        var isSet = false;

        for (var i = 0; i < data.length; i++) {
          if (data[i].name == name) {
            isSet = true;
            data[i] = select;
          }
        }

        if (!isSet) {
          data.push(select);
        }

      } else {
        this.set("structure.person.content." + this.get("structure.active") + ".value", [select]);
      }

      this.set("structure.person.content", JSON.parse(JSON.stringify(this.get("structure.person.content"))));
      this.get("structure.person").save();
    }
  }
});
