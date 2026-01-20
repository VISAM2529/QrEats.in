import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function ContactContent() {
    return (
        <section className="pt-32 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
                    <p className="text-slate-600">Have questions? Want a custom quote? We are here to help.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Phone & WhatsApp</h4>
                                <p className="text-slate-600">+91 8080 40 7364</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Email</h4>
                                <p className="text-slate-600">support@qreats.in</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Office</h4>
                                <p className="text-slate-600">
                                    QrEats HQ, Tech Park,<br />
                                    Baner, Pune - 411045
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
                                <Instagram size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Instagram</h4>
                                <p className="text-slate-600">@QrEats.Official</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder or Form */}
                    <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Grow?</h3>
                        <p className="text-slate-300 mb-8">
                            Skip the emails. Chat with us directly on WhatsApp for the fastest support.
                        </p>
                        <a
                            href="https://wa.me/918080407364"
                            target="_blank"
                            className="px-8 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
