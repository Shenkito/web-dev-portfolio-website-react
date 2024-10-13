import React from 'react';
import Projects from './Projects';

const ProjectsSection = () => {
    return (
        <section id="projects" className="flex flex-col items-center justify-start text-gray-300 px-4 py-16">
            <div className="w-full text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2> {/* Increased heading size on md */}
                <p className="mt-2 text-lg text-gray-400">Here are some of my latest works:</p> {/* Added description */}
            </div>
            <div className="w-full max-w-5xl">
                <Projects />
            </div>
        </section>
    );
};

export default ProjectsSection;
