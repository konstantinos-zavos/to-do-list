const projects = (title) => {
  const content = [];
  return { title, content };
};

const defaultProject = projects("Default project");

const projectList = () => {
  const content = [];
  return { content };
};

const list = projectList();

function createNewProject() {
  const title = document.querySelector("#projectInput").value;
  const project = projects(title);
  console.log(project.title);
  list.content.push(project);
  console.log(list.content);
  console.log(list);
  return project;
}

list.content.push(defaultProject);

localStorage.setItem("projects", JSON.stringify(list.content));

console.log(defaultProject.content);
console.log(projectList.content);
console.log(list);

export { projects, defaultProject, createNewProject, list };
