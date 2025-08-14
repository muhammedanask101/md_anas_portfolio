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
                <section className="flex">
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