export default function Testimonials() {
    const data = [
        { name: "Rahul M.", review: "Best trainers I’ve ever worked with!", rating: 5 },
        { name: "Ananya S.", review: "Clean gym, great environment. Love the classes!", rating: 5 },
        { name: "Rohit P.", review: "Gained muscle and confidence. Worth it!", rating: 4 },
    ];

    return (
        <section className="py-20 text-center max-w-6xl mx-auto" id="testimonials">
            <h2 className="text-white text-3xl font-bold mb-10">
                What Our <span className="text-lime-400">Members Say</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 px-6">
                {data.map((item, index) => (
                    <div key={index} className="bg-[#111] border border-gray-700 rounded-xl p-6">
                        <p className="text-yellow-400 mb-2">
                            {"★".repeat(item.rating)}
                        </p>
                        <p className="text-gray-300 italic mb-4">“{item.review}”</p>
                        <p className="text-white font-semibold">— {item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
