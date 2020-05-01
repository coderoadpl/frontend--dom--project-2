const tasks = []

const addTask = function (newTaskText) {
    const newTask = {
        text: newTaskText,
        timestamp: Date.now(),
    }

    tasks[tasks.length] = newTask

    render()
}

const renderTasks = function () {
    const tasksContainer = document.createElement('div')

    for (let i = 0; i < tasks.length; i++) {
        const div = document.createElement('div')

        div.innerText = tasks[i].text

        tasksContainer.appendChild(div)
    }

    return tasksContainer
}

const renderForm = function () {
    const formContainer = document.createElement('div')

    const input = document.createElement('input')
    const button = document.createElement('button')

    button.innerText = 'ADD NEW TASK'

    button.addEventListener(
        'click',
        function () {
            addTask(input.value)
        }
    )

    formContainer.appendChild(input)
    formContainer.appendChild(button)

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

addTask('Wynieś śmieci')
addTask('Umyj okna')

render()