import React from 'react';
import { CheckCircle, Clock, Star, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Packages() {
    return (
        <>
            <header className="pt-32 pb-20 px-6 bg-background-light dark:bg-background-dark text-center">
                <h1 className="text-5xl md:text-6xl font-black text-accent-maroon dark:text-white mb-6">Signature Packages</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Curated beauty experiences designed for every wedding ceremony, from intimate gatherings to royal celebrations.
                </p>
            </header>

            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Package Card 1 */}
                    <div className="group relative bg-white dark:bg-white/5 rounded-xl overflow-hidden gold-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <img
                                alt="Traditional Bride"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDMOxCVuzCuW4zlT55OAGyiannnR2x9vrxj-5jE1cvNrJwjx3OHmNh4yLajlIVxi-qEgvRvW0pwf2y5OzNoTq5zqato7TWPaB3jf2fyvBQDvP8x7mD034WjS3BTy2Na0I5L7qbznyfB60j8b96Ke2gIcmBpCc5htaqn8asL8kroDIO82J6h9cVMfSdWN3i0ECscAWVocCFdH6V0iQb2zWoBSFye4EWlgc4tTVs8QKKX4AZHnXEVL0E5yQR68aPTjFCUqh7xClVOwc"
                            />
                            <div className="absolute top-4 right-4 bg-accent-gold text-accent-maroon px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Royal Class</div>
                        </div>
                        <div className="p-8 space-y-4">
                            <h3 className="text-2xl font-bold text-accent-maroon dark:text-white">Traditional Royal Bride</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Heavy base, intricate eye artistry, and dupatta draping included. Perfect for the main wedding ceremony.</p>

                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> HD / Airbrush Makeup</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Premium Lashes & Lenses</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Hairstyling with Accessories</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Draping & Styling</li>
                            </ul>

                            <div className="pt-4 border-t border-primary/10 flex items-center justify-between">
                                <div>
                                    <span className="text-xs uppercase text-slate-400 block tracking-widest">Starting from</span>
                                    <span className="text-2xl font-black text-primary">₹35,000</span>
                                </div>
                                <Link href="/booking" className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-3 rounded-full transition-all">
                                    <MessageCircle className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Package Card 2 */}
                    <div className="group relative bg-white dark:bg-white/5 rounded-xl overflow-hidden gold-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <img
                                alt="Modern Bride"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPTcRwOG6RTfk0zOu0BRsmJnQWZuS2_tidHqfJyxYzTZzKLKMkwjl6_4ZBuFtnMqmxYXP0ON_QuIXqbTyes6H-1lTb0oiW-OOzuCIF3b8YBhoDg7qf-hIwDOOMUVPciI2DC0I29kHzJFCjZHvm1jfrdWgs8uvGqYQlmijpGt55ZieD9z6fEPgO6v4ETrm6cshYqX_oGyDSF8COsMYbUsnZh8CFIgBPXvvZa5BsHlXw8DKPD3n3oFsPOx8yk5I5eI7oar5YIHtOVWk"
                            />
                            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Trending</div>
                        </div>
                        <div className="p-8 space-y-4">
                            <h3 className="text-2xl font-bold text-accent-maroon dark:text-white">Modern Minimalist</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Dewy finish, soft glam eyes, and contemporary hairstyling. Ideal for cocktail parties and receptions.</p>

                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Glass Skin Finish</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Soft/Nude Lip Artistry</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Hollywood Waves / Messy Bun</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Saree/Gown Draping</li>
                            </ul>

                            <div className="pt-4 border-t border-primary/10 flex items-center justify-between">
                                <div>
                                    <span className="text-xs uppercase text-slate-400 block tracking-widest">Starting from</span>
                                    <span className="text-2xl font-black text-primary">₹22,000</span>
                                </div>
                                <Link href="/booking" className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-3 rounded-full transition-all">
                                    <MessageCircle className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Package Card 3 */}
                    <div className="group relative bg-white dark:bg-white/5 rounded-xl overflow-hidden gold-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <img
                                alt="Sangeet Bride"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkm6E8HWf2TtAdDL-AmxiCO5m2Cfl92gMIjDuDcevjSs5qD7fmAWfUKxdpNcIwwwBJjETYCBuEjR-lK709rpVBxXk4f7TvcZPuomQPLxR_OqUv-pEVWqBQjjB4RnYrHpyJvj1qcc2UFQKSoVYbMPnC02VV8AkjFWQ4zKVWUDTCMlqpM5K0QyLtioDixg-G97vaYlCaZ0sRsrS4EXW4nDkwqpt8M_bkg25-9ajddM05B9Q3YYMR2XE7QkmH0T2EEUnYF9e_pEfMWek"
                            />
                        </div>
                        <div className="p-8 space-y-4">
                            <h3 className="text-2xl font-bold text-accent-maroon dark:text-white">Sangeet & Mehendi</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Vibrant, waterproof, and long-lasting makeup for the highest energy events of the wedding.</p>

                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Sweat-proof Base</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Glitter/Graphic Liners</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Floral Braids / Open Hair</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Touch-up Kit Included</li>
                            </ul>

                            <div className="pt-4 border-t border-primary/10 flex items-center justify-between">
                                <div>
                                    <span className="text-xs uppercase text-slate-400 block tracking-widest">Starting from</span>
                                    <span className="text-2xl font-black text-primary">₹18,000</span>
                                </div>
                                <Link href="/booking" className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-3 rounded-full transition-all">
                                    <MessageCircle className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add-ons Section */}
            <section className="py-16 bg-white dark:bg-white/5 border-y border-primary/10">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-accent-maroon dark:text-white mb-8 text-center">Exclusive Add-ons</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="p-6 rounded-lg bg-background-light dark:bg-black/20 text-center">
                            <Star className="w-8 h-8 text-primary mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Trials</h3>
                            <p className="text-sm text-slate-500">Full face trial at studio adjustment against final booking.</p>
                        </div>
                        <div className="p-6 rounded-lg bg-background-light dark:bg-black/20 text-center">
                            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Extra Hours</h3>
                            <p className="text-sm text-slate-500">Standby for touch-ups during the event/shoot.</p>
                        </div>
                        <div className="p-6 rounded-lg bg-background-light dark:bg-black/20 text-center">
                            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Family Makeup</h3>
                            <p className="text-sm text-slate-500">Discounted packages for bridesmaids and relatives.</p>
                        </div>
                        <div className="p-6 rounded-lg bg-background-light dark:bg-black/20 text-center">
                            <Star className="w-8 h-8 text-primary mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Outstation</h3>
                            <p className="text-sm text-slate-500">Available for destination weddings globally.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
