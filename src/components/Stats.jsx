function Stats() {
    const stats = [
        { label: "Active Members", value: "5.3k+" },
        { label: "Certified Trainers", value: "40+" },
        { label: "Programs Offered", value: "25+" },
        { label: "Years Experience", value: "10+" },
    ];

    return (
        <section id="trainers" className="w-full bg-black py-20 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((item, i) => (
                    <div key={i}>
                        <h3 className="text-3xl font-bold text-white">{item.value}</h3>
                        <p className="text-gray-400 mt-2 text-sm">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stats;
