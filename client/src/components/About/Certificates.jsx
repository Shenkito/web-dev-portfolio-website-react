import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { TbCertificate } from 'react-icons/tb';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';

const folder = '/assets/certificates';

// image: the certificate page cropped for the viewer; original: the full file with the course curriculum
const certificates = [
    { course: 'Programming Basics', title: 'Programming Basics', date: 'November 2022', image: 'programming-basics.jpg', original: 'Programming Basics - November 2022 - Certificate.jpeg', verifyUrl: 'https://softuni.bg/Certificates/Details/152554/6c18fba7' },
    { course: 'Fundamentals with JavaScript', title: 'Programming Fundamentals with JavaScript', date: 'January 2023', image: 'fundamentals-with-javascript.jpg', original: 'Programming Fundamentals with JavaScript - January 2023 - Certificate.jpeg', verifyUrl: 'https://softuni.bg/Certificates/Details/166269/7c46d286' },
    { course: 'JS Advanced', title: 'JS Advanced', date: 'May 2023', image: 'js-advanced.jpg', original: 'JS Advanced - May 2023 - Certificate.jpeg', verifyUrl: 'https://softuni.bg/Certificates/Details/174297/dfbaeebb' },
    { course: 'JS Applications', title: 'JS Applications', date: 'June 2023', image: 'js-applications.jpg', original: 'JS Applications - June 2023 - Certificate.jpeg', verifyUrl: 'https://softuni.bg/Certificates/Details/181841/6c053247' },
    { course: 'JS Back-End', title: 'JS Back-End', date: 'September 2023', image: 'js-back-end.jpg', original: 'JS Back-End - September 2023 - Certificate.jpeg', verifyUrl: 'https://softuni.bg/Certificates/Details/199612/08b2bdb3' },
    { course: 'ReactJS', title: 'ReactJS', date: 'October 2023', image: 'reactjs.jpg', original: 'ReactJS - October 2023 - Certificate.jpeg', verifyUrl: 'https://softuni.bg/Certificates/Details/197908/36166dbe' },
    { course: 'HTML & CSS', title: 'HTML & CSS', date: 'January 2024', image: 'html-css.jpg', original: 'HTML & CSS - January 2024 - Certificate.jpeg', verifyUrl: 'https://softuni.bg/Certificates/Details/205483/d589ea85' },
];

// Keeps the index in range so the viewer loops from the last certificate back to the first
const wrap = (index) => (index + certificates.length) % certificates.length;

// Fanned preview on the "View certificates" button: left, right, then the front card
// The cards only spread on hover from sm up, where there is room for it next to the text
const previews = [
    { index: 4, className: '-rotate-12 -translate-x-3 sm:group-hover:-rotate-[20deg] sm:group-hover:-translate-x-6' },
    { index: 6, className: 'rotate-12 translate-x-3 sm:group-hover:rotate-[20deg] sm:group-hover:translate-x-6' },
    { index: 5, className: 'sm:group-hover:-translate-y-1' },
];

const tagClass = 'flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition-all duration-300 hover:border-purple-400/60 hover:bg-white/10 hover:text-white hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400';
const arrowClass = 'absolute top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 transition-colors duration-300 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400';

