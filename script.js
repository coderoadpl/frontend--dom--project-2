const tasks = []

const addTask = function (newTaskText) {
    const newTask = {
        text: newTaskText,
        timestamp: Date.now(),
    }

    tasks[tasks.length] = newTask
}

addTask('Wynieś śmieci')