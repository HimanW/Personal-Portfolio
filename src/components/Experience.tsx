import { MapPin, Calendar } from "lucide-react";

const ROLES = [
  {
    title: "Junior AI/ML Engineer",
    company: "Avya Technologies (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    period: "Feb 2026 - Aug 2026",
    summary:
      "Built and shipped a multi-tenant enterprise RAG platform, from the microservice backend through to the customer-facing product and its first paying subscriptions.",
    highlights: [
      {
        title: "Enterprise RAG Chatbot Platform",
        text: "Architected the microservice backend now serving live customers on AWS, and designed the ingestion pipeline that lets clients onboard their own knowledge bases.",
        tech: ["FastAPI", "LangChain", "Milvus", "PostgreSQL", "AWS", "Nuxt 3"]
      },
      {
        title: "Agentic Tool-Calling Layer",
        text: "Led development of an MCP server giving the chatbot live access to enterprise databases and REST APIs, extending it from document search to real-time operational answers.",
        tech: ["MCP", "LLM Tool Calling", "PostgreSQL"]
      },
      {
        title: "Omnichannel Messaging & Commerce",
        text: "Took the product to WhatsApp Business and Meta Messenger, cleared Meta Business Verification, and delivered the subscription and payments layer behind the first paying customers.",
        tech: ["Meta Graph API", "Webhooks", "OAuth 2.0", "PayHere"]
      }
    ]
  },
  {
    title: "Junior AI/ML Engineer, R&D",
    company: "Turbo Gen Consultancy (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    period: "Jul 2025 - Jan 2026",
    summary:
      "Delivered a computer vision instance segmentation system for agricultural imaging, from dataset engineering and model selection through to on-device deployment.",
    highlights: [
      {
        title: "Crop Instance Segmentation",
        text: "Benchmarked detection and segmentation architectures to find the best accuracy-to-performance balance for edge hardware, then improved accuracy on small and overlapping objects through targeted augmentation and fine-tuning.",
        tech: ["PyTorch", "YOLOv8 / v11-seg", "U-Net", "SAM", "SAHI"]
      },
      {
        title: "Production Inference & Mobile Delivery",
        text: "Deployed the model as an inference service, converted weights for edge devices, and integrated it into a Flutter mobile application.",
        tech: ["FastAPI", "TensorFlow", "Flutter", "Docker"]
      },
      {
        title: "Automated Annotation Pipeline",
        text: "Cut manual labeling effort substantially by using the trained model to pre-label new images for human review, and set up the team's annotation and GPU infrastructure.",
        tech: ["CVAT", "Supervisely", "CUDA"]
      }
    ]
  }
];

export function Experience() {
  return (
    <section className="section scroll-offset" id="experience" style={{ background: "var(--surface)" }}>
      <div className="shell-narrow">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2>Where I&apos;ve Shipped</h2>
          <p>
            Over a year of full-time industry experience designing, building and deploying
            production AI systems for enterprise clients.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {ROLES.map((role) => (
            <article key={role.company}>
              {/* Role header */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 style={{ fontSize: "1.3rem" }}>{role.title}</h3>
                  <p className="mt-1" style={{ color: "var(--accent-2)", fontWeight: 600 }}>
                    {role.company}
                  </p>
                </div>
                <div
                  className="flex flex-col gap-1"
                  style={{ fontSize: ".875rem", color: "var(--muted-foreground)" }}
                >
                  <span className="flex items-center gap-2">
                    <Calendar size={14} /> {role.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} /> {role.location}
                  </span>
                </div>
              </div>

              <p className="lede mt-5">{role.summary}</p>

              {/* Highlights */}
              <div
                className="mt-8 flex flex-col gap-7"
                style={{ paddingLeft: "1.75rem", borderLeft: "1px solid var(--border)" }}
              >
                {role.highlights.map((h) => (
                  <div key={h.title} className="relative">
                    <span className="timeline-marker" style={{ left: "-2.02rem" }} />
                    <h4>{h.title}</h4>
                    <p
                      className="mt-2"
                      style={{ fontSize: ".9375rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}
                    >
                      {h.text}
                    </p>
                    <div className="chip-row mt-4">
                      {h.tech.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
