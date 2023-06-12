function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;
  
    if (taskText !== "") {
      const task = createTaskElement(taskText);
      const todoColumn = document.getElementById("todoColumn");
      todoColumn.appendChild(task);
      taskInput.value = "";
    }
  }
  
  function createTaskElement(taskText) {
    const task = document.createElement("div");
    task.className = "task";
    
    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;
    
    const taskActions = document.createElement("div");
    taskActions.className = "task-actions";
    
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn_remove"
    deleteButton.innerHTML = `X`;
    deleteButton.addEventListener("click", function() {
      task.remove();
    });
    
    const editButton = document.createElement("button");
    editButton.className ="btn_edit"
    editButton.innerHTML = `<i class="fa-solid update fa-pen-to-square" ></i>`;
    editButton.addEventListener("click", function() {
      const newText = prompt("Modifier la tâche :", taskText);
      if (newText !== null) {
        taskTextElement.textContent = newText;
      }
    });
    
    const moveSelect = document.createElement("select");
    const columnIds = ["todoColumn", "doingColumn", "doneColumn"];
    const columnNames = ["A faire", "En cours", "Terminé"];
    for (let i = 0; i < columnIds.length; i++) {
      const option = document.createElement("option");
      option.value = columnIds[i];
      option.text = columnNames[i];
      moveSelect.appendChild(option);
    }
    moveSelect.addEventListener("change", function() {
      const selectedColumnId = moveSelect.value;
      const selectedColumn = document.getElementById(selectedColumnId);
      selectedColumn.appendChild(task);
    });
    
    taskActions.appendChild(deleteButton);
    taskActions.appendChild(editButton);
    taskActions.appendChild(moveSelect);
    
    task.appendChild(taskTextElement);
    task.appendChild(taskActions);
    
    return task;
  }
  