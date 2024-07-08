const ContactSection = () => {
    return (
        <section id="contact" className="flex items-center justify-center text-gray-300 px-4 py-20">
            <div className="text-center max-w-xl space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Contact</h2>
                <p className="leading-relaxed text-sm md:text-base">
                    Feel free to reach out to me through my social media profiles or the contact form below:
                </p>
                <form className="space-y-4">
                    <div>
                        <input
                            type="text"
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Your Message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 text-white hover:from-green-400 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                    >
                        Send Message
                    </button>
                </form>
                <div className="flex justify-center space-x-4 mt-8">
                    <a
                        href="https://github.com/shenkito"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition duration-300"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.05 1.54 1.05.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.02-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 012.5-.34c.85.01 1.71.11 2.5.34 1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.63.7 1.02 1.6 1.02 2.69 0 3.85-2.35 4.68-4.58 4.93.36.31.67.92.67 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shenkito"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition duration-300"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.034-1.846-3.034-1.849 0-2.134 1.444-2.134 2.937v5.666H9.357v-11.5h3.414v1.571h.048c.476-.898 1.636-1.846 3.366-1.846 3.6 0 4.268 2.369 4.268 5.451v6.325zM5.337 8.286a2.065 2.065 0 01-2.062-2.061c0-1.137.925-2.061 2.062-2.061a2.065 2.065 0 012.062 2.061c0 1.137-.925 2.061-2.062 2.061zm1.777 12.166H3.561v-11.5h3.553v11.5zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.225 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
