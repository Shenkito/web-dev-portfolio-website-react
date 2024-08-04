import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="flex flex-col items-center justify-start text-gray-300 px-4 py-16"> {/* Adjusted py-16 */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl space-y-10 md:space-y-0 md:space-x-10">
                <div className="text-left space-y-4 md:flex-1">
                    <p className="text-green-400 text-base md:text-lg">Hi, my name is</p>
                    <h1 className="text-4xl md:text-5xl font-bold">Ivelin Shenkov</h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-400">
                        A passionate and enthusiastic software engineer and web developer.
                    </h2>
                    <div className="flex justify-start mt-8">
                        <a
                            href="https://drive.google.com/uc?export=download&id=1tZ7miY3CWrZp0uHzzeegZ8DMxqlsRUUs"
                            download="Ivelin_Shenkov_CV.pdf"
                            className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-4 py-2 rounded-full"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="relative mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end">
                    <img
                        src="/assets/profilePic.jpg"
                        alt="Ivelin Shenkov"
                        className="w-60 h-60 rounded-full border-4 border-gray-700"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
