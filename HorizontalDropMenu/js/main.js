$('nav.tabs').each(function () {

  $('a').on('click', function() { // selects nav element w/ class `tabs` and adds event listener
    if(!$(this).hasClass('active')) // if this does not have class `active`...
      $(this).addClass('active'); // ...add class `active`

    // if($(this).hasClass('active'))
      $(this).siblings().removeClass('active');
  });
});
