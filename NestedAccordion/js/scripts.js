/*
What does it do?
  What interactive elements exist?
    * headings- when you click on the headings they open accordion style and then
      there are accordions with in accordions
    * navagation buttons- `::before` & `::after` js???
  How do you interact with them?
  What visual effects are produced by interacting?

How does it do it?
 What existing HTML elements are changed?
 What new HTML elements are created?
 What CSS styles are used to produce the effect?
  * `cursor: pointer` controls animated arrow?
  *
  **/

The HTML language is assigned to english and the class should be assigned to Javascript.
The bulk of the document is an unordered list with `<h3>` tags for each heading.
The unordered list has an id of "cpb-ntaccordion" and a class of "cbp-ntaccordion"
The `h3` element has a class set to "cpb-nttrigger"
Each heading accordions open to a description and sub-accordions.
When accordion is opened, list has a class of 'cbp-ntopen'
Inside of a <div> element, a description is written inside a paragraph tag.
The div element has a class set to "cbp-ntcontent"
Also inside of the div element is another unordered list with the class of "cbp-ntsubaccordion"
Each item in the sub-list has a header with the class "cbp-nttrigger" and div element with the class "cbp-ntcontent"


The list with in the header tag


// elements and assigning elements- look at DOM terms
// onclickeventhandler - changes color of font when you hover
