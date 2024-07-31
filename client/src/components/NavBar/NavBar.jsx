import React, { useState, useRef, useEffect } from 'react';

const NavBar = ({ activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerRef = useRef(null);
    const overlayRef = useRef(null);

    const handleMenuToggle = () => setIsMenuOpen(prevState => !prevState);

    const handleLinkClick = (section) => {
        scrollToSection(section);
        setIsMenuOpen(false); // Close menu after navigating
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target) &&
                burgerRef.current && !burgerRef.current.contains(event.target) &&
                overlayRef.current && !overlayRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Enable scrolling
        }
        return () => {
            document.body.style.overflow = ''; // Clean up on unmount
        };
    }, [isMenuOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black py-4 z-30 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                {/* Desktop Menu */}
                <div className="hidden md:flex md:justify-center w-full space-x-10">
                    {['hero', 'about', 'projects', 'contact'].map(section => (
                        <a
                            key={section}
                            onClick={() => handleLinkClick(section)}
                            className={`cursor-pointer text-lg ${activeSection === section ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition duration-300`}
                        >
                            {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </div>

                {/* Burger Icon for Mobile */}
                <div className="md:hidden flex justify-center w-full relative z-40">
                    <button
                        onClick={handleMenuToggle}
                        className="text-white focus:outline-none relative"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        ref={burgerRef}
                    >
                        <div
                            className={`w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}
                        ></div>
                        <div
                            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
                        ></div>
                        <div
                            className={`w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}
                        ></div>
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    ref={overlayRef}
                    className="fixed inset-0 bg-black opacity-50 z-20"
                    onClick={() => setIsMenuOpen(false)}
                    role="presentation" // Ensures the overlay does not get focus
                />
            )}

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                id="mobile-menu"
                className={`md:hidden fixed inset-0 bg-black z-30 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0 pointer-events-none'}`}
            >
                <div className="flex flex-col items-center justify-center h-full">
                    {['hero', 'about', 'projects', 'contact'].map(section => (
                        <a
                            key={section}
                            onClick={() => handleLinkClick(section)}
                            className={`block text-lg ${activeSection === section ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition duration-300 py-2 px-4`}
                        >
                            {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
