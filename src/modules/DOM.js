import { defaultProject } from "./projects";
import { createNewTask } from "./tasks";
import { newTaskTest } from "./tasks";
import plus from "../assets/images/add.svg";
import { doc } from "prettier";

// button div
const addButtonContainer = document.getElementById("addBtn");
const addButton = document.createElement("img");
addButton.src = plus;
addButton.style = "width:25px; ";
addButtonContainer.appendChild(addButton);
const addText = document.createElement("div");
addText.textContent = "New Task";
addButtonContainer.appendChild(addText);

// button event handler
const button = document.getElementById("addBtn");
button.onclick = createNewTask;

// task creation space
// **note: I supposed first it would hide the new task button in order for the task creation to take it's place
//  and in the end re-show it at the bottom**
const taskContainer = document.getElementById("taskContainer");
const taskTitleInput = document.createElement("input");
taskTitleInput.setAttribute("id", "taskTitleInput");
taskTitleInput.placeholder = "Title: Type your task's name here";
taskContainer.appendChild(taskTitleInput);
const taskDescriptionInput = document.createElement("input");
taskDescriptionInput.setAttribute("id", "taskDescriptionInput");
taskDescriptionInput.placeholder =
  "Description: Type your task's description here";
taskContainer.appendChild(taskDescriptionInput);
const createBtn = document.createElement("button");
createBtn.textContent = "Click me love";
createBtn.setAttribute("id", "createBtn");
taskContainer.appendChild(createBtn);
const createBtnClick = document.getElementById("createBtn");
createBtnClick.onclick = newTaskTest;

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
