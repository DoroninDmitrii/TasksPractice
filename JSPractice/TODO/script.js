// var
const root = document.querySelector(':root');
const container = document.querySelector('.container');
const newTaskInput = document.getElementById('new_task_input');
const taskForm = document.getElementById('new_task_form');
const tasksList = document.getElementById('tasksList');
const taskBtns = document.querySelectorAll('.task_check_btn');
const themeBtn = document.querySelector('.theme_toogle_btn');

// when submit form
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let newtaskInputValue = taskForm.elements.new_task_input;

  addTask(newtaskInputValue.value);
})

// add task;
function addTask(newTask) {
  // Create li element and set its class
  const newTasksItem = document.createElement('li');
  newTaskInput.setAttribute('class', 'task_item');

  // Create checkbox  element and set its type and  class 

  const newCheckBtn = document.createElement('div');
  newCheckBtn.setAttribute('class', 'task_check_btn');

  // Create span  element and set its class and add new task input

  const newTaskBio = document.createElement('span');
  newTaskBio.setAttribute('class', 'task_bio');

  newTaskBio.innerText = newTask;

  tasksList.appendChild(newTasksItem);

  newTasksItem.appendChild(newCheckBtn);

  newTasksItem.appendChild(newTaskBio);

  newTaskInput.value = '';

  container.classList.remove('task_list_empty');

  onTaskComplete(newCheckBtn, newTasksItem);
}

function onTaskComplete(btns, newTasksItem) {
  btns.addEventListener('click', (e) => {
    btns.classList.add('task-completed')
    btns.remove();
    newTasksItem.remove();
  })
}


