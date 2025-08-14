import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects, reset } from "../slices/ProjectSlice";
import Project from "./Project";
import FallbackLoading from "./FallbackLoading";
import { useNavigate } from "react-router-dom";

const ProjectArray = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { projects, isLoading, isError, message } = useSelector(state => state.projects);

    useEffect(() => {
        if(isError) {console.log(message)};
        dispatch(getProjects());
        return () => dispatch(reset());

    }, [navigate, isError, message, dispatch])

    return(
        isLoading ? <FallbackLoading /> : (
            <>
                <section className="grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-4 gap-8 p-4">
                    {Array.isArray(projects) && projects.length > 0 ? 
                    (projects.map(project => <Project key={project._id} project={project} />)) : (
                        <p>No projects to display yet.</p>
                    )}
                </section>
            </>
        )
    )
}

export default ProjectArray;