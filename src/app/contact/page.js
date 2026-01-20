"use client";
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import ContactContent from "@/components/ContactContent";

export default function ContactPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openBookDemo = () => setIsModalOpen(true);

    return (
        <main className="min-h-screen">
            <Navbar onBookDemo={openBookDemo} />
            <ContactContent />
            <Footer onBookDemo={openBookDemo} />
            <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
