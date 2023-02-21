const projects = (title) => {
  const content = [];
  return { title, content };
};

const defaultProject = projects("Default project", "0");

export { projects, defaultProject };
