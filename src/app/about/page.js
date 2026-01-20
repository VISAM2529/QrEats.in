"use client";
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import AboutContent from "@/components/AboutContent";

export default function AboutPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openBookDemo = () => setIsModalOpen(true);

    return (
        <main className="min-h-screen">
            <Navbar onBookDemo={openBookDemo} />
            <AboutContent />
            <Footer onBookDemo={openBookDemo} />
            <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
