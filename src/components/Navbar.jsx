function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <h1 className="text-2xl font-bold text-white tracking-wide">
                    FIT<span className="text-[#7CFF4E]">CLUB</span>
                </h1>

                <ul className="hidden md:flex items-center gap-8 text-white text-sm uppercase">
                    <li className="cursor-pointer hover:text-[#7CFF4E] transition">Home</li>
                    <li className="cursor-pointer hover:text-[#7CFF4E] transition">Programs</li>
                    <li className="cursor-pointer hover:text-[#7CFF4E] transition">Trainers</li>
                    <li className="cursor-pointer hover:text-[#7CFF4E] transition">Contact</li>
                </ul>

                <button className="hidden md:inline-block bg-[#7CFF4E] text-black px-4 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition">
                    Join Now
                </button>

                <div className="md:hidden text-white text-2xl cursor-pointer">
                    ☰
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
