"use strict";
let tasks = [];
get("#addTaskBtn").addEventListener("click", () => {
  let inp = get("#taskInput");
  let value = inp.value;
  inp.value = "";
  if (!value) return;
  tasks.push(value);
  ///////
  let ul = get("#taskList");
  let li = `<li class="list-group-item d-flex justify-content-between align-items-center" id="li_${
    tasks.length - 1
  }">${tasks[tasks.length - 1]}<button class="btn btn-success btn-sm" id="li_${
    tasks.length - 1
  }_del"> √ </button></li>`;
  ul.insertAdjacentHTML("beforeend", li);
  li = get(`#li_${tasks.length - 1}_del`);
  li.addEventListener("click", () => {
    let index = li.id.split("_")[1];
    get(`#li_${index}`).remove();
    console.log(index);
  });
});
get("#clearBtn").addEventListener("click", () => {
  let ul = get("#taskList");
  ul.innerHTML = "";
});
function get(param) {
  return document.querySelector(param);
}
