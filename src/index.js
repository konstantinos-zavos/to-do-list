import _ from "lodash";
import "./style.css";
import logo from "./assets/images/logo.svg";
import printMe from "./print.js";

function header() {
  const body = document.querySelector("body");

  const topBar = document.createElement("div");
  topBar.setAttribute("id", "top-bar");
  body.appendChild(topBar);

  const headerLeftItems = document.createElement("div");
  headerLeftItems.setAttribute("class", "header-left-items");
  topBar.appendChild(headerLeftItems);

  const burger = document.createElement("button");
  burger.setAttribute("class", "burger");
  burger.textContent = "burger";
  headerLeftItems.appendChild(burger);

  const home = document.createElement("button");
  home.setAttribute("class", "home");
  home.textContent = "home";
  headerLeftItems.appendChild(home);

  const headerRightItems = document.createElement("div");
  headerRightItems.setAttribute("class", "header-right-items");
  topBar.appendChild(headerRightItems);

  const addItem = document.createElement("button");
  addItem.setAttribute("class", "addItem");
  addItem.textContent = "addItem";
  headerRightItems.appendChild(addItem);

  const notification = document.createElement("button");
  notification.setAttribute("class", "notification");
  notification.textContent = "notification";
  headerRightItems.appendChild(notification);

  const profile = document.createElement("button");
  profile.setAttribute("class", "profile");
  profile.textContent = "profile";
  headerRightItems.appendChild(profile);
}

header();

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = logo;

  element.appendChild(myIcon);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

const todos = (
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist,
  project
) => {
  return { title, description, dueDate, priority, notes, checklist };
};

const firstTodo = todos(
  "Morning routine",
  "Skincare routine, breakfast, make bed",
  "Every morning 7:00",
  "P5 (Non-negotiable)",
  "**notes**",
  "**checkbox**"
);

console.table({ firstTodo });

//  explanation + pseudo-code (You created this app, gz)
//  user opens the app -> generate page including sidebar with projects, today, upcoming)
//  The default page is Project: Default
//  Generate a todo and automatically put it in default list
//  *IF you need one of something, create module. If many, create factorial*
//  Factorial of todos, factorial of projects, create todo (module), create project (module) etc
//  Auto create first project, when you create todo you auto push it to your desired project array

const projects = (title, amount) => {
  const content = [];
  return { title, amount, content };
};

const defaultProject = projects("Default project", "0");

console.table({ defaultProject });
