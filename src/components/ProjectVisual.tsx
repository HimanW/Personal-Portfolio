/**
 * Hand-built SVG artwork for each featured project.
 * Each visual encodes what the system actually does, so the card reads
 * as engineering work rather than decorative stock imagery.
 * All colours come from the CSS design tokens, so they follow the theme.
 */

/* Palette tones come from the .vz-* class on the tile wrapper,
   so each project renders in its own colour scheme.
   LINE and MUTED stay neutral to keep the grid cohesive. */
const A1 = "var(--vz-1)";
const A2 = "var(--vz-2)";
const A3 = "var(--vz-3)";
const LINE = "var(--border)";
const MUTED = "var(--muted-foreground)";

type VisualProps = { className?: string };

function Frame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      role="img"
      aria-hidden="true"
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      {children}
    </svg>
  );
}

/* RAG pipeline: documents -> chunks -> vector store -> answer */
export function RagVisual({ className }: VisualProps) {
  return (
    <Frame className={className}>
      <defs>
        <linearGradient id="rag-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={A1} stopOpacity="0.9" />
          <stop offset="100%" stopColor={A2} stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {[0, 1, 2].map((i) => (
        <rect key={i} x={34 + i * 7} y={62 - i * 6} width="46" height="60" rx="5"
          fill="var(--surface-2)" stroke={LINE} />
      ))}
      <path d="M56 72h30M56 82h30M56 92h20" stroke={MUTED} strokeWidth="2.5" strokeLinecap="round" opacity=".6" />

      <path className="flow-line" d="M104 88 H150" stroke={A1} strokeWidth="2" fill="none" />

      <g>
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3].map((c) => (
            <rect key={`${r}-${c}`} x={158 + c * 15} y={62 + r * 15} width="11" height="11" rx="2.5"
              fill={A2} opacity={0.16 + ((r + c) % 4) * 0.2} />
          ))
        )}
      </g>
      <text x="182" y="140" fill={MUTED} fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">vectors</text>

      <path className="flow-line" d="M226 88 H268" stroke={A2} strokeWidth="2" fill="none" />

      <rect x="272" y="56" width="94" height="64" rx="10" fill="url(#rag-g)" opacity=".14" stroke={A2} strokeOpacity=".5" />
      <circle cx="292" cy="78" r="7" fill={A2} opacity=".85" />
      <path d="M306 74h46M306 84h34M306 94h46M306 104h26" stroke={A2} strokeWidth="2.5" strokeLinecap="round" opacity=".55" />
    </Frame>
  );
}

/* MCP agent: model in the middle, tools radiating out */
export function McpVisual({ className }: VisualProps) {
  const tools = [
    { x: 316, y: 44, label: "db" },
    { x: 340, y: 96, label: "api" },
    { x: 316, y: 148, label: "fn" }
  ];
  return (
    <Frame className={className}>
      <circle cx="120" cy="96" r="46" fill={A2} opacity=".1" />
      <circle cx="120" cy="96" r="46" fill="none" stroke={A2} strokeOpacity=".45" strokeDasharray="3 5" />
      <circle cx="120" cy="96" r="27" fill="var(--surface-2)" stroke={A2} strokeOpacity=".7" />
      <text x="120" y="101" fill={A2} fontSize="13" fontFamily="var(--font-mono)" fontWeight="600" textAnchor="middle">LLM</text>

      <rect x="196" y="76" width="72" height="40" rx="9" fill="var(--surface-2)" stroke={A1} strokeOpacity=".6" />
      <text x="232" y="101" fill={A1} fontSize="12" fontFamily="var(--font-mono)" fontWeight="600" textAnchor="middle">MCP</text>

      <path className="flow-line" d="M148 96 H194" stroke={A2} strokeWidth="2" fill="none" />

      {tools.map((t, i) => (
        <g key={i}>
          <path className="flow-line" d={`M268 96 Q294 96 ${t.x - 16} ${t.y}`} stroke={A3} strokeWidth="1.8" fill="none" opacity=".8" />
          <rect x={t.x - 14} y={t.y - 14} width="52" height="28" rx="7" fill="var(--surface-2)" stroke={LINE} />
          <text x={t.x + 12} y={t.y + 4} fill={A3} fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">{t.label}</text>
        </g>
      ))}
    </Frame>
  );
}

