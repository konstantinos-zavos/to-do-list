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

// creating new todos <-- curent task
// What is a todo? An object. How do you create an object? with a factory funciton/constructor/class
//
