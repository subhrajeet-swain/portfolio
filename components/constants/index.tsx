import { FaNode, FaReact } from "react-icons/fa";
import { SiCesium, SiExpress, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { HiMiniCommandLine } from "react-icons/hi2";

export const projects = [
    {
        title: "Wovnn",
        description: "A SaaS based real estate platform for real estate agents to manage their clients and properties",
        tech: [
            { name: "React.js", icon: FaReact, color: "#61DAFB" },
            { name: "Node.js", icon: FaNode, color: "#339933" },
            { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
        ],
        image: '/projects/wovnn.png',
        website: 'https://www.oregonhomeseeker.com'
    },
    {
        title: "Carbon Footprint Calculator",
        description: "Realtime carbon emission calculation for aviation industry",
        tech: [
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
            { name: "Cesium.js", icon: SiCesium, color: "#F9A03C" },
        ],
        image: '/projects/carbon.png',
        website: 'https://supad.tdldev.com'
    },
    {
        title: "Node.js Boilerplate",
        description: "An NPM package for creating a boilerplate for Node.js projects",
        tech: [
            { name: "Node.js", icon: FaNode, color: "#339933" },
            { name: "Express.js", icon: SiExpress, color: "#FFCA28" },
            { name: "CLI tool", icon: HiMiniCommandLine }
        ],
        image: '/projects/boilerplate.png',
        website: 'https://www.npmjs.com/package/node-folder-structure'
    },
]