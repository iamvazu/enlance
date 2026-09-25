/** Stylised Enfixx bucket, colour-coded by grade. Swap for real pack shots when photography is ready. */
export function GradePack({ name, dClass, colour, className = "" }: { name: string; dClass: string; colour: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 220" className={className} role="img" aria-label={`${name} ${dClass} wood adhesive pack`}>
      <defs>
        <linearGradient id={`b-${dClass}`} x1="0" x2="1">
          <stop offset="0" stopColor="#e9eef3" />
          <stop offset=".5" stopColor="#ffffff" />
          <stop offset="1" stopColor="#d9e1e8" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="206" rx="70" ry="9" fill="#06223a" opacity=".15" />
      <path d="M35 40 L165 40 L152 200 Q100 212 48 200 Z" fill={`url(#b-${dClass})`} stroke="#c9d3dc" />
      <ellipse cx="100" cy="40" rx="65" ry="12" fill="#f6f8fa" stroke="#c9d3dc" />
      <path d="M38 28 Q100 -4 162 28" fill="none" stroke="#9aa9b7" strokeWidth="4" strokeLinecap="round" />
      <path d="M42 80 L158 80 L150 170 Q100 180 50 170 Z" fill={colour} />
      <text x="100" y="112" textAnchor="middle" fill="white" fontFamily="Sora Variable, sans-serif" fontWeight="700" fontSize="22">ENFIXX</text>
      <text x="100" y="136" textAnchor="middle" fill="white" fontFamily="Inter Variable, sans-serif" fontWeight="600" fontSize="13" opacity=".9">{name.replace("Enfixx ", "").toUpperCase()}</text>
      <rect x="80" y="146" width="40" height="18" rx="9" fill="white" />
      <text x="100" y="159" textAnchor="middle" fill={colour} fontFamily="Inter Variable, sans-serif" fontWeight="800" fontSize="12">{dClass}</text>
    </svg>
  );
}
