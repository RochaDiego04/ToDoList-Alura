const btnAdd = document.querySelector('[data-form-btn]');
const input = document.querySelector('[data-form-input]');
const list = document.querySelector("[data-list]");


const createTask = e => {
    e.preventDefault();

    const value = input.value;

    const task = document.createElement('LI');
    task.classList.add('card');

    const content = `
    <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>
    `;
    
    task.innerHTML = content;

    list.appendChild(task);
    
    input.value = ''; //Limpiar input
};

btnAdd.addEventListener('click', createTask);
