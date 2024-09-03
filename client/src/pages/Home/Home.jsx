import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About';
import ProjectsSection from '../../components/Projects/ProjectsSection';
import Hero from '../../components/Hero/Hero';
import ContactSection from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div className="flex flex-col space-y-0">
            <NavBar />
            <section id="hero" className="flex flex-col items-center justify-start text-gray-300 px-4 py-20 md:py-24"> {/* Adjusted py-20 for consistency */}
                <Hero />
            </section>
            <section id="about" className="flex flex-col items-center justify-start text-gray-300 px-4 py-20 md:py-24"> {/* Adjusted py-20 for consistency */}
                <About />
            </section>
            <section id="projects" className="flex flex-col items-center justify-start text-gray-300 px-4 py-20 md:py-24"> {/* Adjusted py-20 for consistency */}
                <ProjectsSection />
            </section>
            <section id="contact" className="flex flex-col items-center justify-start text-gray-300 px-4 py-20 md:py-24"> {/* Adjusted py-20 for consistency */}
                <ContactSection />
            </section>
            <Footer />
        </div>
    );
};

export default Home;
