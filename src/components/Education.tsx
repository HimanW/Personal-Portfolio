import { GraduationCap, FlaskConical, Trophy, Users } from "lucide-react";

const COURSEWORK = [
  "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Edge AI",
  "Data Engineering", "Advanced Mathematics", "Algorithms", "Database Systems"
];

const AWARDS = [
  { title: "1st Place - Cutting Edge 2025", detail: "VisionQuest, Data Science Group Project category, IIT." },
  { title: "Nominee - National ICT Awards 2025", detail: "NBQSA, British Computer Society Sri Lanka." },
  { title: "IEEEXtreme 18.0", detail: "IEEE Region 10 global competitive programming." }
];

const COMMUNITY = [
  { title: "Coordinator, AI-Driven Sri Lanka", detail: "IEEE Young Professionals Sri Lanka. Ran national AI education workshops." },
  { title: "Developer, IEEE CIS", detail: "IIT Student Chapter. Led AI and web project development." }
];

export function Education() {
  return (
    <section className="section scroll-offset" id="education">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">Background</span>
          <h2>Education &amp; Research</h2>
          <p>
            A UK honours degree in AI and Data Science, alongside active research into
            uncertainty calibration for Bayesian optimization.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Degree */}
          <article className="card card-pad">
            <div className="flex items-start gap-4">
              <span
                className="flex items-center justify-center"
                style={{
                  width: "2.5rem", height: "2.5rem", borderRadius: "10px",
                  background: "var(--accent-soft)", color: "var(--accent-2)", flexShrink: 0
                }}
              >
                <GraduationCap size={19} />
              </span>
              <div>
                <h3 style={{ fontSize: "1.0625rem" }}>BSc (Hons) Artificial Intelligence and Data Science</h3>
                <p className="mt-2" style={{ color: "var(--accent-2)", fontWeight: 600, fontSize: ".9375rem" }}>
                  Robert Gordon University, Aberdeen, UK
                </p>
                <p style={{ fontSize: ".875rem", color: "var(--muted-foreground)", marginTop: ".25rem" }}>
                  Delivered at Informatics Institute of Technology, Colombo · 2023 - 2027 (Expected)
                </p>
              </div>
            </div>
            <div className="chip-row mt-6">
              {COURSEWORK.map((c) => <span key={c} className="chip">{c}</span>)}
            </div>
          </article>

          {/* Research */}
          <article className="card card-pad">
            <div className="flex items-start gap-4">
              <span
                className="flex items-center justify-center"
                style={{
                  width: "2.5rem", height: "2.5rem", borderRadius: "10px",
                  background: "var(--accent-soft)", color: "var(--accent-2)", flexShrink: 0
                }}
              >
                <FlaskConical size={19} />
              </span>
              <div>
                <h3 style={{ fontSize: "1.0625rem" }}>Uncertainty Calibration in Bayesian Optimization</h3>
                <p className="mt-2" style={{ color: "var(--accent-2)", fontWeight: 600, fontSize: ".9375rem" }}>
                  Individual Research Project · 2026 - Present
                </p>
              </div>
            </div>
            <p className="mt-5" style={{ fontSize: ".9375rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
              Investigating how miscalibrated model uncertainty degrades the sample efficiency
              of automated optimization, and which recalibration methods best recover it.
              Designed and implemented the full experimental framework in Python, including
              the benchmarking methodology and evaluation against published approaches.
            </p>
          </article>

          {/* Awards */}
          <article className="card card-pad">
            <div className="flex items-center gap-3">
              <Trophy size={18} style={{ color: "var(--accent-2)" }} />
              <h3 style={{ fontSize: "1.0625rem" }}>Awards &amp; Recognition</h3>
            </div>
            <ul className="mt-5 flex flex-col gap-4">
              {AWARDS.map((a) => (
                <li key={a.title}>
                  <p style={{ fontWeight: 600, fontSize: ".9375rem" }}>{a.title}</p>
                  <p style={{ fontSize: ".875rem", color: "var(--muted-foreground)", marginTop: ".2rem" }}>
                    {a.detail}
                  </p>
                </li>
              ))}
            </ul>
          </article>

          {/* Community */}
          <article className="card card-pad">
            <div className="flex items-center gap-3">
              <Users size={18} style={{ color: "var(--accent-2)" }} />
              <h3 style={{ fontSize: "1.0625rem" }}>Leadership &amp; Community</h3>
            </div>
            <ul className="mt-5 flex flex-col gap-4">
              {COMMUNITY.map((c) => (
                <li key={c.title}>
                  <p style={{ fontWeight: 600, fontSize: ".9375rem" }}>{c.title}</p>
                  <p style={{ fontSize: ".875rem", color: "var(--muted-foreground)", marginTop: ".2rem" }}>
                    {c.detail}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
