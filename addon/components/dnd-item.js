import Ember from 'ember';
import layout from '../templates/components/dnd-item';

export default Ember.Component.extend({
  layout: layout
});

/*
could be used like: 

{{#each blah as | bla |}}
	{{#dnd-item list=blah item=bla}}
		{{render your bla as you want }}
	{{/dnd-item}}
{{/each}}

or ... 

{{#dnd-list list=blah}}
	{{each ... example from above}}
{{/dnd-list}}

ideally it would be something like

{{#dnd-each blah as |bla|}}
	{{render the bla as you please}}
{{/dnd-each}}
*/
