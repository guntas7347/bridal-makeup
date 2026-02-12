import React from 'react';
import { Sparkles, CheckCircle, Palette, Calendar, MessageCircle, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 lg:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Beautiful Indian Bride"
            className="w-full h-full object-cover opacity-20 dark:opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw0qN-MyP7YL6Lg0yvDsehvrJaSl9GW4A9DclruRE0ZDZ0Q0V1YZrelBouGXKMSpN5GFnXO0NsxNUg1wMyH1SqvPqHP18KEqxdPf0qg9WKM3dywk9LCUkJMnqT2Wt7gomrqmJHv_CboYuosWiywy33fnYkftfnq5shabe8CJVfLlqCRhmujQM79S0k6R5ZcRN-c3T6xAHZ-qv2xDgbjAj7R-AhtEwqWR02kbG539Q2bA6f4Hw38a1qFl9x6go4N0kY48Ly5NYDCeI"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-light via-background-light/80 to-transparent dark:from-background-dark dark:via-background-dark/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase">Premier Bridal Artistry</span>
            <h1 className="text-6xl lg:text-8xl font-black text-accent-maroon dark:text-white leading-[1.1]">
              The Royal <span className="text-primary italic">Glow</span> You Deserve
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
              Exquisite Indian bridal makeup services tailored for your most precious moments. Combining traditional elegance with modern luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/packages" className="bg-primary text-white px-10 py-5 rounded-full font-bold text-center shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                VIEW PACKAGES
              </Link>
              <Link href="/contact" className="border-2 border-accent-gold/50 text-accent-maroon dark:text-accent-gold px-10 py-5 rounded-full font-bold text-center hover:bg-accent-gold/10 transition-all">
                CONSULT ARTIST
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-accent-gold/20 rounded-xl blur-2xl"></div>
            <img
              alt="Bridal Makeup Portrait"
              className="relative w-full aspect-[4/5] object-cover rounded-xl shadow-2xl gold-border"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCr8d3bDLv_kVgWLA1Rg5EAwp7u7GDtB5XfKkhyIR5zAfH5WdQREyvGEnb--yGmLvSF8j4zDvNrhaggxW2lf0PyfdP9IaSR1Zh-9oeRYSsaVkGQBayD6zg2uukPiiQOl5RBfgTHed7mR8TiQ_UUEmIdtVSUzQCkP56sGO1JmWZzo2fRXbwnCaKOvl6w9lMMpWLJxJWIU22LtnCNwubVQ5dYkUn2Lw89LNK7iC4yNuj9q1gjqxmftjBQXD4acsMP1r0bnrbqY1zoKI"
            />
          </div>
        </div>
      </header>

      {/* Value Propositions */}
      <section className="py-16 bg-white dark:bg-white/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4 flex flex-col items-center">
              <Sparkles className="text-primary w-10 h-10" />
              <h3 className="text-xl font-bold text-accent-maroon dark:text-white uppercase tracking-wider">Premium Products</h3>
              <p className="text-slate-500 dark:text-slate-400">Exclusively using high-end international brands like MAC, Huda Beauty, and Dior.</p>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <Calendar className="text-primary w-10 h-10" />
              <h3 className="text-xl font-bold text-accent-maroon dark:text-white uppercase tracking-wider">On-Location Service</h3>
              <p className="text-slate-500 dark:text-slate-400">Our team travels to your venue to ensure a stress-free and luxurious experience.</p>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <Palette className="text-primary w-10 h-10" />
              <h3 className="text-xl font-bold text-accent-maroon dark:text-white uppercase tracking-wider">Custom Looks</h3>
              <p className="text-slate-500 dark:text-slate-400">Personalized consultations to design a look that complements your skin and attire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="packages">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-black text-accent-maroon dark:text-white mb-6">Signature Packages</h2>
            <p className="text-slate-600 dark:text-slate-400">Curated beauty experiences designed for every wedding ceremony, from intimate gatherings to royal celebrations.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2 rounded-full bg-primary text-white font-bold text-sm">All Styles</button>
            <button className="px-6 py-2 rounded-full bg-background-light dark:bg-white/10 border border-primary/20 text-slate-700 dark:text-white font-bold text-sm hover:border-primary transition-colors">Traditional</button>
            <button className="px-6 py-2 rounded-full bg-background-light dark:bg-white/10 border border-primary/20 text-slate-700 dark:text-white font-bold text-sm hover:border-primary transition-colors">Minimalist</button>
            <button className="px-6 py-2 rounded-full bg-background-light dark:bg-white/10 border border-primary/20 text-slate-700 dark:text-white font-bold text-sm hover:border-primary transition-colors">Pre-Wedding</button>
          </div>
        </div>
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

      {/* Testimonials Section */}
      <section className="py-24 luxury-gradient text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Glow of Satisfaction</h2>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm">Words from our beautiful brides</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="flex text-accent-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="italic text-slate-300 mb-6 font-serif">"Absolutely stunning work! The artist understood exactly what I wanted for my big day. The makeup lasted over 14 hours perfectly."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold">AP</div>
                <div>
                  <h4 className="font-bold">Ananya Patel</h4>
                  <span className="text-xs text-slate-400">Wedding - Dec 2023</span>
                </div>
              </div>
            </div>
            {/* Added more testimonials from HTML */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="flex text-accent-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="italic text-slate-300 mb-6 font-serif">"Professional, punctual, and highly skilled. They made me feel like a queen for my Sangeet ceremony. Highly recommended!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold">RS</div>
                <div>
                  <h4 className="font-bold">Riya Sharma</h4>
                  <span className="text-xs text-slate-400">Reception - Jan 2024</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="flex text-accent-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="italic text-slate-300 mb-6 font-serif">"The most talented makeup artist I have ever met. The transformation was natural yet royal. Worth every single rupee!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold">MK</div>
                <div>
                  <h4 className="font-bold">Meera Kaur</h4>
                  <span className="text-xs text-slate-400">Anand Karaj - Feb 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      </section>
    </>
  );
}
