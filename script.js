"use strict";
import { bezier } from "./beziers.js";
let tasks = [];
let counter = 0;
get("#addTaskBtn").addEventListener("click", task);
function task() {
  if (!get("#taskInput").value) return;
  let value = get("#taskInput").value;
  get("#taskInput").value = "";
  counter++;
  get("#counter").textContent = `Total Tasks: ${counter}`;
  tasks.push(value);
  get("#taskList").insertAdjacentHTML(
    "beforeend",
    `<li class="list-group-item d-flex justify-content-between align-items-center" id="li_${
      tasks.length - 1
    }"><span id="sp_${tasks.length - 1}">${
      tasks[tasks.length - 1]
    }</span><span><button class="btn btn-success btn-sm" id="li_${
      tasks.length - 1
    }_done"> √ </button><button class="btn btn-danger btn-sm d-none" id="li_${
      tasks.length - 1
    }_undone"> X </button>  <button class="btn btn-warning btn-sm" id="li_${
      tasks.length - 1
    }_del">❌</button></span></li>`
  );
  get(`#li_${tasks.length - 1}_del`).addEventListener("click", (event) => {
    tasks.splice(
      tasks.indexOf(
        event.target.parentElement.parentElement.getElementsByTagName("SPAN")[0]
          .textContent
      ),
      1
    );
    counter--;
    get("#counter").textContent = `Total Tasks: ${counter}`;
    event.target.parentElement.parentElement.remove();
  });
  get(`#li_${tasks.length - 1}_done`).addEventListener("click", (event) => {
    event.target.parentElement.parentElement
      .getElementsByTagName("SPAN")[0]
      .classList.toggle("strike");
    event.target.classList.toggle("d-none");
    event.target.parentElement
      .getElementsByTagName("BUTTON")[1]
      .classList.toggle("d-none");
  });
  get(`#li_${tasks.length - 1}_undone`).addEventListener("click", (event) => {
    event.target.parentElement.parentElement
      .getElementsByTagName("SPAN")[0]
      .classList.toggle("strike");
    event.target.classList.toggle("d-none");
    event.target.parentElement
      .getElementsByTagName("BUTTON")[0]
      .classList.toggle("d-none");
  });
}
get("#clearBtn").addEventListener("click", () => {
  counter = 0;
  get("#counter").textContent = `Total Tasks: ${counter}`;
  get("#taskList").innerHTML = "";
  tasks = [];
});
function get(param) {
  return document.querySelector(param);
}
window.addEventListener("keydown", function (event) {
  if (event.key == "Enter") task();
});
