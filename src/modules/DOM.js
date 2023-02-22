import { defaultProject } from "./projects";

function printLastArray() {
  const last = defaultProject.content[defaultProject.content.length - 1];
  console.log(last.title);
  const tester = document.getElementById("taskcontent");
  const sample = document.createElement("div");
  sample.textContent = `Name: ${last.title}`;
  tester.appendChild(sample);
  const sample2 = document.createElement("div");
  sample2.textContent = `Description: ${last.description}`;
  tester.appendChild(sample2);
}

export { printLastArray };
