# 12 Decorators

Encapsulate DOM manipulation.

## From the controller

```js
ractive.find('*')
ractive.findAll('input')
ractive.node.someId
```

But this ties out controller to the DOM implementation.

## Better option: decorators

Take node and template parameters

Case studies:
* http://martypdx.github.io/ractive-decorators-helpers/
* http://prezent.github.io/ractive-decorators-select2/


## Beyond DOM events

### [Plugins](http://docs.ractivejs.org/latest/plugins)
* http://ractivejs.github.io/ractive-transitions-fade/
* http://ractivejs.github.io/ractive-transitions-slide/
* http://ractivejs.github.io/ractive-transitions-fly/

### Writing your own decorator

Example: drag decorator

## Lab

1. Wrap a jquery or other ui library control as a decorator
* http://codegeekz.com/10-best-jquery-calendar-plugins-for-developers/
* http://unslider.com/
* http://www.jssor.com/
* http://speckyboy.com/2010/05/13/50-fundamental-jquery-controls-and-rich-ui-components/
* http://getbootstrap.com/
