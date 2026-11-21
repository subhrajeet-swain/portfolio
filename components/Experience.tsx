'use client';
import { motion } from "framer-motion";
import { experiences } from "./constants";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-4 pb-1">
                        Work Experience
                    </h2>
                    <p className="text-content/60">Where I&apos;ve been doing it</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary via-secondary to-tertiary opacity-30" />

                    {/* Experience items */}
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 last:mb-0"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-2 md:left-1/2 top-7 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary ring-4 ring-background" />

                            {/* Content */}
                            <div className={`pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:col-start-2'}`}>
                                <div className="bg-surface p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-primary/40 transition-colors text-left">
                                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                                        <h3 className="text-xl font-bold text-content">{experience.company}</h3>
                                        <span className="text-sm text-content/50 tabular-nums">{experience.duration}</span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2 text-sm mb-5">
                                        <span className="text-primary">{experience.title}</span>
                                        <span className="text-content/30">•</span>
                                        <span className="text-content/50">{experience.location}</span>
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        {experience.description.map((item) => (
                                            <li key={item} className="relative pl-4 text-content/70 leading-relaxed
                                                before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-secondary/60">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.tech.map((tech) => (
                                            <span key={tech.name} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-content/70">
                                                <tech.icon style={{ color: tech.color }} className="w-3.5 h-3.5" aria-hidden />
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
