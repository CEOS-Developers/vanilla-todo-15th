let todoList = [];

const addTodoItem = () => {
  const todoContent = document.querySelector(".todo-input").value;
  const todoId = todoList.length + 1;
  const newTodo = document.createElement("li");
  const newTodoText = document.createElement("span");
  const todoDel = document.createElement("img");

  newTodoText.innerText = todoContent;
  newTodoText.style.cursor = "pointer";
  newTodoText.style.fontSize = "15px";

  todoDel.setAttribute("src", "img/bin.png");
  todoDel.style.width = "14px";
  todoDel.style.paddingLeft = "5px";
  todoDel.style.cursor = "pointer";
  todoDel.addEventListener("click", deleteTodoItem);

  newTodo.setAttribute("id", todoId);
  newTodo.style.marginBottom = "10px";
  newTodo.appendChild(newTodoText);
  newTodo.appendChild(todoDel);

  const todoObj = {
    id: todoId,
    text: newTodoText,
  };
  todoList.push(todoObj);
  document.querySelector(".todo-list").appendChild(newTodo);
  document.querySelector(".todo-input").value = "";
};
const deleteTodoItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".todo-list").removeChild(target);
  const newTodoList = todoList.filter(
    (item) => item.id !== parseInt(target.id),
  );
  todoList = newTodoList;
};
