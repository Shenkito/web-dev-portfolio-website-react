import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiVite } from 'react-icons/si';

const Technologies = () => {
    const [marqueePaused, setMarqueePaused] = useState(false);

    const handleIconHover = (isPaused) => {
        setMarqueePaused(isPaused);
    };

    return (
        <section id="about" className="text-white px-4 py-20">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Technologies I'm Familiar With</h2>
                <div className="marquee-container bg-gray-900 rounded-lg p-4 xl:w-3/4 mx-auto">
                    <Marquee gradient={false} speed={60} pauseOnHover={true} paused={marqueePaused}>
                        <div className="icon-item mx-4" onMouseEnter={() => handleIconHover(true)} onMouseLeave={() => handleIconHover(false)}>
                            <FaReact className="text-5xl text-blue-400" />
                        </div>
                        <div className="icon-item mx-4" onMouseEnter={() => handleIconHover(true)} onMouseLeave={() => handleIconHover(false)}>
                            <SiJavascript className="text-5xl text-yellow-400" />
                        </div>
                        <div className="icon-item mx-4" onMouseEnter={() => handleIconHover(true)} onMouseLeave={() => handleIconHover(false)}>
                            <SiExpress className="text-5xl text-green-400" />
                        </div>
                        <div className="icon-item mx-4" onMouseEnter={() => handleIconHover(true)} onMouseLeave={() => handleIconHover(false)}>
                            <FaNodeJs className="text-5xl text-green-400" />
                        </div>
                        <div className="icon-item mx-4" onMouseEnter={() => handleIconHover(true)} onMouseLeave={() => handleIconHover(false)}>
                            <FaHtml5 className="text-5xl text-red-400" />
                        </div>
                        <div className="icon-item mx-4" onMouseEnter={() => handleIconHover(true)} onMouseLeave={() => handleIconHover(false)}>
                            <FaCss3 className="text-5xl text-blue-400" />
                        </div>
                        <div className="icon-item mx-4" onMouseEnter={() => handleIconHover(true)} onMouseLeave={() => handleIconHover(false)}>
                            <SiVite className="text-5xl text-gray-400" />
                        </div>
                        <div className="icon-item mx-4" onMouseEnter={() => handleIconHover(true)} onMouseLeave={() => handleIconHover(false)}>
                            <FaDatabase className="text-5xl text-yellow-400" />
                        </div>
                        {/* Add more icons as needed */}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Technologies;