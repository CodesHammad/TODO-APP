var list = document.getElementById("list");

function addTodo() {
  var todoInput = document.getElementById("todo");
  var todoText = todoInput.value;

  if (todoText === "") {
    alert("Please enter a todo!");
    return;
  }

  list.innerHTML += `
    <li>
      <input type="text" value="${todoText}" disabled />
      <div>
        <button class="edit-btn" onclick="editTodo(event)">Edit</button>
        <button class="delete-btn" onclick="deleteTodo(event)">Delete</button>
      </div>
    </li>
  `;

  todoInput.value = "";
}

function addTodoEnter(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}

function deleteTodo(event) {
  event.target.closest("li").remove();
}

function editTodo(event) {
  var li = event.target.closest("li");
  var input = li.querySelector("input");

  if (event.target.innerText === "Edit") {
    input.disabled = false;
    input.focus();
    event.target.innerText = "Update";
  } else {
    input.disabled = true;
    event.target.innerText = "Edit";
  }
}

function deleteAll() {
  if (confirm("Are you sure you want to delete all todos?")) {
    list.innerHTML = "";
  }
}
