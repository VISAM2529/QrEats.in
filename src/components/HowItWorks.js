import { Scan, MousePointerClick, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            icon: <Scan size={40} className="text-primary" />,
            title: "1. Scan & Order",
            desc: "Customers scan the QR code on the table. No app download needed."
        },
        {
            icon: <MousePointerClick size={40} className="text-blue-500" />,
            title: "2. Kitchen Notified",
            desc: "Order instantly pops up on your POS / Kitchen Display System."
        },
        {
            icon: <TrendingUp size={40} className="text-green-500" />,
            title: "3. Watch You Grow",
            desc: "We collect data and re-target customers with offers & reels."
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
                    <p className="text-lg text-slate-600">Simpler than making a cup of coffee.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-0"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-white rounded-full border border-gray-100 shadow-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-slate-600 max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
