var task
var newTask
var pendingList
var doneList


allTask = []

var printTask = function() {
    event.preventDefault()
    pendingList = document.getElementById("pendingList")
    pendingList.innerHTML = ""
    doneList = document.getElementById("doneList")
    doneList.innerHTML = ""
    pendingTaskBox = document.getElementById('pendingText')
    doneTaskBox = document.getElementById('doneText')
    allTask.map(function(assignment, index) {
        var taskItem = document.createElement("li")
        taskItem.classList.add("assignment")
        taskItem.innerText = assignment.text
        taskItem.appendChild(createBtn('<i class="fas fa-check"></i>', index, toggleItem))
        taskItem.appendChild(createBtn('<i class="far fa-trash-alt"></i>', index, deleteItem))
        if (assignment.pending) {
            pendingList.appendChild(taskItem)
        } else {
            doneList.appendChild(taskItem)
        }
    })
    if (pendingList.children.length > 0) {
        pendingTaskBox.classList.add('displayNone')
    } else {
        pendingTaskBox.classList.remove('displayNone')
    }

    if (doneList.children.length > 0) {
        doneTaskBox.classList.add('displayNone')
    } else {
        doneTaskBox.classList.remove('displayNone')
    }
}


var sendTask = function() {
    task = document.getElementById('commentInput');
    newTask = task.value;

    if (newTask !== "") {
        task.value = "";
        allTask.unshift({
            text: newTask,
            pending: true
        })
        printTask()
    }
}


var createBtn = function(text, itemId, btnFuction) {
    var btn = document.createElement('a')
    btn.innerHTML = text
    btn.id = itemId
    btn.href = "#"
    btn.onclick = function() {
        btnFuction(this)
    }
    return btn
}

var toggleItem = function(btn) {
    allTask[btn.id].pending = !allTask[btn.id].pending
    printTask()
}

var deleteItem = function(btn) {
    allTask.splice(btn.id, 1)
    printTask()
}

var enterKeyPress = function(event) {
    if (event.code === 'Enter') {
        sendTask()
    }
}