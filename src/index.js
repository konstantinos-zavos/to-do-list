import "./style.css";
import { createNewTask } from "./modules/tasks";

const button = document.getElementById("test");
button.onclick = createNewTask;
