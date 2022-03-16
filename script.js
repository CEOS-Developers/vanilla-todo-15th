const savedList = document.getElementById('savedList');
const doneList = document.getElementById('doneList');

form.addEventListener('submit', (e) => {
  const li = document.createElement('li');
  li.innerText = document.getElementById('input').value;
  li.id = 'li';
  li.isDone = false;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';
  deleteButton.id = 'deleteButton';
  li.append(deleteButton);

  li.addEventListener('click', () => {
    li.isDone ? (li.isDone = false) : (li.isDone = true);
    li.isDone ? doneList.append(li) : savedList.append(li);
  });

  li.isDone ? doneList.append(li) : savedList.append(li);

  e.preventDefault();
});
