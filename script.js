( () => {
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
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>
    `;

    // task.innerHTML = content;
    task.appendChild(taskContent)

    list.appendChild(task);
    
    input.value = ''; //Limpiar input
};

btnAdd.addEventListener('click', createTask);

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
}

// Immediately invoked function expression IIFE
const completeTask = (e) => {
    const element = e.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
}

})();