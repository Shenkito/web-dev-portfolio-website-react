import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiVite, SiMongodb, SiOpenai, SiTailwindcss } from 'react-icons/si';

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
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-4xl" style={{ color: '#38B2AC' }} />, url: 'https://tailwindcss.com/' }
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
                        <span className="mt-2 text-sm text-gray-300 text-center">{tech.name}</span> {/* Added text-center */}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
