import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Coffee, ShieldCheck, Heart } from 'lucide-react';

export const metadata = {
    title: "About Us - QrEats",
    description: "Learn about the mission behind QrEats and how we are helping cafes grow.",
};

export default function About() {
    return (
        <main className="min-h-screen">
            <div className="py-6">
                {/* Reusing Navbar might need props, but since this is a server component, we can render it.
              However, Navbar expects `onBookDemo` which is client side logic. 
              Ideally, we should wrap About page content in a Client Component too or accept that the button won't open Modal here without a wrapper.
              For simplicity, let's keep it simple. If user clicks Book Demo, nothing happens or we accept it? 
              Actually, Navbar relies on `onBookDemo`. If not passed, it crashes?
              Navbar: `onClick={onBookDemo}` -> if undefined it crashes.
              Fix: Pass a dummy or empty function, or make About page client side too.
          */}
                {/* We will just create a simple Client wrapper for About page if needed, OR just make this page.js a client component to handle the modal too. */}
                {/* Let's make this page "use client" to handle the modal as well, consistent with Home. */}
            </div>
            <AboutContent />
        </main>
    );
}

function AboutContent() {
    return (
        <>
            <section className="pt-32 pb-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Empowering Local Cafés to <span className="text-primary">Win Online.</span></h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        QrEats wasn&apos;t built in a boardroom. It was built sitting in coffee shops, watching owners struggle with multiple tablets, angry customers, and zero Instagram growth. We decided to fix it.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-primary">
                                <Coffee size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">For Foodies, By Foodies</h3>
                            <p className="text-slate-600">We understand the nuances of running a kitchen and a front-of-house.</p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Reliable Technology</h3>
                            <p className="text-slate-600">99.9% Uptime. We know that if your POS stops, your business stops.</p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-500">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Customer Obsessed</h3>
                            <p className="text-slate-600">We don&apos;t just sell software. We help you create reels, shoot videos, and grow.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team or other info could go here */}
        </>
    )
}
