$('section.content').hide(); // hides <p> elements & sub-accordions

$('h2').on('click', function(){
  if ($(this).next().is(':hidden')) {
      $(this).next().show();
  } else {
      $(this).next().hide();
    }
});

// $('li').each(function() {
//   $(this).show();
// });
