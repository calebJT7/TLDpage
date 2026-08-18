export default function StructureMark() {
  return (
    <svg
      viewBox="0 0 520 520"
      className="w-full h-full"
      fill="none"
      aria-hidden="true"
    >
      {/* outer construction frame */}
      <rect
        x="40"
        y="40"
        width="440"
        height="440"
        stroke="#2E3820"
        strokeWidth="1"
      />
      <circle cx="260" cy="260" r="200" stroke="#242C19" strokeWidth="1" />

      {/* structural strokes echoing the T / L / D geometry, drawn on load */}
      <path
        d="M110 150 H 250"
        stroke="#9BA098"
        strokeWidth="3"
        strokeLinecap="square"
        className="draw-line animate-draw"
        style={{ animationDelay: "0.1s" }}
      />
      <path
        d="M180 150 V 340"
        stroke="#9BA098"
        strokeWidth="3"
        strokeLinecap="square"
        className="draw-line animate-draw"
        style={{ animationDelay: "0.35s" }}
      />
      <path
        d="M260 150 V 340 H 340"
        stroke="#8AA05F"
        strokeWidth="3"
        strokeLinecap="square"
        className="draw-line animate-draw"
        style={{ animationDelay: "0.6s" }}
      />
      <path
        d="M380 150 C 430 150 430 340 380 340 C 350 340 340 300 340 260 C 340 220 350 180 380 180"
        stroke="#F2F3F0"
        strokeWidth="3"
        strokeLinecap="square"
        className="draw-line animate-draw"
        style={{ animationDelay: "0.85s" }}
      />

      {/* fine measurement ticks, purely structural */}
      <path
        d="M110 380 H 380"
        stroke="#2E3820"
        strokeWidth="1"
        className="draw-line animate-draw"
        style={{ animationDelay: "1.2s" }}
      />
      {[110, 150, 190, 230, 270, 310, 350, 380].map((x) => (
        <line
          key={x}
          x1={x}
          y1="376"
          x2={x}
          y2="384"
          stroke="#2E3820"
          strokeWidth="1"
        />
      ))}

      <circle cx="180" cy="150" r="3" fill="#8AA05F" />
      <circle cx="380" cy="340" r="3" fill="#8AA05F" />
    </svg>
  );
}
