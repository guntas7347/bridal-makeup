import React from 'react';
import Link from 'next/link';
import { Facebook, Camera, Play, Wand2, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background-light dark:bg-background-dark py-20 px-6 border-t border-primary/10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <Wand2 className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-extrabold tracking-tighter text-accent-maroon dark:text-primary uppercase">Makeup By Guntas Sandhu</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                        Crafting timeless beauty for the modern Indian bride. Experience the pinnacle of luxury artistry.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <Camera className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <Play className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-accent-maroon dark:text-white mb-6 uppercase tracking-widest">Navigation</h4>
                    <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/packages" className="hover:text-primary transition-colors">Packages</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-accent-maroon dark:text-white mb-6 uppercase tracking-widest">Services</h4>
                    <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                        <li><Link href="/packages" className="hover:text-primary transition-colors">Bridal Makeup</Link></li>
                        <li><Link href="/packages" className="hover:text-primary transition-colors">Party Makeup</Link></li>
                        <li><Link href="/packages" className="hover:text-primary transition-colors">Hairstyling</Link></li>
                        <li><Link href="/packages" className="hover:text-primary transition-colors">Pre-wedding Shoots</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-accent-maroon dark:text-white mb-6 uppercase tracking-widest">Contact Info</h4>
                    <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                        <li className="flex items-center gap-3">
                            <MapPin className="text-primary w-4 h-4" />
                            <span>Mumbai, Maharashtra, India</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-primary w-4 h-4" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-primary w-4 h-4" />
                            <span>hello@royalglow.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                <p>© 2024 Makeup By Guntas Sandhu Bridal Artistry. All Rights Reserved.</p>
                <div className="flex gap-8">
                    <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
