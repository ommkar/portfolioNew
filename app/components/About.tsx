"use client";

import { motion } from "framer-motion";

const EDUCATION = [
  {
    year: "2023 – 2027 (Expected)",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Odisha University of Technology and Research",
    description:
      "Focused on AI/ML, data structures and algorithms and full-stack development. CGPA 8.93",
  },
  {
    year: "2021 – 2023",
    degree: "12th",
    institution: "Doon International School",
    description:
      "Studied Science stream. Achieved 91.6%",
  },
  {
    year: "2021",
    degree: "10th",
    institution: "St. Xavier International School",
    description:
      "Completed secondary education with 89.4%",
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
            {/* Photo */}
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
              <img
                src="/photo.jpg"
                alt="Ommkar Pattnaik"
                className="relative h-full w-full object-cover rounded-2xl"
              />
            </div>

            {/* Bio */}
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Hey! I&apos;m <strong style={{ color: "var(--foreground)" }}>Ommkar Pattnaik</strong>, a
              Computer Science undergraduate with experience in AI agents, machine learning, and full-stack web development. Skilled in Python, JavaScript,
              and modern machine learning tools (TensorFlow, Scikit-learn) with a strong interest in building intelligent systems and data-driven applications.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              I am passionate about leveraging technology to solve real-world problems, and I enjoy working on projects that push the boundaries of what's possible.
            </p>

            {/* Download CV */}
            <a href="/update_resume.pdf" download="Ommkar_Pattnaik_Resume.pdf">
              <span className="btn-glass group w-fit">
                <span className="btn-glass-inner group-hover:-translate-y-0.5 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </span>
              </span>
            </a>
          </motion.div>

          {/* Right: Education */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex flex-col gap-2"
          >
            <h3 className="mb-6 text-xl font-semibold" style={{ color: "var(--foreground)" }}>
              Education
            </h3>
            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div
                className="absolute left-[19px] top-3 bottom-3 w-px"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />

              {EDUCATION.map((item, i) => (
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
                      className="flex h-10 w-10 items-center justify-center rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "2px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{ color: "var(--foreground)" }}>
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
                      </svg>
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
                      {item.degree}
                    </p>
                    <p className="text-xs mb-2 font-medium" style={{ color: "var(--muted)" }}>
                      {item.institution}
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
