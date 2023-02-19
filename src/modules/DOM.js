import { createTask } from "./tasks";

function sidebarEnabler() {
  const toggle = document.getElementById("burger");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

export { sidebarEnabler };
