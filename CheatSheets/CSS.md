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

### `overflow`
* tells the browser what to do if the content contained within a box is larger than the box itself.
* It can have one of two values:
  1. `hidden` - this property simply hides any extra content that does not fit in the box
  2. `scroll` - this property adds a scrollbar to the box so that users can scroll to see the missing content.

### Box model
Every box has 3 available properties that can be adjusted to control its appearance: border, margin and padding. If you specify a width for a box, then the borders, margin and padding are added to its width and height

##### `border`
* every box has a border- even if it is not visible or is specified to be 0 pixels wide
* the border separates the edge of one box from another
###### `border-width`
property used to control the width of a border. The value of this property can either be given in pixels or using thin, medium, or thick
*** You cant use percentages with this property ***
* can control the individual size of borders using for separate properties:
  1. `border-top-width`
  2. `border-bottom-width`
  3. `border-right-width`
  4. `border-left-width`
###### `border-style`
control the style of a border using this property
* this property can take the following values:
  1. `solid` - single solid line
  2. `dotted` - series of square dots
  3. `dashed` - series of short lines
  4. `double` - two solid lines
  5. `groove` - appears to be carved into the page
  6. `ridge` - appears to stick out from the page
  7. `inset` - appears emebedded into the page
  8. `outset` - looks like it is coming out of the screen
  9. `hidden`/`none` - no border is shown
###### `border-color`
specify the color of a border using either RGB values, hex codes, or CSS color names

##### `margin`
* margins sit outside the edge of the border
* you can set the width of a margin to create a gap between the borders of two adjacent boxes
* controls the gap between boxes
* value commonly given in pixels
* if one box sits on top of another, margins are collapsed, which means the larger of the two margins will be used and the smaller will be disregarded
* if the width of the box is specified, than the margin is added to the width of the box
* specify values for each side of a box using `margin-top` `margin-right` `margin-bottom` `margin-left`

##### `padding`
* padding is the space between the border of a box and any content contained within it
* adding padding can increase the readability of its contents
* value of this property is most often specified in pixels
* if a width is specified for a box, padding is added onto the width of th box
* you can specify different values for each side of a box using `padding-top` `padding-right` `padding-bottom` `padding-left`

##### `max`
* `max-width`property indicates the maximum width a box can stretch to when the browser window is wide

##### `min`
* `min-width` property specifies the smallest size a box can be displayed at when the browser window is narrow

##### `box-sizing`
* used to alter the default CSS box model used to calculate widths and heigts of elements
* it is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification
* values:
  1. `content-box` default style as specified by the CSS standard. The width and height properties are measured including only the content but not the badding, border or margin.
  2. `border-box` the w and h props inculde the padding and border but not the margin.
