import _ from "lodash";
import "./style.css";
import logo from "./assets/images/logo.svg";
import printMe from "./print.js";

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
  nav.setAttribute("class", "active");
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

const toggle = document.getElementById("burger");
// const nav = document.getElementById('nav');
toggle.addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("active");
});

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
