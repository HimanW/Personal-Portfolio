import { useState, useRef } from "react";

export function NegativeMaskLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLAnchorElement>(null);

  const updateCursor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(true);
    updateCursor(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    updateCursor(e);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursor(null);
  };

  return (
    <a
      ref={containerRef}
      href="#top"
      className="negative-mask-link"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        fontFamily: "'Dancing Script', cursive",
        fontWeight: 700,
        fontSize: "1.5rem",
        letterSpacing: "-0.02em"
      }}
      title="Himan Withana - Back to top"
    >
      {/* Base Layer: Standard Text */}
      <span className="negative-mask-base">
        Himan Withana<span style={{ color: "var(--accent-2)" }}>.</span>
      </span>

      {/* Negative Mask Layer: Inverted High-Contrast Text with Moving Round Circle Mask */}
      <span
        className="negative-mask-layer"
        aria-hidden="true"
        style={
          isHovered && cursor !== null
            ? {
                WebkitMaskPosition: `${cursor.x - 26}px ${cursor.y - 26}px`,
                maskPosition: `${cursor.x - 26}px ${cursor.y - 26}px`,
                WebkitMaskSize: "52px 52px",
                maskSize: "52px 52px",
                animation: "none",
                transition: "none"
              }
            : undefined
        }
      >
        <span className="negative-mask-text-inverted">
          Himan Withana<span style={{ color: "var(--accent-2)" }}>.</span>
        </span>
      </span>
    </a>
  );
}
