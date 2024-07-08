const NavBar = ({ activeSection, scrollToSection }) => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black py-4 z-10 shadow-lg">
            <div className="container mx-auto flex justify-center space-x-10">
                <a
                    onClick={() => scrollToSection('hero')}
                    className={`cursor-pointer text-lg ${activeSection === 'hero' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition duration-300`}
                >
                    Home
                </a>
                <a
                    onClick={() => scrollToSection('about')}
                    className={`cursor-pointer text-lg ${activeSection === 'about' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition duration-300`}
                >
                    About
                </a>
                <a
                    onClick={() => scrollToSection('projects')}
                    className={`cursor-pointer text-lg ${activeSection === 'projects' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition duration-300`}
                >
                    Projects
                </a>
                <a
                    onClick={() => scrollToSection('contact')}
                    className={`cursor-pointer text-lg ${activeSection === 'contact' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition duration-300`}
                >
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
