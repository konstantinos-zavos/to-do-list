import "./style.css";

// DOM burger icon event listener
const toggle = document.getElementById("burger");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Task factory function
const createTask = (
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist
) => {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
  };
};

// Default task
const testTask = createTask(
  "Morning routine",
  "Skincare routine, breakfast, make bed",
  "Every morning 7:00",
  "P5 (Non-negotiable)",
  "**notes**",
  "**checkbox**"
);

// Project factory function
const projects = (title, count) => {
  const content = [];
  return { title, count, content };
};

// Default project
const defaultProject = projects("Default project", "0");

// Push task to Default project array
defaultProject.content.push(testTask);

// console logs
console.table({ testTask });
console.log(defaultProject);
console.log(defaultProject.content[0]);
