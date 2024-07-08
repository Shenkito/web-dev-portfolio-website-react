import React from 'react';
import Projects from './Projects';

const ProjectsSection = () => {
    return (
        <section id="projects" className="flex flex-col items-center justify-start text-gray-300 px-4 py-20">
            <div className="w-full text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl space-y-4 md:space-y-0 md:space-x-10">
                <div className="text-left md:text-center md:flex-1">
                    <Projects />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
