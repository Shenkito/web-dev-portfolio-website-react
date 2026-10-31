import Technologies from './Technologies';
import Certificates from './Certificates';

const cardClass = 'rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20';
const labelClass = 'text-xs uppercase tracking-widest text-gray-500';

// What I do at IronFX, as listed on the CV
const responsibilities = [
    'Design, develop, and maintain responsive web and mobile applications for 5+ brands, powered by Storyblok CMS, using React, JavaScript, HTML, and CSS.',
    'Actively using TypeScript, Next.js, and Material UI (MUI) in the current project, building hands-on experience with all three alongside my core stack.',
    'Collaborate closely with designers in Figma, QA teams, product managers, and system analysts to deliver pixel-perfect, high-quality user experiences.',
    'Efficiently manage tasks, bugs, and incidents through Jira, working cross-functionally to keep delivery on track.',
    'Run release pipelines using Azure DevOps and support multilingual content translation through Crowdin.',
];

const About = () => {
    return (
        <div className="flex flex-col items-center text-gray-300 px-4 py-20 md:py-24 w-full">
            <div className="w-full max-w-5xl">
                <p className="text-green-400 text-base md:text-lg">{'// about me'}</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Get to know me</h2>

                <div className="mt-10 grid gap-4 lg:grid-cols-5">
                    {/* Bio */}
                    <div className={`${cardClass} lg:col-span-5 space-y-4 text-base md:text-lg leading-relaxed text-gray-400`}>
                        <p>
                            I&apos;m a software developer focused on the <span className="text-white">front-end</span>. I build responsive web and mobile applications, with a strong focus on clean, scalable code and efficient delivery.
                        </p>
                        <p>
                            Thanks to my studies at SoftUni, I also have <span className="text-white">back-end</span> skills with Node.js, Express, MongoDB and REST APIs. I&apos;m a fast learner and always open to picking up new tools.
                        </p>
                    </div>

                    {/* Experience */}
                    <div className={`${cardClass} lg:col-span-3`}>
                        <div className="flex items-center justify-between gap-4">
                            <p className={labelClass}>Experience</p>
                            <p className={`${labelClass} flex items-center gap-2`}>
                                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                                Currently
                            </p>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-white">Software Developer</h3>
                        <p className="mt-1 text-gray-400">IronFX · Nicosia, Cyprus (Remote)</p>
                        <p className="mt-1 text-sm text-green-400">2025 – Present</p>
                        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-gray-400">
                            {responsibilities.map(item => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-purple-400 to-blue-500"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Education */}
                    <div className={`${cardClass} lg:col-span-2 flex flex-col`}>
                        <p className={labelClass}>Education</p>
                        <h3 className="mt-4 text-xl font-semibold text-white">Software University “SoftUni”</h3>
                        <p className="mt-1 text-gray-400">Sofia, Bulgaria</p>
                        <p className="mt-1 text-sm text-gray-500">2022 – 2024</p>
                        <Certificates />
                    </div>

                    {/* Tech stack */}
                    <div className={`${cardClass} lg:col-span-5 overflow-hidden`}>
                        <p className={labelClass}>Tech stack</p>
                        <div className="mt-4">
                            <Technologies />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
