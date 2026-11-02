const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function() {
  const taskText = taskInput.value;

  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    const del = document.createElement('button');
    del.className = 'delete-task';
    del.textContent = 'Delete';
    newTask.appendChild(del);

    taskList.appendChild(newTask);
    taskInput.value = ''; // Clear the input field
  }
});

taskList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-task')) {
    e.target.closest('li').remove();
  }
});
