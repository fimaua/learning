import { renderTasks } from './renderer.js'
import { getItem, setItem } from './storage.js'

export const onCreateTask = () => {
    const taskInputElem = document.querySelector('.task-input')

    const text = taskInputElem.value

    if (!text) {
        return;
    }
    taskInputElem.value = '';
    const taskList = getItem('tasksList') || [];

    const newTaskList = taskList.concat({
        text,
        done: false,
        createDate: new Date().toISOString(),
        id: Math.random().toString()
    });

    setItem('tasksList', newTaskList);

    renderTasks();
}