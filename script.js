// DOM 조작(검색)
const inputField = document.querySelector('#todo-input');
const addTodoBtn = document.querySelector('#add-todo-btn');
const todoListTitle = document.querySelector('#todo-list-title');
const doneListTitle = document.querySelector('#done-list-title');
const todoList = document.querySelector('.todo-list');
const doneList = document.querySelector('.done-list');

// 텍스트는 변수로 설정 => 오타 방지 및 수정 용이
const todoItemsText = 'todoItems';

// for localStorage
let items = [];

//
addTodoBtn.addEventListener('click', (e) => {
  const val = inputField.value;
  const todoObj = {
    id: null,
    contents: val,
    isDone: false,
  };
  inputField.value = '';
  items.push(todoObj);
  console.log(items);
  e.preventDefault();
});
