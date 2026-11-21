// Everything the page says lives here. Source of truth: the AI Engineer resume.

export const profile = {
  name: "Subhrajeet Swain",
  role: "AI Engineer · Forward Deployed Engineer",
  location: "Noida, India",
  email: "subhrajeet.swain99@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/subhrajeetswain" },
    { label: "GitHub", href: "https://github.com/subhrajeet-swain" },
    { label: "Résumé (PDF)", href: "/subhrajeet-resume.pdf" },
  ],
  intro: [
    "I've spent three and a half years building production software, the last two on LLM systems: RAG over vector search, LLM parsing and scoring pipelines, and agentic workflows with tool calling, state and guardrails. On each one I own the backend, the retrieval layer, evaluation and deployment.",
    "On four client products I was the direct technical contact, running discovery, learning the domain from the customer and turning an undefined ask into a working system. I'm most useful where the requirement is still ambiguous and someone has to sit with the client and build it.",
  ],
};

export type Project = {
  title: string;
  tagline: string;
  href?: string;
  linkLabel?: string;
  body: string[];
  stack: string;
};

export const projectGroups: { label: string; projects: Project[] }[] = [
  {
    label: "AI systems",
    projects: [
      {
        title: "AI Assessment & Proctoring Platform",
        tagline: "Multi-tenant technical hiring SaaS",
        href: "https://assessment-frontend-git-development-witarist.vercel.app",
        linkLabel: "Live",
        body: [
          "Candidates take skill-matched MCQ sets, a live coding round and a scored video intro. Violations are counted server-side against weighted thresholds for warning, auto-submit and hard termination, fed by TensorFlow COCO-SSD running in the browser.",
          "I kept AI proctoring cheap by design. Each ML flag carries a confidence score and a video timestamp, and Gemini reviews only a short window around high-confidence flags instead of the whole recording. The model gets spent where it earns its cost.",
        ],
        stack: "TensorFlow.js, OpenAI, Gemini, Express, TypeScript, MongoDB, Redis, Next.js, Piston, DigitalOcean",
      },
      {
        title: "ProTrader",
        tagline: "LLM parsing pipeline for live financial orders",
        body: [
          "Turns unstructured Telegram trade calls into structured broker orders with a Groq LLM and places live trades through MetaApi.",
          "Real money moves through this, so the parser refuses anything it can't fully resolve instead of guessing at a partial signal. The guardrail is the product. I validated it against a hand-scored set of real calls and tracked refusal correctness over parse accuracy: a wrong refusal costs one trade, a wrong parse costs money. Thresholds were then tuned from production review of live orders.",
        ],
        stack: "Groq, Node.js, Express, Prisma, MongoDB, Telegraf, MetaApi, Docker",
      },
      {
        title: "StyleAI",
        tagline: "AI video generation platform",
        href: "https://stylai.fr",
        linkLabel: "stylai.fr",
        body: [
          "Users upload images, generate video through Replicate and Kling, then cut clips together with music and transitions in a multi-track editor with real-time preview. Composition runs server-side on FFmpeg with Shotstack export, shipped on Docker with GitHub Actions CI/CD.",
        ],
        stack: "Replicate, Kling, Next.js, Node.js, FFmpeg, Shotstack, Stripe, Firebase, Docker",
      },
      {
        title: "Hire@Witarist",
        tagline: "LLM intent extraction over a developer catalogue",
        href: "https://witarist.com",
        linkLabel: "witarist.com",
        body: [
          "A searchable catalogue of 1,000+ pre-vetted developers where OpenAI extracts intent from the natural-language search query.",
          "It's a read-heavy workload, so I rebuilt it as a fully pre-rendered site on Vercel's CDN with an offline export and removed the runtime database entirely.",
        ],
        stack: "OpenAI, Next.js, TypeScript, Redux, TanStack Query, Vercel Functions",
      },
    ],
  },
  {
    label: "Forward deployed",
    projects: [
      {
        title: "Gold Megha",
        tagline: "Jewellery manufacturing ERP, built from the shop floor up",
        href: "https://goldmegha.com",
        linkLabel: "goldmegha.com",
        body: [
          "I had no background in jewellery manufacturing. I learned the trade on calls with the floor (karigar ledgers, melting purity, tree numbering, WIP and metal-loss reconciliation) and named every state in the software after what the department actually calls it, so nobody using it has to translate.",
          "The party ledger is two-sided and nets on fine weight, with financial-year windows and brought-forward balances. Access control lives in Supabase Row-Level Security policies rather than application code, so the rules sit next to the data.",
        ],
        stack: "React, Vite, TypeScript, shadcn/ui, Supabase (Postgres + RLS), Vitest, Playwright",
      },
      {
        title: "Providocs",
        tagline: "Care documentation for US home and community-based service agencies",
        href: "https://providocs.com",
        linkLabel: "providocs.com",
        body: [
          "The client couldn't fully articulate the Ohio DODD regulations, so we worked them out together on calls. The result has to survive a compliance audit, not just a demo.",
          "It's multi-tenant and covers daily documentation, transport scheduling, attendance and incident management under role-based access control.",
        ],
        stack: "Express, TypeScript, MongoDB, Redis, Next.js 15, Redux Toolkit, TanStack Query",
      },
      {
        title: "BACSWN",
        tagline: "Real-time flight telemetry and carbon emissions",
        body: [
          "Kafka and WebSocket services take in gigabytes of flight telemetry a day for live position updates, split into Dockerised microservices behind a load balancer.",
          "On top of that it computes per-flight carbon emissions and optimised routes from weather data and aircraft specs, including a formula for the CO₂ emitted while crossing a country's airspace.",
        ],
        stack: "Node.js, Python, Kafka, WebSockets, MongoDB, Docker",
      },
    ],
  },
  {
    label: "Open source",
    projects: [
      {
        title: "node-folder-structure",
        tagline: "npm package",
        href: "https://www.npmjs.com/package/node-folder-structure",
        linkLabel: "npm",
        body: [
          "Scaffolds a Node.js app in a three-layer architecture with database connections, CRUD routes and server setup already wired.",
        ],
        stack: "Node.js, Express, CLI",
      },
    ],
  },
];

