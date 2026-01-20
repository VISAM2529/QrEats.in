"use client";
import { useState } from 'react';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Problem from "./Problem";
import Solution from "./Solution";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import WhyQrEats from "./WhyQrEats";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import BookDemoModal from "./BookDemoModal";

export default function LandingPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openBookDemo = () => setIsModalOpen(true);

    return (
        <main className="min-h-screen">
            <Navbar onBookDemo={openBookDemo} />
            <Hero onBookDemo={openBookDemo} />
            <Problem />
            <Solution />
            <Features />
            <HowItWorks />
            <Pricing />
            <WhyQrEats />
            <Testimonials />
            <Footer onBookDemo={openBookDemo} />

            <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
