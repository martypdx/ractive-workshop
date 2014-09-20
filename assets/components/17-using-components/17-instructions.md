# 17 Using Components

## Accessing Data

This can get old:

```js
<widget foo='{{foo}}'/>
```

Components, by default, have implicit access to parent data.

Use `isolated: true` to prevent components from "seeing" parent data.

Currently doesn't work stand-alone for `get` and `set`

## Event Bubbling

By defaults events are bubbled under the component name.

```js
var Component = Ractive.extend({
	template: '<button on-click="select">Select Me</button>'
})

var ractive = new Ractive({
	el: document.body,
	template: '<component/>'
})

ractive.on('component.select', function(e){
	...
})
```

## {{yield}} and {{>content}}

Provide "injectable" component template

## Forcing Refresh

By default Ractive reuses dom elements. Can be a problem for transitios or dynamically changing component. Use a conditional block or array to force rerender.

```html
{{#show}}
	<component/>
{{/}}
```
```js
ractive.set('show', false)
ractive.set('show', true)

ractive.merge('show', [project])
```

## Lab

1. Create a hierarchy of components.
2. Create data that:
	* Is accessed from a parent
	* Same name, different data, in both parent and child. Show both in component
3. Respond to event in parent defined in template provided to component for `{{yield}}`.
4. Repond to component defined and fired event using event bubbling
