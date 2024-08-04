import React from 'react';
import Projects from './Projects';

const ProjectsSection = () => {
    return (
        <section id="projects" className="flex flex-col items-center justify-start text-gray-300 px-4 py-16"> {/* Adjusted py-16 */}
            <div className="w-full text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl space-y-10 md:space-y-0 md:space-x-10">
                <div className="text-left md:text-center md:flex-1">
                    <Projects />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
