import { defaultProject } from "./projects";
import { printLastArray } from "./DOM";

const createTask = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority,
  };
};

function createNewTask() {
  const title = prompt("Enter the name of the task:");
  const description = prompt("(Optional) Description of the task");
  const dueDate = prompt("Due date?");
  const priority = prompt("Priority? (0 to 5)");
  const task = createTask(title, description, dueDate, priority);
  console.log(task);
  defaultProject.content.push(task);
  console.log(defaultProject);
  printLastArray();
  return task;
}

function newTaskTest() {
  const title = document.querySelector("#taskTitleInput").value;
  const description = document.querySelector("#taskDescriptionInput").value;
  const dueDate = prompt("Due date?");
  const priority = document.querySelector("#prio-select").value;
  const task = createTask(title, description, dueDate, priority);
  console.log(task);
  defaultProject.content.push(task);
  console.log(defaultProject);
  printLastArray();
  return task;
}
export { createTask, createNewTask, newTaskTest };
