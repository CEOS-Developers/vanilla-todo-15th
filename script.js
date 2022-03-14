let todoList = [];
let doneList = [];

// 입력된 값을 todo list에 추가
const addTodoItem = () => {
  const todoContent = document.querySelector(".todo-input").value;
  paintTodoItem(todoContent);
};

// 화면에 todo item을 추가
const paintTodoItem = (text) => {
  const todoId = todoList.length + 1;
  const newTodo = document.createElement("li");
  const newTodoText = document.createElement("span");
  const todoDel = document.createElement("img");

  // todo item 텍스트 추가
  newTodoText.innerText = text;
  newTodoText.style.cursor = "pointer";
  newTodoText.style.fontSize = "15px";
  newTodoText.addEventListener("dblclick", addDoneItem);

  // todo item 삭제 버튼 추가
  todoDel.setAttribute("src", "img/bin.png");
  todoDel.style.width = "14px";
  todoDel.style.paddingLeft = "5px";
  todoDel.style.cursor = "pointer";
  todoDel.addEventListener("click", deleteTodoItem);

  // li에 item 추가
  newTodo.setAttribute("id", todoId);
  newTodo.style.marginBottom = "10px";
  newTodo.appendChild(newTodoText);
  newTodo.appendChild(todoDel);

  // todo list에 item 추가
  const todoObj = {
    id: todoId,
    text,
  };
  todoList.push(todoObj);
  document.querySelector(".todo-list").appendChild(newTodo);
  document.querySelector(".todo-input").value = "";

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

  // localStorage에 갱신된 todoList 저장
  saveTodoLocalStorage();
};

const addDoneItem = (e) => {
  // todo List에서 item 삭제
  deleteTodoItem(e);

  // done list에 item 추가
  paintDoneItem(e.target.innerText);

  // localStorage에 갱신된 doneList 저장
  saveDoneLocalStorage();
};

const paintDoneItem = (text) => {
  const todoId = doneList.length + 1;
  const newTodoDone = document.createElement("li");
  const newTodoText = document.createElement("span");
  const todoDel = document.createElement("img");

  // todo done item 텍스트 추가
  newTodoText.innerText = text;
  newTodoText.style.cursor = "pointer";
  newTodoText.style.fontSize = "15px";
  newTodoText.style.textDecorationLine = "line-through";
  newTodoText.style.color = "lightGrey";

  // todo done item 삭제 버튼 추가
  todoDel.setAttribute("src", "img/bin.png");
  todoDel.style.width = "14px";
  todoDel.style.paddingLeft = "5px";
  todoDel.style.cursor = "pointer";

  // li에 item 추가
  newTodoDone.setAttribute("id", todoId);
  newTodoDone.style.marginBottom = "10px";
  newTodoDone.appendChild(newTodoText);
  newTodoDone.appendChild(todoDel);

  const todoObj = {
    id: todoId,
    text,
  };

  doneList.push(todoObj);
  document.querySelector(".done-list").appendChild(newTodoDone);
};

// todo list를 localStorage에 저장
const saveTodoLocalStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const saveDoneLocalStorage = () => {
  localStorage.setItem("doneList", JSON.stringify(doneList));
};

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
};

loadLocalStorage();
