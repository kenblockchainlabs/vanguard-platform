import React from "react";

export function VanguardLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="vg-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3CE6AC" />
          <stop offset="50%" stopColor="#00E3FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
        <filter id="neon-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background Card Dark */}
      <rect
        width="100"
        height="100"
        rx="28"
        fill="#0C0D12"
        stroke="#FFFFFF"
        strokeOpacity="0.08"
        strokeWidth="1"
      />

      {/* Chevron Kiri */}
      <path
        d="M24 24 H38 L50 64 L36 64 Z"
        fill="url(#vg-glow)"
        filter="url(#neon-blur)"
      />

      {/* Chevron Kanan */}
      <path
        d="M76 24 H62 L50 64 L64 64 Z"
        fill="url(#vg-glow)"
        filter="url(#neon-blur)"
      />

      {/* Diamond Anchor Bawah */}
      <polygon
        points="50,70 42,82 58,82"
        fill="#3CE6AC"
        opacity="0.9"
      />
    </svg>
  );
}
