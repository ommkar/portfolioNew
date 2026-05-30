"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10, 10, 10, 0.8)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Desktop links — centered */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="nav-link"
                style={{
                  color: active === href ? "var(--foreground)" : undefined,
                }}
              >
                {label}
                {active === href && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 h-[1.5px] w-full rounded-full"
                    style={{ background: "var(--foreground)" }}
                    transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — simple text button matching theme */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:opacity-80"
          style={{ color: "var(--foreground)" }}
        >
          Hire me
          <span className="opacity-60">→</span>
        </a>

        {/* Hamburger */}
        <button
          id="mobile-menu-btn"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-[1.5px] w-6 rounded-full transition-all duration-300"
              style={{
                background: "var(--foreground)",
                transform:
                  open && i === 0 ? "translateY(7.5px) rotate(45deg)"
                    : open && i === 1 ? "scaleX(0)"
                      : open && i === 2 ? "translateY(-7.5px) rotate(-45deg)"
                        : undefined,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
            style={{ background: "rgba(10, 10, 10, 0.95)" }}
          >
            <ul
              className="flex flex-col gap-2 px-6 pb-6"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {links.map(({ label, href }) => (
                <li key={href} className="pt-3">
                  <a
                    href={href}
                    className="nav-link block"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium py-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Hire me →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
