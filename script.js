let todoList = [];
let doneList = [];

const form = document.querySelector(".todo-form");

// 입력된 값을 todo list에 추가
const addTodoItem = () => {
  event.preventDefault();
  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) paintTodoItem(todoContent);
};

// 화면에 todo item을 추가
const paintTodoItem = (text) => {
  const todoId = new Date().valueOf();
  const newTodo = document.createElement("li");
  const newTodoText = document.createElement("span");
  const todoDel = document.createElement("img");

  // todo item 텍스트 추가
  newTodoText.innerText = text;
  newTodoText.className = "todo-item-text";
  newTodoText.addEventListener("dblclick", toggleTodoToDone);

  // todo item 삭제 버튼 추가
  todoDel.setAttribute("src", "img/bin.png");
  todoDel.className = "todo-delete-button";
  todoDel.addEventListener("click", deleteTodoItem);

  // li에 item 추가
  newTodo.setAttribute("id", todoId);
  newTodo.className = "todo-list-item";
  newTodo.appendChild(newTodoText);
  newTodo.appendChild(todoDel);

  // todo list에 item 추가
  const todoObj = {
    id: todoId,
    text,
  };

  todoList = [...todoList, todoObj];
  document.querySelector(".todo-list").appendChild(newTodo);
  document.querySelector(".todo-input").value = "";

  // todo item 개수 갱신
  countTodoItem();

  // localStorage에 갱신된 todoList 저장
  saveTodoLocalStorage();
};

// todo item을 삭제
const deleteTodoItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".todo-list").removeChild(target);

  // target node 삭제
  const newTodoList = todoList.filter(
    (item) => item.id !== parseInt(target.id),
  );
  todoList = newTodoList;

  // todo item 개수 갱신
  countTodoItem();

  // localStorage에 갱신된 todoList 저장
  saveTodoLocalStorage();
};

// todo item 개수 출력
const countTodoItem = () => {
  const count = document.querySelector(".todo-count");
  count.innerText = `(${todoList.length})`;
};

// todo item -> done item
const toggleTodoToDone = (e) => {
  // todo List에서 item 삭제
  deleteTodoItem(e);

  // done list에 item 추가
  paintDoneItem(e.target.innerText);
};

// 화면에 todo done item을 추가
const paintDoneItem = (text) => {
  const todoId = new Date().valueOf();
  const newTodoDone = document.createElement("li");
  const newTodoText = document.createElement("span");
  const todoDel = document.createElement("img");

  // todo done item 텍스트 추가
  newTodoText.innerText = text;
  newTodoText.className = "done-item-text";
  newTodoText.addEventListener("dblclick", toggleDoneToTodo);

  // todo done item 삭제 버튼 추가
  todoDel.setAttribute("src", "img/bin.png");
  todoDel.className = "todo-delete-button";
  todoDel.addEventListener("click", deleteDoneItem);

  // li에 item 추가
  newTodoDone.setAttribute("id", todoId);
  newTodoDone.className = "todo-list-item";
  newTodoDone.appendChild(newTodoText);
  newTodoDone.appendChild(todoDel);

  const todoObj = {
    id: todoId,
    text,
  };

  doneList = [...doneList, todoObj];
  document.querySelector(".done-list").appendChild(newTodoDone);

  // done item 개수 갱신
  countDoneItem();

  // localStorage에 갱신된 doneList 저장
  saveDoneLocalStorage();
};

// done item -> todo item
const toggleDoneToTodo = (e) => {
  // done List에서 item 삭제
  deleteDoneItem(e);

  // todo list에 item 추가
  paintTodoItem(e.target.innerText);
};

// todo done item을 삭제
const deleteDoneItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".done-list").removeChild(target);

  // target node 삭제
  const newTodoList = doneList.filter(
    (item) => item.id !== parseInt(target.id),
  );
  doneList = newTodoList;

  // done item 개수 갱신
  countDoneItem();

  // localStorage에 갱신된 doneList 저장
  saveDoneLocalStorage();
};

// todo item 개수 출력
const countDoneItem = () => {
  const count = document.querySelector(".done-count");
  count.innerText = `(${doneList.length})`;
};

const saveLocalStorage = (type, list) => {
  localStorage.setItem(type, JSON.stringify(list));
};

// todo list를 localStorage에 저장
const saveTodoLocalStorage = () => saveLocalStorage("todoList", todoList);

// todo done list를 localStorage에 저장
const saveDoneLocalStorage = () => saveLocalStorage("doneList", doneList);

// localStorage에서 todo list 불러오기
const loadLocalStorage = () => {
  const todoStorage = localStorage.getItem("todoList");
  const doneStorage = localStorage.getItem("doneList");

  // localStorage에 저장된 list가 있는지 확인
  if (todoStorage) {
    const loadTodo = JSON.parse(todoStorage);
    loadTodo.forEach((item) => {
      // list에 존재하는 item들 화면에 그리기
      paintTodoItem(item.text);
    });
  }
  if (doneStorage) {
    const loadDone = JSON.parse(doneStorage);
    loadDone.forEach((item) => {
      // list에 존재하는 item들 화면에 그리기
      paintDoneItem(item.text);
    });
  }
  countTodoItem();
  countDoneItem();
};

const init = () => {
  form.addEventListener("submit", addTodoItem);
  loadLocalStorage();
};

init();
