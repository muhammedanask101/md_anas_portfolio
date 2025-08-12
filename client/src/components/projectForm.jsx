import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../slices/ProjectSlice";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
    const [details, setDetails] = useState({ title: '', fileurl: '', description: ''});
    const { title, fileurl, description } = details;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = e => {
        setDetails(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const projectData = { title, fileurl, description };

        try{
        await dispatch(createProject(projectData)).unwrap();
        setDetails({ title: '', fileurl: '', description: ''});
        navigate('/projects');
        } catch (error) {
            console.error("Project creation failed: ", error);
        }
    }

    return(
        <section>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="title">Enter Project Title</label>
                    <input type="text" id="title" name="title" value={title} onChange={onChange} />
                     <label htmlFor="fileurl">Enter URL</label>
                    <input type="text" id="fileurl" name="fileurl" value={fileurl} onChange={onChange} />
                     <label htmlFor="description">Enter Project Description</label>
                    <input type="text" id="description" name="description" value={description} onChange={onChange} />
                </div>
                <div>
                    <button className="btn btn-block" type='submit'>Add Project</button>
                </div>
            </form>
        </section>
    )
}

export default ProjectForm;