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
  setLocal(todoItems);
});

const render = (obj) => {
  // rendering in todoList
  const li = document.createElement('li');
  const btn = document.createElement('button');
  const delBtn = document.createElement('button');
  btn.innerText = obj.contents;
  delBtn.innerText = 'X';
  li.id = obj.id;
  li.status = obj.isDone;
  li.append(btn);
  li.append(delBtn);
  yetList.append(li);

  // add eventListener
  delBtn.addEventListener('click', (e) => {
    const target = e.target.parentElement;
    const id = target.id;
    target.remove();

    const temp = JSON.parse(localStorage.getItem(todoItemsText));
    const stillTodo = temp.filter((i) => i.id != id); // 눌러지지 않은 것들
    localStorage.setItem(todoItemsText, JSON.stringify(stillTodo));
  });
  btn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
    const target = e.target.parentElement;
    const id = target.id;
    target.status = true;

    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = target.innerText.slice(0, -1);
    li.append(btn);
    doneList.append(li);

    btn.addEventListener('click', (e) => {
      const target = e.target.parentElement;
    });
  });
};

const setLocal = (arr) => {
  localStorage.setItem(todoItemsText, JSON.stringify(arr));
};
