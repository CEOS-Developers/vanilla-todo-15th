const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoPre = document.querySelector(".todo-list-pre");
// const toDoDone = document.querySelector(".todo-list-done");

const TODOLIST = "toDoList";
let toDoList = [];

function saveToDo(toDo) {
  const toDoObj = {
    text: toDo,
    id: toDoList.length + 1,
  };

  toDoList.push(toDoObj);
}

function delToDo(event) {
  const { target: button } = event;
  const li = button.parentNode;

  toDoPre.removeChild(li);
  toDoList = toDoList.filter((toDo) => toDo.id !== Number(li.id));
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delButton = document.createElement("img");

  delButton.src = "img/ios_trash.png";
  delButton.addEventListener("click", delToDo);

  span.innerHTML = toDo;

  li.appendChild(span);
  li.appendChild(delButton);
  li.id = toDoList.length + 1;

  toDoPre.appendChild(li);
}

function createToDo(event) {
  event.preventDefault();

  const toDo = toDoInput.value;

  paintToDo(toDo);
  saveToDo(toDo);

  toDoInput.value = "";
}

function init() {
  toDoForm.addEventListener("submit", createToDo);
}

init();
