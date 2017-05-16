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
    }
  }
});
