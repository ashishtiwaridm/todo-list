let todoList = [
  {
    item: 'Read a Book',
    dueDate: '10/10/2002'
  },
  {
    item: 'Exercise',
    dueDate: '10/10/2002'
  }
];

document.getElementById("todo-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  if (todoItem.trim() !== "") {
    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = '';
    displayItems();
  } else {
    alert("To-Do input cannot be empty.");
  }
});

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" onclick="deleteTodo(${i})">Delete</button>
    `;
  }

  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}

displayItems();
