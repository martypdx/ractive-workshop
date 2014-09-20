# 04 Express Yourself - Control Yourself

## Expressions

### Javascript Expressions

Can be used inside mustache references:

```html

{{#items:i}}
	{{ i + 1 }} {{.}}
{{/}}

```

### Object Literals

```html

{{#with { foo: item, bar: name } }}

```

### Keypath Expressions

```html

{{# planets[selected] }}

```

### Data Functions

Functions specified in the data can be accessed in the template:

```html
<p>price: {{ format(price) }}</p>
```
```js
new Ractive({
	el: document.body,
	template: '#template',
	data: {
		price: 10,
		format: function(price){
			return '$' + price + '.00'
		}
	}
})

```

Functions auto-update.

### Computed Properties

Intensive or repetative expressions can be encapsulated
in computed properties. Functions expressed as properties

Refer to: http://docs.ractivejs.org/latest/computed-properties


### Functions on data objects

```html
{{#with _.sort(items) }}
  {{.}}
{{/with}}
```

## Restricted references

```html
<!-- this context only -->
{{.foo}}

<!-- look up one (or more) levels -->
{{../foo}}

<!-- look at the root -->
{{~/foo}}
```

### Lab
1. Go to http://beta.json-generator.com/ and generate some data, cut and paste as inline variable.
2. Use expressions and references. Modify the data as needed
3. Create some computed properties



