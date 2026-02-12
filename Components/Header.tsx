"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Camera, Facebook, Moon, Play, Sun, Wand2, Menu, X } from 'lucide-react';
import { useTheme } from '../lib/useTheme';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href='/' className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Wand2 className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xl font-extrabold tracking-tighter text-accent-maroon dark:text-primary uppercase">Makeup By Guntas Sandhu</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10 text-sm font-semibold uppercase tracking-widest">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="/portfolio" className="hover:text-primary transition-colors">Gallery</Link>
                    <Link href="/packages" className="hover:text-primary transition-colors">Packages</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <Link href="/booking" className="bg-accent-maroon dark:bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all">
                        BOOK NOW
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-primary/10 py-4 px-6 flex flex-col space-y-4 shadow-xl">
                    <Link href="/" className="hover:text-primary transition-colors font-semibold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="/portfolio" className="hover:text-primary transition-colors font-semibold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                    <Link href="/packages" className="hover:text-primary transition-colors font-semibold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Packages</Link>
                    <Link href="/about" className="hover:text-primary transition-colors font-semibold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors font-semibold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center gap-2 font-semibold uppercase tracking-widest text-sm"
                        >
                            {theme === 'dark' ? <><Sun className="w-5 h-5" /> Light Mode</> : <><Moon className="w-5 h-5" /> Dark Mode</>}
                        </button>
                        <Link href="/booking" className="bg-accent-maroon dark:bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all" onClick={() => setIsMenuOpen(false)}>
                            BOOK NOW
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
