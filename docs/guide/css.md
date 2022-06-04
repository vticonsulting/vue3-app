# CSS

- For $200, This CSS property allow for the stacking order, so long as the element has a position value other than the default `static`. What is `z-index`?
- For $400, not part of the box model itself, this property helps control the spacing between elements, and does so across three different layout models. What is `gap`?
- For $800, this property: value; declaration establishes a new formatting context without resorting to using another property with side effects. We would use it for a clearfix if anyone cared about clearfixes anymore. What is `flow-root`?
- For $1,000, considered a mistake in the design of CSS, this property in CSS allows you to “fix” one of the things (v old) Internet Explorer (in quirks mode) “got right”, the box model. What is `box-sizing: border-box`?

```html
<div id="gradient">
  This element is surrounded by a gradient-based border image!
</div>
```

```css
#gradient {
  width: 200px;
  border: 30px solid;
  border-image: repeating-linear-gradient(45deg, #f33, #3bf, #f33 30px) 60;
  padding: 20px;
}
```
