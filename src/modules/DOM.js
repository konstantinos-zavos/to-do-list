import { defaultProject } from "./projects";
import { createNewTask } from "./tasks";
import plus from "../assets/images/add.svg";

const addButtonContainer = document.getElementById("addBtn");
const addButton = document.createElement("img");
addButton.src = plus;
addButton.style = "width:25px; ";
addButtonContainer.appendChild(addButton);
const addText = document.createElement("div");
addText.textContent = "New Task";
addButtonContainer.appendChild(addText);

const button = document.getElementById("addBtn");
button.onclick = createNewTask;

function printLastArray() {
  const last = defaultProject.content[defaultProject.content.length - 1];
  const taskContainer = document.getElementById("taskContainer");
  const singleTask = document.createElement("div");
  singleTask.classList.add("singleTask");
  taskContainer.appendChild(singleTask);
  const taskTitle = document.createElement("div");
  taskTitle.classList.add("taskTitle");
  taskTitle.textContent = `${last.title}`;
  singleTask.appendChild(taskTitle);
  const taskDescription = document.createElement("div");
  taskDescription.classList.add("taskDescription");
  taskDescription.textContent = `Description: ${last.description}`;
  singleTask.appendChild(taskDescription);
}

export { printLastArray };
