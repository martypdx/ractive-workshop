# 11 Transitions

Used to animate "in" and "out"

```html
<p intro="fade">I like to fade in</p>
<p outro="fade">I like to fade out</p>
<p intro-outro="fade">I like to fade in and out</p>
```
## nointro option

Use `nointro: true` to not transitions on render, but only on subsequent
node additions and removals

### [Plugins](http://docs.ractivejs.org/latest/plugins)
* http://ractivejs.github.io/ractive-transitions-fade/
* http://ractivejs.github.io/ractive-transitions-slide/
* http://ractivejs.github.io/ractive-transitions-fly/

### Writing your own custom transition plugin

http://docs.ractivejs.org/latest/writing-transition-plugins

## Lab

1. Try a few transitions and their parameters (and easings!)
2. What happens if you modify a list (array) where the template elements have a transition define?
