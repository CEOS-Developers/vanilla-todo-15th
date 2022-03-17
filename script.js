// DOM 조작(검색)

const input = document.querySelector('#input-form input');
const plus = document.querySelector('#plus');
const yetList = document.querySelector('#yet-list');
const doneList = document.querySelector('#done-list');
const todoNum = document.querySelector('#todoNum');
const doneNum = document.querySelector('#doneNum');

// 텍스트는 변수로 설정 => 오타 방지 및 수정 용이
const todoItemsText = 'todoItems';

// for localStorage
let todoItems = [];

const setItems = (e) => {
  input.value = '';
  const obj = {
    contents: input.value,
    id: Date.now(),
    isDone: false,
  };
  todoItems.push(obj);
  e.preventDefault();
};
plus.addEventListener('click', setItems);

const render = () => {};
