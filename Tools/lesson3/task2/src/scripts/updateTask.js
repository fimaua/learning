import { renderTasks } from './renderer.js'
import { getItem, setItem } from './storage.js'
import { getTasksList, updateTask, deleteTask } from './tasksGateway.js';

export const onToggleTask = e => {
    const taskId = e.target.dataset.id;
    const tasksList = getItem('tasksList');

    const { text, createDate } = tasksList
        .find(task => task.id === taskId);
    const done = e.target.checked;

    const updatedTask = {
        text,
        createDate,
        done,
        finishDate: done ?
            new Date().toISOString() : null
    }
    updateTask(taskId, updatedTask)
        .then(() => getTasksList())
        .then(newTaskList => {
            setItem('tasksList', newTaskList);
            renderTasks()
        })
}

export const onDeleteTask = e => {
    const taskId = e.target.dataset.id;
    const tasksList = getItem('tasksList');

    tasksList
        .find(task => task.id === taskId);
    deleteTask(taskId)
        .then(() => getTasksList())
        .then(newTaskList => {
            setItem('tasksList', newTaskList);
            renderTasks()
        })
}

export const onListClick = e => {
    const isCheckbox = e.target.classList.contains('list__item-checkbox')
    const isDeleteBtn = e.target.classList.contains('list__item_delete-btn')

    if (isCheckbox) {
        onToggleTask(e)
    } else if (isDeleteBtn) {
        onDeleteTask(e)
    }
}