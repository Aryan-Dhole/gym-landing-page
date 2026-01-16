function Programs() {
    const items = [
        {
            title: "Strength Training",
            desc: "Build muscle and increase power with structured weight programs.",
        },
        {
            title: "Cardio & Conditioning",
            desc: "Improve stamina and burn calories through guided endurance workouts.",
        },
        {
            title: "Personal Training",
            desc: "Work 1-on-1 with certified trainers tailored to your fitness goals.",
        },
        {
            title: "Group Classes",
            desc: "Engage in fun and energetic group sessions for all fitness levels.",
        },
    ];

    return (
        <section id="programs" className="w-full bg-[#0f0f0f] py-24">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
                    Our <span className="text-[#7CFF4E]">Programs</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="border border-white/10 rounded-lg p-6 bg-black/30 hover:border-[#7CFF4E] transition cursor-pointer"
                        >
                            <h3 className="text-white text-xl font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Programs;
