import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects, reset, deleteProject } from "../slices/ProjectSlice";
import Project from "./Project";
import FallbackLoading from "./FallbackLoading";

const DeleteList = () => {
    const dispatch = useDispatch();

    const { projects, isLoading, isError, message } = useSelector(state => state.projects);

    useEffect(() => {
        if(isError) {console.log(message)};
        dispatch(getProjects());

    }, [isError, message, dispatch])

    return(
        isLoading ? <FallbackLoading /> : (
                <div>
                    <h1 className="text-2xl mt-7 mb-3 ml-7 font-bold text-shadow-md text-shadow-black text-indigo-400">Projects:</h1>
                    {Array.isArray(projects) && projects.length > 0 ? 
                    (projects.map(project => (
                        <div key={project._id} className="flex items-center justify-center gap-4"> 
                            <Project key={project._id} project={project} /> 
                            <button className="ring-2 ring-red-600 p-2 rounded-md text-red-600 hover:bg-red-600 hover:text-white transition" onClick={() => dispatch(deleteProject(project._id))}>delete</button>
                        </div>
                ))) : (
                        <p>No projects to display yet.</p>
                    )}
                </div>
        )
    )
}

export default DeleteList;