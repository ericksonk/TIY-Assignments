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

In order to use JavaScript with our HTML file, link to our .js file within a `<script>` tag on the .html page with the source set to the file path
Need to create an array to hold the accordion items???
Create function to initiate JavaScript???
  * use getElementsByTagName() to call array
  * create for loop with if statements that trigger different items either onload or ontoggle
Need to write a `toggleItem()` onclick function that is assigned to the <h3> element.
  // toggleItem() hides or shows all the items in the list when it is clicked on (onclick)
    // aka will expand and collapse accordion
Need to call the id "cpb-ntaccordion" using the `Document` prototype document.getElementById()



The list with in the header tag


// elements and assigning elements- look at DOM terms
// onclickeventhandler - changes color of font when you hover
