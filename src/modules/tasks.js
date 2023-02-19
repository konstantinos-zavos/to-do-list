const createTask = (title) => {
  return {
    title: title,
  };
};

function createNewTask() {
  const title = prompt("Enter the name of the task:");
  const task = createTask(title);
  return task;
}

export { createTask, createNewTask };
