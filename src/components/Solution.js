import { Zap, TrendingUp, ShieldCheck, Smile } from 'lucide-react';

export default function Solution() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 gap-16 items-center">

                    <div className="relative mb-12 lg:mb-0">
                        {/* Abstract Visual for Solution */}
                        <div className="bg-gradient-to-br from-primary to-orange-500 rounded-3xl p-1 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-white rounded-[20px] overflow-hidden h-full">
                                <div className="p-8 space-y-6">
                                    <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                                            <TrendingUp size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Revenue Up 35%</h4>
                                            <p className="text-sm text-slate-500">Since using QrEats Marketing</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Order Time: 45s</h4>
                                            <p className="text-sm text-slate-500">Down from 5 minutes</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                                        <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                                            <Smile size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Happy Staff</h4>
                                            <p className="text-sm text-slate-500">Less chaos, more service</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-primary font-semibold text-sm mb-6">
                            Why QrEats?
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            It's Not Just Software.
                            <br />
                            <span className="text-gradient">It's Your Growth Partner.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            QrEats bridges the gap between <span className="font-semibold text-slate-900">daily operations</span> and <span className="font-semibold text-slate-900">modern marketing</span>. We handle the boring stuff so you can focus on the food.
                        </p>

                        <ul className="space-y-6">
                            {[
                                "QR Ordering reduces staff workload by 40%",
                                "Automated Inventory means zero food wastage",
                                "Social Media Marketing brings new faces every day",
                                "Admin Dashboard gives you control from anywhere"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 min-w-[24px]">
                                        <ShieldCheck className="text-green-500" size={24} />
                                    </div>
                                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
