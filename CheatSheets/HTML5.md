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

###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
