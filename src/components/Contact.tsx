import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Check } from "lucide-react";

const EMAIL = "himanhansadh.withana@gmail.com";

const CHANNELS = [
  { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { Icon: Phone, label: "Phone", value: "+94 76 759 9838", href: "tel:+94767599838" },
  { Icon: Github, label: "GitHub", value: "github.com/HimanW", href: "https://github.com/HimanW" },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/himanwithana", href: "https://www.linkedin.com/in/himanwithana" }
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const ready = form.name.trim() !== "" && form.message.trim() !== "";

  const send = () => {
    const subject = form.subject.trim() || `Portfolio enquiry from ${form.name.trim()}`;
    const body = [
      `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      "",
      form.message
    ].filter(Boolean).join("\n");

    window.location.href =
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section scroll-offset" id="contact" style={{ background: "var(--surface)" }}>
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s Build Something</h2>
          <p>
            I&apos;m open to AI/ML Engineer, AI Engineer and Full-Stack AI Engineer roles.
            If you&apos;re working on applied ML, generative AI or computer vision, I&apos;d like to hear about it.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5 items-stretch">
          {/* Channels */}
          <div className="lg:col-span-2 flex flex-col gap-4" style={{ height: "100%" }}>
            {CHANNELS.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                className="card card-hover flex items-center gap-4"
                style={{ padding: "1.25rem 1.5rem", flex: "1 1 auto" }}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <span
                  className="flex items-center justify-center"
                  style={{
                    width: "2.5rem", height: "2.5rem", borderRadius: "10px",
                    background: "var(--accent-soft)", color: "var(--accent-2)", flexShrink: 0
                  }}
                >
                  <Icon size={18} />
                </span>
                <span style={{ minWidth: 0 }}>
                  <span
                    className="block"
                    style={{
                      fontSize: ".75rem", fontWeight: 600, letterSpacing: ".08em",
                      textTransform: "uppercase", color: "var(--muted-foreground)"
                    }}
                  >
                    {label}
                  </span>
                  <span
                    className="block"
                    style={{ fontSize: ".9375rem", fontWeight: 500, wordBreak: "break-word" }}
                  >
                    {value}
                  </span>
                </span>
              </a>
            ))}

            <div className="card flex items-center gap-4" style={{ padding: "1.25rem 1.5rem", flex: "1 1 auto" }}>
              <span
                className="flex items-center justify-center"
                style={{
                  width: "2.5rem", height: "2.5rem", borderRadius: "10px",
                  background: "var(--accent-soft)", color: "var(--accent-2)", flexShrink: 0
                }}
              >
                <MapPin size={18} />
              </span>
              <span>
                <span
                  className="block"
                  style={{
                    fontSize: ".75rem", fontWeight: 600, letterSpacing: ".08em",
                    textTransform: "uppercase", color: "var(--muted-foreground)"
                  }}
                >
                  Location
                </span>
                <span className="block" style={{ fontSize: ".9375rem", fontWeight: 500 }}>
                  Dehiwala, Sri Lanka
                </span>
                <span style={{ fontSize: ".8125rem", color: "var(--muted-foreground)" }}>
                  Open to remote and relocation
                </span>
              </span>
            </div>
          </div>

          {/* Form - fills the column so both sides end level */}
          <div className="lg:col-span-3">
            <div className="card card-pad flex flex-col" style={{ height: "100%" }}>
              <h3 style={{ fontSize: "1.125rem" }}>Send a Message</h3>
              <p
                className="mt-2"
                style={{ fontSize: ".875rem", color: "var(--muted-foreground)" }}
              >
                Fill this in and it will open a pre-filled draft in your email client.
              </p>

              <div className="mt-6 flex flex-col gap-4 grow">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="field-label" htmlFor="cf-name">Name</label>
                    <input id="cf-name" className="field" placeholder="Jane Perera"
                      value={form.name} onChange={set("name")} />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="cf-email">Email</label>
                    <input id="cf-email" type="email" className="field" placeholder="jane@company.com"
                      value={form.email} onChange={set("email")} />
                  </div>
                </div>

                <div>
                  <label className="field-label" htmlFor="cf-subject">Subject</label>
                  <input id="cf-subject" className="field" placeholder="Role opportunity, collaboration, question"
                    value={form.subject} onChange={set("subject")} />
                </div>

                <div className="flex flex-col grow">
                  <label className="field-label" htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    className="field grow"
                    style={{ resize: "vertical", minHeight: "9rem" }}
                    placeholder="Tell me a little about what you're building."
                    value={form.message}
                    onChange={set("message")}
                  />
                </div>

                <button
                  className={ready ? "btn btn-primary" : "btn btn-ghost"}
                  style={{
                    width: "100%",
                    marginTop: ".25rem",
                    cursor: ready ? "pointer" : "not-allowed",
                    color: ready ? undefined : "var(--muted-foreground)"
                  }}
                  onClick={send}
                  disabled={!ready}
                >
                  {sent ? <Check size={17} /> : <Send size={16} />}
                  {sent ? "Draft opened" : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}