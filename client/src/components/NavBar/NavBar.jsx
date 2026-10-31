import { useState, useRef, useEffect } from 'react';

const sections = ['hero', 'about', 'projects', 'contact'];
const links = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);

    const handleMenuToggle = () => setIsMenuOpen(prevState => !prevState);

    const handleLinkClick = (event, section) => {
        event.preventDefault();
        scrollToSection(section);
        setIsMenuOpen(false); // Close menu after navigating
    };

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            const offset = -64; // Height of the nav bar (h-16)
            const elementRect = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementRect + offset,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            const viewportMiddle = window.innerHeight / 2;
            const currentSection = sections.find(id => {
                const section = document.getElementById(id);
                if (!section) return false;
                const rect = section.getBoundingClientRect();
                return rect.top <= viewportMiddle && rect.bottom >= viewportMiddle;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Call on mount to set initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        const handleEscape = (event) => {
            if (event.key === 'Escape') setIsMenuOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen]);

    const renderLink = ({ id, label }, className = '') => (
        <a
            key={id}
            href={`#${id}`}
            onClick={(event) => handleLinkClick(event, id)}
            aria-current={activeSection === id ? 'true' : undefined}
            className={`transition-colors duration-300 ${activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'} ${className}`}
        >
            <span className="relative">
                {label}
                {/* Gradient underline for the active section */}
                <span className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-gradient-to-r from-purple-400 to-blue-500 origin-left transition-transform duration-300 ${activeSection === id ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </span>
        </a>
    );

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 w-full z-30 px-4 border-b transition-all duration-300 ${isMenuOpen ? 'bg-black/90 backdrop-blur-md border-white/10 shadow-lg' : isScrolled ? 'bg-black/70 backdrop-blur-md border-white/10 shadow-lg' : 'bg-transparent border-transparent'}`}
            aria-label="Main"
        >
            <div className="max-w-5xl mx-auto h-16 flex items-center justify-between">
                <a
                    href="#hero"
                    onClick={(event) => handleLinkClick(event, 'hero')}
                    aria-label="ISH - back to top"
                    className="text-2xl font-bold tracking-wider transition-opacity duration-300 hover:opacity-80"
                >
                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">ISH</span>
                    <span className="text-green-400 cursor-blink">_</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map(link => renderLink(link))}
                </div>

                {/* Burger Icon for Mobile */}
                <button
                    type="button"
                    onClick={handleMenuToggle}
                    className="md:hidden -mr-2 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-1 rotate-45' : ''}`}></span>
                    <span className={`block w-6 h-0.5 mt-1.5 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? '-translate-y-1 -rotate-45' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`md:hidden max-w-5xl mx-auto overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
            >
                <div className="flex flex-col items-start gap-1 border-t border-white/10 pt-3 pb-6">
                    {links.map(link => renderLink(link, 'py-2 text-lg'))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
