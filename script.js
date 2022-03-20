const savedList = document.getElementById('savedList');
const doneList = document.getElementById('doneList');
const savedListTitle = document.getElementById('savedListTitle');
savedListTitle.innerHTML = '해야할 일';
doneListTitle.innerHTML = '완료한 일';

form.addEventListener('submit', (e) => {
  //할 일 구현
  const li = document.createElement('li');
  li.innerText = document.getElementById('input').value;
  li.className = 'toDo';
  li.id = li.innerText;
  document.getElementById('input').value = '';
  li.isDone = false;
  li.isDone ? doneList.append(li) : savedList.append(li);
  countSavedNum();

  //삭제 버튼
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';
  deleteButton.id = 'deleteButton';
  li.append(deleteButton);

  deleteButton.addEventListener('click', function (event) {
    li.remove();
    event.stopPropagation();
    countSavedNum();
    countDoneNum();
  });

  //할 일이 완료 되었는지 확인
  li.addEventListener('click', () => {
    li.isDone = !li.isDone;
    li.isDone ? doneList.append(li) : savedList.append(li);
    countSavedNum();
    countDoneNum();
  });

  //할 일에 드래그 속성 추가
  li.draggable = true;
  li.addEventListener('dragstart', function () {});
  li.addEventListener('drag', function () {});
  li.addEventListener('dragover', function (event) {
    event.preventDefault();
  });
  li.addEventListener('drop', function (event) {
    event.preventDefault();
    console.log(event.target);
    event.target.parentNode.append(li);
  });

  e.preventDefault();
});

//할 일 개수 세기
const countSavedNum = () => {
  const savedNum = savedList.getElementsByClassName('toDo').length;
  savedListTitle.innerHTML = `해야할 일(${savedNum})`;
};

const countDoneNum = () => {
  const doneNum = doneList.getElementsByClassName('toDo').length;
  doneListTitle.innerHTML = `완료한 일(${doneNum})`;
};
