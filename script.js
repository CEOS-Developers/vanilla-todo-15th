const list = document.getElementById('savedToDo');

form.addEventListener('submit', (e) => {
  const li = document.createElement('li');
  li.innerText = document.getElementById('input').value;
  list.appendChild(li);
  li.id = 'li';

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';
  deleteButton.id = 'deleteButton';
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
  });

  e.preventDefault();
});
