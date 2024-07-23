import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isScrolledLeft, setIsScrolledLeft] = useState(false);
    const [isScrolledRight, setIsScrolledRight] = useState(true);
    const carouselRef = useRef(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/shenkito/starred');
                const data = await response.json();
                setProjects(data.slice(0, 10));

                setTimeout(() => {
                    handleScroll();
                }, 100);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const handleScroll = () => {
        const carousel = carouselRef.current;
        if (carousel) {
            setIsScrolledLeft(carousel.scrollLeft > 0);
            setIsScrolledRight(carousel.scrollWidth > carousel.clientWidth + carousel.scrollLeft);
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        return () => {
            if (carousel) {
                carousel.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const scrollCarousel = (direction) => {
        const scrollAmount = carouselRef.current.clientWidth / 2;
        if (direction === 'left') {
            carouselRef.current.scrollLeft -= scrollAmount;
        } else {
            carouselRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto">
            <button
                className={`absolute left-0 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full ${isScrolledLeft ? '' : 'opacity-0 pointer-events-none'}`}
                onClick={() => scrollCarousel('left')}
                style={{ top: '50%', transform: 'translateY(-50%)', marginLeft: '-65px' }}
            >
                <FaChevronLeft className="text-gray-400 hover:text-green-400 transition duration-300" size={32} />
            </button>
            <div ref={carouselRef} className="carousel flex overflow-x-auto space-x-4">
                {projects.map((project) => (
                    <div key={project.id} className="flex-shrink-0 w-80">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
            <button
                className={`absolute right-0 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full ${isScrolledRight ? '' : 'opacity-0 pointer-events-none'}`}
                onClick={() => scrollCarousel('right')}
                style={{ top: '50%', transform: 'translateY(-50%)', marginRight: '-65px' }}
            >
                <FaChevronRight className="text-gray-400 hover:text-green-400 transition duration-300" size={32} />
            </button>
        </div>
    );
};

export default Projects;