export const experience = [
  {
    company: "WitArist IT Services",
    place: "Noida",
    role: "Software Engineer Executive",
    period: "Jun 2025 – now",
    points: [
      "Design and ship the AI features across the company's SaaS products: RAG over vector search, LLM parsing and scoring, agentic workflows with tool calling and memory, and the guardrails that decide when the model is allowed to answer at all.",
      "Forward-deployed contact for clients: discovery calls, scoping open-ended asks, modelling unfamiliar domains, release demos and change requests.",
      "Own backend architecture and deployment end to end, and lead delivery for a team of three developers.",
    ],
  },
  {
    company: "APIDOTS",
    place: "Chandigarh",
    role: "Full Stack Developer",
    period: "Apr 2023 – Jun 2025",
    points: [
      "Integrated LLM and vector search into client products, including RAG pipelines across several model providers.",
      "Built REST APIs in Node.js and Express with caching, role-based access and tenant isolation, plus real-time services on Kafka and WebSockets.",
      "Handled containers and deployment: Docker, Nginx, GitHub Actions, blue-green deploys on AWS and GCP.",
    ],
  },
];

export const toolkit = [
  { label: "AI & LLM", items: "RAG (chunking, embeddings, retrieval, reranking), agentic workflows, tool calling, LangGraph, LangChain, guardrails and output validation, grounding evals, OpenAI, Anthropic, Gemini, Groq, Hugging Face, Replicate, MCP servers, TensorFlow.js" },
  { label: "Data", items: "MongoDB Atlas Vector Search, semantic search, PostgreSQL, MongoDB, Redis, Supabase" },
  { label: "Backend", items: "Python, Django REST Framework, Node.js, TypeScript, Express, GraphQL, WebSockets, Kafka, auth, multi-tenant design" },
  { label: "Deploy", items: "Docker, GitHub Actions, Nginx, AWS, GCP, Vercel, DigitalOcean" },
  { label: "Frontend", items: "React, Next.js, Tailwind CSS" },
];

export const education = "B.Tech, Electrical Engineering · Parala Maharaja Engineering College, Berhampur · 2019–2023";
