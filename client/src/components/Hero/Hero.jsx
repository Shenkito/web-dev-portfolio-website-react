const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center text-gray-300 px-4 py-20 md:py-24 w-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl gap-12">
                <div className="text-center md:text-left space-y-5 md:flex-1 flex flex-col items-center md:items-start">
                    <p className="text-green-400 text-base md:text-lg">Hi, my name is</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Ivelin Shenkov</h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        <span className="whitespace-nowrap">Software Developer</span>{' '}
                        <span aria-hidden="true" className="hidden sm:inline text-gray-500">|</span>{' '}
                        <span className="block sm:inline whitespace-nowrap">Front-End</span>
                    </h2>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                        <a
                            href="#projects"
                            className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 hover:from-green-400 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                        >
                            View Projects
                        </a>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1SK2ub2dwLwuF2XzrsGnYcQezq1hGaNP4"
                            download="Ivelin_Shenkov_CV.pdf"
                            className="border border-gray-500 text-gray-200 px-6 py-2 rounded-full transform transition duration-300 hover:scale-105 hover:border-green-400 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="relative flex-none">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl opacity-30"></div>
                    <img
                        src="/assets/profilePic.jpg"
                        alt="Ivelin Shenkov"
                        className="relative w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full object-cover p-1 bg-gradient-to-r from-purple-400 to-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
