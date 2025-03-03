"use strict";
let tasks = [];
let counter = 0;
get("#addTaskBtn").addEventListener("click", task);
function task() {
  let inp = get("#taskInput");
  let value = inp.value;
  inp.value = "";
  if (!value) return;
  counter++;
  get("#counter").textContent = `Total Tasks: ${counter}`;
  tasks.push(value);
  let ul = get("#taskList");
  let li = `<li class="list-group-item d-flex justify-content-between align-items-center" id="li_${
    tasks.length - 1
  }"><span id="sp_${tasks.length - 1}">${
    tasks[tasks.length - 1]
  }</span><span><button class="btn btn-success btn-sm" id="li_${
    tasks.length - 1
  }_done"> √ </button><button class="btn btn-danger btn-sm d-none" id="li_${
    tasks.length - 1
  }_undone"> X </button>  <button class="btn btn-warning btn-sm" id="li_${
    tasks.length - 1
  }_del">❌</button></span></li>`;
  ul.insertAdjacentHTML("beforeend", li);
  li = get(`#li_${tasks.length - 1}_del`);
  li.addEventListener("click", () => {
    let index = li.id.split("_")[1];
    li = get(`#li_${index}`);
    let listText = li.textContent.split(" ")[0].trim();
    li.remove();
    counter--;
    get("#counter").textContent = `Total Tasks: ${counter}`;
    index = tasks.indexOf(listText);
    tasks.splice(index, 1);
  });
  li = get(`#li_${tasks.length - 1}_done`);
  li.addEventListener("click", (event) => {
    let div =
      event.target.parentElement.parentElement.getElementsByTagName("SPAN")[0];
    div.classList.toggle("strike");
    event.target.classList.toggle("d-none");
    event.target.parentElement
      .getElementsByTagName("BUTTON")[1]
      .classList.toggle("d-none");
  });
  li = get(`#li_${tasks.length - 1}_undone`);
  li.addEventListener("click", (event) => {
    let div =
      event.target.parentElement.parentElement.getElementsByTagName("SPAN")[0];
    div.classList.toggle("strike");
    event.target.classList.toggle("d-none");
    event.target.parentElement
      .getElementsByTagName("BUTTON")[0]
      .classList.toggle("d-none");
  });
}
get("#clearBtn").addEventListener("click", () => {
  counter = 0;
  get("#counter").textContent = `Total Tasks: ${counter}`;
  let ul = get("#taskList");
  ul.innerHTML = "";
  tasks = [];
});
function get(param) {
  return document.querySelector(param);
}
window.addEventListener("keydown", function (event) {
  if (event.key == "Enter") task();
});
