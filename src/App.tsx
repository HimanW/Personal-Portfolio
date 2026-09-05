import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

const NAV = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "color-mix(in oklab, var(--background) 82%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        transition: "background .3s ease, border-color .3s ease, backdrop-filter .3s ease"
      }}
    >
      <div className="shell flex items-center justify-between px-6" style={{ height: "4.5rem" }}>
        <a href="#top" style={{ fontWeight: 700, fontSize: "1.0625rem", letterSpacing: "-0.02em" }}>
          Himan<span style={{ color: "var(--accent-2)" }}>.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2"
              style={{ fontSize: ".9rem", fontWeight: 500, color: "var(--muted-foreground)", borderRadius: "8px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
            >
              {item.label}
            </a>
          ))}
          <span style={{ width: "1px", height: "1.25rem", background: "var(--border)", margin: "0 .6rem" }} />
          <ThemeToggle />
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="icon-btn"
            style={{ width: "2.375rem", height: "2.375rem" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
        >
          <div className="flex flex-col px-6 py-3">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: ".75rem 0",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--muted-foreground)",
                  borderBottom: "1px solid var(--border)"
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div id="top" style={{ minHeight: "100vh", background: "var(--background)" }}>
        <Nav />

        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <footer className="site-footer">
          <div className="shell px-6" style={{ paddingBlock: "3rem", textAlign: "center" }}>
            <p style={{ fontWeight: 700, fontSize: "1.0625rem", letterSpacing: "-0.02em" }}>
              Himan Withana
            </p>
            <p
              className="mt-2"
              style={{ fontSize: ".9375rem", color: "var(--muted-foreground)" }}
            >
              AI/ML Engineer · Generative AI &amp; LLM Applications · Computer Vision · Full-Stack AI Engineering
            </p>
            <p
              className="mt-6"
              style={{ fontSize: ".8125rem", color: "var(--muted-foreground)", opacity: .75 }}
            >
              © {new Date().getFullYear()} Himan Withana. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}