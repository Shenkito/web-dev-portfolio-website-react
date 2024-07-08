import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-900 p-4 rounded-xl transition duration-300 w-80">
            <div className="overflow-hidden rounded-lg mb-4">
                <img src={`https://opengraph.githubassets.com/1/${project.full_name}`} alt={project.name} className="w-full h-40 object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">{project.name}</h3>
            <p className="text-xs text-gray-500 mb-4">Updated: {new Date(project.updated_at).toLocaleDateString()}</p>
            <div className="flex space-x-2">
                <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-500 text-gray-400 px-4 py-2 rounded-full text-sm"
                >
                    Check on GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
