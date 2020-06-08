let todoList = {
  todos: [],

  addTodo: function(value) {
    this.todos.push({value: value, completed: false});
  },

  changeTodo: function(position, value) {
    this.todos[position].value = value;
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },

  toggleCompleted: function(position) {
    this.todos[position].completed = !this.todos[position].completed;
  },

  toggleAll() {
    let countCompleted = 0;
    this.todos.forEach(i => {
      if(i.completed) countCompleted++
    })

    this.todos.forEach(i => {
      if(this.todos.length === countCompleted) {
        i.completed = false;
      }else {
        i.completed = true;
      }
    })
  }
};


let handlers = {
  addTodo: function() {
    let todo = document.getElementById("addTodoValueInput");
    todoList.addTodo(todo.value);
    todo.value = "";
    view.displayTodos();
  },

  changeTodo: function() {
    let position = document.getElementById('changeTodoPositionInput');
    let value = document.getElementById('changeTodoValueInput');
    todoList.changeTodo(position.valueAsNumber, value.value);
    position.value = "";
    value.value = "";
    view.displayTodos();
  },

  toggleCompleted: function() {
    let position = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(position.valueAsNumber);
    position.value = "";
    view.displayTodos();
  },

  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },

  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
};


let view = {
  displayTodos() {
    let todosUL = document.querySelector('ul');
    todosUL.innerHTML = "";

    todoList.todos.forEach(function(i, index) {
      let todoLI = document.createElement('li');
      if (i.completed) {
        todoLI.textContent = "(V)" + i.value;
      } else {
        todoLI.textContent = '( )' + i.value;
      }

      todoLI.id = index;
      todoLI.appendChild(this.createDeleteButton());
      todosUL.appendChild(todoLI);
    }, this)
  },

  createDeleteButton: function() {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },

  setUpEventListeners: function() {
    let todoUL = document.querySelector('ul');
    todoUL.addEventListener('click', function(event) {
      let eventTarget = event.target;
      if (eventTarget.className === "deleteButton") {
        handlers.deleteTodo(parseInt(eventTarget.parentNode.id));
      }
    })
  }
};

view.setUpEventListeners();


