import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-topbar-small', 'Integration | Component | c topbar small', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-topbar-small}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#c-topbar-small}}
      template block text
    {{/c-topbar-small}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
