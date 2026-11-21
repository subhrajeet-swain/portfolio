import { FaAws, FaReact } from "react-icons/fa";
import {
    SiApachekafka, SiDjango, SiDocker, SiFfmpeg, SiGooglegemini, SiMongodb, SiNodedotjs,
    SiPostgresql, SiPrisma, SiPython, SiRedis, SiReplicate, SiSupabase, SiTelegram, SiTensorflow, SiTypescript, SiVercel,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { HiMiniCommandLine } from "react-icons/hi2";
import type { IconType } from "react-icons";

export type Tech = { name: string; icon: IconType; color?: string };

// LangChain brands itself with emoji (🦜🔗, 🦜🕸️); simple-icons' glyphs aren't what people recognise.
const emojiIcon = (bird: string, mark: string): IconType =>
    function EmojiIcon({ className }) {
        return (
            <svg viewBox="0 0 30 22" className={className} aria-hidden>
                <text x="0" y="18" fontSize="18">{bird}</text>
                <text x="12" y="19" fontSize="16">{mark}</text>
            </svg>
        );
    };

export type ProjectItem = {
    title: string;
    kind: string;
    description: string;
    tech: Tech[];
    image?: string;
    website?: string;
    featured?: boolean;
};

export const socialLinks = {
    email: "subhrajeet.swain99@gmail.com",
    github: "https://github.com/subhrajeet-swain",
    linkedin: "https://www.linkedin.com/in/subhrajeetswain",
};

const tech: Record<string, Tech> = {
    openai: { name: "OpenAI", icon: RiOpenaiFill, color: "#E5E5E5" },
    gemini: { name: "Gemini", icon: SiGooglegemini, color: "#8E75F0" },
    tensorflow: { name: "TensorFlow.js", icon: SiTensorflow, color: "#FF6F00" },
    langchain: { name: "LangChain", icon: emojiIcon("🦜", "🔗") },
    langgraph: { name: "LangGraph", icon: emojiIcon("🦜", "🕸️") },
    python: { name: "Python", icon: SiPython, color: "#4B8BBE" },
    node: { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    ts: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    django: { name: "Django", icon: SiDjango, color: "#44B78B" },
    kafka: { name: "Kafka", icon: SiApachekafka, color: "#E5E5E5" },
    mongo: { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    postgres: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    redis: { name: "Redis", icon: SiRedis, color: "#FF4438" },
    supabase: { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    docker: { name: "Docker", icon: SiDocker, color: "#2496ED" },
    aws: { name: "AWS", icon: FaAws, color: "#FF9900" },
    next: { name: "Next.js", icon: TbBrandNextjs, color: "#FFFFFF" },
    react: { name: "React", icon: FaReact, color: "#61DAFB" },
    telegram: { name: "Telegram", icon: SiTelegram, color: "#26A5E4" },
    prisma: { name: "Prisma", icon: SiPrisma, color: "#E5E5E5" },
    replicate: { name: "Replicate", icon: SiReplicate, color: "#E5E5E5" },
    ffmpeg: { name: "FFmpeg", icon: SiFfmpeg, color: "#5CB85C" },
    vercel: { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    cli: { name: "CLI", icon: HiMiniCommandLine, color: "#E5E5E5" },
};

export const skillGroups: { label: string; skills: Tech[] }[] = [
    { label: "AI & LLM", skills: [tech.openai, tech.langchain, tech.gemini, tech.langgraph] },
    { label: "Backend", skills: [tech.python, tech.node, tech.ts, tech.django] },
    { label: "Data", skills: [tech.mongo, tech.postgres, tech.redis, tech.supabase] },
    { label: "Infra & UI", skills: [tech.docker, tech.aws, tech.next, tech.react] },
];

export const projects: ProjectItem[] = [
    {
        title: "AI Assessment & Proctoring",
        kind: "Hiring SaaS",
        description: "A hiring platform that proctors the exam so recruiters don't have to. Vision runs in the candidate's browser, and Gemini only looks at the few seconds around a flag, never the whole recording. Cheap enough to run on every candidate.",
        tech: [tech.tensorflow, tech.gemini, tech.openai, tech.redis],
        image: "/projects/assessment.jpeg",
        website: "https://assessment-frontend-git-development-witarist.vercel.app",
        featured: true,
    },
    {
        title: "ProTrader",
        kind: "LLM order parser",
        description: "Reads trade calls off Telegram and places real orders through a broker. If a message is ambiguous it refuses instead of guessing, because here a wrong parse costs money. Tuned against a hand-scored set of real calls.",
        tech: [tech.telegram, tech.node, tech.prisma, tech.docker],
        featured: true,
    },
    {
        title: "StyleAI",
        kind: "AI video",
        description: "Turn a few photos into a property video. Generate clips with AI models, then cut them together with music in a browser editor.",
        tech: [tech.replicate, tech.next, tech.ffmpeg],
        image: "/projects/stylai.jpeg",
        website: "https://stylai.fr",
    },
    {
        title: "Hire@Witarist",
        kind: "LLM search",
        description: "Search 1,000+ vetted developers in plain English. Rebuilt as a fully static site, so there's no database to slow it down.",
        tech: [tech.openai, tech.next, tech.vercel],
        image: "/projects/witarist.jpeg",
        website: "https://witarist.com",
    },
    {
        title: "Gold Megha",
        kind: "Manufacturing ERP",
        description: "An ERP for a jewellery factory. I learned the trade from the people on the floor and named every screen in their words.",
        tech: [tech.react, tech.supabase, tech.ts],
        image: "/projects/goldmegha.jpeg",
        website: "https://goldmegha.com",
    },
    {
        title: "Providocs",
        kind: "Healthcare compliance",
        description: "Care documentation for US home-care agencies, built to pass an Ohio state audit. We worked the regulations out together on calls.",
        tech: [tech.next, tech.mongo, tech.redis],
        image: "/projects/providocs.jpeg",
        website: "https://providocs.com",
    },
    {
        title: "BACSWN",
        kind: "Flight telemetry",
        description: "Live flight tracking on gigabytes of telemetry a day, plus the carbon each flight burns, down to what it emits over a single country.",
        tech: [tech.kafka, tech.node, tech.python],
        image: "/projects/carbon.png",
    },
    {
        title: "node-folder-structure",
        kind: "npm package",
        description: "One command to scaffold a layered Node.js API with the database, routes and server already wired up.",
        tech: [tech.node, tech.cli],
        image: "/projects/boilerplate.png",
        website: "https://www.npmjs.com/package/node-folder-structure",
    },
];

export const experiences = [
    {
        title: "Software Engineer Executive",
        company: "WitArist IT Services",
        duration: "Jun 2025 – present",
        location: "Noida, India",
        description: [
            "Own the AI side of the company's products: retrieval, LLM scoring, agents, and the guardrails that decide when the model stays quiet.",
            "First technical voice clients talk to. I turn discovery calls into scope, then demo what we built.",
            "Lead a team of three, review every PR, and run releases from Docker build to production.",
        ],
        tech: [tech.openai, tech.langchain, tech.node, tech.docker],
    },
    {
        title: "Full Stack Developer",
        company: "APIDOTS",
        duration: "Apr 2023 – Jun 2025",
        location: "Chandigarh, India",
        description: [
            "Shipped LLM and vector search features into client products across several model providers.",
            "Built multi-tenant Node.js APIs and real-time services on Kafka and WebSockets.",
            "Moved monoliths into Docker services with CI/CD and blue-green deploys on AWS and GCP.",
        ],
        tech: [tech.node, tech.kafka, tech.mongo, tech.aws],
    },
];
