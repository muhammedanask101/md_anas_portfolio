import ProjectForm from "../components/projectForm";

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
                    <button classNmae='btn' onClick={() => navigate('/projects')}>Check Projects</button>    
                </div>
            </section>
            <ProjectForm />
        </>
)
}