/* Instance segmentation: leaf shapes with detection masks */
export function VisionVisual({ className }: VisualProps) {
  const boxes = [
    { x: 52, y: 44, w: 84, h: 66 },
    { x: 158, y: 78, w: 70, h: 72 },
    { x: 248, y: 40, w: 96, h: 60 }
  ];
  return (
    <Frame className={className}>
      <rect x="24" y="24" width="352" height="152" rx="12" fill="var(--surface-2)" stroke={LINE} />

      <path d="M70 108q22-46 58-40-4 44-58 40Z" fill={A3} opacity=".3" />
      <path d="M176 142q14-50 46-46-2 46-46 46Z" fill={A3} opacity=".26" />
      <path d="M266 92q26-40 66-34-8 40-66 34Z" fill={A3} opacity=".33" />

      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="4"
            fill="none" stroke={A1} strokeWidth="1.8" strokeDasharray="6 4" opacity=".95" />
          <rect x={b.x} y={b.y - 15} width="44" height="14" rx="3" fill={A1} opacity=".9" />
          <text x={b.x + 22} y={b.y - 5} fill="var(--on-accent)" fontSize="9" fontWeight="700"
            fontFamily="var(--font-mono)" textAnchor="middle">0.9{i + 2}</text>
        </g>
      ))}

      <g opacity=".5">
        <path d="M24 24h22M24 24v22M354 176h22M376 154v22" stroke={A2} strokeWidth="2" fill="none" />
      </g>
    </Frame>
  );
}

/* Agentic extraction: plan -> steps -> structured output */
export function AgentVisual({ className }: VisualProps) {
  const steps = [
    { x: 132, y: 46 },
    { x: 132, y: 96 },
    { x: 132, y: 146 }
  ];
  return (
    <Frame className={className}>
      <rect x="26" y="76" width="72" height="40" rx="9" fill={A2} opacity=".14" stroke={A2} strokeOpacity=".5" />
      <text x="62" y="101" fill={A2} fontSize="11" fontFamily="var(--font-mono)" fontWeight="600" textAnchor="middle">plan</text>

      {steps.map((s, i) => (
        <g key={i}>
          <path className="flow-line" d={`M98 96 Q116 96 ${s.x - 4} ${s.y}`} stroke={A2} strokeWidth="1.7" fill="none" opacity=".75" />
          <rect x={s.x} y={s.y - 15} width="104" height="30" rx="7" fill="var(--surface-2)" stroke={LINE} />
          <circle cx={s.x + 17} cy={s.y} r="5.5" fill={A1} opacity=".9" />
          <path d={`M${s.x + 32} ${s.y - 4}h56M${s.x + 32} ${s.y + 4}h36`} stroke={MUTED} strokeWidth="2.5" strokeLinecap="round" opacity=".55" />
        </g>
      ))}

      <path className="flow-line" d="M240 96 H278" stroke={A3} strokeWidth="2" fill="none" />
      <rect x="282" y="58" width="88" height="76" rx="9" fill="var(--surface-2)" stroke={A3} strokeOpacity=".55" />
      <text x="298" y="80" fill={A3} fontSize="10" fontFamily="var(--font-mono)">{"{"}</text>
      <path d="M306 90h44M306 100h32M306 110h44" stroke={A3} strokeWidth="2.5" strokeLinecap="round" opacity=".55" />
      <text x="298" y="128" fill={A3} fontSize="10" fontFamily="var(--font-mono)">{"}"}</text>
    </Frame>
  );
}

/* Sentiment API: text tokens scored positive / neutral / negative */
export function SentimentVisual({ className }: VisualProps) {
  const bars = [
    { x: 250, h: 54, c: A3, label: "pos" },
    { x: 292, h: 30, c: MUTED, label: "neu" },
    { x: 334, h: 16, c: A2, label: "neg" }
  ];
  return (
    <Frame className={className}>
      <rect x="26" y="52" width="150" height="96" rx="10" fill="var(--surface-2)" stroke={LINE} />
      <path d="M44 76h96M44 90h114M44 104h72M44 118h100" stroke={MUTED} strokeWidth="3" strokeLinecap="round" opacity=".45" />
      <rect x="42" y="70" width="44" height="12" rx="3" fill={A1} opacity=".28" />
      <rect x="42" y="98" width="34" height="12" rx="3" fill={A3} opacity=".3" />
      <text x="101" y="145" fill={MUTED} fontSize="9.5" fontFamily="var(--font-mono)" textAnchor="middle">text input</text>

      <path className="flow-line" d="M182 100 H214" stroke={A1} strokeWidth="2" fill="none" />
      <circle cx="228" cy="100" r="12" fill={A1} opacity=".18" stroke={A1} strokeOpacity=".6" />

      <line x1="238" y1="140" x2="366" y2="140" stroke={LINE} strokeWidth="1.5" />
      {bars.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={140 - b.h} width="26" height={b.h} rx="4" fill={b.c} opacity=".8" />
          <text x={b.x + 13} y="155" fill={MUTED} fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">{b.label}</text>
        </g>
      ))}
    </Frame>
  );
}

