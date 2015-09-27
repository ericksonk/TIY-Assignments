// $('.cbp-vm-icon').on('click', function() {
//   if ($(this).hasClass('.cbp-vm-grid.cbp-vm-selected')) {
//     $('#cbp-vm').removeClass('.cbp-vm-switcher.cbp-vm-view-list').addClass('.cbp-vm-switcher.cbp-vm-view-grid');
//   }
//   else if ($(this).hasClass('.cbp-vm-list.cbp-vm-selected')) {
//     $('#cbp-vm').removeClass('.cbp-vm-switcher.cbp-vm-view-grid').addClass('.cbp-vm-switcher.cbp-vm-view-list');
//   }
// });

var $view = $('#cbp-vm'); // selects entire view mode
    $list = $('.cbp-vm-icon.cbp.vm-list');
    $grid = $('.cbp-vm-icon.cbp-vm-grid');

$list.on('click', function() {
    $grid.removeClass('.cbp-vm-selected');
    $list.addClass('.cbp-vm-selected');
    $view.addClass('.cbp-vm-switcher.cbp-vm-view-list');
  });

$grid.on('click', function() {
  $list.removeClass('.cbp-vm-selected');
  $grid.addClass('.cbp-vm-selected');
  $view.addClass('.cbp-vm-switcher.cbp-vm-view-grid');
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
