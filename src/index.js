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

function content() {
  const body = document.querySelector("body");
  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content");
  body.appendChild(contentDiv);
}

content();

function nav() {
  const content = document.querySelector("#content");
  const nav = document.createElement("div");
  nav.setAttribute("id", "nav");
  content.appendChild(nav);

  const ul = document.createElement("ul");
  ul.setAttribute("id", "ul");
  nav.appendChild(ul);

  const ulSelect = document.querySelector("#ul");
  const listItemOne = document.createElement("li");
  listItemOne.innerHTML = `<a style="color:red;" href="#">Default project</a>`;
  listItemOne.setAttribute("class", "active");
  ulSelect.appendChild(listItemOne);

  const listItemTwo = document.createElement("li");
  listItemTwo.innerHTML = `<a href="#">Work</a>`;
  ulSelect.appendChild(listItemTwo);

  const listItemThree = document.createElement("li");
  listItemThree.innerHTML = `<a href="#">Personal</a>`;
  ulSelect.appendChild(listItemThree);
}

nav();

// v v v v v This code is not needed

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

const test = document.querySelector("#content");
test.appendChild(component());

// ^ ^ ^ ^ ^ This code is not needed

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

// Push todo to default array
defaultProject.content.push(firstTodo);

console.log(defaultProject.content);
console.log(defaultProject.content[0]);

// If you don't need multiple of something, for example multiple objects for each ToDo,
// then simply create a factorial function which you call whenever you need a new object
// Else, if you need one thing that you will do a task for you, for example create a todo
// then create a module
// Let's test if this hypothesis is correct
