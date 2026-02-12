import React from 'react';
import { Mail, MapPin, Phone, Clock, Instagram, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <>
            <main className="relative py-12 md:py-24 px-6 bg-background-light dark:bg-background-dark min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-widest uppercase text-sm">Get in Touch</span>
                        <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight text-accent-maroon dark:text-white">Let's Create Your <br />Dream Bridal Look</h1>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            Ready to shine on your big day? Connect with our expert artists directly for personalized bridal packages and availability.
                        </p>
                    </div>

                    {/* Primary Contact Cards */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {/* WhatsApp Card */}
                        <div className="group relative bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-primary/10 shadow-xl shadow-primary/5 hover:border-primary/40 transition-all">
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-accent-maroon dark:text-white">Book via WhatsApp</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                    Chat directly with our booking manager for instant availability and personalized quotes for your wedding day.
                                </p>
                                <a className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-4 px-8 rounded-full hover:scale-105 transition-transform" href="https://wa.me/917347235119?text=Hi!%20I'm%20interested%20in%20booking%20a%20bridal%20package.">
                                    <span>Chat with us on WhatsApp</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Instagram Card */}
                        <div className="group relative bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-primary/10 shadow-xl shadow-primary/5 hover:border-primary/40 transition-all">
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6">
                                    <Instagram className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-accent-maroon dark:text-white">Follow our Journey</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                    See our latest bridal transformations, behind-the-scenes magic, and client testimonials on Instagram.
                                </p>
                                <a className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold py-4 px-8 rounded-full hover:bg-primary hover:text-white transition-all" href="https://www.instagram.com/guntas.dev">
                                    <span>Visit our Instagram</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Location & Hours Section */}
                    <div className="bg-white dark:bg-slate-900/50 rounded-lg p-8 md:p-12 shadow-sm border border-primary/5">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-8 text-accent-maroon dark:text-white">Studio Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-accent-maroon dark:text-white">Main Studio</h4>
                                            <p className="text-slate-600 dark:text-slate-400">12th Floor, Sky Tower, Linking Road,<br />Bandra West, Mumbai - 400050</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-accent-maroon dark:text-white">Inquiry Hours</h4>
                                            <p className="text-slate-600 dark:text-slate-400">Monday - Saturday: 10:00 AM - 8:00 PM<br />Sunday: By Appointment Only</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-accent-maroon dark:text-white">Email Inquiries</h4>
                                            <p className="text-slate-600 dark:text-slate-400">hello@guntassandhu.com<br />support@glambridal.in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden shadow-inner group">
                                <img
                                    alt="Modern Makeup Studio Interior"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcyJS_bJytT0rKk8rwjad9rJHNVLa-6JFCexaBJhjpkvuMhBqFWqwLH6KDDrg_4Tcr75w1rn4ZTglJUuycuNQ60_ga3-coQfbmNjvahi-Df-np9oYWyUR3V3wlhyGOU_krxQHHcsu4qbnSb5q-N95GhJZTJBXW3bJ_DsSKBgtr-rpdh80BJ5osEijeZR046-_JkUflp3xIHIPLQZB3woTQh2ZfYwmGX2swhZwnsw7gHaraaOgTCjlWrH1r8IE61C48FN7Ag_lx7QE"
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest font-bold text-primary">Location</p>
                                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Bandra West, Mumbai</p>
                                    </div>
                                    <a className="text-primary hover:underline text-sm font-bold flex items-center gap-1" href="#">
                                        Get Directions <MapPin className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center p-6 border-t border-primary/10">
                        <p className="inline-flex items-center gap-2 text-slate-500 font-medium">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Now taking bookings for Winter Wedding Season 2024
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
