import ProjectForm from "../components/projectForm";
import DeleteList from "../components/DeleteList";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Admin() {
    const navigate = useNavigate();
    const { admin } = useSelector(state => state.auth);

    useEffect(() => {
        if (!admin) navigate('/adminlogin')
    }, [admin, navigate])

    return (
        <>
            <section className='heading'>
                <h1 className="text-6xl font-bold text-blue-100 mb-10 p-2 mt-2 text-center text-shadow-md text-shadow-black">Welcome {admin && admin.name}</h1>
                <h1 className="text-2xl m-7 font-bold text-shadow-md text-shadow-black text-indigo-400">Create a Project:</h1>
            </section>
            <ProjectForm />
            <DeleteList />
        </>
)
}