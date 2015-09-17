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

## Typographic elements

### `font-*`

##### `font-family`
  * allows you to specify the typeface that should be used for any text inside the element(s) to which a CSS rule applies.
  * value of this property is the name of the typeface you want to use
  * the ppl who visit your site need the typeface you have specified installed onn their comp in order for it to be displayed
  * you can specify a list of fonts separated by commas so that if the user does not have your first choice of type face the browser can try to use an alternative font from the list
  * it is also common to end with a generic font name for that type of font
  * if a font name is made up of more than one word it should be put in double quotes
  * pages look best if there are no more than 3 typefaces per page

##### `font-size`
  * enables you to specify a size for the font. there are several ways to specify:
  * PIXELS- commonly used bc they allow web designers ver precise control over how much space their text takes up. `16px`
  * PERCENTAGES-  the default size of text in browsers is 16px. so a size of 75% would be equivalent of 12px and 200% would be equivalent to 32px
  * EMS- am em is the equivalent to the width of a letter m.
```
TWELVE PIXEL SCALE

pixels = percentages = ems

24px = 200% = 1.5em
18px = 150% = 1.3em
14px = 117% = 0.875em
32px = 200% = 2em

SIXTEEN PIXEL SCALE:

32px = 200% = 2em
24px = 150% = 1.5em
18px = 112.5% = 1.125em
```

##### `@font-face`
  * allows you to use the font, even if it is not installed on the computer of the person browsing, by allowing you to specify a path to a copy of the font, which will be downloaded if it is not on the user's machine.
  * Add the font to your style sheet using the @font-face rule:
  ```
  @font-face{
    font-family: "ChunkFiveRegular";
    src: url('fonts/chunckfive.eot'); //src specifies the path to the font
  }

    h1, h2 {
      font-family: ChunkFiveRegular, Georgia, serif;
    }
    ```

##### `font-weight`
  * allows you to create bold text.
  * there are 2 values this prop commonly takes:
    1. `normal` - this causes text to appear at a normal weight
    2. `bold` - this causes text to appear bold.
  ```
  .credits {
    font-weight: bold;
  }
  ```

##### `font-style`
  * creates italic text.
  * there are 3 values this prop can take:
    1. `normal` - causes text to appear in a normal style
    2. `italic` - this causes text to appear italic
    3. `oblique` - causes text to appear oblique

### `text-*`

##### `text-transform`
  * used to change the case of text giving it one of the following values:
    1. `uppercase` - text will appear uppercase
    2. `lowercase` - text will appear lowercase
    3. `capitalize` - causes the first letter of each work to appear capitalized

##### `text-decoration`
  * allows you to specify the following rules:
    1. `none` - removes any decoration already applied to the text
    2. `underline` - adds a line underneath the text
    3. `overline` - adds a line over the top of the text
    4. `line-through` - adds a line throught words
    5. `blink` - animates the text to make it flash on and off (generally frowned upon)

##### `text-align`
 * allows you to control the alignment of text.
 * can take one of 4 values:
  1. `left` - aligns to left
  2. `right` - right aligns
  3. `center` - center text
  4. `justify` - every line in a p, except the last line, should be set to take up the full width of the containing box.
  * when you have several p's of text it is considered easiest to read if the text is left-aligned

##### `text-indent`
  * allows you to indent the first line of text within an element.
  * the amount you want to indent by can be specified in a number of ways but is usually given in pixels or em

##### `text-shadow`
  * has become commonly used despite lacking support in all browsers.
  * used to create a drop shadow, which is a dark version of the word just behind it and slightly offset.
  * can be used to create embossed effect by adding a shadow that is slightly lighter than the text.

### `pseudo-elements`
  * technically not a property
  * specify at the end of the selector, and then specify the declarations as you would normally for any other element

** WHEN pseudo-classes ARE USED THEY SHOULD APPEAR IN THIS ORDER: `:link` `:visited` `:hover` `:focus` `:active`

  ```
  p.intro:first-letter{
    font-size: 200%;
  }
  ```

##### `:first-letter`, `:first-line`
  * can specify different values for the first letter or first line of text inside an element

##### `:link`, `:visited`
  * browsers tend to show link in blue with an underline by default, and they will change the color of links that have been visited to help users know which pages they have been to.
    1. `:link` allows you to set different stylesfor links that have and have not been visited
    2. `:visited` allows you to set styles for links that have been clicked on. commonly used to control colors fo the links and also whether they are to appear underlined or not.
```
a:link{
  color: deeppink;
  text-decoration: none;
}

a:visited{
  color: black;
}
```

##### `:hover`, `:active`, `:focus`
3 pseudo-classes that allow you to change the appearance of elements when a user is interacting with them.
  1. `:hover` - applied when a user hovers over an element with a pointing device such as a mouse. This has commonly been used to change the appearance of links and buttons when a user places the cursor over them. Such events do not work on devices that use touch screens bc the screen is not able to tell when someone is hovering their finger over an element.

  2. `:active` - applied when an element is being activated by a user. EX. when a button is being pressed or a link is being clicked. Sometimes used to make a button or link feel more like it is being pressed by changing the style or postion of the lement slightly.

  3. `:focus` - applied when an element has focus. any element that you can interact with, such as a link you can click or any form control. Focus occurs when a browser discovers that you are ready to interact with an element on the page. EX. when your cursor is in a form input already to accept typing that element is said to have focus. Also possible to use the tab key to move thorught the interactive items on a page.

### `line-*`

##### Leading
pronounced ledding- a term typographers use for the vertical space between line of text. in a typeface, the part of a letter that drops beneath the baseline is alled a ** descender ** while the highest poin of a letter is called the ** ascender ** . Leading is measured from bottom of the descender on one line to the tope of the ascender on the next.

##### `line-height`
  * sets the height of an entire line of text
  * the difference between the font-size and the line-height is equivalent to the leading.
  * increasing the line-height makes the vertial gap between line of text larger
  * a good starter setting is around 1.4 to 1.5em (value is best given in em not px)
