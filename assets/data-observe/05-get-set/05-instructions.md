# 05 programmtic data manipulation

## Keypaths

```js

'foo.bar'
'items.9.name'

```

Just like templates!

## Methods

Up to now, we haven't used the result of `new Ractive({})`:

```js

var ractive = new Ractive({...})

ractive.get('foo.bar')

```

Data manipulation methods:
* get (also takes hash)
* set (also takes hash)
* array
	* push
	* splice
	* pop
	* shift
	* etc.
* merge
* add
* subtract
* toggle

## Observers

```js
ractive.observe(keypath, function( newValue, oldValue, keypath ){
	// called on init plus any change to keypath
})

```

## Wildcards

Observers take wildcards (and `set` and `on` events too):

```js
ractive.observe(items.*.name, function(n, o, l, i){
	// an wildcards are included in arguments
})
```

## Lab

1. Use or copy one lab 03 or 04
2. Add a global variable:

```js
window.ractive = new Ractive({...})
```

3. Open the console and "play" with the data
4. Add observers after instantiation:

```js
window.ractive = new Ractive({
	el: 'body',
	template: '<input value="{{foo}}">',
	data: {
		foo: 'bar'
	}
})

ractive.observe('foo', function(n,o,k){
	console.log(k, 'changed from', o, 'to', n)
})
```

5. Try "upstream" and "downstream" changes
6. Go back to frankendiv lab and try `ractive.animate` instead of `ractive.set`
