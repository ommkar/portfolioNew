"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ background: "var(--background)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <p className="text-sm" style={{ color: "var(--muted)" }}>
        Built with{" "}
        <span style={{ opacity: 0.6 }}>♥</span> using{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition-opacity hover:opacity-70"
          style={{ color: "var(--foreground)" }}
        >
          Next.js
        </a>{" "}
        &amp;{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition-opacity hover:opacity-70"
          style={{ color: "var(--foreground)" }}
        >
          Tailwind CSS
        </a>
        {" — "}&copy; {year} Ommkar Pattnaik. All rights reserved.
      </p>
    </footer>
  );
}
