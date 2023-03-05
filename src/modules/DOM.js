import { defaultProject } from "./projects";
import { newTaskTest } from "./tasks";
import plus from "../assets/images/add.svg";
import circle from "../assets/images/circle.svg";
import { isToday, isTomorrow } from "date-fns";
import { createNewProject } from "./projects";
import { list } from "./projects";

// Nav bar

function printProjects() {
  list.content.forEach((element) => console.log(element));
  // for ( of list.content) {
  //   const projectsDiv = document.getElementById("projects");
  //   const testDiv = document.createElement("div");
  //   testDiv.classList.add("project");
  //   testDiv.textContent = element;
  //   projectsDiv.appendChild(testDiv);
  //   console.log(list.content);
  // }
}

// printProjects();

const projectsDiv = document.getElementById("projects");
const firstProject = document.createElement("div");
firstProject.classList.add("defaultProject");
firstProject.textContent = "Default Project";
projectsDiv.appendChild(firstProject);

const newProjectPlus = document.createElement("img");
newProjectPlus.src = plus;
const newProjectText = document.createElement("div");
newProjectText.textContent = "New Project";
const newProject = document.createElement("div");
newProject.id = "newProject";
newProject.onclick = createProjectInput;
projectsDiv.appendChild(newProject);
newProject.appendChild(newProjectPlus);
newProject.appendChild(newProjectText);

function createProjectInput() {
  const createContainer = document.getElementById("projects");
  const contentCreatorContainer = document.createElement("div");
  contentCreatorContainer.id = "newProjectDiv";
  createContainer.appendChild(contentCreatorContainer);
  createContainer.insertBefore(contentCreatorContainer, newProject);

  const createContent = document.createElement("input");
  createContent.id = "projectInput";
  createContent.placeholder = "Project name";
  createContent.contentEditable = "true";
  contentCreatorContainer.appendChild(createContent);

  const inputButton = document.createElement("button");
  inputButton.textContent = "Create";
  inputButton.id = "inputButton";
  inputButton.onclick = createProject;
  contentCreatorContainer.appendChild(inputButton);

  const newProjectButton = document.getElementById("newProject");
  newProjectButton.style.display = "none";
}

function createProject() {
  const title = document.querySelector("#projectInput").value;
  const projectsDiv = document.getElementById("projects");
  const firstProject = document.createElement("div");
  firstProject.classList.add("defaultProject");
  firstProject.textContent = title;
  createNewProject();
  projectsDiv.appendChild(firstProject);
  projectsDiv.insertBefore(firstProject, newProject);

  const newProjectButton = document.getElementById("newProject");
  newProjectButton.style.display = "flex";

  deleteButton();
  printProjects();
}

function deleteButton() {
  const newProjectDiv = document.getElementById("newProjectDiv");
  newProjectDiv.remove();
}

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

// Auto place cursor on task name function
window.onload = function () {
  var divElement = document.getElementById("taskTitleInput");
  divElement.focus();
};

// Priority picker

// Container div for prio and date
const prioAndDate = document.createElement("div");
prioAndDate.classList.add("prioDate");
taskCreator.appendChild(prioAndDate);

// Actual form

const form = document.createElement("form");

const label = document.createElement("label");
label.for = "prio-select";
label.textContent = "Priority:";
form.appendChild(label);

const select = document.createElement("select");
select.id = "prio-select";
select.name = "prio";
form.appendChild(select);

const highOption = document.createElement("option");
highOption.value = "high";
highOption.textContent = "High";
select.appendChild(highOption);

const midOption = document.createElement("option");
midOption.value = "medium";
midOption.textContent = "Medium";
select.appendChild(midOption);

const lowOption = document.createElement("option");
lowOption.value = "low";
lowOption.textContent = "Low";
select.appendChild(lowOption);

prioAndDate.appendChild(form);

const dateForm = document.createElement("div");

const dateLabel = document.createElement("label");
dateLabel.setAttribute("for", "date");
dateLabel.textContent = "Choose a date:";
dateForm.appendChild(dateLabel);

const input = document.createElement("input");
input.setAttribute("type", "date");
input.setAttribute("id", "date");
input.setAttribute("name", "date");
dateForm.appendChild(input);

prioAndDate.appendChild(dateForm);

// Button container (Must always be last)
const brandNewButton = document.createElement("div");
brandNewButton.classList.add("newButton");
brandNewButton.id = "newButton";
taskCreator.appendChild(brandNewButton);
// New button
const newButton = document.createElement("img");
newButton.src = plus;
newButton.id = "plusSign";
newButton.style = "width:25px; ";
brandNewButton.appendChild(newButton);
const newText = document.createElement("div");
newText.textContent = "New Task";
brandNewButton.appendChild(newText);

const createBtnClick = document.getElementById("newButton");
createBtnClick.onclick = newTaskTest;

function clearTaskCreator() {
  document.querySelector("#taskTitleInput").value = "";
  document.querySelector("#taskDescriptionInput").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#prio-select").value = "";
}

// Print last array function

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

  const taskPrio = document.createElement("div");
  taskPrio.classList.add("taskPrio");
  taskPrio.textContent = `Urgency: ${last.priority}`;
  taskContent.appendChild(taskPrio);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const someDate = new Date(last.dueDate);

  if (isToday(someDate)) {
    console.log("Today");
  } else if (isTomorrow(someDate)) {
    console.log("Tomorrow");
  } else {
    console.log("Some other day");
  }

  const dueDate = document.createElement("div");
  dueDate.classList.add("dueDate");
  if (isToday(someDate)) {
    dueDate.textContent = `Due date: Today (${last.dueDate})`;
  } else if (isTomorrow(someDate)) {
    dueDate.textContent = `Due date: Tomorrow (${last.dueDate})`;
  } else {
    dueDate.textContent = `Due date: ${last.dueDate}`;
  }

  taskContent.appendChild(dueDate);

  clearTaskCreator();
}

export { printLastArray };
