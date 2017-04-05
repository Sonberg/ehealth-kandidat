import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-onboard-operation', 'Integration | Component | c onboard operation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-onboard-operation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#c-onboard-operation}}
      template block text
    {{/c-onboard-operation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
