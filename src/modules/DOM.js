import { defaultProject } from "./projects";
import { createNewTask } from "./tasks";

const button = document.getElementById("test");
button.onclick = createNewTask;

function printLastArray() {
  const last = defaultProject.content[defaultProject.content.length - 1];
  console.log(last.title);
  const tester = document.getElementById("taskcontent");
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("singularTask");
  tester.appendChild(taskContainer);
  const sample = document.createElement("div");
  sample.textContent = `Name: ${last.title}`;
  taskContainer.appendChild(sample);
  const sample2 = document.createElement("div");
  sample2.textContent = `Description: ${last.description}`;
  taskContainer.appendChild(sample2);
}

export { printLastArray };
