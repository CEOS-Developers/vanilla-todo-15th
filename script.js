const list = document.getElementById('savedToDo');
const inputField = document.getElementById('input');
const inputButton = document.getElementById('submit');

inputField.addEventListener('keyup', (event) => makeSavedListbyEnter(event));
inputButton.addEventListener('click', makeSavedList);

function makeSavedList() {
  const li = document.createElement('li');
  li.innerText = document.getElementById('input').value;
  list.appendChild(li);
  li.id = 'li';

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';
  deleteButton.id = 'deleteButton';
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
  });
}

function makeSavedListbyEnter(event) {
  if (event.key === 'Enter') {
    makeSavedList();
  }
}
