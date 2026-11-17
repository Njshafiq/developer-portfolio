export function AvatarArt({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fde047" />
        </radialGradient>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
      </defs>

      {/* Warm Background Circle */}
      <circle cx="100" cy="110" r="95" fill="url(#bgGlow)" />

      {/* Decorative stars / sparkle in background */}
      <path d="M165 40 L168 50 L178 53 L168 56 L165 66 L162 56 L152 53 L162 50 Z" fill="#f59e0b" />
      <path d="M30 75 L32 82 L39 84 L32 86 L30 93 L28 86 L21 84 L28 82 Z" fill="#f59e0b" />

      {/* Body & Hoodie / Jacket */}
      <path
        d="M38 220 C38 180 60 160 100 160 C140 160 162 180 162 220 Z"
        fill="url(#jacketGrad)"
        stroke="#1e293b"
        strokeWidth="3.5"
      />
      {/* Inner T-shirt */}
      <path
        d="M78 162 C78 178 88 190 100 190 C112 190 122 178 122 162 Z"
        fill="#ffffff"
        stroke="#1e293b"
        strokeWidth="2.5"
      />
      {/* Hoodie Collar Strings & Accent */}
      <path d="M72 160 L62 195" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
      <path d="M128 160 L138 195" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />

      {/* Neck */}
      <path d="M84 135 L84 165 C84 172 116 172 116 165 L116 135 Z" fill="url(#skinGrad)" stroke="#1e293b" strokeWidth="3" />

      {/* Head / Face */}
      <path
        d="M58 85 C58 50 75 42 100 42 C125 42 142 50 142 85 C142 120 125 142 100 142 C75 142 58 120 58 85 Z"
        fill="url(#skinGrad)"
        stroke="#1e293b"
        strokeWidth="3.5"
      />

      {/* Ears */}
      <circle cx="58" cy="95" r="9" fill="url(#skinGrad)" stroke="#1e293b" strokeWidth="2.5" />
      <circle cx="142" cy="95" r="9" fill="url(#skinGrad)" stroke="#1e293b" strokeWidth="2.5" />

      {/* Anime Eyes */}
      {/* Left Eye */}
      <ellipse cx="80" cy="92" rx="7.5" ry="9.5" fill="#1e293b" />
      <circle cx="78" cy="89" r="3" fill="#ffffff" />
      <circle cx="82" cy="95" r="1.5" fill="#ffffff" />
      <path d="M72 80 Q80 75 88 80" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />

      {/* Right Eye */}
      <ellipse cx="120" cy="92" rx="7.5" ry="9.5" fill="#1e293b" />
      <circle cx="118" cy="89" r="3" fill="#ffffff" />
      <circle cx="122" cy="95" r="1.5" fill="#ffffff" />
      <path d="M112 80 Q120 75 128 80" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />

      {/* Cute Cheeks */}
      <ellipse cx="70" cy="103" rx="6" ry="3.5" fill="#f87171" opacity="0.6" />
      <ellipse cx="130" cy="103" rx="6" ry="3.5" fill="#f87171" opacity="0.6" />

      {/* Friendly Smile */}
      <path d="M92 112 Q100 120 108 112" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Anime Hairstyle */}
      <path
        d="M52 82 C48 60 62 30 100 30 C138 30 152 60 148 82 C142 65 130 52 118 52 C110 52 105 60 100 62 C95 60 90 52 82 52 C70 52 58 65 52 82 Z"
        fill="url(#hairGrad)"
        stroke="#1e293b"
        strokeWidth="3.5"
      />
      {/* Hair Bangs Strands */}
      <path d="M72 52 Q78 72 84 80 Q80 65 88 56" fill="url(#hairGrad)" stroke="#1e293b" strokeWidth="2.5" />
      <path d="M100 50 Q104 74 108 82 Q106 66 114 56" fill="url(#hairGrad)" stroke="#1e293b" strokeWidth="2.5" />
      <path d="M50 78 Q42 55 58 42" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M150 78 Q158 55 142 42" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M100 30 Q112 18 125 24" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

