import { defaultProject } from "./projects";

const createTask = (title) => {
  return {
    title,
  };
};

function createNewTask() {
  const title = prompt("Enter the name of the task:");
  const task = createTask(title);
  console.log(task);
  defaultProject.content.push(task);
  console.log(defaultProject);
  return task;
}

export { createTask, createNewTask };
