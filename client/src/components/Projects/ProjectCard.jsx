import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-900 p-6 rounded-xl transition-transform duration-300 transform hover:scale-105 w-full max-w-xs mx-auto flex flex-col">
            <div className="relative w-full h-32 mb-4 overflow-hidden rounded-lg">
                <img
                    src={`https://opengraph.githubassets.com/1/${project.full_name}`}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                />
            </div>
            <h3 className="text-lg font-semibold text-green-400 mb-2 truncate">{project.name}</h3>
            <p className="text-xs text-gray-500 mb-4">Updated: {new Date(project.updated_at).toLocaleDateString()}</p>
            <div className="flex justify-center gap-2 mt-auto flex-wrap">
                <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-gray-500 text-gray-400 px-2 py-1 rounded-full text-xs hover:bg-gray-700 transition-colors"
                >
                    <span className="text-center">Check on GitHub</span>
                </a>
                {project.live_demo_url && (
                    <a
                        href={project.live_demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center border border-green-500 text-green-400 px-2 py-1 rounded-full text-xs hover:bg-green-700 transition-colors"
                    >
                        <span className="text-center">Live Preview</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
