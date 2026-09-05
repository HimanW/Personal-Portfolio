import {
  Github, Linkedin, Mail, Download, ArrowRight, Twitter, Instagram, Facebook
} from "lucide-react";
import heroImage from "../images/himanwithana.png";

const SOCIALS = [
  { href: "https://github.com/HimanW", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/himanwithana", label: "LinkedIn", Icon: Linkedin },
  { href: "https://x.com/d1v3xx", label: "X", Icon: Twitter },
  { href: "https://www.instagram.com/d1v3__", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/d1v3x", label: "Facebook", Icon: Facebook },
  { href: "mailto:himanhansadh.withana@gmail.com", label: "Email", Icon: Mail }
];

const FOCUS = ["Generative AI", "RAG Systems", "Agentic AI", "Computer Vision", "NLP"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background - unchanged */}
      <div className="hero-grid-bg" aria-hidden="true" />
      <div
        className="hero-orb drift"
        aria-hidden="true"
        style={{ width: 460, height: 460, top: -140, right: -80, background: "var(--accent-1)" }}
      />
      <div
        className="hero-orb"
        aria-hidden="true"
        style={{ width: 380, height: 380, bottom: -160, left: -120, background: "var(--accent-3)" }}
      />

      <div className="shell relative px-6 pt-36 pb-24 md:pt-40 md:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="rise-stagger lg:col-span-7">
            <h1>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(1.75rem, 3.4vw, 2.6rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "var(--muted-foreground)",
                  marginBottom: ".2rem"
                }}
              >
                Hello, I&apos;m
              </span>
              <span className="gradient-text">Himan Withana</span>
            </h1>

            <p
              className="mt-5"
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
                fontWeight: 600,
                lineHeight: 1.45,
                letterSpacing: "-0.02em",
                color: "var(--foreground)"
              }}
            >
              AI/ML Engineer building production AI systems
            </p>

            <p className="lede mt-5" style={{ maxWidth: "38rem" }}>
              I take models from experimentation through to live, revenue-generating products.
              Retrieval pipelines, tool-calling agents, vision systems, and the backend
              services and interfaces that carry them into production.
            </p>

            <div className="chip-row mt-8">
              {FOCUS.map((f) => (
                <span key={f} className="chip">{f}</span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a className="btn btn-primary" href="/Resume.pdf" download>
                <Download size={17} />
                Download Resume
              </a>
              <a className="btn btn-ghost" href="#projects">
                View Selected Work
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  className="icon-btn icon-btn-round"
                  href={href}
                  aria-label={label}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="rise lg:col-span-5" style={{ animationDelay: ".3s" }}>
            <div className="relative mx-auto" style={{ maxWidth: "23rem" }}>
              <div className="portrait-ring">
                <img src={heroImage} alt="Himan Withana" />
              </div>

              {/* <div className="availability-badge drift">
                <span className="status-dot" />
                Available for hire
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}