import React from 'react';
import Technologies from './Technologies';

const About = () => {
    return (
        <section id="about" className="flex flex-col items-center justify-start text-gray-300 px-4 py-20 md:py-24"> {/* Consistent padding */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-10"> {/* Adjusted spacing */}
                {/* Left Column */}
                <div className="text-left md:flex-1 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        My journey in the world of coding began at <a href="https://softuni.bg" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">SoftUni</a> in Sofia, Bulgaria, where I honed my skills in JavaScript, ReactJS, and various web technologies. With a strong foundation in front-end and back-end development, I'm driven by a desire to solve problems and continuously learn.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                        In addition to my technical expertise, I bring excellent communication skills and a positive attitude. I'm excited to bring my diverse background and technical skills to the world of software engineering.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                        When I'm not coding, you can find me enjoying sports and indulging in my love for music. My hobbies keep me balanced and fuel my creativity, allowing me to approach challenges with a fresh and dynamic perspective.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-green-400 font-bold">
                        Let's connect and build something amazing together!
                    </p>
                </div>

                {/* Right Column */}
                <div className="relative mt-8 md:mt-0 md:flex-1 flex justify-center md:justify-end"> {/* Adjusted margin */}
                    <div className="text-left md:text-right space-y-4">
                        <h3 className="text-4xl md:text-5xl font-bold text-white">Technologies I'm Familiar With</h3>
                        <Technologies />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
