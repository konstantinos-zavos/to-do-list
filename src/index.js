import "./style.css";
import { createNewTask } from "./modules/tasks";
import { testing } from "./modules/DOM";

const button = document.getElementById("test");
button.onclick = createNewTask;

const button2 = document.getElementById("testing");
button2.onclick = testing;
