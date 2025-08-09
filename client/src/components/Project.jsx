import { useDispatch } from "react-redux";
import { deleteProject } from "../slices/ProjectSlice";

const Project = ({ project }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>{new Date(project.createdAt).toLocaleString('en-US')}</div>
      <h2>{project.text}</h2>
      <button onClick={() => {dispatch(deleteProject(project._id))}}>X</button>
    </div>
  )
}

export default Project;
