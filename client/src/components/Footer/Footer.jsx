const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6">
            <div className="container mx-auto text-center">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} iShenk Dev. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;