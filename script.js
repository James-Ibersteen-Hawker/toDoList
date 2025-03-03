"use strict";
let tasks = [];
get("#addTaskBtn").addEventListener("click", () => {
  let inp = get("#taskInput");
  let value = inp.value;
  inp.value = "";
  if (!value) return;
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
});
get("#clearBtn").addEventListener("click", () => {
  let ul = get("#taskList");
  ul.innerHTML = "";
  tasks = [];
});
function get(param) {
  return document.querySelector(param);
}
