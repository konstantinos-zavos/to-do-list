import { defaultProject } from "./projects";

function testing() {
  defaultProject.content.forEach((element) => console.log(element.title));
  defaultProject.content.forEach((element) => {
    const tester = document.getElementById("taskcontent");
    const sample = document.createElement("div");
    sample.textContent = `Name: ${element.title}`;
    tester.appendChild(sample);
    const sample2 = document.createElement("div");
    sample2.textContent = `Description: ${element.description}`;
    tester.appendChild(sample2);
  });
}

export { testing };
