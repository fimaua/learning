// todo list algo
// 1. create array of task - and create 5 test task
// 2. write render func that render all task
// 3. addEventListenet for .list
// 4. checkbox handler - update task in the array and render tasks
// 5. create handler - create task obj and put to the array and render tasks

const listElem = document.querySelector('.list')
const tasks = [
    { text: 'Buy milk', done: false, id: '1' },
    { text: 'Pick up Tom from airport', done: false, id: '2' },
    { text: 'Visit party', done: false, id: '3' },
    { text: 'Visit doctor', done: true, id: '4' },
    { text: 'Buy meat', done: true, id: '5' },
];

const renderTasks = tasksList => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => a.done - b.done)
        .map((task) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-id', task.id);
            checkbox.checked = task.done;
            checkbox.classList.add('list__item-checkbox');
            if (task.done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, task.text);
            return listItemElem;
        });
    listElem.append(...tasksElems);
};

renderTasks(tasks)

listElem.addEventListener('click', onToggleTask)

//algo
//1. check if checkbox is clicked, if not -exit
//2. get checkbox data-id
//3. find task by id
//4. update task
//5. render tasks

function onToggleTask(event) {
    if (!event.target.classList.contains('list__item-checkbox')) {
        return;
    }

    let task = tasks.find(task => task.id === event.target.dataset.id)

    task.done = event.target.checked

    renderTasks(tasks)
}


//algo
//1. take btn and input element from DOM
//2. check that input element is not empty
//3. add new obj in array of tasks
//4. render task

const btn = document.querySelector('.create-task-btn')
const input = document.querySelector('.task-input')
const onCreateElement = () => {
    if (!(input.value === '')) {
        let idOfTask = String(tasks.length + 1)
        const newTask = { text: input.value, done: false, id: idOfTask }
        tasks.push(newTask)
        renderTasks(tasks)
        input.value = ''
    }
}
btn.addEventListener('click', onCreateElement)