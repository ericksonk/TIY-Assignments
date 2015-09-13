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
var sendData = document.querySelector(".cbp-mc-submit"); // targets `send your data button`

for (var i = 0; i < inputIds.length; i++){
  inputsId[i].addEventListener('input', function(){
    for (i > 0; inputIds.length; i++){
      output = inputsId[i].element.value;
      console.log(output);
    }
  });
}

//
// function data (){
//   for (var i = 0; i < inputIds.length; i++){
//     inputIds[i].addEventListener('input', data);
//     output = inputIds[i].value;
//     console.log(output);
//   }
// }



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
