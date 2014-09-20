# 01 Hello World

## Intro

At its core, RactiveJS interpolates data into an html template and renders into the DOM and a specified location:

```html
<h1>Hello {{world}}</h1>
```
### +

```javascript
new Ractive({
	el: document.body,
	template: '#template',
	data: {
		world: 'Earth'
	}
})
```

The config option `append: true` will retain the existing el content and append the rendered template. If `append` refers to a node, content will
be inserted before the "anchor" node.

## Lab

1. Make sure `01-lab.html` runs and renders in the browser.
2. Create a node under the body called `<div id='container'>` and render the output there.
3. Past the following under body and render to the third paragraph (you don't need it, but there's a reference to jquery on the page if you want to use it). [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

```html
<div>
	<p class='first'></p>
	<p class='second'></p>
	<p class='third'></p>
</div>
```
4. Render into the list after the first `<p>`
5. Create two seperate ractive instances that render different templates to two different nodes
6. Try an inline template instead of an element selector

