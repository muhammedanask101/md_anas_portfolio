import ProjectForm from "../components/projectForm";
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
                <h1>Welcome {admin && admin.name}</h1>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <button className='btn' onClick={() => navigate('/projects')}>Check Projects</button>    
                </div>
            </section>
            <ProjectForm />
        </>
)
}