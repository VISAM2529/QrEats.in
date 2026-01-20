"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onBookDemo }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center shadow-lg shadow-primary/30">
                            <span className="text-white font-bold text-xl">Q</span>
                        </div>
                        <span className="text-2xl font-bold text-slate-900 tracking-tight">Qr<span className="text-primary">Eats</span></span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-slate-600 hover:text-primary font-medium transition-colors">Home</Link>
                        <Link href="/about" className="text-slate-600 hover:text-primary font-medium transition-colors">About Us</Link>
                        <Link href="/contact" className="text-slate-600 hover:text-primary font-medium transition-colors">Contact</Link>
                        {['Features', 'Pricing'].map((item) => (
                            <Link key={item} href={`/#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-slate-600 hover:text-primary font-medium transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* <button className="text-slate-900 font-medium hover:text-primary transition-colors">Login</button> */}
                        <button
                            onClick={onBookDemo}
                            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Book Free Demo
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-primary">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700 hover:text-primary block px-2 py-2">Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700 hover:text-primary block px-2 py-2">About Us</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700 hover:text-primary block px-2 py-2">Contact</Link>
                    {['Features', 'Pricing'].map((item) => (
                        <Link
                            key={item}
                            href={`/#${item.toLowerCase().replace(/\s/g, '-')}`}
                            className="text-lg font-medium text-slate-700 hover:text-primary block px-2 py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col gap-3">
                        {/* <button className="w-full py-3 text-slate-900 font-medium border border-gray-200 rounded-lg hover:bg-gray-50">Login</button> */}
                        <button
                            onClick={() => { setIsOpen(false); onBookDemo(); }}
                            className="w-full py-3 bg-primary text-white font-medium rounded-lg shadow-lg shadow-primary/30 hover:bg-primary-hover"
                        >
                            Book Free Demo
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
