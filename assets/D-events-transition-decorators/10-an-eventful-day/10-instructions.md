# 10 An Eventful Day!

## Proxy Events

Like:

```js

element.addEventListener('click', handler)

// or

$('#button').on('click', handler)
```
Template:

```html

<button on-click='activate'>Activate!</button>

```
Code:
```js
ractive.on( 'activate', function ( event ) {
  // `this` is the ractive
  // `event` contains information about the proxy event
  alert( 'Activating!' );
});
```

## Off

```js
ractive.off( 'activate' )
```

## Event Arguments

* event object
	* original event
	* context
* return false
* additional args

## Programmatic Fire

```
ractive.fire()
```

## Inline methods

```html
<div on-mouseenter='set("hover", true)'
	 on-mouseleave='set("hover", false)'>
</div>
```
## Beyond DOM events

### [Plugins](http://docs.ractivejs.org/latest/plugins)
* http://ractivejs.github.io/ractive-events-hover/
* http://ractivejs.github.io/ractive-events-keys/
* http://ractivejs.github.io/ractive-events-tap/

### Writing your own custom event plugin

```js
var myevent = function ( node, fire ) {

	function fireEvent(e){
		fire({
	      node: node,
	      original: e
	    })
	}

	return {
	    teardown: function () {
	      node.removeEventListener( 'contexmenu', contextmenuHandler );
	      node.removeEventListener( 'touchstart', touchstartHandler );
	    }
	}
}

var ractive = new Ractive({
	events: {
		myevent: myevent
	}
})

// globally
Ractive.events.myevent = myevent

```



## Lab

1. Create Add and Substract buttons that control a data value
2. Add ability to turn off Add and Substract buttons.
3. Explore context in a list

4. Bonus: create an event plugin
