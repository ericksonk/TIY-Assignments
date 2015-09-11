/*
file w/o js:
* can not choose between grid or list view
* bulleted list
* no item images
* no add to cart button


file w/ js:
* content is interactive and you can toggle over gird or list buttons to change the view
* add-to-cart buttons for each item
* images for each item


How to fix:
* write function that lets you `switch` view modes from grid to list
* create `for` loops for gird and list
* target class `cbp-vm-switcher` with getElementByClassName

switch (expression) { //whoa Atom spit this out when i typed `switch`... might be helpful????
  case expression:

    break;
  default:
}
**/
// previous pseudo is wrong bc didnt have image and font files linked


//NEW PSEUDO CODE
/*
//capture href, add an event listener, and add a class - for grid
//capture href, add an event listener, and add a class - for list
//figure out how to get the class unadded when the other is selected
// for the div.. we need to do some if else's

* div > toggle button between viewgrid & viewlist classes
  * if grid is selected then view grid calss added to div
  * if list is selected then view-list class added to div
  * when grid is added list is removed
  * when list is added grid is removed
**/

document.getElementsByClassName("cbp-vm-grid"); //captured element
var grid = document.getElementByClassName("cbp-vm-grid"); //
grid.addEventListener("click", function() {
  grid.className = "cbp-vm-selected";
});

document.getElementsByClassName("cbp-vm-list"); //captured element
var list = document.getElementByClassName("cbp-vm-list"); //
list.addEventListener("click", function() {
  list.className = "cbp-vm-selected";
});
