import getCheckCompleteIcon from "./components/checkComplete.js";
import getDeleteIcon from "./components/deleteIcon.js";

// Variables
const btnAdd = document.querySelector('[data-form-btn]');
const input = document.querySelector('[data-form-input]');
const list = document.querySelector("[data-list]");

// Functions
const createTask = e => {
    e.preventDefault();

    const value = input.value;

    const task = document.createElement('LI');
    task.classList.add('card');

    const taskContent = document.createElement('div');
    const titleTask = getTaskTitle(value);

    taskContent.appendChild(getCheckCompleteIcon());
    taskContent.appendChild(titleTask);

    task.appendChild(taskContent);
    task.appendChild(getDeleteIcon());
    list.appendChild(task);
    
    input.value = ''; //Clean input
};

// Event listener to create a Task
btnAdd.addEventListener('click', createTask);

const getTaskTitle = (value) => {
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    return titleTask;
}
