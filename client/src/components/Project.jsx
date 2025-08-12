import { useDispatch } from "react-redux";
import { deleteProject } from "../slices/ProjectSlice";

const Project = ({ project }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>{new Date(project.createdAt).toLocaleString('en-US')}</div>
      <h2>{project.title}</h2>
      <a  href={project.fileurl} target="_blank" rel="noopener noreferrer">Go to Project</a>
      <h2>{project.description}</h2>
      <button onClick={() => {dispatch(deleteProject(project._id))}}>X</button>
    </div>
  )
}

export default Project;
