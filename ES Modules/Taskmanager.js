import { task } from "./task.js";

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addtaskButton(description) {
        const newTask = new task(description);
        this.tasks.push(newTask);
        this.rendertasks();
    }

    rendertasks() {
        const Tasklist = document.getElementById('Tasklist');
        Tasklist.innerHTML = '';
        this.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.description;
            li.style.textDecoration = task.completed ? 'line-through' : 'none';
            li.addEventListener('click', () => {
                task.toggleComplete();
                this.rendertasks();
            });
            Tasklist.appendChild(li);
        });
    }
}

let taskmanager;

function initializeTaskManager() {
    taskmanager = new TaskManager();
}

initializeTaskManager();

console.log(taskmanager);

export { taskmanager };