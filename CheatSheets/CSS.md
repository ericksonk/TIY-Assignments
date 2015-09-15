# Reading CSS

## Selectors

## Properties

`display` - CSS' most important property for controlling layout.
* every element has a default display value depending on what type of element it is.
* the default for most elements is usually `block` or `inline`
    * `block` - `div` is the standard block-level element.
      * block level elements start on a new line and stretch out to the left and right.
      * Ex. `p` `form` `header` `footer` `section`
    * `inline` - `span` is the standard inline element
      * can wrar some text inside a paragraph <span>like this</span> w/o disrupting the flow of the p
      * Ex. `a` since you use them for links
* value `none` lets you turn off the display of an element; when you use `none` all descendant elements also have thier dispaly turned off. Doc is rendered as though the element does not exist
* Syntax- `display: `
* Values:
```
none | inline | block | list-item | inline-block | inline-table | table | table-cell | table-column | table-column-group | table-footer-group | table-header-group | table-row | table-row-group | flex | inline-flex | grid | inline-grid | run-in | ruby | ruby-base | ruby-text | ruby-base-container | ruby-text-container | contents
```


* `position` chooses alternative rules for positioning elements; designed to be useful for scripted animation effects
  * A positioned element is an element whose computed position is `relative`, `absolute`, `fixed` or `static`
    * static- lets the elements use the normal behavior, that is laid out in the current position in the flow (top, right, bottom, left index props dont apply)
    * relative- lays out all elements as though the element were not positioned, and then adjusts the elements position, without changing layout.
    * absolute- does not leave space for the element. instead positions it at a specified position relative to its closest positioned ancestor or the containing block; have margins & do not collapse with any other margins
    * fixed- do not leave space for the element. position it a specified postion relative to the screens viewport and dont move it when scrolled.
  * `top` `right` `bottom` and `left` properties specify the position
  * syntax- `position: static;` `position: relative;` `position: absolute;` `position: fixed`


* `float` - specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it.
  * values- `left` `right` `none`

* `clear` - specifies whether an element can be next to `floating` elements that precede it or must be moved down(cleared) below them.
  * applies to both floating and non-floating elements

* `box-sizing`- used to alter the default css box model used to caluculate widths and heights of elements.
  * possible to use this property to emulate the behavior of browsers that do not correctly support the css box model
  * syntax- `box sizing: `

* `vertical-align` - specifies the vertical alignment of an inline or table-cell box
  * syntax - `vertical-align: `

* `columns` - short hand property allowing to set both the `column-width` and `column-count` properties at the same time
  * syntax- `columns: `

* `@media` - 
