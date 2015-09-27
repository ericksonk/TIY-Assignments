// $('.cbp-vm-icon').on('click', function() {
//   if ($(this).hasClass('.cbp-vm-grid.cbp-vm-selected')) {
//     $('#cbp-vm').removeClass('.cbp-vm-switcher.cbp-vm-view-list').addClass('.cbp-vm-switcher.cbp-vm-view-grid');
//   }
//   else if ($(this).hasClass('.cbp-vm-list.cbp-vm-selected')) {
//     $('#cbp-vm').removeClass('.cbp-vm-switcher.cbp-vm-view-grid').addClass('.cbp-vm-switcher.cbp-vm-view-list');
//   }
// });


var list = $('.cbp-vm-icon.cbp-vm-list');
var grid = $('.cbp-vm-icon.cbp-vm-grid');

$(grid).on('click', function() {
  $('.cbp-vm-switcher').addClass('cbp-vm-view-grid');
  $('.cbp-vm-switcher.cbp-vm-view-list').removeClass('cbp-vm-view-list');
  $('grid').addClass('cbp-vm-selected');
  $('list').removeClass('cbp-vm-selected');
});

$(list).on('click', function() {
  $('.cbp-vm-switcher').addClass('cbp-vm-view-list');
  $('.cbp-vm-switcher.cbp-vm-view-grid').removeClass('cbp-vm-view-grid');
  $('list').addClass('cbp-vm-selected');
  $('grid').removeClass('cbp-vm-selected');
});

//   if ($grid.)
//
//   if ($(this).hasClass('.cbp-vm-grid.cbp-vm-selected')) {
//     $('#cbp-vm').removeClass()('.cbp-vm-switcher .cbp-vm-view-grid');
//   }
//   if ($(this).hasClass('.cbp-vm-list .cbp-vm-selected')) {
//     $('#cbp-vm').removeClass('.cbp-vm-switcher .cbp-vm-view-grid').addClass('.cbp-vm-switcher .cbp-vm-view-list');
//   }
// });
