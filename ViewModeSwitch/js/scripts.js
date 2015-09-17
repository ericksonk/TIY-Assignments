//NEW PSEUDO CODE
/*
//capture href, add an event listener, and add a class - for grid
//capture href, add an event listener, and add a class - for list
//figure out how to get the class unadded when the other is selected
// for the div.. we need to do some if else's

* div > toggle button between viewgrid & viewlist classes
  * if grid is selected then view grid class added to div
  * if list is selected then view-list class added to div
  * when grid is added list is removed
  * when list is added grid is removed
**/

// ****GRID FUNC****
//capture href, add an event listener, and add a class - for grid
// document.getElementsByClassName("cbp-vm-grid"); //captured element
// var grid = document.getElementByClassName("cbp-vm-grid"); //
// grid.addEventListener("click", function() {
//   grid.className += "cbp-vm-selected";
// });


var div = document.querySelector('#cbp-vm'); //selects ID cbp-vm (entire view mode)
    list = document.querySelector('.cbp-vm-icon.cbp-vm-list');//selects <a> element for list view
    grid = document.querySelector('.cbp-vm-icon.cbp-vm-grid');//selects the <a> element for grid view

list.addEventListener('click', viewList); //assigns event listener `click` to list icon
function viewList (){ //assigns elements which classes they need to display list mode
  div.className = "cbp-vm-switch cbp-vm-view-list";
  list.className = "cbp-vm-icon cbp-vm-list cbp-vm-selected";
  grid.className = "cbp-vm=icon cbp-vm-grid";
}

grid.addEventListener('click', viewGrid); //assigns event listener 'click' to grid icon
function viewGrid (){ //assigns elements which classes they need to display grid mode
  div.className = "cbp-vm-switch cbp-vm-view-grid";
  grid.className = "cbp-vm-icon cbp-vm-grid cbp-vm-selected";
  list.className = "cbp-vm-icon cbp-vm-list";
}


// WUT? COME BACK LATER
// var divTarget = document.getElementById('.cbp-vm'); //targeting parent of the divs
// var classTarget = document.querySelectorAll('div.cbp-vm-options, divTarget.cbp-vm-switcher');//creates node list
// var grid = document.querySelectorAll('a.cbp-vm-grid');
// var list = document.querySelectorAll('a.cbp-vm-list'); //array of
// console.log(list);


// var buttonDefault = document.querySelector('div.cbp-vm-options');
//   buttonDefault.addEventListener('click', function(){
//     document.querySelector('a').className = 'cbp-vm-icon cbp-vm-grid cbp-vm-selected';
//     }
// });
// console.log(buttonDefault);

//var selectedButton = document.activeElement; ???? maybe use activeElement at some point?

// list.addEventListener("click", function() {
//   list.className += "cbp-vm-selected";
// });
