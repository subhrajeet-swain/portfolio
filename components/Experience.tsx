'use client';
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Full Stack Developer",
        company: "API DOTS Private Limited",
        duration: "Oct 2023 - present",
        location: "Chandigarh, India",
        description: [
            "Built responsive web applications using React.js and Next.js",
            "Developed RESTful APIs using Node.js and MongoDB",
            "Implemented CI/CD pipelines reducing deployment time by 40%",
            "Improved application performance by 50% through optimization"
        ]
    },
    {
        title: "Software Developer Intern",
        company: "API DOTS Private Limited",
        duration: "Apr 2023 - Oct 2023",
        location: "Chandigarh, India",
        description: [
            "Developed and maintained client-facing web applications",
            "Collaborated with design team to implement UI/UX improvements",
            "Explored new technologies and implemented them in projects"
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-black relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-4">
                        Work Experience
                    </h2>
                    <p className="text-gray-400">My professional journey</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary via-secondary to-tertiary opacity-20" />

                    {/* Experience items */}
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-black" />

                            {/* Content */}
                            <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:col-start-2'}`}>
                                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors shadow-lg hover:shadow-primary/10 text-left">
                                    <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                                    <div className="text-primary mb-2">{experience.company}</div>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                        <span>{experience.duration}</span>
                                        <span>•</span>
                                        <span>{experience.location}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {experience.description.map((item, i) => (
                                            <li key={i} className="text-gray-400">
                                                • {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Empty column for layout */}
                            <div className="hidden md:block md:col-span-1" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 