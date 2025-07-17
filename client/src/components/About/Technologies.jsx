import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import {
    SiJavascript,
    SiExpress,
    SiVite,
    SiMongodb,
    SiOpenai,
    SiTailwindcss,
    SiStoryblok,
    SiAzuredevops,
    SiFigma,
    SiJirasoftware,
    SiCrowdin,
    SiPostman
} from 'react-icons/si';

const Technologies = () => {
    const technologies = [
        { name: 'React', icon: <FaReact className="text-4xl" style={{ color: '#61DAFB' }} />, url: 'https://reactjs.org/' },
        { name: 'JavaScript', icon: <SiJavascript className="text-4xl" style={{ color: '#F7DF1E' }} />, url: 'https://www.javascript.com/' },
        { name: 'Express', icon: <SiExpress className="text-4xl" style={{ color: '#000000' }} />, url: 'https://expressjs.com/' },
        { name: 'Node.js', icon: <FaNodeJs className="text-4xl" style={{ color: '#339933' }} />, url: 'https://nodejs.org/' },
        { name: 'HTML5', icon: <FaHtml5 className="text-4xl" style={{ color: '#E34F26' }} />, url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
        { name: 'CSS3', icon: <FaCss3 className="text-4xl" style={{ color: '#1572B6' }} />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'Vite', icon: <SiVite className="text-4xl" style={{ color: '#646CFF' }} />, url: 'https://vitejs.dev/' },
        { name: 'MongoDB', icon: <SiMongodb className="text-4xl" style={{ color: '#47A248' }} />, url: 'https://www.mongodb.com/' },
        { name: 'OpenAI', icon: <SiOpenai className="text-4xl" style={{ color: '#412991' }} />, url: 'https://www.openai.com/' },
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-4xl" style={{ color: '#38B2AC' }} />, url: 'https://tailwindcss.com/' },
        { name: 'Storyblok', icon: <SiStoryblok className="text-4xl" style={{ color: '#0EA5E9' }} />, url: 'https://www.storyblok.com/' },
        { name: 'Azure DevOps', icon: <SiAzuredevops className="text-4xl" style={{ color: '#0078D7' }} />, url: 'https://azure.microsoft.com/en-us/services/devops/' },
        { name: 'Figma', icon: <SiFigma className="text-4xl" style={{ color: '#F24E1E' }} />, url: 'https://www.figma.com/' },
        { name: 'Jira', icon: <SiJirasoftware className="text-4xl" style={{ color: '#0052CC' }} />, url: 'https://www.atlassian.com/software/jira' },
        { name: 'Crowdin', icon: <SiCrowdin className="text-4xl" style={{ color: '#41718C' }} />, url: 'https://crowdin.com/' },
        { name: 'Postman', icon: <SiPostman className="text-4xl" style={{ color: '#FF6C37' }} />, url: 'https://www.postman.com/' }
    ];

    return (
        <div className="p-4 flex flex-col items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {technologies.map((tech, index) => (
                    <a
                        key={index}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-4 hover:bg-gray-800 rounded-lg transition-transform transform hover:scale-110"
                        title={tech.name}
                    >
                        {tech.icon}
                        <span className="mt-2 text-sm text-gray-300 text-center">{tech.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
