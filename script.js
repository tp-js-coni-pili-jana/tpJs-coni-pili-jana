var task
var newTask
var pendingList


allTask = []

var printTask = function(){
  event.preventDefault()
  pendingList = document.getElementById("pendingList")
  pendingList.innerHTML = ""
  doneList = document.getElementById("doneList")
  doneList.innerHTML = ""
  var informationText = document.getElementsByTagName('p')
  allTask.map(function(assignment, index){
      var taskItem = document.createElement("li")
      taskItem.classList.add("assignment")
      taskItem.innerText = assignment.text
      taskItem.appendChild(createBtn('<i class="fas fa-check"></i>', index ,toggleItem))
      taskItem.appendChild(createBtn('<i class="far fa-trash-alt"></i>', index ,deleteItem))
      if(assignment.pending){
        pendingList.appendChild(taskItem)
        } else {
          doneList.appendChild(taskItem)
        }
  })
 // console.log(pendingList.children.length)
 if (pendingList.children.length > 0){
   informationText.classList.add('displayNone')
 }
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



// designacion de responsabilidades







var createBtn = function(text, itemId, btnFuction){
  var btn = document.createElement('a')
  btn.innerHTML = text
  btn.id = itemId
  btn.href = "#"
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