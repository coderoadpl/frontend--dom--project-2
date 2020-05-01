const loadTasks = function () {
    return JSON.parse(localStorage.getItem('tasks')) || []
}

const saveTasks = function () {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const addTask = function (newTaskText) {
    
    if(!newTaskText) return
    
    const newTask = {
        text: newTaskText,
        timestamp: Date.now(),
    }

    tasks[tasks.length] = newTask

    render()
    saveTasks()
}

const renderTask = function (task) {

    const li = document.createElement('li')

    li.style.fontFamily = 'sans-serif'
    li.style.fontSize = '14px'

    li.innerText = task.text

    return li

}

const renderTasks = function () {
    const tasksContainer = document.createElement('div')

    const ol = document.createElement('ol')

    for (let i = 0; i < tasks.length; i++) {

        const li = renderTask(tasks[i])

        ol.appendChild(li)

    }

    tasksContainer.appendChild(ol)

    return tasksContainer
}

const renderForm = function () {
    const formContainer = document.createElement('div')

    const form = document.createElement('form')
    const input = document.createElement('input')
    const button = document.createElement('button')

    form.style.display = 'flex'

    input.style.borderRadius = '4px'
    input.style.outline = 'none'
    input.style.border = '1px solid rgba(0, 0, 0, 0.25)'
    input.style.height = '20px'
    input.style.boxSizing = 'content-box'
    input.style.width = '100%'

    button.style.borderRadius = '4px'
    button.style.height = '20px'
    button.style.outline = 'none'
    button.style.boxSizing = 'content-box'
    button.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    button.style.border = '1px solid rgba(0, 0, 0, 0.25)'
    button.style.width = '100px'

    button.innerText = 'ADD'

    form.addEventListener(
        'submit',
        function (event) {
            event.preventDefault()
            addTask(input.value)
        }
    )

    form.appendChild(input)
    form.appendChild(button)

    formContainer.appendChild(form)

    return formContainer
}

const render = function (containerSelector = 'body') {
    const container = document.querySelector(containerSelector)

    if (!container) return

    container.innerHTML = ''

    const formContainer = renderForm()
    const tasksContainer = renderTasks()

    container.appendChild(formContainer)
    container.appendChild(tasksContainer)
}

const tasks = loadTasks()

render()