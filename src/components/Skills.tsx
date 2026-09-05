import { Code2, Brain, Sparkles, Server, Database, Cloud } from "lucide-react";

const CATEGORIES = [
  {
    icon: Sparkles,
    title: "Generative AI & LLMs",
    blurb: "Retrieval, grounding and agentic tool use.",
    skills: ["NLP", "RAG", "LLMOps", "LangChain", "LangGraph", "MCP", "OpenAI", "Gemini", "Claude", "Hugging Face",
      "Prompt Engineering", "Embeddings", "Semantic Search"]
  },
  {
    icon: Brain,
    title: "Machine Learning & Vision",
    blurb: "Training, benchmarking and shipping models.",
    skills: ["MLOps", "PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "YOLO",
      "U-Net", "Segment Anything", "Knowledge Distillation"]
  },
  {
    icon: Server,
    title: "Backend & APIs",
    blurb: "Services built to run under real traffic.",
    skills: ["FastAPI", "Flask", "REST", "WebSocket", "Server-Sent Events", "Microservices",
      "Async Python", "OAuth 2.0", "Webhooks"]
  },
  {
    icon: Database,
    title: "Data & Storage",
    blurb: "Vector search, pipelines and warehousing.",
    skills: ["PostgreSQL", "pgvector", "Milvus", "FAISS", "Firebase", "pandas", "NumPy",
      "Apache Airflow", "Spark", "Kafka"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    blurb: "Deployment, containers and GPU workloads.",
    skills: ["AWS (EC2, S3, IAM)", "Docker", "CUDA / GPU", "Linux", "Git", "Jira", "Agile"]
  },
  {
    icon: Code2,
    title: "Languages & Frontend",
    blurb: "Full-stack delivery, not just notebooks.",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "Dart",
      "Vue 3", "Nuxt 3", "React", "Tailwind", "Flutter"]
  }
];

export function Skills() {
  return (
    <section className="section scroll-offset" id="skills">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">Capabilities</span>
          <h2>Technical Skills</h2>
          <p>
            Applied machine learning, generative AI and computer vision, backed by the
            backend, data and cloud engineering needed to ship them to production.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 rise-stagger">
          {CATEGORIES.map(({ icon: Icon, title, blurb, skills }) => (
            <article key={title} className="card card-hover card-pad flex flex-col">
              <div className="flex items-center gap-3">
                <span
                  className="flex items-center justify-center"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "10px",
                    background: "var(--accent-soft)",
                    color: "var(--accent-2)",
                    flexShrink: 0
                  }}
                >
                  <Icon size={19} />
                </span>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 650 }}>{title}</h3>
              </div>

              <p
                className="mt-3"
                style={{ fontSize: ".9375rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}
              >
                {blurb}
              </p>

              <div className="chip-row mt-5">
                {skills.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
