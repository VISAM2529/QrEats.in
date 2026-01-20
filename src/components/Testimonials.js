import { Star } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        {
            name: "Rahul Sharma",
            cafe: "Café Mocha, Pune",
            text: "Our orders increased by 35% in just one month. The best part is the Instagram support - my café looks premium online now!",
            rating: 5
        },
        {
            name: "Priya Desai",
            cafe: "The Daily Bean, Mumbai",
            text: "Billing is so fast now. Customers love scanning the QR code, and I love that I didn't have to buy expensive machines.",
            rating: 5
        },
        {
            name: "Arjun Singh",
            cafe: "Chai Point Filter, Bangalore",
            text: "Inventory was a big headache for me. Now QrEats tracks every cup of milk. The daily reports are a lifesaver.",
            rating: 4
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Loved by Café Owners</h2>
                    <p className="text-lg text-slate-400">Join 500+ happy cafés growing with QrEats.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((rev, i) => (
                        <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
                            {/* Quote Icon */}
                            <div className="absolute top-4 right-8 text-6xl text-slate-700 font-serif opacity-30">&quot;</div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, r) => (
                                    <Star key={r} size={16} className={`${r < rev.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
                                ))}
                            </div>
                            <p className="text-slate-300 italic mb-6">&quot;{rev.text}&quot;</p>
                            <div>
                                <h4 className="font-bold text-white">{rev.name}</h4>
                                <p className="text-sm text-primary">{rev.cafe}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
