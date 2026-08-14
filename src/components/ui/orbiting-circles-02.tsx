"use client";

import React from "react";
import ParticleSphereAnimation from "@/components/ui/orbiting-circles-02-utils/particalsphear";
import { SiReact, SiPython, SiTailwindcss, SiNodedotjs, SiMongodb, SiTypescript, SiVercel, SiGit, SiPostgresql, SiRedis, SiExpress } from "react-icons/si";

const orbits = [
  {
    size: "w-[180px] h-[180px] md:w-[240px] md:h-[240px]",
    duration: 20,
    icons: [
      { component: SiReact, color: "#61DAFB", angle: 0 },
      { component: SiNodedotjs, color: "#5FA04E", angle: 90 },
      { component: SiTailwindcss, color: "#06B6D4", angle: 180 },
      { component: SiVercel, color: "#FFFFFF", angle: 270 },
    ],
  },
  {
    size: "w-[260px] h-[260px] md:w-[330px] md:h-[330px]",
    duration: 30,
    icons: [
      { component: SiTypescript, color: "#3178C6", angle: 45 },
      { component: SiMongodb, color: "#47A248", angle: 135 },
      { component: SiExpress, color: "#FFFFFF", angle: 225 },
      { component: SiGit, color: "#F05032", angle: 315 },
    ],
  },
  {
    size: "w-[340px] h-[340px] md:w-[420px] md:h-[420px]",
    duration: 40,
    icons: [
      { component: SiPython, color: "#3776AB", angle: 60 },
      { component: SiPostgresql, color: "#4169E1", angle: 180 },
      { component: SiRedis, color: "#DC382D", angle: 300 },
    ],
  },
];

export default function OrbitingCirclesGlobeDemo() {
  return (
    <div className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center overflow-visible">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      {/* Center particle globe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square pointer-events-none w-[180px] md:w-[220px] z-10">
        <ParticleSphereAnimation />
      </div>

      {/* Orbiting rings */}
      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0;
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        return (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 ${orbit.size} opacity-100 overflow-visible pointer-events-none`}
          >
            {orbit.icons.map((iconData, iconIndex) => (
              <div
                key={iconIndex}
                className="absolute top-0 left-1/2 h-1/2 origin-bottom flex flex-col justify-start items-center -ml-[20px] pointer-events-auto"
                style={
                  {
                    "--start-angle": `${iconData.angle}deg`,
                    animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="p-2.5 border border-white/20 rounded-full bg-zinc-950/95 backdrop-blur-xl relative z-10 -mt-[20px] shadow-[0_0_20px_rgba(56,189,248,0.2)] ring-1 ring-white/10 flex items-center justify-center transition-transform hover:scale-125"
                  style={
                    {
                      "--counter-offset": `${-iconData.angle}deg`,
                      animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  <iconData.component size={20} color={iconData.color} style={{ filter: `drop-shadow(0 0 8px ${iconData.color}90)` }} />
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
