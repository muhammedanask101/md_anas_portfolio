import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProject, getProjects } from "../slices/ProjectSlice";

export default function EditProject() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { projects, isLoading } = useSelector(state => state.projects);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        fileurl: ""
    });

    useEffect(() => {
        if (projects.length === 0) {
            dispatch(getProjects());
        } else {
            const project = projects.find(p => p._id === id);
            if (project) {
                setFormData({
                    title: project.title,
                    description: project.description,
                    fileurl: project.fileurl
                });
            }
        }
    }, [projects, dispatch, id]);

    const onChange = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onSubmit = e => {
        e.preventDefault();
        dispatch(updateProject({ id, projectData: formData }));
        navigate("/projects");
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
        <h1 className="text-3xl font-bold text-amber-100 mb-10 p-2 mt-2 text-center text-shadow-md text-shadow-black">Edit Project</h1>
        <section className="flex justify-center p-1">
            <form onSubmit={onSubmit} className="shadow-md shadow-black rounded-lg p-6 w-full max-w-md space-y-4">
                <div className="flex flex-col gap-2 w-full">
                    <div className="block mt-2 text-sm font-medium font-google-sans text-shadow-md text-shadow-black text-amber-100">
                        <label htmlFor="title">Enter the Title:</label>
                    </div>
                    <div>
                        <input className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50" type="text" id="title" name="title" value={formData.title} onChange={onChange} />
                    </div>
                    <div className="block mt-2 text-sm font-medium font-google-sans text-shadow-md text-shadow-black text-amber-100">
                        <label htmlFor="fileurl">Enter the URL:</label>
                    </div>
                    <div>
                        <input className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50" type="url" id="fileurl" name="fileurl" value={formData.fileurl} onChange={onChange} />
                    </div>
                    <div className="block mt-2 text-sm font-medium font-google-sans text-shadow-md text-shadow-black text-amber-100">
                        <label htmlFor="description">Enter the description:</label>
                    </div>
                    <div>
                        <textarea className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50" id="description" name="description" rows="4" value={formData.description} onChange={onChange} />
                    </div>
                </div>
                    <button className="flex w-full justify-center mt-2 bg-sky-600 text-white font-semibold font-google-sans py-2 px-4 rounded-md hover:bg-sky-700 transition duration-200" type='submit'>Edit</button>
            </form>
        </section>
        </>
    );
}
