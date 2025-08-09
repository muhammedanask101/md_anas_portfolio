import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../slices/ProjectSlice";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createProject({ text }));
        setText('');
        navigate('/projects');
    }

    return(
        <section>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text">Enter Project</label>
                    <input type="text" id="text" value={text} onChange={e => setText(e.target.value)} />
                </div>
                <div>
                    <button className="btn btn-block" type='submit'>Add Project</button>
                </div>
            </form>
        </section>
    )
}

export default ProjectForm;