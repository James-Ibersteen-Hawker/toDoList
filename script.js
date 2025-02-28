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
  }_done"> √ </button>  <button class="btn btn-warning btn-sm" id="li_${
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
  li.addEventListener("click", () => {
    let index = li.id.split("_")[1];
    li = get(`#sp_${index}`);
    li.classList.toggle("strike");
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
