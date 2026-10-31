import { useState } from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { FiArrowUpRight, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const links = [
    { name: 'LinkedIn', handle: 'linkedin.com/in/shenkito', url: 'https://www.linkedin.com/in/shenkito', icon: IoLogoLinkedin },
    { name: 'GitHub', handle: 'github.com/shenkito', url: 'https://github.com/shenkito', icon: IoLogoGithub },
];

const emptyForm = { name: '', email: '', message: '' };

const cardClass = 'rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20';
const labelClass = 'text-xs uppercase tracking-widest text-gray-500';
const inputClass = 'mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-gray-200 placeholder-gray-600 transition-colors duration-300 focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-400/30';

const ContactSection = () => {
    const [formData, setFormData] = useState(emptyForm);
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const userId = import.meta.env.VITE_EMAILJS_USER_ID;

        emailjs.send(serviceId, templateId, formData, userId)
            .then(() => {
                setStatus('sent');
                setFormData(emptyForm); // Clear form after successful send
            })
            .catch((err) => {
                setStatus('error');
                console.error('EmailJS error:', err);
            });
    };

    return (
        <div className="flex flex-col items-center text-gray-300 px-4 py-20 md:py-24 w-full">
            <div className="w-full max-w-5xl">
                <p className="text-green-400 text-base md:text-lg">{'// contact'}</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Let&apos;s work together</h2>

                <div className="mt-10 grid gap-4 lg:grid-cols-5">
                    {/* Intro and links */}
                    <div className={`${cardClass} flex flex-col lg:col-span-2`}>
                        <p className={labelClass}>Get in touch</p>
                        <h3 className="mt-4 text-xl font-semibold text-white">Have a role or a project in mind?</h3>
                        <p className="mt-2 leading-relaxed text-gray-400">
                            Send me a message through the form or connect with me on LinkedIn, and I&apos;ll get back to you as soon as I can.
                        </p>
                        <ul className="mt-6 space-y-3 lg:mt-auto lg:pt-6">
                            {links.map(({ name, handle, url, icon: Icon }) => (
                                <li key={name}>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-purple-400/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                                    >
                                        <span className="flex min-w-0 items-center gap-3">
                                            <Icon className="flex-none text-2xl text-gray-300 transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
                                            <span className="min-w-0">
                                                <span className="block text-white">{name}</span>
                                                <span className="block break-all text-xs text-gray-500">{handle}</span>
                                            </span>
                                        </span>
                                        <FiArrowUpRight className="text-lg text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-300" aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Form */}
                    <form className={`${cardClass} space-y-5 lg:col-span-3`} onSubmit={handleSubmit}>
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="contact-name" className={labelClass}>Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className={labelClass}>Email</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="contact-message" className={labelClass}>Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`${inputClass} min-h-[140px] resize-none`}
                                placeholder="Tell me about the role or project..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 hover:from-green-400 hover:to-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 disabled:cursor-wait disabled:opacity-60 disabled:hover:scale-100"
                            >
                                <FiSend aria-hidden="true" />
                                {status === 'sending' ? 'Sending...' : 'Send message'}
                            </button>
                            <p role="status" aria-live="polite" className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                                {status === 'sent' && 'Thanks! Your message has been sent.'}
                                {status === 'error' && 'Something went wrong and your message wasn\'t sent. Please try again, or reach me on LinkedIn.'}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
