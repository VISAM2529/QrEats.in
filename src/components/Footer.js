import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer({ onBookDemo }) {
    return (
        <footer className="bg-slate-950 pt-20 pb-10 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main CTA Block */}
                <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden mb-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Ready to Grow Your Café?</h2>
                        <p className="text-white/90 text-lg">Join QrEats today and get your first month completely FREE.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={onBookDemo}
                                className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors"
                            >
                                Start Free Demo
                            </button>
                            <a
                                href="https://wa.me/918080407364"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={20} /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">Q</div>
                            <span className="text-2xl font-bold text-white">QrEats</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            The distinct café growth platform for modern business owners.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-primary cursor-pointer">QR Ordering</li>
                            <li className="hover:text-primary cursor-pointer">POS System</li>
                            <li className="hover:text-primary cursor-pointer">Inventory</li>
                            <li className="hover:text-primary cursor-pointer">Social Media</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-primary cursor-pointer">About Us</Link></li>
                            <li className="hover:text-primary cursor-pointer">Careers</li>
                            <li className="hover:text-primary cursor-pointer">Blog</li>
                            <li><Link href="/contact" className="hover:text-primary cursor-pointer">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                <Instagram size={20} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                <Facebook size={20} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                <Twitter size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <div>&copy; 2026 QrEats Inc. All rights reserved.</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer">Terms of Service</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
