import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About';
import ProjectsSection from '../../components/Projects/ProjectsSection';
import Hero from '../../components/Hero/Hero';
import ContactSection from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'projects', 'contact'];
            let currentSection = '';

            sections.forEach(id => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;
                    if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
                        currentSection = id;
                    }
                }
            });

            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
                console.log(currentSection)
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call on mount to set initial state

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            const offset = -60; // Adjust this offset if necessary
            const elementRect = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementRect + offset,
                behavior: 'smooth',
            });
        }
        setActiveSection(section);
    };

    return (
        <div className="flex flex-col mt-10 space-y-16"> {/* Adjusted space-y-16 */}
            <NavBar activeSection={activeSection} scrollToSection={scrollToSection} />
            <section id="hero" className="flex flex-col items-center justify-start text-gray-300 px-4 py-16"> {/* Adjusted py-16 */}
                <Hero />
            </section>
            <section id="about" className="flex flex-col items-center justify-start text-gray-300 px-4 py-16"> {/* Adjusted py-16 */}
                <About />
            </section>
            <section id="projects" className="flex flex-col items-center justify-start text-gray-300 px-4 py-16"> {/* Adjusted py-16 */}
                <ProjectsSection />
            </section>
            <section id="contact" className="flex flex-col items-center justify-start text-gray-300 px-4 py-16"> {/* Adjusted py-16 */}
                <ContactSection />
            </section>
            <Footer />
        </div>
    );
};

export default Home;
