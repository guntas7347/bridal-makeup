import React from 'react';
import { Award, Zap, Star, Sparkles, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-32 md:py-40">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5 relative group">
                        <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 rounded-xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <img
                            alt="Artist Portrait"
                            className="relative z-10 w-full h-[600px] object-cover rounded-xl shadow-2xl"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyhz_jaWztTtCKJDKvgLkWHvAJj8EHJAY1YLtmqAbLQ3mg1rkMpyaPX7ekJ9PWKtnCVFDTivZawxR_ZLDG0od3DcubD-QZZMgF2X5e14cG8NNZFTA6WE7C52vbfYgsaIyOlNWcKW7aSCK0_w-Favsdlx3Zx4e03sWUqgHOrLViC789neEGmMWF8A0morgUbVvEjWyAci8-9k1PlE81y0O4X3h2l6FdAVR-JMg1NLaJ7DKtxjEMZFCpe2qYjZjyMRlWaWRUp5dvrog"
                        />
                    </div>
                    <div className="md:col-span-7">
                        <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">Crafting Radiance Since 2012</span>
                        <h1 className="text-5xl md:text-7xl mb-8 leading-tight italic font-serif">The visionary behind <span className="text-primary not-italic font-sans">the glow.</span></h1>
                        <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 leading-relaxed mb-8 italic font-serif">
                            "Every bride carries a story in her eyes; my work is simply to ensure her light shines brighter than ever on her most cherished day."
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="h-px w-12 bg-primary/40"></div>
                            <p className="text-lg font-medium">Meera Kapoor, Lead Artist</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-primary/5 py-16 border-y border-primary/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">800+</div>
                            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Brides Transformed</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12+</div>
                            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15</div>
                            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Global Awards</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Happiness Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Journey Section */}
            <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
                <div className="grid md:grid-cols-2 gap-20 items-start">
                    <div>
                        <h2 className="text-4xl mb-8 font-serif">A Journey of Artistry & <span className="text-primary italic">Tradition</span></h2>
                        <div className="prose prose-lg dark:prose-invert text-stone-600 dark:text-stone-400 space-y-6">
                            <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                                My fascination with the transformative power of makeup began in the vibrant streets of Mumbai, where the colors of local festivities ignited a lifelong passion. What started as a hobby assisting local theater troupes evolved into a rigorous professional pursuit under the mentorship of industry titans in London and Paris.
                            </p>
                            <p>
                                I believe that bridal makeup is not about masking, but about revealing. It's the delicate balance between high-definition photography requirements and the intimate reality of a bride greeting her guests. My philosophy is rooted in "Modern Traditions"—respecting ancestral aesthetics while employing contemporary techniques that last for 16+ hours.
                            </p>
                            <p>
                                Every brushstroke is intentional. Every product is curated from premium global brands to ensure your skin feels like silk and looks like a dream. We don't just apply makeup; we curate an experience that begins long before the wedding day.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            alt="Makeup Palette"
                            className="rounded-lg shadow-lg aspect-square object-cover mt-12"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVnuC4ww7iGDwBCbkuDs3FLrihGZI_laCFIpLhp1tQVsCuxYj1zmAivFuVEwsoY6nlZl48v_WGjALUUSOnwFIgLuJUq7zmVh6qqTrc7AMtXP8D6z4c5jAc8sxACmGwkIanTty9ZdGb3NTsYWyRS4qldNavub5WLBV62V7Ekzj4dM7Or0m7ieIW47zLM2OElZZ6flcAz2Yr9xlZzVkYSsqfZWU7hhxjs3UlmZ2zcFqK-aj5WNpDIqLh--r0y4yK8uKoWHYdJo5AVrI"
                        />
                        <img
                            alt="Artist at Work"
                            className="rounded-lg shadow-lg aspect-[3/4] object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAEQeE7HqTxQ-oGLtrZL1w5VfKKcPfU5xCn_Cmn-an8ihOyO1bhIfx1CO84yhpkg8kFabamRLk_xHumn-uRdlFKELJPxcp01T8HIFBtyLBXA_354y6OHeXaW6m8yVfPaK8pftyZ0cK_mRuk1N7zAQy1Cbn4VJNwn1N7X6rsHPVCjPXErBnq7H0NLZpOSTcaL4_XIaLTLu3KaW7VTx4-LaIuUK_ogstCfXyAHQ95dp5Od5pV4_BkWmCRtToRCJjZwYpUpy-FJtUAeI"
                        />
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="bg-white dark:bg-stone-900/50 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display mb-4 italic font-serif">Recognized Excellence</h2>
                        <div className="h-1 w-20 bg-primary mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex flex-col items-center">
                            <Award className="w-12 h-12 text-primary mb-4" />
                            <p className="font-bold tracking-widest text-xs uppercase">Certified by MAC PRO</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Award className="w-12 h-12 text-primary mb-4" />
                            <p className="font-bold tracking-widest text-xs uppercase">Vogue Beauty Award '22</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Sparkles className="w-12 h-12 text-primary mb-4" />
                            <p className="font-bold tracking-widest text-xs uppercase">Bobbi Brown Artistry</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Star className="w-12 h-12 text-primary mb-4" />
                            <p className="font-bold tracking-widest text-xs uppercase">Esthetician Masters</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Highlight */}
            <section className="max-w-4xl mx-auto px-6 py-24 text-center">
                <MessageCircle className="text-primary/30 w-16 h-16 mx-auto mb-6" />
                <blockquote className="text-3xl italic leading-relaxed text-stone-700 dark:text-stone-300 mb-8 font-serif">
                    "Meera didn't just do my makeup; she gave me the confidence to walk down the aisle feeling like the best version of myself. Her calm presence was the highlight of my wedding morning."
                </blockquote>
                <cite className="not-italic font-bold uppercase tracking-widest text-sm text-primary">— Anjali Sharma, December 2023 Bride</cite>
            </section>

            {/* Final CTA Section */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="bg-primary/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border border-primary/20">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl mb-6 italic font-serif">Ready to begin your <span className="text-primary not-italic font-sans">bridal story?</span></h2>
                        <p className="text-lg text-stone-600 dark:text-stone-400 mb-10 max-w-xl mx-auto">
                            Limited slots available for the 2024 wedding season. Let’s discuss your vision and create a bespoke package for your special day.
                        </p>
                        <Link href="/booking" className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
                            <MessageCircle className="w-6 h-6 fill-current" />
                            Consult via WhatsApp
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
