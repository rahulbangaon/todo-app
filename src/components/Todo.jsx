import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTaskForm from "./AddTaskForm";
import Header from "./Header";


const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, {
      id: uuidv4(),
      task: newTask,
      completed: false,
      isEditing: false,
    }]);
  };


  return (
    <>
      <Header />
      <AddTaskForm addTask={addTask} />
    </>
  );
};

export default Todo;
