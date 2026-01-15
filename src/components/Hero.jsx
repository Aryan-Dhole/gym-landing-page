function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-[#0f0f0f] flex items-center justify-center">

            {/* Background Image Right */}
            <div className="absolute inset-0 flex justify-end">
                <img
                    src="/assets/hero/image1.jpg"
                    alt="gym"
                    className="w-1/2 h-full object-cover hidden md:block opacity-90"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0f0f0f] via-[#0f0f0f] to-black/30 md:to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl w-full mx-auto px-6 flex flex-col items-start justify-center min-h-screen">

                <h2 className="text-[#7CFF4E] uppercase tracking-widest text-sm mb-4">
                    Welcome to FitClub
                </h2>

                <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight max-w-lg">
                    Your Fitness Journey Starts <span className="text-[#7CFF4E]">Here</span>
                </h1>

                <p className="text-gray-300 text-base md:text-lg max-w-md mt-4 font-light">
                    Modern equipment, expert trainers, and a supportive community to push you forward.
                </p>

                <div className="flex gap-4 mt-8">
                    <button className="bg-[#7CFF4E] text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition">
                        Get Started
                    </button>
                    <button className="border border-gray-500 text-white px-6 py-3 rounded-md hover:border-[#7CFF4E] hover:text-[#7CFF4E] transition">
                        View Programs
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Hero;
