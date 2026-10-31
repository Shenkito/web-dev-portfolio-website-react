import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About';
import ProjectsSection from '../../components/Projects/ProjectsSection';
import Hero from '../../components/Hero/Hero';
import ContactSection from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div className="flex flex-col space-y-4"> {/* Added spacing between sections */}
            <NavBar />
            <section id="hero" className="min-h-screen flex justify-center items-center"> {/* Grows on short screens instead of overflowing */}
                <Hero />
            </section>
            <section id="about" className="min-h-screen flex justify-center items-center" aria-label="About Me">
                <About />
            </section>
            <section id="projects" className="min-h-screen flex justify-center items-center" aria-label="Projects">
                <ProjectsSection />
            </section>
            <section id="contact" className="min-h-screen flex justify-center items-center" aria-label="Contact">
                <ContactSection />
            </section>
            <Footer />
        </div>
    );
};

export default Home;
