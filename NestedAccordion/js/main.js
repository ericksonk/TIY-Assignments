// OPENS AND CLOSES ACCORDIONS
$('section.content').hide(); // hides <p> elements & sub-accordions

$('h2').on('click', function(){ // adds event listener to all <h2> elements
  if ($(this).next().is(':hidden')) { // if next tag after current (this) element (h2) is hidden...
      $(this).next().show(); // ..then show it
  } else {
      $(this).next().hide();
    }
});

// OPENS & CLOSES SUB ACCORDIONS
$('h3 ~ p').hide(); // hides sub-accordion's content (<p>)

$('h3').on('click', function(){ // adds event listener to all <h3> elements
  if ($(this).next().is(':hidden')) { // if next tag after current (this) element (h3) is hidden...
      $(this).next().show(); // ..then show it
  } else {
      $(this).next().hide();
    }
});

// $('li').each(function() {
//   $(this).show();
// });
