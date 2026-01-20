import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Hero({ onBookDemo }) {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Blobs - "WOW" factor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute top-40 left-0 -ml-20 w-[600px] h-[600px] bg-orange-100/60 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100/50 shadow-sm animate-fade-in-up">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-sm font-medium text-primary">The #1 Platform for Modern Cafés</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                            Run Your Café. <br />
                            <span className="text-gradient">Grow Your Brand.</span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            QR Ordering, POS, Inventory & Social Media Marketing —
                            <span className="font-semibold text-slate-800"> all in one simple platform. </span>
                            Stop juggling 5 different tools.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button
                                onClick={onBookDemo}
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-hover hover:scale-105 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                            >
                                Book Free Demo <ArrowRight size={20} />
                            </button>
                            <Link
                                href="https://wa.me/918080407364"
                                target="_blank"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-green-600 border border-gray-200 rounded-full font-semibold text-lg hover:bg-green-50 hover:border-green-200 transition-all flex items-center justify-center gap-2 group shadow-sm hover:shadow-md"
                            >
                                <MessageCircle size={20} className="fill-current" /> Chat on WhatsApp
                            </Link>
                        </div>

                        <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-green-500" /> No Credit Card
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-green-500" /> Cancel Anytime
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-green-500" /> 1 Month Free
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Component */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                        {/* Main Dashboard Card mockup */}
                        <div className="relative z-20 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4 transform rotate-[-2deg] hover:rotate-0 transition-all duration-700">
                            {/* Mockup Header */}
                            <div className="h-8 bg-gray-100 rounded-t-lg mb-4 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            {/* Mockup Content Body -> Abstract Representation */}
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-1/3 h-32 bg-orange-50 rounded-xl flex flex-col items-center justify-center p-2 border border-orange-100">
                                        <div className="text-3xl font-bold text-primary mb-1">24</div>
                                        <div className="text-xs text-slate-500">Live Orders</div>
                                    </div>
                                    <div className="w-1/3 h-32 bg-blue-50 rounded-xl flex flex-col items-center justify-center p-2 border border-blue-100">
                                        <div className="text-3xl font-bold text-blue-600 mb-1">₹12k</div>
                                        <div className="text-xs text-slate-500">Today&apos;s Sales</div>
                                    </div>
                                    <div className="w-1/3 h-32 bg-purple-50 rounded-xl flex flex-col items-center justify-center p-2 border border-purple-100">
                                        <div className="text-3xl font-bold text-purple-600 mb-1">5+</div>
                                        <div className="text-xs text-slate-500">Reels Ready</div>
                                    </div>
                                </div>
                                <div className="h-40 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center">
                                    <span className="text-slate-400 font-medium">Live Kitchen View Mockup</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -right-8 top-20 bg-white p-4 rounded-xl shadow-xl shadow-black/5 animate-bounce z-30 border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-white">
                                    📸
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500">New Reel Created</div>
                                    <div className="text-sm font-bold text-slate-800">Ready to Post!</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -left-8 bottom-20 bg-white p-4 rounded-xl shadow-xl shadow-black/5 animate-bounce z-30 delay-700 border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    🥗
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500">New Order</div>
                                    <div className="text-sm font-bold text-slate-800">Table #4 • ₹450</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
