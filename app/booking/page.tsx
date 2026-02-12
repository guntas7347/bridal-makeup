"use client";
import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, Send, CheckCircle, ArrowLeft, Clock } from 'lucide-react';

import Link from 'next/link';

export default function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        venue: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = () => {
        const text = `Hi! I would like to book a bridal makeup slot.\n\nName: ${formData.name}\nDate: ${formData.date}\nVenue: ${formData.venue}\nMessage: ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/917347235119?text=${encodedText}`, '_blank');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100 min-h-screen">
            {/* Navigation / Breadcrumb */}
            <nav className="max-w-7xl mx-auto px-6 py-8">
                <Link className="inline-flex items-center text-primary hover:opacity-80 transition-opacity font-medium" href="/packages">
                    <ArrowLeft className="mr-2 w-5 h-5" />
                    Back to Packages
                </Link>
            </nav>

            <main className="max-w-4xl mx-auto px-6 pb-20">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
                        Reservation
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-accent-maroon dark:text-white">Finalize Your Bridal Look</h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-lg">
                        Complete the details below to start your personal consultation and secure your wedding date.
                    </p>
                </header>

                {/* Booking Form Card */}
                <div className="bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-xl shadow-xl shadow-primary/5 border border-primary/10 overflow-hidden">
                    <div className="p-8 md:p-12">
                        {/* Package Summary Badge */}
                        <div className="flex items-center justify-between p-4 bg-background-light dark:bg-slate-800/50 rounded-xl mb-10 border border-slate-100 dark:border-slate-800">
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Selected Package</p>
                                <h3 className="text-xl font-bold text-primary">Royal Bridal Luxe Package</h3>
                            </div>
                            <div className="hidden sm:block">
                                <Sparkles className="text-primary/30 w-10 h-10" />
                            </div>
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Full Name */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="name">Full Name</label>
                                    <input
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all outline-none"
                                        id="name"
                                        placeholder="Priya Sharma"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                {/* Contact Number */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="phone">Contact Number</label>
                                    <div className="relative">
                                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-medium">+91</span>
                                        <input
                                            className="w-full pl-14 pr-5 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all outline-none"
                                            id="phone"
                                            placeholder="98765 43210"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                {/* Date of Event */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="date">Event Date</label>
                                    <div className="relative">
                                        <input
                                            className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all appearance-none outline-none"
                                            id="date"
                                            type="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                        />
                                        <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-5 h-5" />
                                    </div>
                                </div>
                                {/* Venue */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="venue">Venue Address</label>
                                    <div className="relative">
                                        <input
                                            className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all outline-none"
                                            id="venue"
                                            placeholder="Hotel / Residential Address"
                                            type="text"
                                            value={formData.venue}
                                            onChange={handleChange}
                                        />
                                        <MapPin className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                            {/* Custom Message */}
                            <div className="relative">
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="message">Special Requests or Skin Concerns</label>
                                <textarea
                                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all resize-none outline-none"
                                    id="message"
                                    placeholder="Mention any specific preferences or skin types here..."
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    className="group relative w-full bg-primary hover:bg-[#d11160] text-white py-5 px-8 rounded-full font-bold text-lg flex items-center justify-center transition-all shadow-lg shadow-primary/25 active:scale-[0.98]"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    <Send className="w-5 h-5 mr-3" />
                                    Book via WhatsApp
                                </button>
                            </div>
                            <p className="text-center text-slate-400 text-sm mt-6">
                                Clicking 'Book via WhatsApp' will open a secure chat with <strong>Artist Ananya</strong> to confirm availability.
                            </p>
                        </form>
                    </div>
                </div>

                {/* Extra Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="flex items-start p-6 rounded-xl bg-white/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                            <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Instant Chat</h4>
                            <p className="text-sm text-slate-500">Direct response within 24 hours.</p>
                        </div>
                    </div>
                    {/* ... other info cards ... */}
                    <div className="flex items-start p-6 rounded-xl bg-white/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Hold the Date</h4>
                            <p className="text-sm text-slate-500">Slots fill up 6 months in advance.</p>
                        </div>
                    </div>
                    <div className="flex items-start p-6 rounded-xl bg-white/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Customization</h4>
                            <p className="text-sm text-slate-500">Every look is tailored to you.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Visual Background Accents */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden opacity-30 dark:opacity-10">
                <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[5%] -right-[10%] w-[30%] h-[30%] bg-primary/20 blur-[100px] rounded-full"></div>
            </div>
        </div>
    );
}
