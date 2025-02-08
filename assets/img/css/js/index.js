let tasks = [
  { id: 1, description: "Comprar leche", completed: false },
  { id: 2, description: "Sacar la basura", completed: false },
  { id: 3, description: "Hacer ejercicio", completed: false }
];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach(task => {
      const li = document.createElement("li");
      li.innerHTML = `
          <span class="${task.completed ? 'completed' : ''}">${task.description}</span>
          <button onclick="toggleTask(${task.id})">${task.completed ? "Desmarcar" : "Completar"}</button>
          <button onclick="deleteTask(${task.id})">Eliminar</button>
      `;
      taskList.appendChild(li);
  });
  document.getElementById("totalTasks").innerText = tasks.length;
  document.getElementById("completedTasks").innerText = tasks.filter(task => task.completed).length;
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim() === "") return;
  const newTask = { id: tasks.length + 1, description: taskInput.value, completed: false };
  tasks.push(newTask);
  taskInput.value = "";
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
  renderTasks();
}

renderTasks();