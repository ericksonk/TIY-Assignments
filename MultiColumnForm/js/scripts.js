 /* *** GOAL: TURN USER'S INPUT INTO OUTPUT ***
 * set variable for entrie form
 * set variable for each element that will return data inside of form
 * wrtie function for each element? that will log the form?
 * add event listener?
 **/

// var form = document.getElementsByClassName('.cbp-mc-form');
// console.log(form);
var inputIds = document.querySelectorAll('input'); // create array of all id's in input tag
console.log(inputIds);

function firstName (){
  console.log(fName.value);
}

fName.addEventListener('input', firstName);
