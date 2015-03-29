import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('dnd-item', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it can move down', function(assert) {
  assert.expect(3);
  const component = this.subject({
    list: [
      'A', 'B', 'C', 'D', 'E', 'F', 'G'
    ]
  });
  //moving an object should always place it right before the target
  //which means that we need special case to move the object on the last place
  
});
