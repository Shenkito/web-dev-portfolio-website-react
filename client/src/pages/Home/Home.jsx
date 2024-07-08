import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About'
import ProjectsSection from '../../components/Projects/ProjectsSection';
import Hero from '../../components/Hero/Hero';
import ContactSection from '../../components/Contact/Contact';

const Home = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver(handleScroll, options);
        const sections = ['hero', 'about', 'projects', 'contact'];
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        setActiveSection('hero');

        return () => {
            sections.forEach(id => {
                const section = document.getElementById(id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            const offset = -40;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
        setActiveSection(section);
    };

    return (
        <div className="flex flex-col mt-10">
            <NavBar activeSection={activeSection} scrollToSection={scrollToSection} />
            <section id="hero" className="flex flex-col items-center justify-center text-gray-300 px-4 py-20">
                <Hero />
            </section>
            <section id="about" className="flex flex-col items-center justify-center text-gray-300 px-4 py-20">
                <About />
            </section>
            <section id="projects" className="flex flex-col items-center justify-center text-gray-300 px-4 py-20">
                <ProjectsSection />
            </section>
            <section id="contact" className="flex flex-col items-center justify-center text-gray-300 px-4 py-20">
                <ContactSection />
            </section>
        </div>
    );
};

export default Home;
