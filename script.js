let todoList = [];

const addTodoItem = () => {
  const todoContent = document.querySelector(".todo-input").value;
  const todoId = todoList.length + 1;
  const newTodo = document.createElement("li");
  const newTodoText = document.createElement("span");
  newTodoText.innerText = todoContent;
  newTodo.setAttribute("id", todoId);
  newTodo.appendChild(newTodoText);

  const todoObj = {
    id: todoId,
    text: newTodoText,
  };
  todoList.push(todoObj);
  document.querySelector(".todo-list").appendChild(newTodo);
  document.querySelector(".todo-input").value = "";
};
