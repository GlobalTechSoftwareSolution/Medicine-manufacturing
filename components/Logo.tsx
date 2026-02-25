'use client';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ size = 'md', variant = 'dark', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const colors = {
    light: {
      primary: '#0066CC',
      secondary: '#004080',
      text: '#FFFFFF'
    },
    dark: {
      primary: '#0066CC',
      secondary: '#004080',
      text: '#1F2937'
    }
  };

  const currentColors = colors[variant];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Medical Cross Symbol */}
          <rect
            x="35"
            y="20"
            width="30"
            height="60"
            fill={currentColors.primary}
            rx="4"
          />
          <rect
            x="20"
            y="35"
            width="60"
            height="30"
            fill={currentColors.primary}
            rx="4"
          />

          {/* NR Text inside cross */}
          <text
            x="50"
            y="55"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="18"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            NR
          </text>

          {/* Circle border */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={currentColors.secondary}
            strokeWidth="3"
            fill="none"
          />

          {/* Small medical symbols */}
          <circle cx="25" cy="25" r="3" fill={currentColors.secondary} />
          <circle cx="75" cy="25" r="3" fill={currentColors.secondary} />
          <circle cx="25" cy="75" r="3" fill={currentColors.secondary} />
          <circle cx="75" cy="75" r="3" fill={currentColors.secondary} />
        </svg>
      </div>

      {/* Company Name */}
      <div className="flex flex-col">
        <span className={`${textSizes[size]} font-bold`} style={{ color: currentColors.text }}>
          NR Medicare
        </span>
        <span className="text-xs opacity-75" style={{ color: currentColors.text }}>
          Pharmaceutical Excellence
        </span>
      </div>
    </div>
  );
}
