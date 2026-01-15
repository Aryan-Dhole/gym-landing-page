function Contact() {
    return (
        <section id="contact" className="bg-black py-24 px-6 border-t border-white/10">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Start Your <span className="text-[#30D158]">Transformation</span> Today
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Ask about memberships, trainers, or programs — we’ll get back to you within 24 hours.
                </p>

                <form className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-[#0e0e0e] border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#30D158]"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-[#0e0e0e] border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#30D158]"
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        className="bg-[#0e0e0e] border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#30D158]"
                    />
                </form>

                <textarea
                    placeholder="Message..."
                    rows={4}
                    className="bg-[#0e0e0e] border border-white/10 text-white px-4 py-3 rounded w-full mt-4 max-w-3xl mx-auto block focus:outline-none focus:border-[#30D158]"
                ></textarea>

                <button className="mt-6 bg-[#30D158] hover:bg-[#26b148] text-black font-semibold px-8 py-3 rounded">
                    Send Message
                </button>
            </div>
        </section>
    );
}

export default Contact;
