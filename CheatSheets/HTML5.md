# HTML

## HTML tags
HTML code is make up of characters that live inside angled brackets. These are called HTML elements. Elements are made up of two tags: an opening tag and a closing tag. The closing tag has an extra forward slash in it. Each element tells the browser somthing about the information that sits between its opening and closing tags.
`<element>` (opening tag) `</element>` (closing tag)
```
<element> content </element>
```
tags act like containers. They tell you something about the info that lies between their opening and closing tags
#### opening tag
consists of left angle bracket, element, righ angle bracket `<p>`
#### closing tag
consists of left angle bracket, forward slash, element, right angle bracket `</p>`

## `<!DOCTYPE html>`
* Goes at the top of every HTML5 page.
* means "this page is written in HTML5" as opposed to say

## `<html>`

the main enchilada, the whole `document`, that which wraps all the others... except for [`<!DOCTYPE>`](#doctype), for some reason.

the opening `<html>` tag indicates that anything between it and a closing `</html>` tag is HTML code.

* _parents_: none, it's the top
* _content_: _only_ [`<head>`](#head) and [`<body>`](#body)
* _display_: `block`, maybe? I mean, I can see it... RESEARCH!

## `<body>`
the `<body>` tag indicates that anything between it and the closing `</body>` tag should be shown inside the main browser window.

## `<head>`
Before the <body> element you will often see a <head> element. This contains info _about_ the page (rather than information that is shown within the main part of the browser window that is highlighted in blue on the opposite page). You will usually find a `<title>` element within the head element.

## `<title>`
Contents of <title> element are either shown in the top of the browser, above where you usually type in the url of the page you want to visit, or the tab for the page.

### Attributes
Attributes provide aditional info about the contents of an element. They appear on the opening tag of the element and are made up of two parts: a _name_ and a _value_, seperated by an equals sign.

* Attribute _name_ indicates what kind of extra info you are supplying about the elements content. It should be written in lowercase.
* The values is the info for the attribute. It should be placed in double quotes. different attributes can have different values.

`<p lang="en-us">`

* `class` -- a space-separated list of category names
* . . .

. . .

## `<div>`

A generic page division that should only be used if no other, more semantic choice is appropriate... and because @al-the-x might kill me if I do when I could use [`<section>`](#section) instead.

* _parents_: anything that accepts [Flow Content][1], which is apparently a lot of things.
* _content_: any [Flow Contant][1], palpable content (WTF?)
* _display_: `block`

. . .

## `<strong>`
indiacates that its content that has strong inportance. The words contained in this element might be said with strong emphasis.
* inline

## `<em>`
indicates emphasis that subtly changes the meaning of a sentence.
* inline

## `<blockquote>`
used for longer quotes that take up an entire paragraph. (<p> is still used inside the <blockquote> element).

## `<q>`
use for shorter quotes that sit within a paragraph. Browsers are supposed to put quotes around the <q> element

## `<s>`
indicates someting is no longer accurate or relevant but should not be deleted (strikethrough)

## `<ins>` & `<del>`
used to show content that has been inserted into a document while the <del> element can show text that has been deleted from it. The content from an <ins> element is usually underlined, while the content of a <del> eleent can show text that has been deleted from it.

## Lists
HTML Provides us with 3 diff types of lists:

### Ordered Lists:
each item in the list is numbered.
##### `<ol>`
ordered list is created with the `<ol>` element
##### `<li>`
* each item in the list is places between an opening and closing `<li>` tag (list item).
* browsers indent lists by default.

### Unordered Lists:
begin with a bullet point rather than a character that indicates order.
##### `<ul>`
unordered list created with the `<ul>` element.
##### `<li>`
* each item in the list is placed between an opening and closing `<li>` tag.

### Definition Lists:
made up of a set of terms along with the definitions for each of those terms.
```
<dl>
  <dt>Sashimi</dt>
  <dd>Sliced raw fish that is served w/ condiments such as shredded daikon raddish or ginger root, wasabi and soy sauce</dd>
```
##### `<dl>`
* Definition list is created with the `<dl>` element and usually consists of a series of terms and their definitions.
* inside the `<dl>` element you will usually see pairs of `<dt>` and `<dd>` elements
##### `<dt>`
Used to contain the term being defined (the definition term).
##### `<dd>`
Used to contain the definition.

## Interactive Form Elements
HTML borrows the concept of a form to refer to different elements that allow you to collect information from visitors to your site.
##### `<form>`
Form controls live inisde a <form> element. This element should always carry the `action` attribute and will usually have a `menthod` and `id` attribute too.
* `action` : Every <form> element requires an action attribute. Its value is the URL for the page on the server that will received the info in the form when it is submitted.
* `method`: forms can be sent using one of 2 methods:
  * `get` the values from the form are added to the end of the URL specified in the action attribute. The get method is ideal for short forms (such as search boxes) and when you are just retrieving data from the web server (not sending info that should be added or deleted from a database)
  * `post` the values are sent in what are known as HTTP headers. You should use post method if your form:
      * allows  users to upload a file
      * is very long
      * contains sensitive data (ex. passwords)
      * adds info to, or deletes information from a data base.
* `id` value is used to id the for distinctly from other elements on the page.

##### `<input>`
used to create several different form controls. The value of the type attribute determines what kind of input they will be creating.
* `type="text"` when the type attribute has a value of tet, it creates a single line text input
* `name` when users enter info into a form, the server needs to know which form control each piece of data was entered into. Therefore, each control requires a name attribute. The value of this attribute identifies the form control and is sent along with the info they enter to the server.
* `maxlength` limits the number of characters a user may enter into the text field. Its value is the number of characters they may enter.
* `size` side attribute should not be used on new forms. It was used in older forms to indicate the width of the text input (measured by the number of charaters that would be seen)

Other types of input: "password", <textarea>, "radio", "checkbox", <select>, "file", "submit", "image", "hidden"

##### `<label>`
Each form control should have its own label element as this makes the form accessible to vision-impaired users. The <label> element can be used in one of 2 ways:
  1. Wrap around both the text and description and the form input
  1. be kept separate from the form control and use the for attribute to indicate which form control it is a label for
* `for` attribute: states which form control the label belongs to.
```
Best places to place labels on form controls:

Above or to the left:
1. text inputs
2. text areas
3. select boxes
4. file uploads

To the right:
1. individual checkboxes
2. individual radio buttons
```

##### `<fieldset>`
You can group related form controls together inside the <fieldset> element. This is particularly helpful for longer forms. Most browsers will show the `feildset` with a line around the edge to show how they are related. The appearance of these lines can be adjusted using CSS.

##### `<ledgend>`
Can come directly after the opening `<fieldset>` tag and contains a caption which helps identify the purpose of that group of form controls.

## Table Elements
A table represents information in a grid format. Examples of tables include financial reports, tv schedules, and sports results. **grids** allow us to understand complex data by referencing info on two axes. Each block in the grid is reffered to as a **table cell**. In html a table is written out row by row.

##### `<table>`
used to create a table. the contents of the table are written out row by row.

##### `<caption>`
represents the title of a table. Though it always the first descendant of a <table>, its styling, using CSS, may palce it elsewhere, relative to the table.

##### `<col>`
defines a column within a table and is use for defining common semantics on all common cells. It is generally found within a <colgroup> element. this element allows styling columns using CSS, but only a few attributes will have an effect on the column.

##### `<colgroup>`
defines a group of columns within a table.

##### `<tbody>`
defines one or more <tr> element data-rows to be the body of its parent <table> element. In conjunction with a preceding <thead> and/or <tfoot> element, <tbody> provides additional semantic info for devices sucha printers and displays.

##### `<thead>`
the headings of the table should sit inside the <thead> element. It defines a set of rows defining the head of the columns table.

##### `<tfoot>`
defines a set of rows summarizing the columns for the table.

##### `<tr>`
`tr` stands for **table row**. You indicate the start of each row using the opening <tr> tag. It is followed by one or more `<td>` elements (one for each cell in that row). At the end of the row you use a closing `</tr>` tag.

##### `<td>`
'td' stands for **table data**.

##### `<th>`
'th' stands for **table heading**. Used just like `<td>` element but its purpose is to represent the heading for either a column or a row. Even if a cell has no content, you should still use a <td> or <th> element to represent the presence of an empty cell otherwise the table will not render correctly.
* using <th> elements for headings helps people who use screen readers, improves the ability for search engines to index your pages and also give you greater control over the appearance of the tables when you start to use CSS.
* You can use the `scope` attribute to indicate whether it is a heading for a column or a row. It can take the values row and indicate a heading for a row or col to indicate a heading for a column.

###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
