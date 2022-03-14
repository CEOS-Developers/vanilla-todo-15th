let todoList = [];

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
  saveLocalStorage();
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
  saveLocalStorage();
};

// todo list를 localStorage에 저장
const saveLocalStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

// localStorage에서 todo list 불러오기
const loadLocalStorage = () => {
  const storage = localStorage.getItem("todoList");

  // localStorage에 저장된 list가 있는지 확인
  if (storage) {
    const loadTodo = JSON.parse(storage);
    loadTodo.forEach((item) => {
      // list에 존재하는 item들 화면에 그리기
      paintTodoItem(item.text);
    });
  }
};

loadLocalStorage();
