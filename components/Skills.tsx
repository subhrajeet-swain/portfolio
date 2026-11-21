'use client'

import { motion } from "framer-motion";
import { skillGroups } from "./constants";

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-4 pb-1">
                        My Skills
                    </h2>
                    <p className="text-content/60">What I reach for, AI first</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillGroups.map((group, g) => (
                        <motion.div
                            key={group.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: g * 0.1 }}
                            className="p-5 sm:p-6 rounded-2xl bg-surface border border-white/5"
                        >
                            <h3 className="text-sm font-medium tracking-wide text-content/50 mb-4">{group.label}</h3>
                            <div className="grid grid-cols-4 gap-3">
                                {group.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group flex flex-col items-center justify-center gap-3 py-5 px-2 rounded-xl
                                            bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.06]
                                            hover:-translate-y-1 transition duration-300"
                                    >
                                        <skill.icon
                                            className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: skill.color }}
                                            aria-hidden
                                        />
                                        <span className="text-xs sm:text-sm font-medium text-content/90 text-center">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}
