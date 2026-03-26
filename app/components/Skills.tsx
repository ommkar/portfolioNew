"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "Languages",
    icon: "🎨",
    skills: [
      { name: "C", icon: "⚛️", level: 95 },
      { name: "C++", icon: "▲", level: 92 },
      { name: "Python", icon: "TS", level: 90 },
      { name: "Java", icon: "💨", level: 93 },
    ],
  },
  {
    category: "Web Development",
    icon: "⚙️",
    skills: [
      { name: "React", icon: "⚛️", level: 95 },
      { name: "Node.js", icon: "🟢", level: 90 },
      { name: "Express", icon: "🚂", level: 88 },
      { name: "HTML5", icon: "🐘", level: 82 },
      { name: "CSS3", icon: "◈", level: 85 },
      { name: "JavaScript", icon: "🔴", level: 75 },
      { name: "RESTful API", icon: "◉", level: 78 },
    ],
  },
  {
    category: "Machine Learning & Data Science",
    icon: "🔧",
    skills: [
      { name: "TensorFlow", icon: "🐳", level: 82 },
      { name: "Keras", icon: "☁️", level: 75 },
      { name: "Python", icon: "🔄", level: 80 },
      { name: "Scikit-learn", icon: "🌿", level: 95 },
      { name: "Pandas", icon: "🐧", level: 78 },
      { name: "NumPy", icon: "▲", level: 90 },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6"
      style={{ background: "var(--background)" }}
    >
      {/* Top line accent */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="section-label">Expertise</span>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl" style={{ color: "var(--foreground)" }}>
            Skills &amp; Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg" style={{ color: "var(--muted)" }}>
            The tools and technologies I use to bring ideas to life, from
            pixel-perfect UIs to cloud-native backends.
          </p>
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div key={group.category} variants={itemVariants} className="card p-6">
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-xl"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {group.icon}
                </span>
                <h3 className="font-semibold text-lg" style={{ color: "var(--foreground)" }}>{group.category}</h3>
              </div>

              <div className="flex flex-col gap-4">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other tools row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12"
        >
          <p className="mb-5 text-center text-sm font-medium" style={{ color: "var(--muted)" }}>
            Also worked with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python", "Rust", "Go", "MongoDB", "Supabase", "Figma",
              "Playwright", "Jest", "Zustand", "tRPC", "Kafka", "NGINX",
            ].map((tech) => (
              <span key={tech} className="skill-badge text-sm">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom line accent */}
      <div
        className="pointer-events-none absolute left-0 bottom-0 h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
        }}
      />
    </section>
  );
}

function SkillBar({ skill }: { skill: { name: string; icon: string; level: number } }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base w-5 text-center">{skill.icon}</span>
          <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>
          {skill.level}%
        </span>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full"
        style={{ background: "rgba(255,255,255,0.10)" }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.25))",
          }}
        />
      </div>
    </div>
  );
}
