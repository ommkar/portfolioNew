"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "Languages",
    skills: [
      { name: "C", image: "/images/c.png", level: 95 },
      { name: "C++", image: "/images/cpp.png", level: 92 },
      { name: "Python", image: "/images/python.png", level: 90 },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", image: "/images/react.png", },
      { name: "Node.js", image: "/images/node.png", level: 90 },
      { name: "Express", image: "/images/js.png", level: 88 },
      { name: "HTML5", image: "/images/html5.png", level: 82 },
      { name: "CSS3", image: "/images/css3.png", level: 85 },
      { name: "JavaScript", image: "/images/javascript.png", level: 75 },
      { name: "RESTful API", image: "/images/api.png", level: 78 },
    ],
  },
  {
    category: "Machine Learning & Data Science",
    skills: [
      { name: "TensorFlow", image: "/images/tensorflow.png", level: 82 },
      { name: "Keras", image: "/images/keras.png", level: 75 },
      { name: "Python", image: "/images/python.png", level: 80 },
      { name: "Scikit-learn", image: "/images/scikitlearn.png", level: 95 },
      { name: "Pandas", image: "/images/pandas.png", level: 78 },
      { name: "NumPy", image: "/images/numpy.png", level: 90 },
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
              <div className="mb-6">
                <h3 className="font-semibold text-lg" style={{ color: "var(--foreground)" }}>{group.category}</h3>
              </div>

              <ul className="flex flex-col gap-4">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: "var(--foreground)", opacity: 0.6 }} />
                    <img src={skill.image} alt={skill.name} className="w-5 h-5 object-contain" />
                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
