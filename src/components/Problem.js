import { Clock, Users, DollarSign, Frown } from 'lucide-react';

export default function Problem() {
    const problems = [
        {
            icon: <Users size={32} className="text-red-500" />,
            title: "Too Dependent on Staff?",
            description: "Waiters busy? Orders delayed? Customers unhappy? Staff shortages shouldn't kill your business."
        },
        {
            icon: <DollarSign size={32} className="text-red-500" />,
            title: "Billing Mistakes?",
            description: "Manual bills mean calculation errors and pilferage. You lose money without even knowing it."
        },
        {
            icon: <Clock size={32} className="text-red-500" />,
            title: "No Time for Marketing?",
            description: "You know you need Instagram Reels, but who has the time to shoot, edit, and post daily?"
        },
        {
            icon: <Frown size={32} className="text-red-500" />,
            title: "Inventory Chaos?",
            description: "Running out of milk? Food wastage high? Keeping track of stock manually is a nightmare."
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Running a Café is <span className="text-red-500 underline decoration-wavy decoration-red-200">Harder Than It Looks.</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Most café owners are stuck in daily fire-fighting instead of growing their brand. Does this sound like you?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
