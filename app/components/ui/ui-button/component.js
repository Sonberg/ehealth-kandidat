import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['button'],
  classNameBindings: ['className'],
  attributeBindings: ['type', 'disabled'],
  type: 'button',
  style: 'default',
  size: 'medium',
  baseClass: 'button',
  click(event) {
    if (this.type !== 'button') { return; }
    event.preventDefault();
    if (this.target) {
      return this.target.send(this.action);
    }
    return this.sendAction('action');
  },
  className: Ember.computed('size', 'style', function() {
    const baseClass = this.get('baseClass');
    const size = this.get('size');
    const style = this.get('style');

    if (size) {
      return `${baseClass}-${size} ${baseClass}-${style}`;
    } else {
      return `${baseClass}-${style}`;
    }
  })
});
