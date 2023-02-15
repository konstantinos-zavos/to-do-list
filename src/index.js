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
