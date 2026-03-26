"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "CloudDash",
    description:
      "A real-time cloud infrastructure monitoring dashboard with live metrics, alert management, and cost analytics across AWS, GCP, and Azure.",
    tags: ["Next.js", "TypeScript", "WebSocket", "Chart.js", "Terraform"],
    emoji: "☁️",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "AiWrite",
    description:
      "AI-powered writing assistant with context memory, multiple tone presets, grammar suggestions, and Google Docs-style collaboration.",
    tags: ["React", "OpenAI API", "Node.js", "PostgreSQL", "tRPC"],
    emoji: "✍️",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "ShopFlow",
    description:
      "A headless e-commerce platform with a composable architecture, high-performance SSG/ISR, and Stripe-powered checkout.",
    tags: ["Next.js", "Sanity CMS", "Stripe", "Tailwind", "Vercel"],
    emoji: "🛒",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "DevSync",
    description:
      "P2P collaborative code editor with real-time cursors, inline chat, and Monaco editor integration for pair programming.",
    tags: ["React", "Yjs", "WebRTC", "Monaco", "Express"],
    emoji: "🔄",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "TaskOrbit",
    description:
      "Kanban-style project management tool with drag-and-drop, time tracking, GitHub integration, and sprint analytics.",
    tags: ["Next.js", "Prisma", "Redis", "Zustand", "Framer Motion"],
    emoji: "🚀",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Pixelate",
    description:
      "In-browser image editing app with layer support, filters, CSS-powered effects, and export to PNG/SVG.",
    tags: ["React", "Canvas API", "Zustand", "Vite", "TypeScript"],
    emoji: "🎨",
    link: "#",
    github: "#",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6"
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="section-label">My Work</span>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl" style={{ color: "var(--foreground)" }}>
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg" style={{ color: "var(--muted)" }}>
            A selection of projects I&apos;ve built — from SaaS products to
            developer tools and open-source contributions.
          </p>
        </motion.div>

        {/* Featured grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
        >
          {PROJECTS.filter((p) => p.featured).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* Other projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.filter((p) => !p.featured).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* View more — glass button like hero */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn-glass group">
              <span className="btn-glass-inner group-hover:-translate-y-0.5 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View All on GitHub
                <span className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <motion.article variants={cardVariants} className="card group flex flex-col gap-4 p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {project.emoji}
        </div>
        <div className="flex gap-2">
          <a
            href={project.github}
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: "var(--muted)", background: "rgba(255,255,255,0.06)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
            }
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href={project.link}
            aria-label="Live demo"
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: "var(--muted)", background: "rgba(255,255,255,0.06)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
            }
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Title & description — same muted color for both */}
      <div className="flex-1">
        <h3 className="mb-2 text-lg font-semibold" style={{ color: "var(--muted)" }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md px-2.5 py-1 text-xs font-medium"
            style={{ background: "rgba(255,255,255,0.06)", color: "var(--muted)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-px w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.3), transparent)",
        }}
      />
    </motion.article>
  );
}
