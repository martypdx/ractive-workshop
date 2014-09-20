# 02 Frankendiv

## Intro

Ractive uses `{{ foo }}` mustache notation to indicate data interpolation. It can be used in element attributes and as element "content"

```html
<h1 style='color: {{color}};'>Hello {{person}}</h1>
```

## Simple two-way binding

The most basic binding is to an `<input>` control, which uses the `value` attribute, or the special `checked` attribute for checkboxes:

```html

<input value='{{value}}'>

<input type='checkbox' checked='{{on}}'>

<textarea value='{{value}}'><!--not here!--></textarea>

```

### Lab

1. Create a WYSIWYG editor that manipulates the style attributes of a div.

* There's a starter `<style>`, but feel free to change anything or move these to element styles.
* consider `<input type='range'>` and `<input type='color'>` [MDN Ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input)
* Consider styles like `box-shadow`, border, margin, background, color, size, position, etc.


