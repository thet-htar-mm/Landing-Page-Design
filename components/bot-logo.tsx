interface BotLogoProps {
  width?: number
  height?: number
  className?: string
}

export function BotLogo({ width = 120, height = 60, className = "" }: BotLogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`} style={{ width, height }}>
      {/* Bot Icon */}
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Bot Head */}
          <rect
            x="8"
            y="12"
            width="24"
            height="20"
            rx="4"
            fill="url(#botGradient)"
            stroke="#1e40af"
            strokeWidth="1.5"
          />

          {/* Bot Antenna */}
          <circle cx="20" cy="8" r="2" fill="#f97316" />
          <line x1="20" y1="10" x2="20" y2="12" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" />

          {/* Bot Eyes */}
          <circle cx="16" cy="20" r="2.5" fill="#ffffff" />
          <circle cx="24" cy="20" r="2.5" fill="#ffffff" />
          <circle cx="16" cy="20" r="1.5" fill="#1e40af" />
          <circle cx="24" cy="20" r="1.5" fill="#1e40af" />

          {/* Bot Mouth */}
          <rect x="18" y="26" width="4" height="2" rx="1" fill="#1e40af" />

          {/* Bot Arms */}
          <rect x="4" y="18" width="4" height="8" rx="2" fill="url(#botGradient)" stroke="#1e40af" strokeWidth="1" />
          <rect x="32" y="18" width="4" height="8" rx="2" fill="url(#botGradient)" stroke="#1e40af" strokeWidth="1" />

          {/* Bot Body */}
          <rect x="12" y="32" width="16" height="6" rx="3" fill="url(#botGradient)" stroke="#1e40af" strokeWidth="1" />

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="botGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
          Sxgxx
        </span>
        <span className="text-xs text-gray-500 -mt-1">AI Assistant Platform</span>
      </div>
    </div>
  )
}
