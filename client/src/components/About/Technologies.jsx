import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiVite, SiMongodb, SiOpenai, SiTailwindcss } from 'react-icons/si';

const Technologies = () => {
    const [marqueePaused, setMarqueePaused] = useState(false);

    const handleIconHover = (isPaused) => {
        setMarqueePaused(isPaused);
    };

    const technologies = [
        { name: 'React', icon: <FaReact className="text-5xl" style={{ color: '#61DAFB' }} />, url: 'https://reactjs.org/' },
        { name: 'JavaScript', icon: <SiJavascript className="text-5xl" style={{ color: '#F7DF1E' }} />, url: 'https://www.javascript.com/' },
        { name: 'Express', icon: <SiExpress className="text-5xl" style={{ color: '#000000' }} />, url: 'https://expressjs.com/' },
        { name: 'Node.js', icon: <FaNodeJs className="text-5xl" style={{ color: '#339933' }} />, url: 'https://nodejs.org/' },
        { name: 'HTML5', icon: <FaHtml5 className="text-5xl" style={{ color: '#E34F26' }} />, url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
        { name: 'CSS3', icon: <FaCss3 className="text-5xl" style={{ color: '#1572B6' }} />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'Vite', icon: <SiVite className="text-5xl" style={{ color: '#646CFF' }} />, url: 'https://vitejs.dev/' },
        { name: 'MongoDB', icon: <SiMongodb className="text-5xl" style={{ color: '#47A248' }} />, url: 'https://www.mongodb.com/' },
        { name: 'OpenAI', icon: <SiOpenai className="text-5xl" style={{ color: '#412991' }} />, url: 'https://www.openai.com/' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-5xl" style={{ color: '#38B2AC' }} />, url: 'https://tailwindcss.com/' }
    ];

    return (
        <section id="technologies" className="technologies text-white px-4 py-20 pt-10">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-2xl font-bold text-center text-white mb-10">Technologies I'm Familiar With</h2>
                <div className="marquee-container bg-gray-900 rounded-lg p-6 xl:w-3/4 mx-auto">
                    <Marquee gradient={false} speed={60} pauseOnHover={true} paused={marqueePaused}>
                        <div className="flex space-x-6">
                            {technologies.map((tech, index) => (
                                <a
                                    key={index}
                                    href={tech.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-item"
                                    title={tech.name}
                                    onMouseEnter={() => handleIconHover(true)}
                                    onMouseLeave={() => handleIconHover(false)}
                                >
                                    {tech.icon}
                                </a>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
