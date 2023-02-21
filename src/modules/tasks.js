import { defaultProject } from "./projects";

const createTask = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority,
  };
};

function createNewTask() {
  const title = prompt("Enter the name of the task:");
  const description = prompt("(Optional) Description of the task");
  const dueDate = prompt("Due date?");
  const priority = prompt("Priority? (0 to 5)");
  const task = createTask(title, description, dueDate, priority);
  console.log(task);
  defaultProject.content.push(task);
  console.log(defaultProject);
  return task;
}

export { createTask, createNewTask };
