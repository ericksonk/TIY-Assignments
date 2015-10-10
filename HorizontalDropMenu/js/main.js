$('nav.tabs').each(function () {
  $('a').on('click', function() { // selects `a` elements and adds event listener
    if(!$(this).hasClass('active')) // if this does not have class `active`...
      $(this).addClass('active'); // ...add class `active`...
      $(this).siblings().removeClass('active'); // ... and remove class `active` from siblings
    // if($(this).hasClass('active'))

  });
});
