let todoArr = [];
let doneArr = [];

const getLocalStorage = () => {
    const localTodo = window.localStorage.getItem('todo');
    const localDone = window.localStorage.getItem('done');
    console.log(localDone, localTodo);

    //로컬스토리지에 데이터가 있을때에만 가져온다
    if (localTodo) {
        todoArr = JSON.parse(localTodo);
        todoArr.map((v) => createTodoElement(v, 'todo'));
    }
    if (localDone) {
        doneArr = JSON.parse(localDone);
        doneArr.map((v) => createTodoElement(v, 'done'));
    }
};

const createTodoElement = (content, isItToDo) => {
    const todoList = document.getElementById('todo-list');
    const doneList = document.getElementById('done-list');

    const item = document.createElement('li');
    item.className = 'item ';
    item.className += isItToDo;
    const itemContent = document.createElement('div');
    itemContent.className = 'item-content';
    itemContent.innerHTML = content;
    const itemRemove = document.createElement('button');
    itemRemove.className = 'item-remove';

    item.appendChild(itemContent);
    item.appendChild(itemRemove);

    if (isItToDo === 'todo') {
        todoList.appendChild(item);
    } else {
        doneList.appendChild(item);
    }
};

const pushTodo = () => {
    const inputValue = document.getElementById('input-form').value;

    todoArr.push(inputValue);
    window.localStorage.setItem('todo', JSON.stringify(todoArr));
    createTodoElement(inputValue, 'todo');
};

window.onload = getLocalStorage();
