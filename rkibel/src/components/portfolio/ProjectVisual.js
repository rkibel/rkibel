function PointerVisual() {
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" role="img" aria-label="AR object anchor and pose axes">
      <defs>
        <linearGradient id="pointerGlow" x1="0" x2="1">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
        <radialGradient id="pointerObject" cx="50%" cy="45%" r="55%">
          <stop stopColor="#22d3ee" stopOpacity=".32" />
          <stop offset=".65" stopColor="#34d399" stopOpacity=".18" />
          <stop offset="1" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="162" cy="114" rx="72" ry="48" fill="url(#pointerObject)" />
      <path d="M118 70 C146 42, 202 51, 219 91 C239 137, 195 174, 146 162 C102 151, 89 99, 118 70Z" fill="#22d3ee" fillOpacity=".1" stroke="url(#pointerGlow)" strokeWidth="2" />
      <path d="M116 71 C139 92, 185 103, 218 91 M104 118 C139 102, 188 106, 231 130 M146 162 C154 128, 153 94, 140 55" fill="none" stroke="#67e8f9" strokeOpacity=".34" />
      <circle cx="162" cy="113" r="7" fill="#22d3ee" />
      <path d="M162 113 h54 M162 113 v-50 M162 113 l-38 38" stroke="url(#pointerGlow)" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M87 64 h38 M87 64 v34 M233 64 h-38 M233 64 v34 M87 156 h38 M87 156 v-34 M233 156 h-38 M233 156 v-34" stroke="#34d399" strokeOpacity=".72" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M76 188 C114 174, 202 174, 244 188" stroke="#a78bfa" strokeOpacity=".42" strokeWidth="2" fill="none" strokeDasharray="5 8" />
    </svg>
  );
}

function BionicVisual() {
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" role="img" aria-label="Segmentation masks, depth, and saliency">
      <rect width="320" height="220" fill="transparent" />
      <path d="M32 178 C72 130, 94 170, 132 108 C172 42, 210 92, 286 42" fill="none" stroke="#38bdf8" strokeOpacity=".45" strokeWidth="2" />
      <path d="M72 72 C110 35, 165 52, 158 105 C148 162, 82 146, 72 72Z" fill="#22d3ee" fillOpacity=".22" stroke="#67e8f9" />
      <path d="M172 82 C216 48, 262 84, 245 132 C229 178, 174 155, 172 82Z" fill="#a78bfa" fillOpacity=".22" stroke="#c4b5fd" />
      <circle cx="118" cy="99" r="32" fill="#34d399" fillOpacity=".22" />
      {Array.from({ length: 8 }).map((_, index) => (
        <line key={index} x1="22" x2="298" y1={38 + index * 21} y2={38 + index * 21} stroke="#94a3b8" strokeOpacity={0.06 + index * 0.015} />
      ))}
    </svg>
  );
}

function RobotsVisual() {
  const points = [
    [56, 70], [98, 116], [138, 58], [178, 132], [224, 78], [268, 146],
  ];
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" role="img" aria-label="Point cloud and multi-robot communication graph">
      {points.map(([x1, y1], index) => points.slice(index + 1).map(([x2, y2]) => (
        <line key={`${x1}-${x2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#22d3ee" strokeOpacity=".14" />
      )))}
      {Array.from({ length: 64 }).map((_, index) => (
        <circle key={index} cx={(index * 47) % 286 + 18} cy={(index * 83) % 174 + 24} r={index % 5 === 0 ? 2.4 : 1.4} fill={index % 6 === 0 ? "#34d399" : "#7dd3fc"} opacity=".68" />
      ))}
      {points.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <path d={`M${x - 12} ${y} h24 M${x} ${y - 12} v24`} stroke="#e0f2fe" strokeWidth="2" />
          <circle cx={x} cy={y} r="16" fill="none" stroke="#67e8f9" />
        </g>
      ))}
    </svg>
  );
}

function RewardVisual() {
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" role="img" aria-label="RL reward curve and agent states">
      <path d="M36 178 H288 M36 178 V34" stroke="#64748b" strokeOpacity=".45" />
      <path d="M44 164 C84 150, 86 90, 128 108 S174 168, 214 84 S252 62, 284 52" fill="none" stroke="#22d3ee" strokeWidth="3" />
      <path d="M44 154 C94 132, 116 130, 154 112 S226 82, 284 78" fill="none" stroke="#34d399" strokeWidth="3" strokeDasharray="6 8" />
      <rect x="78" y="58" width="58" height="36" rx="4" fill="#a78bfa" fillOpacity=".18" stroke="#c4b5fd" />
      <rect x="206" y="118" width="58" height="36" rx="4" fill="#22d3ee" fillOpacity=".14" stroke="#67e8f9" />
    </svg>
  );
}

export default function ProjectVisual({ type }) {
  const visuals = {
    pointer: <PointerVisual />,
    bionic: <BionicVisual />,
    robots: <RobotsVisual />,
    reward: <RewardVisual />,
  };

  return (
    <div className="project-visual h-48 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-3">
      {visuals[type]}
    </div>
  );
}
