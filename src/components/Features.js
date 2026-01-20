import { Smartphone, Receipt, Box, BarChart3, Instagram, Video, Type, Palette } from 'lucide-react';

export default function Features() {
    const operations = [
        { icon: <Smartphone size={24} />, title: "QR Ordering System", desc: "Contactless, fast, and error-free ordering." },
        { icon: <Receipt size={24} />, title: "POS & Billing", desc: "Simple billing that works even offline." },
        { icon: <Box size={24} />, title: "Inventory Management", desc: "Auto-deduct stock with every order." },
        { icon: <BarChart3 size={24} />, title: "Reports & Analytics", desc: "Know your bestsellers and peak hours." },
    ];

    const marketing = [
        { icon: <Palette size={24} />, title: "Instagram Posters", desc: "Beautiful designs for your daily stories." },
        { icon: <Video size={24} />, title: "Reels Creation", desc: "Trending audio reels to go viral." },
        { icon: <Type size={24} />, title: "Caption Writing", desc: "Engaging copies that convert." },
        { icon: <Instagram size={24} />, title: "Social Management", desc: "We post, you host." },
    ];

    return (
        <section id="features" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Complete Café Management Platform</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to run smoothly and grow fast.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Operations Column */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Operations</h3>
                        </div>
                        <div className="space-y-8">
                            {operations.map((feat, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="mt-1 text-slate-400 group-hover:text-blue-600 transition-colors">
                                        {feat.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">{feat.title}</h4>
                                        <p className="text-slate-600 text-sm">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Marketing Column */}
                    <div className="bg-slate-900 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
                        {/* Decorative bg */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                                <Video size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Growth & Marketing</h3>
                        </div>
                        <div className="space-y-8 relative z-10">
                            {marketing.map((feat, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="mt-1 text-slate-500 group-hover:text-purple-400 transition-colors">
                                        {feat.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{feat.title}</h4>
                                        <p className="text-slate-400 text-sm">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
