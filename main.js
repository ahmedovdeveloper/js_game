let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let filterOption = document.querySelector(".ilter-todo");
const sp = document.querySelector(".af");
setInterval(() => {
  let data1 = new Date();
  let hou = data1.getHours() < 10 ? "0" + data1.getHours() : data1.getHours();
  let minu =
    data1.getMinutes() < 10 ? "0" + data1.getMinutes() : data1.getMinutes();
  let sec =
    data1.getSeconds() < 10 ? "0" + data1.getSeconds() : data1.getSeconds();
  sp.textContent = `${hou}:${minu}:${sec}`;
}, 1000);

// document.addEventListener("DOMContentLoaded", getLocalTodos);
todoButton.addEventListener("click", addTodo);
filterOption.addEventListener("change", filterOption);

function addTodo(e) {
  e.preventDefault();
  let data = new Date();
  let house = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
  let minute =
    data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();
  let span = document.createElement("span");
  span.textContent = `${house}:${minute}`;
  span.classList.add("a");
  let div = document.createElement("div");
  let li = document.createElement("li");
  let btn1 = document.createElement("button");
  btn1.innerHTML = `<i class="fas fa-check-circle"></li>`;
  btn1.classList.add("complete-btn");
  let btn2 = document.createElement("button");
  btn2.innerHTML = `<i class="fas fa-trash"></li>`;
  btn2.classList.add("trash-btn");
  div.classList.add("todo");
  li.classList.add("todo-item");
  div.appendChild(li);
  div.appendChild(span);
  div.appendChild(btn1);
  div.appendChild(btn2);
  li.textContent = todoInput.value;
  todoList.appendChild(div);
  
  todoInput.value = "";
  btn1.addEventListener("click", () => {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
      li.style.color = "black";
      div.style.background = "#fff";
    } else {
      li.style.textDecoration = "line-through";
      li.style.color = "white";
      div.style.background = "RGB(249, 201, 16)";
    }
  });
  btn2.addEventListener("click", () => {
    div.remove();
  });
}
