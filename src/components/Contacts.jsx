import { useState } from "react";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            email,
            phone,
            message
        };

        await fetch(`${import.meta.env.VITE_WEBHOOK_URL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        alert("Submitted! We'll contact you shortly.");
    };



    return (
        <section id="contact" className="bg-black py-24 px-6 border-t border-white/10">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Start Your <span className="text-[#30D158]">Transformation</span> Today
                </h2>
                <p className="text-gray-400 mt-4 mb-6 max-w-2xl mx-auto">
                    Ask about memberships, trainers, or programs — we’ll get back to you within 24 hours.
                </p>

                {/* Form */}
                <div className="space-y-4">
                    <div className="space-x-3 space-y-1 flex justify-center items-center">
                        <input
                            className="bg-[#0e0e0e] border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#30D158]"
                            placeholder="Your Name"
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            className="bg-[#0e0e0e] border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#30D158]"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            className="bg-[#0e0e0e] border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#30D158]"
                            placeholder="Phone"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <textarea
                        className="bg-[#0e0e0e] border border-white/10 text-white px-4 py-3 rounded w-full mt-4 max-w-3xl mx-auto block focus:outline-none focus:border-[#30D158]"
                        placeholder="Message..."
                        rows={4}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <button
                        onClick={handleSubmit}
                        className="px-6 py-3 bg-lime-500 text-black font-semibold rounded-lg hover:bg-lime-400 transition"
                    >
                        Send Message
                    </button>

                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 text-center mt-16">
                <h3 className="text-white text-2xl font-bold mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">123 Main Road, Andheri, Mumbai</p>

                <div className="flex justify-center items-center">
                    <iframe
                        className="w-120 h-80 rounded-xl"
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120628.02633086636!2d72.70246589726563!3d19.124064200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d357700753%3A0xbba9346d3615e71b!2sFitness%20Hub!5e0!3m2!1sen!2sin!4v1769180712786!5m2!1sen!2sin">
                    </iframe>
                </div>
            </div>

        </section>
    )
}


