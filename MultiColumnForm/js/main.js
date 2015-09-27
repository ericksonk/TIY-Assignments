/*
* select all data input boxes (<input> <select> <textarea>)
* assign event listener `click` to submit button (<button>)
**/

// $('input:text').val();
//
// $('button').on('click', function() {
//
// });

// $('.input-form').on('click', function (event) {
//   $('input:text').val().submit();
//   event.preventDefault();
// });

// var $inputData = $('input:text');

$('#inputForm').submit(function (e) {
  var $inputs = $('#inputForm :input');
  var values = $(this).serialize();
  // var values = {};
  // $inputs.each(function () {
  //   values[this.name] = $(this).val();
  // });
  e.preventDefault();
  console.log(values);
});


// $(this).serialize();
