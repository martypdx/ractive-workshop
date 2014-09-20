# 15 Ractive

## Just javascript

Passing options to constructor, get added as "properties"

```js
var ractive = new Ractive({
	magic: true,
	events: {
		myEvent: function(node, fire){...}
	}
})
```

### Defaults

```js
// Ractive.default === Ractive.prototype

Ractive.default.debug = true
Ractive.default.noIntro = true

Ractive.prototype.someMethod = function(){...}

var ractive = new Ractive()

ractive.someMethod()

```

Also good for data functions and ubiquitous data.

### Registry Defaults

On constructor instead:

```js

Ractive.events.myEvent = function(node, fire){...}
Ractive.components.widget = Ractive.extend({...})
```

* adaptors
* components
* computed
* decorators
* easing
* events
* interpolators
* partials
* transitions

### Ractive.extend

```js

var MyRactive = Ractive.extend({
  	template: '#mytemplate',
  	init: function(){
  		this.on('select', function(){
  			....
  		})

  		this.observe('foo.*.name', function(){

  		})
  	},
  	complete: function(){
  		console.log('when do I fire?')
  	},
  	myMethod: function(){

  	}
});

var ractive = new MyRactive({
	el: 'body'
})

ractive.myMethod()

```
### Accessing the Parent

Use `this._super()` to call a base method.

## Components

```js
var Component = Ractive.extend({
	template: 'I can be instantiated _or_ be a component!'
});

var ractive = new Component({
	el: 'container'
});

var ractive2 = Ractive({
	el: 'container2',
	template: '<widget/>',
	components: {
		widget: MyRactive
	}
});
```

## Lab

1. Play with Ractive.extend
2. Try `this._super()`
3. Componentize a previous lab, or create a new one.
