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

function newTaskTest() {
  const title = document.querySelector("#taskTitleInput").value;
  const description = document.querySelector("#taskDescriptionInput").value;
  const dueDate = document.querySelector("#date").value;
  const priority = document.querySelector("#prio-select").value;
  const task = createTask(title, description, dueDate, priority);
  console.log(task);
  defaultProject.content.push(task);
  console.log(defaultProject);
  printLastArray();
  return task;
}
export { createTask, newTaskTest };
