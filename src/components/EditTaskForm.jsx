import { useState } from "react";
const EditTaskForm = ({editTask, updateTask, ...props}) => {

    const [updatedTask, setUpdatedTask] = useState(props.task);

    const handleChange = (e) => {
      setUpdatedTask(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (updateTask) {
        updateTask(props.id,updatedTask);
        
      }
    };

  return (
    <>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            value={updatedTask}
            placeholder="Update Task..."
            onChange={handleChange}
          />
        </form>
        <button className=" btn" type="submit" onClick={handleSubmit}>
          Update
        </button>
      </div>
    </>
  );
}

export default EditTaskForm;