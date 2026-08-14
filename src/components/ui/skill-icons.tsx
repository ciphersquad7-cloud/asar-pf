import { ComponentType } from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa6";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiRedis, 
  SiPostgresql, 
  SiVercel, 
  SiRailway, 
  SiCloudinary,
  SiSocketdotio,
  SiFramer,
  SiExpress,
  SiRender,
  SiHtml5
} from "react-icons/si";

// Official Zustand Bear / Store Icon
export function ZustandIcon({ size = 24, color = "#E6A23C", ...props }: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="6" cy="6" r="3" fill="#6A513B" />
      <circle cx="18" cy="6" r="3" fill="#6A513B" />
      <circle cx="6" cy="6" r="1.5" fill="#E8B595" />
      <circle cx="18" cy="6" r="1.5" fill="#E8B595" />
      <path
        d="M12 21c-5.5 0-9-3.5-9-8 0-3.5 2.5-6.5 5.5-7.5 1.1-.3 2.2-.5 3.5-.5s2.4.2 3.5.5C18.5 6.5 21 9.5 21 13c0 4.5-3.5 8-9 8z"
        fill="#8B6B4F"
      />
      <ellipse cx="12" cy="15" rx="4.5" ry="3.5" fill="#E8B595" />
      <circle cx="9" cy="11.5" r="1.2" fill="#1E1E1E" />
      <circle cx="15" cy="11.5" r="1.2" fill="#1E1E1E" />
      <ellipse cx="12" cy="14.5" rx="1.5" ry="1" fill="#1E1E1E" />
      <path d="M12 15.5v1.2" stroke="#1E1E1E" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// Official REST API Gateway Icon
export function RestApiIcon({ size = 24, color = "#0066FF", ...props }: any) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="3" width="20" height="7" rx="2" fill="rgba(0, 102, 255, 0.15)" stroke="#0066FF" />
      <rect x="2" y="14" width="20" height="7" rx="2" fill="rgba(0, 102, 255, 0.15)" stroke="#0066FF" />
      <circle cx="6" cy="6.5" r="1.2" fill="#00D2FF" stroke="none" />
      <circle cx="6" cy="17.5" r="1.2" fill="#00D2FF" stroke="none" />
      <path d="M10 6.5h8M10 17.5h8" stroke="#FFFFFF" strokeWidth="1.8" />
      <path d="M16 10v4" stroke="#00D2FF" strokeWidth="2" strokeDasharray="1.5 2" />
    </svg>
  );
}

// Official Vite Lightning Bolt & Diamond Icon
export function ViteIcon({ size = 24, ...props }: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21.5 4.5l-9.3 17a.6.6 0 01-1 0L2 4.5a.6.6 0 01.6-.9l9-1a.6.6 0 01.2 0l9 1a.6.6 0 01.7.9z"
        fill="url(#vite-grad)"
      />
      <path
        d="M13 2.5l-5 9h4l-2 8.5 7-10.5h-4.5l2.5-7z"
        fill="url(#vite-bolt)"
      />
      <defs>
        <linearGradient id="vite-grad" x1="2" y1="3" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite-bolt" x1="8" y1="2.5" x2="15" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA83" />
          <stop offset="0.5" stopColor="#FFDD35" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Official JSON Web Token (JWT) Wheel/Rosette Logo
export function JwtIcon({ size = 24, ...props }: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 257" fill="none" {...props}>
      <path
        fill="#FFFFFF"
        d="M147.386 69.071L147.129 0h-38.515l.257 69.071l19.257 26.448zm-38.515 118.371v69.328h38.515v-69.328l-19.258-26.447z"
      />
      <path
        fill="#00f2e6"
        d="m147.386 187.442l40.57 55.976l31.069-22.596l-40.57-55.975l-31.069-10.015zM108.871 69.071L68.044 13.095L36.975 35.691l40.57 55.976l31.326 10.014z"
      />
      <path
        fill="#00b9f1"
        d="M77.545 91.667L11.811 70.355L0 106.816l65.733 21.569l31.069-10.271zm81.653 46.732l19.257 26.448l65.734 21.311L256 149.697l-65.733-21.312z"
      />
      <path
        fill="#d63aff"
        d="M190.267 128.385L256 106.816l-11.811-36.461l-65.734 21.312l-19.257 26.447zm-124.534 0L0 149.697l11.811 36.461l65.734-21.311l19.257-26.448z"
      />
      <path
        fill="#fb015b"
        d="m77.545 164.847l-40.57 55.975l31.069 22.596l40.827-55.976v-32.61zm100.91-73.18l40.57-55.976l-31.069-22.596l-40.57 55.976v32.61z"
      />
    </svg>
  );
}

export interface SkillMeta {
  icon: ComponentType<any>;
  color: string;
  bgColor: string;
}

export const skillIconMap: Record<string, SkillMeta> = {
  "React.js": {
    icon: FaReact,
    color: "#61DAFB",
    bgColor: "rgba(97, 218, 251, 0.08)"
  },
  "TypeScript": {
    icon: SiTypescript,
    color: "#3178C6",
    bgColor: "rgba(49, 120, 198, 0.08)"
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.08)"
  },
  "HTML5": {
    icon: FaHtml5,
    color: "#E34F26",
    bgColor: "rgba(227, 79, 38, 0.08)"
  },
  "CSS3": {
    icon: FaCss3Alt,
    color: "#1572B6",
    bgColor: "rgba(21, 114, 182, 0.08)"
  },
  "Vite": {
    icon: ViteIcon,
    color: "#646CFF",
    bgColor: "rgba(100, 108, 255, 0.08)"
  },
  "Zustand": {
    icon: ZustandIcon,
    color: "#E6A23C",
    bgColor: "rgba(230, 162, 60, 0.08)"
  },
  "Framer Motion": {
    icon: SiFramer,
    color: "#F43F5E",
    bgColor: "rgba(244, 63, 94, 0.08)"
  },
  "Node.js": {
    icon: FaNodeJs,
    color: "#539E43",
    bgColor: "rgba(83, 158, 67, 0.08)"
  },
  "Express.js": {
    icon: SiExpress,
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)"
  },
  "Socket.io": {
    icon: SiSocketdotio,
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)"
  },
  "REST APIs": {
    icon: RestApiIcon,
    color: "#0066FF",
    bgColor: "rgba(0, 102, 255, 0.08)"
  },
  "JWT": {
    icon: JwtIcon,
    color: "#D63AFF",
    bgColor: "rgba(214, 58, 255, 0.08)"
  },
  "MongoDB": {
    icon: SiMongodb,
    color: "#47A248",
    bgColor: "rgba(71, 162, 72, 0.08)"
  },
  "PostgreSQL": {
    icon: SiPostgresql,
    color: "#4169E1",
    bgColor: "rgba(65, 105, 225, 0.08)"
  },
  "Redis": {
    icon: SiRedis,
    color: "#DC382D",
    bgColor: "rgba(220, 56, 45, 0.08)"
  },
  "Git": {
    icon: FaGitAlt,
    color: "#F05032",
    bgColor: "rgba(240, 80, 50, 0.08)"
  },
  "GitHub": {
    icon: FaGithub,
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)"
  },
  "Render": {
    icon: SiRender,
    color: "#46E3B7",
    bgColor: "rgba(70, 227, 183, 0.08)"
  },
  "Railway": {
    icon: SiRailway,
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)"
  },
  "Vercel": {
    icon: SiVercel,
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)"
  },
  "Cloudinary": {
    icon: SiCloudinary,
    color: "#3448C5",
    bgColor: "rgba(52, 72, 197, 0.08)"
  }
};