/* Medical LLM: base weights -> fine-tuning -> domain model */
export function MedicalVisual({ className }: VisualProps) {
  return (
    <Frame className={className}>
      <g opacity=".85">
        {[0, 1, 2, 3, 4].map((r) =>
          [0, 1, 2].map((c) => (
            <circle key={`${r}-${c}`} cx={44 + c * 30} cy={44 + r * 28} r="5.5"
              fill={MUTED} opacity={c === 2 ? 0.5 : 0.28} />
          ))
        )}
        {[0, 1, 2, 3, 4].map((r) =>
          [0, 1].map((c) => (
            <line key={`l-${r}-${c}`} x1={49 + c * 30} y1={44 + r * 28} x2={69 + c * 30} y2={44 + r * 28}
              stroke={MUTED} strokeWidth="1.2" opacity=".22" />
          ))
        )}
      </g>
      <text x="74" y="188" fill={MUTED} fontSize="9.5" fontFamily="var(--font-mono)" textAnchor="middle">base model</text>

      <path className="flow-line" d="M124 100 H176" stroke={A2} strokeWidth="2" fill="none" />
      <rect x="152" y="84" width="34" height="32" rx="8" fill="var(--surface-2)" stroke={A2} strokeOpacity=".6" />
      <path d="M169 92v16M161 100h16" stroke={A2} strokeWidth="2.5" strokeLinecap="round" />

      <rect x="212" y="40" width="158" height="120" rx="12" fill={A3} opacity=".08" stroke={A3} strokeOpacity=".45" />
      <path d="M291 68v34M274 85h34" stroke={A3} strokeWidth="6" strokeLinecap="round" opacity=".75" />
      <path d="M240 128h102" stroke={A3} strokeWidth="2.5" strokeLinecap="round" opacity=".4" />
      <path d="M256 140h70" stroke={A3} strokeWidth="2.5" strokeLinecap="round" opacity=".28" />
      <text x="291" y="30" fill={A3} fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">domain-tuned</text>
    </Frame>
  );
}

/* Waste platform: intent routing over a service map */
export function WasteVisual({ className }: VisualProps) {
  const nodes = [
    { x: 268, y: 52 }, { x: 336, y: 78 },
    { x: 300, y: 132 }, { x: 236, y: 118 }
  ];
  return (
    <Frame className={className}>
      <rect x="26" y="56" width="128" height="88" rx="10" fill="var(--surface-2)" stroke={LINE} />
      <rect x="42" y="74" width="80" height="13" rx="4" fill={A2} opacity=".3" />
      <rect x="42" y="94" width="96" height="13" rx="4" fill={MUTED} opacity=".22" />
      <rect x="42" y="114" width="62" height="13" rx="4" fill={A1} opacity=".3" />
      <text x="90" y="168" fill={MUTED} fontSize="9.5" fontFamily="var(--font-mono)" textAnchor="middle">intent</text>

      <path className="flow-line" d="M160 100 H206" stroke={A2} strokeWidth="2" fill="none" />

      <path d="M236 118 L268 52 L336 78 L300 132 Z" fill={A3} opacity=".1" stroke={A3} strokeOpacity=".4" strokeDasharray="4 4" />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="7" fill={i === 0 ? A1 : A3} opacity=".9" />
      ))}
      <text x="288" y="172" fill={MUTED} fontSize="9.5" fontFamily="var(--font-mono)" textAnchor="middle">optimised route</text>
    </Frame>
  );
}

export const PROJECT_VISUALS = {
  rag: RagVisual,
  mcp: McpVisual,
  vision: VisionVisual,
  agent: AgentVisual,
  sentiment: SentimentVisual,
  medical: MedicalVisual,
  waste: WasteVisual
} as const;

export type VisualKey = keyof typeof PROJECT_VISUALS;