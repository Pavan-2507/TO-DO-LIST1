document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');
    const taskList = document.getElementById('task-list');
  
    taskForm.addEventListener('submit', addTask);
  
    function addTask(e) {
      e.preventDefault();
      
      const taskText = taskInput.value;
      const dueDate = dueDateInput.value;
      const priority = priorityInput.value;
      const category = categoryInput.value;
      
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText} (Due: ${dueDate}, Priority: ${priority}, Category: ${category})</span>
        <div class="task-actions">
          <button onclick="completeTask(this)">Complete</button>
          <button onclick="deleteTask(this)">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
      
      taskInput.value = '';
      dueDateInput.value = '';
    }
  });
  
  function completeTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle('completed');
  }
  
  function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
  }
  