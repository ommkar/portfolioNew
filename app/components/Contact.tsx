"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "ommkar2005@gmail.com",
    href: "mailto:ommkar2005@gmail.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "Ommkar Pattnaik",
    href: "https://www.linkedin.com/in/ommkar-pattnaik-1b643b266/",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "@ommkar",
    href: "https://github.com/ommkar",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6"
      style={{ background: "var(--background)" }}
    >
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
          <span className="section-label">Let&apos;s Connect</span>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl" style={{ color: "var(--foreground)" }}>
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg" style={{ color: "var(--muted)" }}>
            Have a project in mind or just want to say hello? My inbox is always open
            — I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left: contact info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <h3 className="mb-1 text-lg font-semibold" style={{ color: "var(--foreground)" }}>
                Contact Info
              </h3>
              <p className="mb-6 text-sm" style={{ color: "var(--muted)" }}>
                Reach me through any of these channels.
              </p>
              <div className="flex flex-col gap-4">
                {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl p-4 transition-all duration-200 group"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)")
                    }
                  >
                    <span
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors"
                      style={{ background: "rgba(255,255,255,0.06)", color: "var(--foreground)" }}
                    >
                      {icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                        {label}
                      </p>
                      <p
                        className="truncate text-sm font-medium"
                        style={{ color: "var(--foreground)" }}
                      >
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div
              className="flex items-center gap-3 rounded-xl p-4"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full"
                  style={{ background: "rgba(255,255,255,0.4)" }}
                />
                <span
                  className="relative inline-flex h-3 w-3 rounded-full"
                  style={{ background: "rgba(255,255,255,0.5)" }}
                />
              </span>

            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--foreground)" }}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="form-input"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--foreground)" }}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--foreground)" }}>
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                placeholder="Project inquiry / Collaboration / Just saying hi"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="form-input"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--foreground)" }}>
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder="Tell me about your project, timeline, budget..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="form-input"
              />
            </div>

            <button
              id="contact-submit"
              type="submit"
              disabled={status === "sending" || status === "sent"}
              style={{ opacity: status === "sending" ? 0.7 : 1 }}
            >
              <span className="btn-glass w-full">
                <span className="btn-glass-inner w-full justify-center text-base">
                  {status === "idle" && (
                    <>
                      Send Message
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                  {status === "sending" && "Sending..."}
                  {status === "sent" && "✓ Message sent! I'll be in touch soon."}
                  {status === "error" && "Something went wrong. Please try again."}
                </span>
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
