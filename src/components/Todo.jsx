import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTaskForm from "./AddTaskForm";
import EditTaskForm from "./EditTaskForm";
import Header from "./Header";
import Task from "./Task.jsx";

const Todo = () => {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      task: "This is demo completed task",
      completed: true,
      isEditing: false,
    },
    {
      id: uuidv4(),
      task: "I'm Demo task, Please Delete Me",
      completed: false,
      isEditing: false,
    },
  ]);

  const addTask = (newTask) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        task: newTask,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const completedToggeler = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id == id ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id == id
          ? { ...task, isEditing: !task.isEditing}
          : task;
      })
    );
  };

  const updateTask = (id,updateTask)=>{
     setTasks(
       tasks.map((task) => {
         return task.id == id ? { ...task, isEditing: !task.isEditing, task: updateTask } : task;
       })
     );
  }

  return (
    <>
        <Header />
        <AddTaskForm addTask={addTask} />
        {tasks.map((task) => {
          return task.isEditing ? (
            <EditTaskForm {...task} key={task.id} editTask={editTask} updateTask={updateTask} />
          ) : (
            <Task
              {...task}
              key={task.id}
              completeToggeler={completedToggeler}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          );
        })}
    </>
  );
};

export default Todo;
