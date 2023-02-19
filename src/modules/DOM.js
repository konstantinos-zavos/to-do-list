import { createTask } from "./tasks";

function sidebarEnabler() {
  const toggle = document.getElementById("burger");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

function createNewTask() {
  const title = prompt("Enter the name of the task:");
  const task = createTask(title);
  return task;
}

export { sidebarEnabler };
