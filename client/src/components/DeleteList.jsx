import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects, reset, deleteProject } from "../slices/ProjectSlice";
import Project from "./Project";
import FallbackLoading from "./FallbackLoading";
import { Link } from "react-router-dom";

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
                    <h1 className="text-xl md:text-2xl mt-7 mb-8 ml-2 font-bold text-shadow-md text-shadow-black text-indigo-400">Projects:</h1>
                    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-8 p-4">
                    {Array.isArray(projects) && projects.length > 0 ? 
                    (projects.map(project => (
                        <div key={project._id} className="flex flex-col items-center justify-between space-y-6"> 
                            <Project key={project._id} project={project} /> 
                            <div className="flex space-x-14">
                                <button className="ring-2 ring-red-600 p-1 rounded-md text-red-600 hover:bg-red-600 hover:text-white transition" onClick={() => dispatch(deleteProject(project._id))}>delete</button>
                                <Link to={`/admin/projects/${project._id}/edit`} className="ring-2 ring-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-500 hover:text-white transition">Edit</Link>
                            </div>
                        </div>
                ))) : (
                        <p>No projects to display yet.</p>
                    )}
                    </div>
                </div>
        )
    )
}

export default DeleteList;