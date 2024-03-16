function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    // Create a new list item with the task text
    var li = document.createElement("li");
    li.textContent = taskInput.value;
  
    // Create a delete button for each task
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      li.remove();
    };
  
    // Append the delete button to the list item
    li.appendChild(deleteButton);
  
    // Append the list item to the task list
    taskList.appendChild(li);
  
    // Clear the input field
    taskInput.value = "";
  }
  