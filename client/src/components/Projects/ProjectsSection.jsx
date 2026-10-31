import Projects from './Projects';

const ProjectsSection = () => {
    return (
        <div className="flex flex-col items-center text-gray-300 px-4 py-20 md:py-24 w-full">
            <div className="w-full max-w-5xl">
                <p className="text-green-400 text-base md:text-lg">{'// projects'}</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Things I&apos;ve built</h2>
                <Projects />
            </div>
        </div>
    );
};

export default ProjectsSection;
