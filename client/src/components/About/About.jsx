import React from 'react';

const About = () => {
    return (
        <section id="about" className="flex flex-col items-center justify-start text-gray-300 px-4 py-20">
            <div className="w-full text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">About Me</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl space-y-4 md:space-y-0 md:space-x-10">
                <div className="text-left space-y-4 md:flex-1">
                    <p className="leading-relaxed text-sm md:text-base">
                        My journey in the world of coding began at SoftUni in Sofia, Bulgaria, where I honed my skills in JavaScript, ReactJS, and various web technologies. With a strong foundation in front-end and back-end development, I'm driven by a desire to solve problems and continuously learn.
                    </p>
                    <p className="leading-relaxed text-sm md:text-base">
                        In addition to my technical expertise, I bring excellent communication skills and a positive attitude. I'm excited to bring my diverse background and technical skills to the world of software engineering.
                    </p>
                    <p className="leading-relaxed text-sm md:text-base">
                        When I'm not coding, you can find me enjoying sports and indulging in my love for music. My hobbies keep me balanced and fuel my creativity, allowing me to approach challenges with a fresh and dynamic perspective.
                    </p>
                    <p className="leading-relaxed text-sm md:text-base">
                        Let's connect and build something amazing together!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
