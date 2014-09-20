# 08 Partials

A partial is a template snippet which can be inserted into templates, or indeed other partials. They help to keep templates uncluttered and easy to read.

```html
<!-- the main template -->
<div class='gallery'>
  {{#items}}
    {{>thumbnail}}
  {{/items}}
</div>

<!-- the partial -->
<figure class='thumbnail'>
  <img src='assets/thumbnails/{{id}}.jpg'>
  <figcaption>{{description}}</figcaption>
</figure>
```

There are seveal ways to specify a partial:

### Config Option

```js
ractive = new Ractive({
  el: myContainer,
  template: myTemplate,
  partials: { thumbnail: myThumbnailPartial },
  data: { items: myItems }
});
```

### Global Config Option

```js
Ractive.partials.thumbnail = myThumbnailPartial;
```

### Script Tag
```html
<script id='thumbnail' type='text/ractive'>
  <figure class='thumbnail'>
    <img src='assets/thumbnails/{{id}}.jpg'>
    <figcaption>{{description}}</figcaption>
  </figure>
</script>
```

### Inline Partial
```html
<div class='gallery'>
  {{#items}}
    {{>thumbnail}}
  {{/items}}
</div>

<!-- {{>thumbnail}} -->
<figure class='thumbnail'>
  <img src='assets/thumbnails/{{id}}.jpg'>
  <figcaption>{{description}}</figcaption>
</figure>
<!-- {{/thumbnail}} -->
```

Useful for complex attributes!

```html
{{#episodes:i}}
<div class="episode-container {{side(i)}}" style="-webkit-transform: rotateY(0deg) translate3d(0px, 0px, {{ depth(i) }}px)">
    <episode/>
</div>
{{/episodes}}


{{#episodes:i}}
<div class="episode-container {{side(i)}}" style="{{>transformStyle}}">
    <episode/>
</div>
{{/episodes}}

<!-- {{>transformStyle}} -->
-webkit-transform: rotateY(0deg) translate3d(0px, 0px, {{ depth(i) }}px)
<!-- {{/transformStyle}} -->

```

## Dynamic Partials and Context for Partials

Partial names can be expressions:

```html
{{> type + 'Field' }}

// TextField
// DateField
// etc.
```

The data context for a partial can be specified as a second argument

```html
{{> fullName person}}

// same as
{{#with person}}
{{> fullName}}
{{/with}}
```

## Recursion

Partials can call other partials, or themselves

## Lab

1. Create a folder/filer view for the hierarchical data in the lab page.
2. Bonus challenge: What if the data was model as the `keyedData`? Can you process it recursively? (Hint: you may need to pre-process the data to create additional data used to process the data. Also, consider using an object literal expression if you need to hold onto a data value)

```

