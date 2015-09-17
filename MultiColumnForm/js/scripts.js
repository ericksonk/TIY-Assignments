 /* *** GOAL: TURN USER'S INPUT INTO OUTPUT ***
 * set variable for entrie form
 * set variable for each element that will return data inside of form
 * wrtie function for each element? that will log the form?
 * add event listener?
 **/

var inputIds = document.querySelectorAll('input, select, textarea'); // creates array of all id's in input, select & textarea tags
var sendData = document.querySelector(".cbp-mc-submit"); // targets `send your data` button

sendData.addEventListener('click', function(event){ // adds event listener of `click` to submit button
    for (var i = 0; i < inputIds.length; i++){ // loops through ID array/nodelist
      output = inputIds[i].value; //return output of each item in nodelist ... `.value` returns text input
      console.log(output);
    }
    event.preventDefault(); // prevents page from refressing after clicking submit button
});


// for (var i = 0; i < inputIds.length; i++){
//   inputsId[i].addEventListener('input', function(){
//     for (i > 0; inputIds.length; i++){
//       output = inputsId[i].element.value;
//       console.log(output);
//     }
//   });
// }


//
// function data (){
//   for (var i = 0; i < inputIds.length; i++){
//     inputIds[i].addEventListener('input', function(){
//       sendData.addEventListener('click', data);
//       console.log(inputIds[i].value);
//     });
//   }
// }


// output = inputIds[i].value;



//POSSIBLE FOR LOOP STRUCTURE-
// for (var i = 0; i < inputIds.length; i++){
//   inputsId[i].addEventListener('input', function(){
//     for (i > 0; inputIds.length; i++){
//       output = inputsId[i].element.value;
//       console.log(output);
//     }
//   });
// }


//MAYBE USE THIS STUFF?
// console.log(data.value);
// fName.addEventListener('input', data);
//
// function data (){ //fuction to loop through array `inputIds` and return output
//
// }


// var form = document.getElementsByClassName('.cbp-mc-form');
// console.log(form);
