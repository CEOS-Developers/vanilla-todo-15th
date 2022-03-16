// DOM 조작(검색)
const form = document.querySelector('#input-form');
const input = document.querySelector('#input-form input');
const yetList = document.querySelector('#yet-list');
const doneList = document.querySelector('#done-list');
const todoNum = document.querySelector('#todoNum');
const doneNum = document.querySelector('#doneNum');

// 텍스트는 변수로 설정 => 오타 방지 및 수정 용이
const todoItemsText = 'todoItems';

// for localStorage
let todoItems = [];
let id = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = input.value;
  input.value = '';
  const obj = {
    contents: val,
    id: Date.now(),
    isDone: false,
  };
  todoItems.push(obj);

  render(obj);
});

const render = (obj) => {
  if (obj.isDone == false) {
    // 위쪽에 랜더
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = obj.contents;
    li.id = obj.id;
    li.append(btn);
    yetList.append(li);
  } else if (obj.isDone == true) {
    // 아래쪽에 랜더
  }
};
