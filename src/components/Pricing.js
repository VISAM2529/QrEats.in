import { Check } from 'lucide-react';

export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "₹3,999",
            period: "/ month",
            desc: "Perfect for small cafés just getting started.",
            features: [
                "QR Ordering System",
                "POS System",
                "Admin Dashboard",
                "Basic Support",
                "Menu Management"
            ],
            cta: "Get Started",
            popular: false,
            color: "border-slate-200"
        },
        {
            name: "Growth",
            price: "₹7,999",
            period: "/ month",
            desc: "The sweet spot for growing brands.",
            features: [
                "Everything in Starter",
                "Inventory Management",
                "8 Social Media Posters / mo",
                "4 Instagram Reels / mo",
                "Reports & Analytics",
                "Priority Support (WhatsApp)"
            ],
            cta: "Choose Growth",
            popular: true,
            color: "border-primary shadow-2xl shadow-primary/10 scale-105 ring-4 ring-primary/5"
        },
        {
            name: "Premium",
            price: "₹14,999",
            period: "/ month",
            desc: "For serious players who want to dominate.",
            features: [
                "Everything in Growth",
                "Weekly Video Shoot",
                "Daily Stories & Posting",
                "Festival & Offer Creatives",
                "Dedicated Account Manager",
                "Custom Setup & Training"
            ],
            cta: "Go Premium",
            popular: false,
            color: "border-purple-200"
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-slate-600">No hidden fees. No hardware costs. Cancel anytime.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, i) => (
                        <div key={i} className={`bg-white rounded-3xl p-8 border relative flex flex-col h-full ${plan.popular ? plan.color : 'border-slate-200 hover:border-slate-300'} transition-all`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                    <span className="text-slate-500 font-medium">{plan.period}</span>
                                </div>
                                <p className="text-slate-500 mt-4 text-sm">{plan.desc}</p>
                            </div>

                            <div className="flex-grow space-y-4 mb-8">
                                {plan.features.map((feat, j) => (
                                    <div key={j} className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/30' : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
