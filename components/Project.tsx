'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { projects, type ProjectItem } from "./constants";

// ProTrader has no public site, so it gets a sketch of what it does instead of a screenshot.
function ParserSketch() {
    return (
        <div className="absolute inset-0 flex flex-col justify-center gap-3 p-6 sm:p-8 font-mono text-[11px] sm:text-xs bg-[#0d1117]">
            <div className="self-start max-w-[85%] rounded-lg rounded-bl-none bg-[#2b5278] px-3 py-2 text-white/90">
                GOLD buy now 2345 · SL 2338 · TP 2360
            </div>
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-emerald-300/90">
                ✓ XAUUSD · BUY · entry 2345 · sl 2338 · tp 2360
            </div>
            <div className="self-start max-w-[85%] rounded-lg rounded-bl-none bg-[#2b5278] px-3 py-2 text-white/90">
                gold looking strong today 🚀
            </div>
            <div className="rounded-lg border border-rose-500/30 bg-rose-500/5 px-3 py-2 text-rose-300/90">
                ✕ refused · no entry price, no stop loss
            </div>
        </div>
    );
}

function TechBadges({ project }: { project: ProjectItem }) {
    return (
        <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
                <span
                    key={tech.name}
                    className="px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5
                        flex items-center gap-1.5"
                >
                    <tech.icon style={{ color: tech.color }} className="w-4 h-4" aria-hidden />
                    {tech.name}
                </span>
            ))}
        </div>
    );
}

function Card({ project, index }: { project: ProjectItem; index: number }) {
    const featured = project.featured;
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
            className={`group relative flex rounded-3xl overflow-hidden bg-surface border border-white/10
                hover:border-white/20 hover:-translate-y-1.5 transition duration-300
                ${featured ? 'flex-col lg:flex-row md:col-span-2 lg:col-span-3' : 'flex-col'}`}
        >
            {/* Image Section */}
            <div className={`relative overflow-hidden shrink-0 ${featured ? 'aspect-[16/10] lg:aspect-auto lg:w-[55%] lg:min-h-[340px]' : 'aspect-[16/10]'}`}>
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 33vw"}
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <ParserSketch />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent pointer-events-none" />
            </div>

            {/* Content Section */}
            <div className={`flex flex-col flex-1 ${featured ? 'p-6 sm:p-10 justify-center' : 'p-6'}`}>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary/80 mb-2">{project.kind}</p>
                <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className={`font-bold tracking-tight text-content ${featured ? 'text-3xl' : 'text-2xl'}`}>
                        {project.website ? (
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="after:absolute after:inset-0 focus-visible:outline-none"
                            >
                                {project.title}
                            </a>
                        ) : (
                            project.title
                        )}
                    </h3>
                    {project.website ? (
                        <ArrowUpRightIcon className="h-6 w-6 shrink-0 text-content/40 group-hover:text-primary
                            group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition duration-300" aria-hidden />
                    ) : (
                        <span className="shrink-0 mt-1 text-xs text-content/60 border border-white/10 rounded-md px-2 py-0.5">
                            Private
                        </span>
                    )}
                </div>
                <p className={`text-content/70 leading-relaxed mb-6 ${featured ? 'lg:text-lg' : ''}`}>{project.description}</p>
                <div className="mt-auto">
                    <TechBadges project={project} />
                </div>
            </div>
        </motion.article>
    );
}

export default function Project() {
    return (
        <section id="projects" className="py-24 relative bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-4xl text-center md:text-5xl font-bold tracking-tight bg-gradient-to-r
                     from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-4 pb-1">
                        My Works
                    </h2>
                    <p className="text-content/60">Things I&apos;ve built and shipped</p>

                </motion.div>
                {/* Project Grid */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                    {projects.map((project, i) => (
                        <Card key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>

        </section>
    );
}
