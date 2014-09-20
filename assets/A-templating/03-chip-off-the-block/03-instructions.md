# 03 Chip Off the Block

## Intro

There are five types of block sections:

1. Iteration
2. Context
3. Object Iteration
3. Conditional
4. Inverted Conditional

Traditional mustache blocks are implicit, handlebars style is explicit. Ractive supports both. #1 and #3 support `{{else}}` (issue for #2)

### List

```html
{{#items}}

{{/}} <!--closing tag optional-->

{{#each items}}

{{/each}} <!--closing tag REQUIRED-->
```

Can include the index using the following:
```html
{{#items:i}}
  <p>{{i}}: {{.}}</p> <!-- {{@index}} works too -->
{{/}}


```

### Context

```html
{{#person}}
	{{name}} //person.name
{{/}}

{{#with person}}
	{{name}} //person.name
{{/with}}
```

### Object Iteration

```html
{{#person:key}}
	{{key}}:{{.}} //property:value
{{/}}
```

### Conditional

```html
{{#active}}

{{/}}

{{#if active}}

{{/if}}
```


### Inverted Conditional ("not")

```html
{{^active}}

{{/}}

{{#unless active}}

{{/unless}}
```

## List Binding Semantics

### Radio options

```html
{{#colors}}
<label><input type='radio' name='{{color}}' value='{{hex}}'>{{name}}</label>
{{/}}
```

### Select Options

```html
<select value='{{selectedCountryId}}'>
    <option selected disabled>Select a country</option>
    {{#countries}}
        <option value='{{id}}'>{{name}}</option>
    {{/countries}}
</select>
```

Objects work too!

```html
<select value='{{selectedCountry}}'>
    <option selected disabled>Select a country</option>
    {{#countries}}
        <option value='{{.}}'>{{name}}</option>
    {{/countries}}
</select>
```

## Lab

1. Go to http://beta.json-generator.com/ and generate some data, cut and paste as inline variable.
2. Create a report using all 4 types of blocks. (hint: `{{.}}` or `{{this}}` refers to the current context)
3. Create a conditional "loading" section and simulate async data with the following:

```js
var ractive = new Ractive({
	el: document.body,
	template: '#template'
})

setTimeout(function(){
	ractive.set('root', yourData)
}, 3000)
```
4. Bind something to a select or radio group



