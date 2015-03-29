# Ember-drag-drop-list

##use cases:

I would like something like this:

```

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


```


# Default stuff
This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
