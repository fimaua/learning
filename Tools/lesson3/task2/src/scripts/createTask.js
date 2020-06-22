import { renderTasks } from './renderer.js'
import { setItem } from './storage.js'
import { createTask, getTasksList } from './tasksGateway.js'

export const onCreateTask = () => {
    const taskInputElem = document.querySelector('.task-input')

    const text = taskInputElem.value

    if (!text) {
        return;
    }
    taskInputElem.value = '';

    const newTask = {
        text,
        done: false,
        createDate: new Date().toISOString(),
    };

    createTask(newTask)
        .then(() => getTasksList())
        .then(newTaskList => {
            setItem('tasksList', newTaskList);
            renderTasks()
        })
}