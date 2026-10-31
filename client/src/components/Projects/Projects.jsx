import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

// Details come from the CV and each repo's README and code; tech lists match the repos' package.json
// Screenshots are 1200x517, the same shape as the image box, so they are never cropped
const projects = [
    {
        name: 'Personal Finance Tracker',
        label: 'Finance app · MERN',
        description: 'Add, edit and categorize income and expenses, set budgets that track your spending, and see your balance and income vs. expenses in charts. Uses JWT authentication and Cloudinary for profile pictures.',
        ongoing: true,
        tech: ['React', 'Zustand', 'Recharts', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
        image: 'finance-tracker.jpg',
        liveUrl: 'https://personal-finance-tracker-b479.onrender.com/',
        codeUrl: 'https://github.com/Shenkito/personal-finance-tracker',
    },
    {
        name: 'Whisper',
        label: 'Real-time chat · MERN',
        description: 'Real-time chat app: send, edit and delete messages instantly, search your conversations and see who\'s online. Built with Socket.IO, JWT authentication and Zustand for global state.',
        ongoing: true,
        tech: ['React', 'Socket.IO', 'Zustand', 'TailwindCSS', 'DaisyUI', 'Node.js', 'Express', 'MongoDB'],
        image: 'whisper.jpg',
        liveUrl: 'https://chat-app-react-are6.onrender.com/',
        codeUrl: 'https://github.com/Shenkito/chat-app-react',
    },
    {
        name: 'Portfolio Website',
        label: 'This site',
        description: 'The site you\'re on: a responsive single-page portfolio with smooth section navigation, a certificate viewer and a contact form that sends email through EmailJS. Hosted on Firebase.',
        tech: ['React', 'TailwindCSS', 'Vite', 'EmailJS', 'Firebase'],
        image: 'portfolio.jpg',
        codeUrl: 'https://github.com/Shenkito/web-dev-portfolio-website-react',
    },
];

const cardClass = 'flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-white/20';
const labelClass = 'text-xs uppercase tracking-widest text-gray-500';
const liveButtonClass = 'inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white text-sm px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 hover:from-green-400 hover:to-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400';
const codeButtonClass = 'inline-flex items-center gap-2 border border-gray-500 text-gray-200 text-sm px-4 py-2 rounded-full transform transition duration-300 hover:scale-105 hover:border-green-400 hover:text-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400';

const Projects = () => {
    return (
        <div className="mt-10 grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => {
                // A last card left alone in its row spans the full width, with the screenshot beside the details
                const isWide = projects.length % 2 === 1 && index === projects.length - 1;

                return (
                    <article key={project.name} className={`${cardClass} ${isWide ? 'md:col-span-2 md:flex-row md:gap-8' : ''}`}>
                        {/* Padded frame so the card's rounded corners never clip the screenshot's edges */}
                        <div className={`rounded-xl border border-white/10 bg-white/5 p-2 ${isWide ? 'md:w-1/2 md:flex-none md:self-start' : ''}`}>
                            <img
                                src={`/assets/projects/${project.image}`}
                                alt={`Screenshot of ${project.name}`}
                                loading="lazy"
                                className="aspect-[1200/517] w-full rounded object-cover ring-1 ring-white/10"
                            />
                        </div>

                        <div className={`flex flex-1 flex-col ${isWide ? 'mt-5 md:mt-0' : 'mt-5'}`}>
                            <p className={labelClass}>{project.label}</p>
                            <h3 className="mt-2 text-xl font-semibold text-white">{project.name}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-400">{project.description}</p>
                            {project.ongoing && (
                                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                    I keep improving it and adding new features in my free time.
                                </p>
                            )}

                            <ul className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map(tech => (
                                    <li key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300">
                                        {tech}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-6">
                                <div className="flex flex-wrap gap-3">
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={liveButtonClass}>
                                            <FiExternalLink aria-hidden="true" />
                                            Live demo
                                        </a>
                                    )}
                                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className={codeButtonClass}>
                                        <FaGithub aria-hidden="true" />
                                        Code
                                    </a>
                                </div>
                                {/* The demos are on Render's free plan, which sleeps when idle */}
                                {project.liveUrl && (
                                    <p className="mt-3 text-xs text-gray-500">Free hosting: the first load can take up to a minute.</p>
                                )}
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Projects;
