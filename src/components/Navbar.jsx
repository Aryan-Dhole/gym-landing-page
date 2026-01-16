import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { label: "HOME", href: "#home" },
        { label: "PROGRAMS", href: "#programs" },
        { label: "TRAINERS", href: "#trainers" },
        { label: "CONTACT", href: "#contact" },
    ];

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-white px-5 py-4">

                {/* Logo */}
                <h1 className="text-xl font-bold">
                    FIT<span className="text-green-500">CLUB</span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="hover:text-green-400 transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Join btn (Desktop) */}
                <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    className="hidden md:block px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-black font-semibold"
                >
                    Join Now
                </a>

                {/* Hamburger (Mobile) */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-black/90 text-white flex flex-col gap-6 px-5 py-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-lg hover:text-green-400 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-black font-semibold text-center"
                    >
                        Join Now
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
