'use client'

import { motion } from "framer-motion";
import { FaAws, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiTypescript, SiPostgresql, SiGithub } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


const skillsData = [
    {
        name: "React.js",
        icon: FaReact,
        color: "#61DAFB",
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
    },
    {
        name: "AWS",
        icon: FaAws,
        color: "#FF9900",
    },
    {
        name: "Next.js",
        icon: TbBrandNextjs,
        color: "#FFFFFF",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
    },
    {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F0DB4F",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#007ACC",
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
    },
    {
        name: "GitHub",
        icon: SiGithub,
        color: "#181717",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-4">
                        My Skills
                    </h2>
                    <p className="text-gray-400">Technologies I work with</p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <skill.icon
                                className="w-16 h-16 mb-4"
                                style={{ color: skill.color }}
                            />
                            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}