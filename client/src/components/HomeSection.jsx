
const Header = () => {
    return (
        <div className="justify-items-start m-2 lg:m-5 space-y-3 md:space-y-4 lg:space-y-6">
            <div className="">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold">Hi, I'm <span className="text-blue-300">Anas</span></h1>
            </div>
            <div className="hidden md:block">
                <p className="font-google-sans md:text-xl lg:text-2xl">I'm a 3rd year Computer Science and Engineering student<br /> 
                passionate about Web development, Cybersecurity, <br />
                AI and Machine learning.</p>
            </div>
            <div className="block md:hidden">
                <p className="font-google-sans text-lg">I'm a 3rd year Computer Science <br />
                 and Engineering student working on <br />
                Web development, Cybersecurity, <br />
                AI and Machine learning.</p>
            </div>
        </div>
)
}

export default Header;