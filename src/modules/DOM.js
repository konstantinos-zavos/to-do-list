import { defaultProject } from "./projects";
import { createNewTask } from "./tasks";
import { newTaskTest } from "./tasks";
import plus from "../assets/images/add.svg";
import { doc } from "prettier";
import circle from "../assets/images/circle.svg";

// task creation space
const taskContainer = document.getElementById("taskContainer");
const taskCreator = document.createElement("div");
taskCreator.classList.add("taskCreator");
taskContainer.appendChild(taskCreator);

const taskTitleInput = document.createElement("input");
taskTitleInput.setAttribute("id", "taskTitleInput");
taskTitleInput.placeholder = "Task name";
taskTitleInput.contentEditable = "true";
taskCreator.appendChild(taskTitleInput);

const taskDescriptionInput = document.createElement("input");
taskDescriptionInput.setAttribute("id", "taskDescriptionInput");
taskDescriptionInput.placeholder = "Description";
taskCreator.appendChild(taskDescriptionInput);

// New button container
const brandNewButton = document.createElement("div");
brandNewButton.classList.add("newButton");
brandNewButton.id = "newButton";
taskCreator.appendChild(brandNewButton);
// New button
const newButton = document.createElement("img");
newButton.src = plus;
newButton.style = "width:25px; ";
brandNewButton.appendChild(newButton);
const newText = document.createElement("div");
newText.textContent = "New Task";
brandNewButton.appendChild(newText);

const createBtnClick = document.getElementById("newButton");
createBtnClick.onclick = newTaskTest;

// Auto place cursor on task name function
window.onload = function () {
  var divElement = document.getElementById("taskTitleInput");
  divElement.focus();
};

let counter = 0;

function printLastArray() {
  const last = defaultProject.content[defaultProject.content.length - 1];
  const taskContainer = document.getElementById("taskContainer");
  const singleTask = document.createElement("div");
  singleTask.setAttribute("id", "singleTask");
  const taskCounter = "task" + counter;
  singleTask.classList.add(taskCounter);
  counter++;
  taskContainer.appendChild(singleTask);
  taskContainer.insertBefore(singleTask, taskCreator);

  const taskComplete = document.createElement("img");
  taskComplete.classList.add("completionButton");
  taskComplete.setAttribute("id", "completeBtn");
  taskComplete.src = circle;
  taskComplete.addEventListener("click", function () {
    singleTask.classList.add("completed");
  });
  singleTask.appendChild(taskComplete);

  const taskContent = document.createElement("div");
  taskContent.classList.add("taskContent");
  singleTask.appendChild(taskContent);

  const taskTitle = document.createElement("div");
  taskTitle.classList.add("taskTitle");
  taskTitle.textContent = `${last.title}`;
  taskContent.appendChild(taskTitle);

  const taskDescription = document.createElement("div");
  taskDescription.classList.add("taskDescription");
  taskDescription.textContent = `Description: ${last.description}`;
  taskContent.appendChild(taskDescription);
}

export { printLastArray };
