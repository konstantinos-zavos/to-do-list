import { createTask } from "./tasks";

function sidebarEnabler() {
  const toggle = document.getElementById("burger");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

function createNewTask() {
  const title = document.getElementById("task_name").textContent;
  const task = createTask(title);
  console.log(task);
  return task;
}

export { sidebarEnabler, createNewTask };


// Ideas for future self :
// Create tasks object creator
// create dummy object for testing purposes 
// push object into an array
// go to dom js, and create a function that reads that array
// per each array object -> create dom