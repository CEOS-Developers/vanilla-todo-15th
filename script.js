document.body.style.background = `linear-gradient(to right, #c7efff, #ffccf6)`;

const toDoButton = document.getElementById('todo-button');
const toDo = document.getElementById('todo');
const toDoList = document.getElementById('todo-list');
const toDoInfo = document.getElementById('todo-info');
const doneList = document.getElementById('done-list');
const doneInfo = document.getElementById('done-info');
const submitform = document.getElementById('submit-form');

let toDoNum = 0;
let doneNum = 0;

//todo에서 삭제
function deleteToDo(event) {
  toDoNum <= 0 ? (toDoNum = 0) : toDoNum--;
  toDoInfo.innerText = `(${toDoNum})`;

  const deletetoDoList = event.target.parentElement;
  deletetoDoList.remove();
}

function moveToDo(event) {
  deleteToDo(event);

  const removeList = document.createElement('div');
  const removeItem = event.target;
  const deleteButton = document.createElement('span');

  deleteButton.innerText = '❌';

  removeList.appendChild(removeItem);
  removeList.appendChild(deleteButton);
  doneList.appendChild(removeList);

  doneNum++;

  removeItem.removeEventListener('click', moveToDo);
  removeItem.addEventListener('click', moveDoneToDo);
  deleteButton.addEventListener('click', trashDoneToDo);

  toDoInfo.innerText = `(${toDoNum})`;
  doneInfo.innerText = `(${doneNum})`;
}

function moveDoneToDo(event) {
  trashDoneToDo(event);

  const removeList = document.createElement('div');
  const removeItem = event.target;
  const deleteButton = document.createElement('span');

  deleteButton.innerText = '❌';

  removeList.appendChild(removeItem);
  removeList.appendChild(deleteButton);
  toDoList.appendChild(removeList);

  toDoNum++;

  removeItem.removeEventListener('click', moveDoneToDo);
  removeItem.addEventListener('click', moveToDo);
  deleteButton.addEventListener('click', deleteToDo);

  toDoInfo.innerText = `(${toDoNum})`;
  doneInfo.innerText = `(${doneNum})`;
}

function trashDoneToDo(event) {
  const li = event.target.parentElement;
  li.remove();

  doneNum <= 0 ? (doneNum = 0) : doneNum--;
  doneInfo.innerText = `(${doneNum})`;
}

function toDoInput(event) {
  event.preventDefault();
  const newTodo = toDo.value;
  toDo.value = '';
  makeToDo(newTodo);
}

function makeToDo(newTodo) {
  toDoNum++;
  toDoInfo.innerText = `(${toDoNum})`;

  const li = document.createElement('div');
  const toDoItem = document.createElement('span');
  const deleteButton = document.createElement('span');

  toDoItem.innerText = newTodo;
  deleteButton.innerText = '❌';

  li.appendChild(toDoItem);
  li.appendChild(deleteButton);
  toDoList.appendChild(li);

  toDoItem.addEventListener('click', moveToDo);
  deleteButton.addEventListener('click', deleteToDo);
}

submitform.addEventListener('submit', toDoInput);
toDoButton.addEventListener('click', toDoInput);