const Certificates = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const closeButtonRef = useRef(null);
    const touchStartX = useRef(null);
    const isOpen = activeIndex !== null;
    const active = isOpen ? certificates[activeIndex] : null;

    const close = () => setActiveIndex(null);
    const showPrevious = () => setActiveIndex(index => wrap(index - 1));
    const showNext = () => setActiveIndex(index => wrap(index + 1));

    useEffect(() => {
        if (!isOpen) return;

        const previouslyFocused = document.activeElement;
        closeButtonRef.current?.focus();
        document.body.style.overflow = 'hidden'; // Disable page scrolling behind the viewer

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setActiveIndex(null);
            if (event.key === 'ArrowLeft') setActiveIndex(index => wrap(index - 1));
            if (event.key === 'ArrowRight') setActiveIndex(index => wrap(index + 1));
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
            previouslyFocused?.focus();
        };
    }, [isOpen]);

    // Swipe left or right on phones to switch certificates
    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };
    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStartX.current;
        if (distance < -50) showNext();
        if (distance > 50) showPrevious();
        touchStartX.current = null;
    };

    return (
        <div className="mt-5 flex flex-1 flex-col">
            <ul className="flex flex-wrap gap-2">
                {certificates.map((certificate, index) => (
                    <li key={certificate.course}>
                        <button
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-label={`View ${certificate.title} certificate`}
                            className={tagClass}
                        >
                            <TbCertificate className="text-base text-purple-300" aria-hidden="true" />
                            {certificate.course}
                        </button>
                    </li>
                ))}
            </ul>

            <button
                type="button"
                onClick={() => setActiveIndex(0)}
                className="group mt-auto flex items-center gap-6 rounded-xl pt-8 pl-4 text-left sm:gap-12 sm:pl-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
                <span className="relative h-28 w-20 flex-none">
                    {previews.map(({ index, className }) => (
                        <img
                            key={certificates[index].image}
                            src={`${folder}/${certificates[index].image}`}
                            alt=""
                            loading="lazy"
                            className={`absolute inset-0 h-full w-full rounded-md object-cover shadow-lg ring-1 ring-white/10 transition-transform duration-300 ${className}`}
                        />
                    ))}
                </span>
                <span>
                    <span className="block font-semibold text-white transition-colors duration-300 group-hover:text-purple-300">
                        View certificates →
                    </span>
                    <span className="mt-1 block text-sm text-gray-500">
                        All {certificates.length}, verifiable on softuni.bg
                    </span>
                </span>
            </button>

            {/* Certificate viewer */}
            {isOpen && createPortal(
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${active.title} certificate`}
                    onClick={close}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
                >
                    <div className="flex w-full max-w-3xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
                        <div className="mb-4 flex w-full max-w-xl items-start justify-between gap-4">
                            <div>
                                <p className="font-semibold text-white">{active.title}</p>
                                <p className="text-sm text-gray-400">{active.date} · {activeIndex + 1} / {certificates.length}</p>
                            </div>
                            <button
                                ref={closeButtonRef}
                                type="button"
                                onClick={close}
                                aria-label="Close certificates"
                                className="rounded-full p-2 text-gray-300 transition-colors duration-300 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                            >
                                <IoClose className="text-2xl" />
                            </button>
                        </div>

                        <div className="relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                            <img
                                key={active.image}
                                src={`${folder}/${active.image}`}
                                alt={`${active.title} certificate from SoftUni`}
                                className="max-h-[calc(100dvh-16rem)] w-auto max-w-full rounded-lg shadow-2xl animate-[fadeIn_0.3s_ease-in-out]"
                            />
                            <button type="button" onClick={showPrevious} aria-label="Previous certificate" className={`${arrowClass} left-2 sm:-left-16`}>
                                <IoChevronBack className="text-xl" />
                            </button>
                            <button type="button" onClick={showNext} aria-label="Next certificate" className={`${arrowClass} right-2 sm:-right-16`}>
                                <IoChevronForward className="text-xl" />
                            </button>
                        </div>

                        <div className="mt-4 flex gap-2">
                            {certificates.map((certificate, index) => (
                                <button
                                    key={certificate.image}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Show ${certificate.title} certificate`}
                                    aria-current={index === activeIndex ? 'true' : undefined}
                                    className={`w-10 overflow-hidden rounded ring-2 transition duration-300 ${index === activeIndex ? 'ring-purple-400' : 'ring-transparent opacity-50 hover:opacity-100'}`}
                                >
                                    <img src={`${folder}/${certificate.image}`} alt="" className="block w-full" />
                                </button>
                            ))}
                        </div>

                        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                            <a href={active.verifyUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                                Verify on softuni.bg ↗
                            </a>
                            <a href={encodeURI(`${folder}/${active.original}`)} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:underline">
                                Full certificate with curriculum ↗
                            </a>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default Certificates;
