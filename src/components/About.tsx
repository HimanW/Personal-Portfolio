import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Twitter, Instagram, Facebook, Mail } from "lucide-react";

const SOCIALS = [
  { href: "https://github.com/HimanW", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/himanwithana", label: "LinkedIn", Icon: Linkedin },
  { href: "https://x.com/d1v3xx", label: "X", Icon: Twitter },
  { href: "https://www.instagram.com/d1v3__", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/d1v3x", label: "Facebook", Icon: Facebook },
  { href: "mailto:himanhansadh.withana@gmail.com", label: "Email", Icon: Mail }
];

export function About() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const show = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };

  // small delay so the cursor can travel from the button into the popup
  const hide = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 240);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <section
      className="section scroll-offset"
      id="about">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">Get to Know Me</span>
          <h2>A Bit More About Me</h2>
          <p>A short introduction to the person behind the projects: where I come from, the kind of engineering I care about, and the work I want to keep doing.</p>
        </div>

        <div
          className="rise"
          style={{ maxWidth: "50rem", margin: "0 auto", marginTop: "-1.5rem", textAlign: "center" }}
        >
          <p className="lede">
            I'm an AI/ML engineer and a builder at heart, based in Sri Lanka. Outside of
            engineering, I'm happiest taking something apart to work out how it fits back
            together.
          </p>

          <p className="lede" style={{ marginTop: "1.5rem" }}>
            Professionally, I've spent the past year building enterprise AI systems end to
            end, across generative AI, retrieval, agentic tool calling, computer vision and
            natural language processing. I'm as comfortable in a training loop as in a
            backend service or the interface a customer actually uses.
          </p>

          <p className="lede" style={{ marginTop: "1.5rem" }}>
            Alongside my industry work, I'm completing a BSc (Hons) in Artificial
            Intelligence and Data Science with Robert Gordon University, where my research
            looks at how models represent uncertainty. I also volunteer with IEEE Young
            Professionals Sri Lanka, running national AI education workshops.
          </p>

          {/* Contact button with hover / click reveal */}
          <div className="mt-10 flex justify-center">
            <div
              style={{ position: "relative", display: "inline-block" }}
              onMouseEnter={show}
              onMouseLeave={hide}
              onFocus={show}
              onBlur={hide}
            >
              <button
                className="btn btn-primary"
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <Mail size={17} />
                Contact Me
              </button>

              <div
                role="group"
                aria-label="Contact links"
                aria-hidden={!open}
                style={{
                  position: "absolute",
                  bottom: "calc(100% + 14px)",
                  left: "50%",
                  display: "flex",
                  gap: ".5rem",
                  padding: ".6rem",
                  borderRadius: "9999px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-lift)",
                  whiteSpace: "nowrap",
                  zIndex: 30,
                  opacity: open ? 1 : 0,
                  visibility: open ? "visible" : "hidden",
                  pointerEvents: open ? "auto" : "none",
                  transform: `translateX(-50%) translateY(${open ? "0" : "8px"}) scale(${open ? 1 : 0.94})`,
                  transformOrigin: "bottom center",
                  transition:
                    "opacity .22s ease, transform .26s cubic-bezier(.22,.61,.36,1), visibility .22s"
                }}
              >
                {SOCIALS.map(({ href, label, Icon }, i) => (
                  <a
                    key={label}
                    className="icon-btn icon-btn-round"
                    href={href}
                    aria-label={label}
                    title={label}
                    tabIndex={open ? 0 : -1}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      transitionDelay: open ? `${i * 35}ms` : "0ms",
                      transform: open ? "translateY(0)" : "translateY(6px)",
                      opacity: open ? 1 : 0
                    }}
                  >
                    <Icon size={17} />
                  </a>
                ))}

                {/* pointer */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    marginLeft: "-6px",
                    marginTop: "-6px",
                    width: "12px",
                    height: "12px",
                    background: "var(--surface)",
                    borderRight: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                    transform: "rotate(45deg)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}