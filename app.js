function onReady () {
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      number: id
    });
    id++;

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDos) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDos.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      // create Delete Button
      let deleteButton = document.createElement('button');

      // create text for Delete Button
      let deleteContent = document.createTextNode('Delete');

      // assign deleteButton to li
      newLi.appendChild(deleteButton);

      // assign text to deleteButton
      deleteButton.appendChild(deleteContent);

      // create delete button functionality
      deleteButton.addEventListener('click', event => {
        // compare the toDos[] with the toDos.id using .filter()
        toDos.number = false;
        var newToDoList = toDos.filter(toDos.number !== false);
        renderTheUI(newToDoList);
      });

      // checkbox.addEventListener('change', function() {
      //     if(this.checked) {
      //       toDos.complete = true;
      //     } else {
      //       toDos.complete = false;
      //     }
      // });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function () {
  onReady();
};
