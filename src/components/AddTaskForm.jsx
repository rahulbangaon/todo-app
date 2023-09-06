import { useState } from "react";

const AddTaskForm = ({addTask}) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

const handleSubmit = (e)=>{
    e.preventDefault();
    if(newTask){
        addTask(newTask);
        setNewTask("");
    }
}

  return (
    <>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            value={newTask}
            placeholder="Add New Task..."
            onChange={handleChange}
          />
        </form>
        <button className="add-btn btn" type="submit" onClick={handleSubmit}>Add</button>
      </div>
    </>
  );
};

export default AddTaskForm;
