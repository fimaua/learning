const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */
export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
}

/* getTaskById code here */
export const getTaskById = taskId => {
    return fetch(`${baseUrl}/${taskId}`)
        .then(response => response.json())
}