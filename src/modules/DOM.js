import { defaultProject } from "./projects";

function testing() {
  defaultProject.content.forEach((element) => console.log(element.title));
  defaultProject.content.forEach((element) => {
    const tester = document.getElementById("content");
    const sample = document.createElement("div");
    sample.textContent = element.title;
    tester.appendChild(sample);
  });
}

export { testing };
