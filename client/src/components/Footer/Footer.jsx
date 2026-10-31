import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="px-4 text-gray-400">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 py-8 text-sm">
                <p className="flex items-center gap-3">
                    {/* Same logo as the navbar, without the blinking cursor */}
                    <span className="text-lg font-bold tracking-wider" aria-hidden="true">
                        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">ISH</span>
                        <span className="text-green-400">_</span>
                    </span>
                    <span>© {new Date().getFullYear()} Ivelin Shenkov</span>
                </p>
                <a
                    href="#hero"
                    onClick={scrollToTop}
                    className="group inline-flex items-center gap-2 rounded transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                >
                    Back to top
                    <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
