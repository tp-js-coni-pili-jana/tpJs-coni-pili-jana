// esto lo hice tomando como ejemplo el tweet

var task
var newTask
var taskList

allTask = [
  // momentaneo 
  {text:'uno', isInitial:true},
  {text:'dos', isInitial:true}
]

var printTask = function(){
  taskList = document.getElementById("taskList")
  taskList.innerHTML = ""
  doneTaskList = document.getElementById('doneTaskList')
  doneTaskList.innerHTML = ''
  allTask.map(function(assignment, index){
    // crear variable aparte luego
      var taskItem = document.createElement("li")
      taskItem.classList.add("assignment")
      taskItem.innerText = assignment.text
      taskItem.appendChild(createBtn('toggle', index, toggleItem))
      taskItem.appendChild(createBtn('delete', index, deleteItem))
      // 
      if(assignment.pending){
          taskList.appendChild(taskItem)
        } else {
          doneTaskList.appendChild(taskItem)
        }
  })
}

var sendTask = function(){
  task = document.getElementById('commentInput');
  newTask = task.value;

  if(newTask !== ""){
  task.value = "";
  allTask.unshift({
      text:newTask,
      pending:true
  })
  printTask()
  }
}

// asi se creaba el elemento aparte, RECORDAR:

//var createItem = function(text, index){
//  var li = document.createElement('li')
 // li.innerText = text
 // li.appendChild(createBtn('toggle', index, toggleItem))
 // li.appendChild(createBtn('delete', index, deleteItem))
 // return li
//} 

// designacion de responsabilidades

var createBtn = function(text, itemId, btnFuction){
  var btn = document.createElement('button')
  btn.innerText = text
  btn.id = itemId
  btn.onclick = function(){ btnFuction(this) }
  return btn
}

var toggleItem = function(btn){
  allTask[btn.id].pending = !allTask[btn.id].pending
  printTask()
}

var deleteItem = function(btn){
  allTask.splice(btn.id, 1)
  printTask()
}

var enterKeyPress = function(event){
  if( event.code === 'Enter'){ 
      sendTask()
    }  
}