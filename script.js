const savedList = document.getElementById('savedList');

form.addEventListener('submit', (e) => {
  const li = document.createElement('li');
  li.innerText = document.getElementById('input').value;
  savedList.appendChild(li);
  li.id = 'li';

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';
  deleteButton.id = 'deleteButton';
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', function () {
    savedList.removeChild(li);
  });

  e.preventDefault();
});
