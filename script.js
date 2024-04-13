document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.querySelector('.todo-form');
    const todoInput = document.querySelector('.todo-input');
    const todoList = document.querySelector('.todo-list');
  
    todoForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const todoText = todoInput.value.trim(); // Remove whitespace from input
  
      if (todoText !== '') {
        addTodo(todoText); // Add todo to the list
        todoInput.value = ''; // Clear input field after adding todo
      }
    });
  
    function addTodo(todoText) {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');
  
      const todoTextSpan = document.createElement('span');
      todoTextSpan.innerText = todoText;
  
      const removeButton = document.createElement('button');
      removeButton.classList.add('remove-button');
      removeButton.innerHTML = '<i class="fas fa-trash-alt trash-icon"></i>'; // Insert trash icon
      removeButton.addEventListener('click', function() {
        todoItem.remove(); // Remove the todo item when remove button is clicked
      });
  
      todoItem.appendChild(todoTextSpan);
      todoItem.appendChild(removeButton);
  
      todoList.appendChild(todoItem);
    }
  });