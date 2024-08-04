import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About';
import ProjectsSection from '../../components/Projects/ProjectsSection';
import Hero from '../../components/Hero/Hero';
import ContactSection from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div className="flex flex-col mt-10 space-y-16"> {/* Adjusted space-y-16 */}
            <NavBar />
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
