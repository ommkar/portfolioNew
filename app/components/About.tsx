"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Shipped" },
  { value: "15+", label: "Happy Clients" },
  { value: "8k+", label: "GitHub Stars" },
];

const TIMELINE = [
  {
    year: "2024",
    role: "Senior Full-Stack Engineer",
    company: "Vercel Inc.",
    description:
      "Led development of high-traffic Next.js-based SaaS products. Mentored junior devs and drove architectural decisions across 3 product squads.",
  },
  {
    year: "2022",
    role: "Full-Stack Developer",
    company: "Stripe",
    description:
      "Built and maintained payment flow UIs, dashboard components, and internal tooling. Contributed to the React library used across all Stripe products.",
  },
  {
    year: "2020",
    role: "Frontend Developer",
    company: "Freelance",
    description:
      "Delivered 20+ projects for startups and agencies. Specialized in React, animation, and performance optimization for web apps.",
  },
  {
    year: "2019",
    role: "B.Sc. Computer Science",
    company: "MIT",
    description:
      "Graduated with honors. Focused on distributed systems, HCI, and algorithms. Published research on real-time collaborative editing.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6" style={{ background: "var(--background)" }}>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="section-label">The Story</span>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl" style={{ color: "var(--foreground)" }}>
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left: story */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex flex-col gap-6"
          >
            {/* Avatar placeholder */}
            <div
              className="relative mb-2 flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.3), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.15), transparent 60%)",
                }}
              />
              <span className="relative text-8xl select-none">👨‍💻</span>
            </div>

            {/* Bio */}
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Hey! I&apos;m <strong style={{ color: "var(--foreground)" }}>Ommkar Pattnaik</strong>, a
              full-stack developer with a passion for building products that make a real
              difference. I thrive at the intersection of design and engineering — creating
              interfaces that are both beautiful and blazing fast.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              When I&apos;m not shipping code, you&apos;ll find me contributing to open-source
              projects, writing technical blog posts, or exploring the latest in AI tooling.
              I believe in writing code that&apos;s not just functional, but a pleasure to
              maintain.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <p className="text-2xl font-bold gradient-text">{value}</p>
                  <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Download CV */}
            <a href="#">
              <span className="btn-glass group w-fit">
                <span className="btn-glass-inner group-hover:-translate-y-0.5 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV
                </span>
              </span>
            </a>
          </motion.div>

          {/* Right: timeline */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex flex-col gap-2"
          >
            <h3 className="mb-6 text-xl font-semibold" style={{ color: "var(--foreground)" }}>
              Experience &amp; Education
            </h3>
            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div
                className="absolute left-[19px] top-3 bottom-3 w-px"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />

              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "2px solid rgba(255,255,255,0.25)",
                        color: "var(--foreground)",
                      }}
                    >
                      {item.year.slice(2)}
                    </div>
                  </div>
                  {/* Content */}
                  <div
                    className="flex-1 rounded-xl p-4"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <p className="text-xs font-medium mb-1" style={{ color: "var(--muted)" }}>
                      {item.year}
                    </p>
                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                      {item.role}
                    </p>
                    <p className="text-xs mb-2 font-medium" style={{ color: "var(--muted)" }}>
                      {item.company}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
