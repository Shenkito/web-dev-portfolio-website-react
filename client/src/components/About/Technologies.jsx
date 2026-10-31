import Marquee from 'react-fast-marquee';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaDatabase } from 'react-icons/fa';
import {
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiMui,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiVite,
    SiGit,
    SiGithub,
    SiStoryblok,
    SiAzuredevops,
    SiJirasoftware,
    SiFigma,
    SiCrowdin,
    SiPostman
} from 'react-icons/si';
import { TbApi, TbPlugConnected } from 'react-icons/tb';
import { HiSparkles } from 'react-icons/hi';

// Every technical skill from the CV, split into two rows that scroll in opposite directions
const rows = [
    [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
        { name: 'Material UI', icon: SiMui, color: '#007FFF' },
        { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3, color: '#1572B6' },
        { name: 'Node.js', icon: FaNodeJs, color: '#5FA04E' },
        { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Mongoose', icon: SiMongoose, color: '#E05252' },
    ],
    [
        { name: 'NoSQL', icon: FaDatabase, color: '#A78BFA' },
        { name: 'HTTP / REST APIs', icon: TbApi, color: '#A78BFA' },
        { name: 'WebSocket', icon: TbPlugConnected, color: '#A78BFA' },
        { name: 'Storyblok CMS', icon: SiStoryblok, color: '#09B3AF' },
        { name: 'Vite', icon: SiVite, color: '#646CFF' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
        { name: 'Azure DevOps', icon: SiAzuredevops, color: '#0078D7' },
        { name: 'Jira', icon: SiJirasoftware, color: '#2684FF' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Crowdin', icon: SiCrowdin, color: '#FFFFFF' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'AI', icon: HiSparkles, color: '#A78BFA' },
    ],
];

const chipClass = 'mx-1.5 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-purple-400/60 hover:bg-white/10 hover:text-white hover:shadow-[0_0_12px_rgba(168,85,247,0.4)]';

const renderChip = ({ name, icon: Icon, color }) => (
    <span key={name} className={chipClass}>
        <Icon className="text-lg" style={{ color }} />
        {name}
    </span>
);

const Technologies = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Static list instead of the scrolling strip for people who turned off animations
    if (prefersReducedMotion) {
        return (
            <ul className="flex flex-wrap gap-y-3">
                {rows.flat().map(tech => <li key={tech.name}>{renderChip(tech)}</li>)}
            </ul>
        );
    }

    return (
        <>
            {/* The strip repeats items to fill the row, so screen readers get this list instead */}
            <ul className="sr-only">
                {rows.flat().map(({ name }) => <li key={name}>{name}</li>)}
            </ul>
            <div aria-hidden="true" className="-mx-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                {rows.map((row, index) => (
                    <Marquee
                        key={index}
                        direction={index % 2 === 0 ? 'left' : 'right'}
                        speed={35}
                        autoFill
                        pauseOnHover
                        pauseOnClick
                        className="py-3"
                    >
                        {row.map(renderChip)}
                    </Marquee>
                ))}
            </div>
        </>
    );
};

export default Technologies;
