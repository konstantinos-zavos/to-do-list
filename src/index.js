import "./style.css";

const toggle = document.getElementById("burger");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// To-do-list logic
const todos = (title, description, dueDate, priority, notes, checklist) => {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
  };
};

const firstTodo = todos(
  "Morning routine",
  "Skincare routine, breakfast, make bed",
  "Every morning 7:00",
  "P5 (Non-negotiable)",
  "**notes**",
  "**checkbox**"
);

const projects = (title, amount) => {
  const content = [];
  return { title, amount, content };
};

const defaultProject = projects("Default project", "0");

// Push todo to default array
defaultProject.content.push(firstTodo);

// console logs
console.table({ firstTodo });
console.table({ defaultProject });
console.log(defaultProject.content);
console.log(defaultProject.content[0]);
