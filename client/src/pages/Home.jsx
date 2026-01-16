import HomeSection from "../components/HomeSection"
import ProjectArray from '../components/ProjectArray';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return(
        <>
        <HomeSection />
        <section>
            <h1 className="text-3xl md:text-4xl font-bold md:px-5 text-yellow-500 mt-6 p-2 text-shadow-md text-shadow-black">My Projects:</h1>
            <ProjectArray />
        </section>
        <div className="py-3 px-2 md:px-5">
        <h1 className="py-3">Want to give me feedback?</h1>
        <button onClick={() => navigate("/contact")} className="p-3 font-bold rounded bg-yellow-500 text-white">Contact me</button>
        </div>
        </>
)}

export default Home;