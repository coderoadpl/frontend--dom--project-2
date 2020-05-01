const tasks = []

const addTask = function (newTaskText) {
    const newTask = {
        text: newTaskText,
        timestamp: Date.now(),
    }

    tasks[tasks.length] = newTask

    render()
}

const render = function (containerSelector = 'body') {
    const container = document.querySelector(containerSelector)

    if (!container) return

    container.innerHTML = ''

    for (let i = 0; i < tasks.length; i++) {
        const div = document.createElement('div')

        div.innerText = tasks[i].text

        container.appendChild(div)
    }
}

addTask('Wynieś śmieci')
addTask('Umyj okna')

render()