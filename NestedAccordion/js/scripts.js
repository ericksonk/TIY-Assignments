/*
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
**/

/*
//OPENING & CLOSING ACCORDION
var heading = document.querySelector('.cbp-nttrigger'); //d
  heading.addEventListener('click', function(){ // the `addEventListener` listens to the Event type `click`
  if (document.querySelector('li').className !== "cbp-ntopen"){ // method `querySelector` selects the element <li>
                                                                // if the class attribute is not equal to "cbp-ntopen" then..
    document.querySelector('li').className = "cbp-ntopen"; //..the event type `click` changes the class attribute to "cbp-ntopen"
    return true;
  }
  if (document.querySelector('li').className === "cbp-ntopen"){ // if the class attribute is strictly equal to "cbp-ntopen"..
    document.querySelector('li').className = ""; //..the event type `click` changes the class attribute to empty string
    return true;
  }
});
**/



//OPENING ALL HEADINGS

//my code
var openAll = document.querySelectorAll('h3.cbp-nttrigger'); //Stores node list in array
for (var i = 0; i < openAll.length; i++) { //will loop through each item in array and adds event listener of `click`
  openAll[i].addEventListener('click', function(){
    for (var i = 0; i < openAll.length; i++){ // once clicked, goes through each item in array and...
      var parent = openAll[i].parentElement; //`...returns parent element (<li>) for each
      if (parent.className !== "cbp-ntopen"){
        parent.className = "cbp-ntopen"; // just opens all 
        //return true;
      }
      // if (parent.className === "cbp-ntopen"){
      //   parent.className = "";
      //   return true;
      // }
    }
  });
}


// if (heading.length > 0) { //aka if it contains items..

//ORIG FUNC 4 REF
/*
heading.addEventListener('click', function(){
if (document.querySelector('li').className !== "cbp-ntopen"){
  document.querySelector('li').className = "cbp-ntopen";
  return true;
}
if (document.querySelector('li').className === "cbp-ntopen"){
  document.querySelector('li').className = null;
  return true;
}
});
**/


//group code- idk what is happening
// var heading = document.querySelectorAll("h3.cbp-nttrigger"); //Store nodelist in array / `h3.cbp-nttrigger` bc I want to target all h3 tags
// heading.addEventListener('click', function(){
// if (heading.length > 0) { // if it contains items then..
//   for (var i = 0; i < heading.length; i++){ //will loop through nodelist for class cbp-nttrigger
//     heading[i].addEventListener("click", function(){ //putting in to array. Change value of the class attribute
// //
//       var openAcc = document.querySelectorAll("li.cbp-ntopen");
//       if (openAcc.length > 0){
//         for (var i = 0; i < openAcc.length; i++){
//           openAcc[i].className = "";
//         };
//
//       } else {
//           document.querySelectorAll("li").className = "cbp-ntopen";
//         }
//       }
//   }
//   }
// }
// }
// } ^^^???????



/*
var collapse = document.querySelector("li").className = "cbp-ntopen" ;// `.` = class
  collapse.addEventListener('click', function(){ //trying to remove class of "cbp-ntopen"
    document.querySelector('li').removeClass("cbp-ntopen");
  }
**/
