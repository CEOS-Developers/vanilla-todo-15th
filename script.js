const savedList = document.getElementById('savedList');
const doneList = document.getElementById('doneList');

form.addEventListener('submit', (e) => {
  const li = document.createElement('li');
  li.innerText = document.getElementById('input').value;
  li.id = li.innerText;
  li.isDone = false;
  li.isDone ? doneList.append(li) : savedList.append(li);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';
  deleteButton.id = 'deleteButton';
  li.append(deleteButton);

  const countSavedNum = () => {
    let savedNum = savedList.getElementsByTagName('li').length;
  };

  const countDoneNum = () => {
    let doneNum = doneList.getElementsByTagName('li').length;
  };

  li.addEventListener('click', () => {
    li.isDone ? (li.isDone = false) : (li.isDone = true);
    li.isDone ? doneList.append(li) : savedList.append(li);
    countSavedNum();
    countDoneNum();
  });

  deleteButton.addEventListener('click', function (event) {
    setTimeout(() => li.remove(), 0);
  });

  e.preventDefault();
});
