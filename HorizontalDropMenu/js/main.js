$('nav.tabs a').on('click', function() { // selects nav element w/ class `tabs` and adds event listener
  if(!$(this).hasClass('active')) // if this does not have class `active`...
    $(this).addClass('active'); // ...add class `active`
      $('nav.tabs a.active').on('click', function() {
        // if($(this).hasClass('active'))
          $(this).removeClass('active');
      });
});
