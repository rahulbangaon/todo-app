import { BiEdit } from "react-icons/bi";
import { AiFillDelete} from "react-icons/ai";
import { BsCircle, BsFillCheckCircleFill } from "react-icons/bs";




const Task = ({ completeToggeler, deleteTask, editTask, ...props }) => {
  return (
    <>
      <div className="task">
        <div className="task-data">
          {props.completed ? (
            <BsFillCheckCircleFill onClick={() => completeToggeler(props.id)} />
          ) : (
            <BsCircle
              className="circle-icon"
              onClick={() => completeToggeler(props.id)}
            />
          )}
          <p className={`${props.completed ? "completed" : ""}`}>
            {props.task}
          </p>
        </div>
        <div className="button">
          <span>
            <BiEdit className="edit-btn" onClick={() => editTask(props.id)} />
          </span>
          <span>
            <AiFillDelete
              className="delete-btn"
              onClick={() => deleteTask(props.id)}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Task;