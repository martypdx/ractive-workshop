# 06 arrays and magic

## Array Modification

By default, all array methods are "wrapped" meaning they can be directly
manipulated and ractive will "know" about the changes.

```js
var items = [ 'boo', 'bop' ]

var ractive = new Ractive({
	el: document.body,
	template: '#template'
})

ractive.get('items').push('foo')

items.push('bar')

```

This behavior can be prevent by setting `modifyArrays: false` in config options.

## Magic mode

For browsers that support `defineProperty` (aka >= ie9 ), ractive can wrap
properties with getters and setters

```js

var foo = { bar: 'none' }

var ractive = new Ractive({
	el: document.body,
	template: '#template',
	magic: true,
	data: foo
})

foo.bar = 'magic mode ftw!'

```

## Update and UpdateModel

If you need to explicitly tell ractive to update the view, use:

```js
// everything
ractive.update()

// specific
ractive.update('foo.3.name')
```

If there's a DOM update outside of ractive and the model needs to be updated, use:

```js
document
ractive.updateModel() // also takes optional keypath
```

## Lab

1. Continue data exploration from last lab.
2. See if you can isolate changes that require `.update` and `updateModel`
* consider using `document.getElementById` or jquery to set the value on an `input`
* modify data without magic mode
