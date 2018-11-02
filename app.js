window.onload = function () {
  onReady();

  var deleteLi = document.getElementById('li')
  if (deleteButton) {
    deleteLi.remove();
  }
};

const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');
const toDoList = document.getElementById('toDoList');

// create a delete button for the li
let deleteButton = document.createElement ('button');

// text for the delete button
let deleteContent = document.createTextNode ('Delete');

// assign text inside delete button
deleteButton.appendChild(deleteContent);

function onReady () {
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the title
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's input to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach delete button to the li
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';
  });
};
