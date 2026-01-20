import { LayoutGrid, Camera, HardDrive, UserCheck } from 'lucide-react';

export default function WhyQrEats() {
    const reasons = [
        {
            icon: <LayoutGrid size={24} />,
            title: "Built Specially for Cafés",
            desc: "Not for retail, not for grocery. Just needed features for food businesses."
        },
        {
            icon: <Camera size={24} />,
            title: "Software + Marketing",
            desc: "The only platform that gives you a POS AND makes Reel videos for you."
        },
        {
            icon: <HardDrive size={24} />,
            title: "No Expensive Hardware",
            desc: "Works on your existing phone, tablet, or laptop. Save ₹50,000 upfront."
        },
        {
            icon: <UserCheck size={24} />,
            title: "Local Support Team",
            desc: "Stuck? Call us. We are real humans in your city, not bots."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-6">
                        {reasons.map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-purple-600 mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Why Choose <span className="text-primary">QrEats</span>?
                        </h2>
                        <p className="text-lg text-slate-600 mb-6">
                            We know the pain of running a food business. Margins are thin, competition is high, and staff is unreliable.
                        </p>
                        <p className="text-lg text-slate-600">
                            QrEats was designed to fix exactly these 3 things. We help you cut costs with automation and increase sales with viral marketing.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
