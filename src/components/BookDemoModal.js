"use client";
import { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';

export default function BookDemoModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        cafeName: '',
        phone: '',
        city: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                // Optional: Close after 2 seconds
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setFormData({ name: '', cafeName: '', phone: '', city: '' });
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                    <h3 className="text-2xl font-bold mb-1">Get Your Free Demo</h3>
                    <p className="text-slate-300 text-sm">Fill details & our team will call you.</p>
                </div>

                {/* Form Body */}
                <div className="p-6">
                    {status === 'success' ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                <CheckCircle size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Request Sent!</h4>
                            <p className="text-slate-600">We will contact you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Ex. Rahul Sharma"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Café / Restaurant Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Ex. Cafe Mocha"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={formData.cafeName}
                                    onChange={(e) => setFormData({ ...formData, cafeName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="Ex. 9820098200"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                                <input
                                    type="text"
                                    placeholder="Ex. Mumbai"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                />
                            </div>

                            {status === 'error' && (
                                <div className="text-red-500 text-sm text-center">
                                    Something went wrong. Please try again.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-3.5 bg-primary text-white font-bold rounded-xl text-lg hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" /> Sending...
                                    </>
                                ) : (
                                    'Book Free Demo'
                                )}
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
}
