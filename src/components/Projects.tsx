import { Github, Lock, Award } from "lucide-react";
import {
  RagVisual, McpVisual, VisionVisual, AgentVisual, SentimentVisual, MedicalVisual
} from "./ProjectVisual";

type Project = {
  title: string;
  domain: string;
  description: string;
  tech: string[];
  Visual: (p: { className?: string }) => JSX.Element;
  palette: string;
  repo?: string;
  privateNote?: string;
  award?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Enterprise RAG Chatbot Platform",
    domain: "Enterprise AI",
    description:
      "A multi-tenant AI SaaS running in production on AWS. Five services cover document ingestion, embedding, retrieval and conversation, with streaming responses, per-organisation usage entitlements, and an embeddable widget deployed on client websites.",
    tech: ["Python", "FastAPI", "LangChain", "GPT-4o-mini", "Milvus", "PostgreSQL", "Docker", "AWS", "Nuxt 3"],
    Visual: RagVisual,
    palette: "vz-rag",
    privateNote: "Commercial product"
  },
  {
    title: "MCP Tool-Calling Agent",
    domain: "Agentic AI",
    description:
      "A Model Context Protocol server that connects an LLM chatbot to live enterprise databases and REST APIs, moving it from static document search to answering real-time operational questions.",
    tech: ["Python", "MCP", "PostgreSQL", "REST APIs", "Tool Calling"],
    Visual: McpVisual,
    palette: "vz-mcp",
    privateNote: "Commercial product"
  },
  {
    title: "Crop Segmentation",
    domain: "Computer Vision",
    description:
      "End-to-end vision system for agricultural imaging. Benchmarked segmentation architectures for the best accuracy-to-latency trade-off, then deployed to mobile and edge devices.",
    tech: ["PyTorch", "YOLOv8/v11-seg", "U-Net", "SAM", "SAHI", "FastAPI", "Flutter"],
    Visual: VisionVisual,
    palette: "vz-vision",
    privateNote: "Client project under NDA"
  },
  {
    title: "Sinhala Sentiment Analysis API",
    domain: "NLP",
    description:
      "Sentiment analysis for Sinhala, a low-resource language with limited pretrained coverage, built with modern transformer models and served behind a REST API for application use.",
    tech: ["Python", "Transformers", "Hugging Face", "FastAPI", "NLP"],
    Visual: SentimentVisual,
    palette: "vz-sentiment",
    privateNote: "Private repository"
  },
  {
    title: "Fine-Tuned Medical LLM",
    domain: "Generative AI",
    description:
      "A domain-adapted large language model fine-tuned on medical text, covering dataset preparation, parameter-efficient training and evaluation against the base model on clinical prompts.",
    tech: ["Python", "PyTorch", "Hugging Face", "LLM Fine-Tuning"],
    Visual: MedicalVisual,
    palette: "vz-medical",
    privateNote: "Private repository"
  },
  {
    title: "Agentic Data Extraction System",
    domain: "Agentic AI / Automation",
    description:
      "An autonomous LLM agent that decomposes natural-language instructions into multi-step browser automation plans, with structured output, report generation and recovery from failures.",
    tech: ["Python", "LangChain", "LangGraph", "Playwright", "Asyncio"],
    Visual: AgentVisual,
    palette: "vz-agent",
    privateNote: "Private repository"
  }
];

function Card({ p }: { p: Project }) {
  return (
    <article className="card card-hover flex flex-col overflow-hidden" style={{ height: "100%" }}>
      {/* Visual - identical ratio and padding on every card */}
      <div
        className={`vz-panel ${p.palette}`}
        style={{ aspectRatio: "16 / 9", padding: "0.875rem", flexShrink: 0 }}
      >
        <p.Visual />
      </div>

      <div className="card-pad flex flex-col grow">
        {/* Reserved height keeps every title and label on the same baseline */}
        <span
          className="eyebrow"
          style={{
            marginBottom: ".5rem",
            fontSize: ".6875rem",
            letterSpacing: ".14em",
            minHeight: "1.1rem",
            alignItems: "center"
          }}
        >
          {p.domain}
        </span>

        <h3 style={{ fontSize: "1.125rem", minHeight: "2.7rem" }}>{p.title}</h3>

        <p
          className="mt-3 grow"
          style={{ fontSize: ".9375rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}
        >
          {p.description}
        </p>

        <div className="chip-row mt-5">
          {p.tech.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <div
          className="mt-5 flex flex-wrap items-center gap-3"
          style={{ paddingTop: "1.125rem", borderTop: "1px solid var(--border)", minHeight: "3.25rem" }}
        >
          {p.award && (
            <span className="chip chip-accent">
              <Award size={13} style={{ marginRight: ".35rem" }} />
              {p.award}
            </span>
          )}
          {p.repo ? (
            <a
              className="btn btn-ghost"
              style={{ padding: ".5rem .9rem", fontSize: ".8125rem" }}
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={15} />
              View Code
            </a>
          ) : (
            <span
              className="flex items-center gap-2"
              style={{ fontSize: ".8125rem", color: "var(--muted-foreground)" }}
            >
              <Lock size={13} />
              {p.privateNote}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className="section scroll-offset" id="projects">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">Selected Work</span>
          <h2>Featured Projects</h2>
          <p>
            Systems I have designed, built and deployed across enterprise AI, agentic
            workflows, computer vision and natural language processing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch rise-stagger">
          {PROJECTS.map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}