const savedList = document.getElementById('savedList');
const doneList = document.getElementById('doneList');
let savedListTitle = document.getElementById('savedListTitle');
savedListTitle.innerHTML = '해야할 일';
doneListTitle.innerHTML = '완료한 일';

form.addEventListener('submit', (e) => {
  const countSavedNum = () => {
    let savedNum = savedList.getElementsByTagName('li').length;
    savedListTitle.innerHTML = `해야할 일(${savedNum + 1})`;
  };
  countSavedNum();

  const countDoneNum = () => {
    let doneNum = doneList.getElementsByTagName('li').length;
    doneListTitle.innerHTML = `완료한 일(${doneNum})`;
  };
  countDoneNum();

  const li = document.createElement('li');
  li.innerText = document.getElementById('input').value;
  li.id = li.innerText;
  li.isDone = false;
  li.isDone ? doneList.append(li) : savedList.append(li);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';
  deleteButton.id = 'deleteButton';
  li.append(deleteButton);

  li.draggable = true;
  li.addEventListener('click', () => {
    li.isDone ? (li.isDone = false) : (li.isDone = true);
    li.isDone ? doneList.append(li) : savedList.append(li);
    countSavedNum();
    countDoneNum();
  });

  li.addEventListener('dragstart', function (event) {});

  li.addEventListener('drag', function (event) {});

  li.addEventListener('dragover', function (event) {
    event.preventDefault();
  });

  li.addEventListener('drop', function (event) {
    event.preventDefault();
    console.log(event.target);
    event.target.parentNode.append(li);
  });

  deleteButton.addEventListener('click', function (event) {
    setTimeout(() => li.remove(), 0);
  });

  e.preventDefault();
});
