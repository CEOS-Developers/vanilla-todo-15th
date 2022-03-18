const todoInput = document.querySelector('#todo-input');
const addTodoBtn = document.querySelector('#add-todo-btn');
const todoListTitle = document.querySelector('#todo-list-title');
const doneListTitle = document.querySelector('#done-list-title');
const todoList = document.querySelector('.todo-list');
const doneList = document.querySelector('.done-list');

let items = [];

const addNewTodo = (event) => {
  event.preventDefault();
  const ret = items.findIndex((item) => item.content === todoInput.value);
  if (ret === -1 && todoInput.value) {
    const item = {
      key: -1,
      content: todoInput.value,
      isDone: false,
    };
    items.push(item);
    render();
  }
  todoInput.value = '';
};

addTodoBtn.addEventListener('click', addNewTodo);

const delTodo = (event) => {
  const keyToDel = items.findIndex(
    (item) => item.key === parseInt(event.target.dataset.bin)
  );
  if (keyToDel !== -1) {
    localStorage.removeItem(String(keyToDel))
    items.splice(keyToDel, 1);
  }
  render();
};

const toggleIsDone = (event) => {
  const item = items.find(
    (item) => item.key === parseInt(event.target.dataset.todo)
  );
  item.isDone = !item.isDone;
  render();
};

const render = () => {
  const doneCnt = items.filter((item) => item.isDone).length;
  const todoCnt = items.length - doneCnt;
  todoListTitle.innerHTML = `To Do (${todoCnt})`;
  doneListTitle.innerHTML = `Done (${doneCnt})`;
  todoList.innerHTML = '';
  doneList.innerHTML = '';

  items.forEach((item, idx) => {
    item.key = idx;

    /* Create list */
    const listElement = document.createElement('li');
    const spanElement = document.createElement('span');
    spanElement.setAttribute('data-todo', idx);
    spanElement.textContent = '• ' + item.content; // Copy as-is
    spanElement.addEventListener('click', toggleIsDone);
    listElement.appendChild(spanElement);

    /* Append delete button */
    const delBtn = document.createElement('i');
    delBtn.setAttribute('class', 'delete-btn');
    delBtn.setAttribute('data-bin', idx);
    delBtn.addEventListener('click', delTodo);
    listElement.appendChild(delBtn);
    item.isDone ? doneList.append(listElement) : todoList.append(listElement);
  });
  localStorage.setItem('storedItems', JSON.stringify(items));
};

const getItemsFromLocalStorage = () => {
  const storedItems = localStorage.getItem('storedItems');
  if (storedItems) items = JSON.parse(storedItems);
  render();
};

getItemsFromLocalStorage();
