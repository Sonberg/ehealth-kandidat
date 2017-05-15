import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-card-accordion-item', 'Integration | Component | c card accordion item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-card-accordion-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#c-card-accordion-item}}
      template block text
    {{/c-card-accordion-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
