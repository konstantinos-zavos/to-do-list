const projects = (title) => {
  const content = [];
  return { title, content };
};

const defaultProject = projects("Default project", "0");

function createNewProject() {
  const title = document.querySelector("#projectInput").value;
  const project = projects(title);
  console.log(project.title);
  return project;
}

export { projects, defaultProject, createNewProject };
