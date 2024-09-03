import { useState } from 'react';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const userId = import.meta.env.VITE_EMAILJS_USER_ID;

        emailjs.send(serviceId, templateId, formData, userId)
            .then((response) => {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear form after successful send
            })
            .catch((err) => {
                setStatus('Failed to send message. Please try again.');
                console.error('EmailJS error:', err);
            });
    };

    return (
        <section id="contact" className="flex flex-col items-center justify-center text-gray-300 px-4 py-16">
            <div className="text-center max-w-xl space-y-6">
                <div className="w-full text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Contact</h2>
                </div>
                <p className="leading-relaxed text-sm md:text-base mb-6">
                    Feel free to reach out to me through my social media profiles or the contact form below:
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none min-h-[120px]"
                            placeholder="Your Message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 hover:from-green-400 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                    >
                        Send Message
                    </button>
                </form>
                {status && <p className="text-green-400 mt-4">{status}</p>}
                <div className="flex justify-center space-x-4 mt-8">
                    <a
                        href="https://github.com/shenkito"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition duration-300"
                    >
                        <IoLogoGithub className="w-8 h-8" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shenkito"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition duration-300"
                    >
                        <IoLogoLinkedin className="w-8 h-8" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
