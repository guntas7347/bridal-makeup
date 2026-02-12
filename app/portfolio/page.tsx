import React from 'react';
import { Instagram, ZoomIn } from 'lucide-react';

export default function Portfolio() {
    const images = [
        { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw0qN-MyP7YL6Lg0yvDsehvrJaSl9GW4A9DclruRE0ZDZ0Q0V1YZrelBouGXKMSpN5GFnXO0NsxNUg1wMyH1SqvPqHP18KEqxdPf0qg9WKM3dywk9LCUkJMnqT2Wt7gomrqmJHv_CboYuosWiywy33fnYkftfnq5shabe8CJVfLlqCRhmujQM79S0k6R5ZcRN-c3T6xAHZ-qv2xDgbjAj7R-AhtEwqWR02kbG539Q2bA6f4Hw38a1qFl9x6go4N0kY48Ly5NYDCeI", alt: "Classic Red Bride" },
        { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCr8d3bDLv_kVgWLA1Rg5EAwp7u7GDtB5XfKkhyIR5zAfH5WdQREyvGEnb--yGmLvSF8j4zDvNrhaggxW2lf0PyfdP9IaSR1Zh-9oeRYSsaVkGQBayD6zg2uukPiiQOl5RBfgTHed7mR8TiQ_UUEmIdtVSUzQCkP56sGO1JmWZzo2fRXbwnCaKOvl6w9lMMpWLJxJWIU22LtnCNwubVQ5dYkUn2Lw89LNK7iC4yNuj9q1gjqxmftjBQXD4acsMP1r0bnrbqY1zoKI", alt: "Haldi ceremony look" },
        { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDMOxCVuzCuW4zlT55OAGyiannnR2x9vrxj-5jE1cvNrJwjx3OHmNh4yLajlIVxi-qEgvRvW0pwf2y5OzNoTq5zqato7TWPaB3jf2fyvBQDvP8x7mD034WjS3BTy2Na0I5L7qbznyfB60j8b96Ke2gIcmBpCc5htaqn8asL8kroDIO82J6h9cVMfSdWN3i0ECscAWVocCFdH6V0iQb2zWoBSFye4EWlgc4tTVs8QKKX4AZHnXEVL0E5yQR68aPTjFCUqh7xClVOwc", alt: "Reception Glam" },
        { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPTcRwOG6RTfk0zOu0BRsmJnQWZuS2_tidHqfJyxYzTZzKLKMkwjl6_4ZBuFtnMqmxYXP0ON_QuIXqbTyes6H-1lTb0oiW-OOzuCIF3b8YBhoDg7qf-hIwDOOMUVPciI2DC0I29kHzJFCjZHvm1jfrdWgs8uvGqYQlmijpGt55ZieD9z6fEPgO6v4ETrm6cshYqX_oGyDSF8COsMYbUsnZh8CFIgBPXvvZa5BsHlXw8DKPD3n3oFsPOx8yk5I5eI7oar5YIHtOVWk", alt: "Sangeet Night" },
        { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyhz_jaWztTtCKJDKvgLkWHvAJj8EHJAY1YLtmqAbLQ3mg1rkMpyaPX7ekJ9PWKtnCVFDTivZawxR_ZLDG0od3DcubD-QZZMgF2X5e14cG8NNZFTA6WE7C52vbfYgsaIyOlNWcKW7aSCK0_w-Favsdlx3Zx4e03sWUqgHOrLViC789neEGmMWF8A0morgUbVvEjWyAci8-9k1PlE81y0O4X3h2l6FdAVR-JMg1NLaJ7DKtxjEMZFCpe2qYjZjyMRlWaWRUp5dvrog", alt: "South Indian Bridal" },
        { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkm6E8HWf2TtAdDL-AmxiCO5m2Cfl92gMIjDuDcevjSs5qD7fmAWfUKxdpNcIwwwBJjETYCBuEjR-lK709rpVBxXk4f7TvcZPuomQPLxR_OqUv-pEVWqBQjjB4RnYrHpyJvj1qcc2UFQKSoVYbMPnC02VV8AkjFWQ4zKVWUDTCMlqpM5K0QyLtioDixg-G97vaYlCaZ0sRsrS4EXW4nDkwqpt8M_bkg25-9ajddM05B9Q3YYMR2XE7QkmH0T2EEUnYF9e_pEfMWek", alt: "Christian Wedding" },
    ];

    return (
        <>
            <header className="pt-32 pb-12 px-6 bg-background-light dark:bg-background-dark text-center">
                <h1 className="text-5xl md:text-6xl font-black text-accent-maroon dark:text-white mb-6">Our Portfolio</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    A collection of our finest transformations, capturing the unique essence of every bride.
                </p>
            </header>

            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {images.map((img, index) => (
                        <div key={index} className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer">
                            <img src={img.src} alt={img.alt} className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="text-center text-white p-4 translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <h3 className="font-bold text-xl mb-2">{img.alt}</h3>
                                    <span className="inline-flex items-center gap-2 text-sm border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                                        <ZoomIn className="w-4 h-4" /> View Details
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a href="https://www.instagram.com/guntas.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                        <Instagram className="w-6 h-6" />
                        Follow us on Instagram for Daily Updates
                    </a>
                </div>
            </section>
        </>
    );
}
