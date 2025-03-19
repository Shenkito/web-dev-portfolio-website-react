import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const liveDemoProjects = {
        'Shenkito/chat-app-react': 'https://chat-app-react-are6.onrender.com/',
        'Shenkito/personal-finance-tracker': 'https://personal-finance-tracker-b479.onrender.com/',
        // Add more projects as needed
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/shenkito/starred');
                const data = await response.json();

                console.log('Fetched project full_names:', data.map(project => project.full_name));

                const enhancedProjects = data.slice(0, 10).map((project) => ({
                    ...project,
                    live_demo_url: liveDemoProjects[project.full_name] || null,
                }));

                setProjects(enhancedProjects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
