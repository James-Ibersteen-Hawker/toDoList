document.querySelector("#addTaskButton").addEventListener("click", () => {
  let value = get("#taskInput").value;
  if (!value) return;
  else console.log(value);
});

function get(param) {
  return document.querySelector(param);
}
