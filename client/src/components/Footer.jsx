import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return(
            <div className="flex justify-between bg-[#1B1B1B] p-4 md:p-6 text-[13px] md:text-[15px] font-bold text-amber-100">
                <div className="font-mplus flex items-center gap-2">
                    <p>Follow me at: </p>
                        <a href="https://github.com/muhammedanask101" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                        <FaGithub size={18} /></a>
                </div>
                <p className="font-google-sans">Made by Muhammed Anas K</p>
            </div>
    )
}

export default Footer;