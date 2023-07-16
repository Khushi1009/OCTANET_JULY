function addTask() {
  var taskInput = document.getElementById("taskInput");
  var priorityInput = document.getElementById("priorityInput");
  var todoList = document.getElementById("todoList");
  
  if (taskInput.value === '' || priorityInput.value === '') {
    alert("Please enter a task and its priority!");
    return;
  }

  var priority = parseInt(priorityInput.value);
  if (isNaN(priority) || priority < 1 || priority > 5) {
    alert("Please enter a valid priority level (1-5)!");
    return;
  }

  var listItem = document.createElement("li");
  listItem.innerHTML = taskInput.value + " (Priority: " + priority + ")";
  
  var completeButton = document.createElement("button");
  completeButton.innerHTML = "Complete";
  completeButton.onclick = function() {
    completeTask(listItem);
  };
  
  listItem.appendChild(completeButton);
  todoList.appendChild(listItem);
  
  taskInput.value = '';
  priorityInput.value = '';
}

function completeTask(taskItem) {
  var completedList = document.getElementById("completedList");
  taskItem.classList.add("completed-task");
  
  var incompleteButton = document.createElement("button");
  incompleteButton.innerHTML = "Incomplete";
  incompleteButton.onclick = function() {
    incompleteTask(taskItem);
  };
  
  completedList.appendChild(taskItem);
  taskItem.appendChild(incompleteButton);
}

function incompleteTask(taskItem) {
  var todoList = document.getElementById("todoList");
  taskItem.classList.remove("completed-task");
  
  var completeButton = document.createElement("button");
  completeButton.innerHTML = "Complete";
  completeButton.onclick = function() {
    completeTask(taskItem);
  };
  
  todoList.appendChild(taskItem);
  taskItem.appendChild(completeButton);
}

