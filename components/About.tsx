'use client';
import { ParticleCanvas } from "@/hooks/particle";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { socialLinks } from "./constants";


export default function About() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100]);
    return (
        <section id="about" className="min-h-[100dvh] relative overflow-hidden bg-background flex items-center">
            <ParticleCanvas />
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 pt-28 pb-16 sm:pt-32">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="relative group lg:w-1/2 text-center lg:text-left"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-md border border-white/10
                                    bg-white/[0.03] text-sm text-content/70"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Currently at WitArist · Noida
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95] bg-gradient-to-r
                                    from-primary via-secondary to-tertiary
                                    bg-clip-text text-transparent mb-6 sm:mb-8 pb-2"
                        >

                            AI

                            <br />

                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="bg-gradient-to-r from-primary via-secondary
                                        to-tertiary bg-clip-text text-transparent"
                            >
                                Engineer
                            </motion.span>

                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                            className="text-lg sm:text-xl font-light leading-relaxed text-content/75 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0"
                        >

                            I build LLM systems that hold up in production: retrieval, agents, and the guardrails
                            that decide when the model shouldn&apos;t answer. Usually while sitting with the client,
                            working out what they actually need.

                        </motion.p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <motion.a
                                href="#projects"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.98 }}
                                className="px-7 sm:px-8 py-3 sm:py-4 rounded-full w-full sm:w-auto text-center font-medium text-white
                                        bg-gradient-to-r from-primary to-secondary shadow-lg shadow-secondary/20
                                        hover:shadow-secondary/40 transition-shadow"
                            >
                                See my work
                            </motion.a>

                            <motion.a
                                href="/subhrajeet-resume.pdf"
                                download
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.3 }}
                                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.98 }}
                                className="group/cv relative overflow-hidden px-7 sm:px-8 py-3 sm:py-4 rounded-full bg-surface border
                                        border-white/10 hover:border-primary/30 transition-colors w-full sm:w-auto text-center"
                            >
                                <span className="text-content group-hover/cv:text-primary transition-colors">
                                    Download CV
                                </span>
                                <div
                                    className="absolute inset-0 bg-gradient-to-r
                                                from-primary/10 to-tertiary/10 opacity-0
                                                group-hover/cv:opacity-100 transition-opacity"
                                />
                            </motion.a>

                            <motion.a
                                href={`mailto:${socialLinks.email}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                className="text-sm text-content/60 hover:text-primary underline underline-offset-4
                                        decoration-white/20 hover:decoration-primary transition-colors sm:ml-2"
                            >
                                or email me
                            </motion.a>
                        </div>

                    </motion.div>
                    {/* Image Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative px-4 sm:px-6"
                        style={{ y }}
                    >
                        <div className="relative w-full max-w-[400px] mx-auto aspect-square group">
                            {/* Animated Border */}
                            <motion.div
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: 'mirror'
                                }}
                                className="absolute inset-0 rounded-3xl
                                    bg-gradient-to-r from-primary/30
                                    via-secondary/30 to-tertiary/30
                                    opacity-50 blur-xl"
                            />
                            {/* Floating Animation */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative w-full h-full
                                    rounded-3xl overflow-hidden
                                    border border-white/10 bg-surface
                                    backdrop-blur-sm"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/portfolio.png"
                                        alt="Memoji of Subhrajeet working on a laptop"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority
                                        className="object-cover scale-110 group-hover:scale-100
                                            transition-transform duration-500"
                                    />
                                </div>
                                <div
                                    className="absolute inset-0 bg-gradient-to-t
                                        from-black/60 to-transparent"
                                />

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: 0.6
                                    }}
                                    className="absolute bottom-8 left-8"
                                >

                                    <div className="text-2xl font-bold text-content">
                                        Based in
                                        <motion.span
                                            className="block bg-gradient-to-r
                                                      from-primary to-secondary bg-clip-text text-transparent"
                                            animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                repeatType: 'mirror'
                                            }}
                                            style={{
                                                backgroundSize: '200% 200%'
                                            }}
                                        >
                                            India
                                        </motion.span>
                                    </div>
                                </motion.div>

                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
