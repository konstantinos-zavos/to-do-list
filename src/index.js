import "./style.css";
// import { createNewTask } from "./modules/tasks";
import { sidebarEnabler } from "./modules/DOM";

sidebarEnabler();

// const test = createNewTask();
// console.log(test);

// Task factory function
// const createTask = (
//   title,
//   description,
//   dueDate,
//   priority,
//   notes,
//   checklist
// ) => {
//   return {
//     title,
//     description,
//     dueDate,
//     priority,
//     notes,
//     checklist,
//   };
// };

// Default task
// const testTask = createTask(
//   "Morning routine",
//   "Skincare routine, breakfast, make bed",
//   "Every morning 7:00",
//   "P5 (Non-negotiable)",
//   "**notes**",
//   "**checkbox**"
// );

// Project factory function
const projects = (title, count) => {
  const content = [];
  return { title, count, content };
};

// Default project
const defaultProject = projects("Default project", "0");

// Push task to Default project array
defaultProject.content.push(test);

// console logs
// console.table({ testTask });
console.log(defaultProject);
// console.log(defaultProject.content[0]);
