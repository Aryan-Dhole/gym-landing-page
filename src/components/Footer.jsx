function Footer() {
    return (
        <footer className="bg-black py-10 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 className="text-xl font-bold text-white">
                    FIT<span className="text-[#30D158]">CLUB</span>
                </h2>

                <nav className="flex gap-6 text-gray-400 text-sm">
                    <a href="#home" className="hover:text-white duration-150">Home</a>
                    <a href="#programs" className="hover:text-white duration-150">Programs</a>
                    <a href="#trainers" className="hover:text-white duration-150">Trainers</a>
                    <a href="#contact" className="hover:text-white duration-150">Contact</a>
                </nav>

                <p className="text-gray-500 text-xs">
                    © {new Date().getFullYear()} FITCLUB. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
