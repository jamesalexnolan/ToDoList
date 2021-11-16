var tasks = [];

var taskTitleElement = document.getElementById("title")
var taskDescriptionElement = document.getElementById("description")
var taskTimeElement = document.getElementById("time")

function addTask() {
    tasks.push({
        title: taskTitleElement.value,
        description: taskDescriptionElement.value,
        time: taskTimeElement.value,
        day: moment(selectedDay)
    })
        taskTitleElement.value = ""
        taskDescriptionElement.value = ""
        taskTimeElement.value =""
}

function getTasks(day) {
    return tasks.filter(task => task.day.isSame(day, "day"))
}