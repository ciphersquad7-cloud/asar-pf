"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { portfolioData } from "@/data/portfolio";
import { SkillPill } from "@/components/ui/SkillCard";
import { Monitor, Server, Database, Code2, Wrench } from "lucide-react";
import type { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const categoryMeta: Record<
  string,
  { icon: ReactNode; accent: string; label: string }
> = {
  Frontend: {
    icon: <Monitor size={18} />,
    accent: "#38bdf8",
    label: "User Interfaces",
  },
  Backend: {
    icon: <Server size={18} />,
    accent: "#10b981",
    label: "Web Servers & APIs",
  },
  Database: {
    icon: <Database size={18} />,
    accent: "#f59e0b",
    label: "Data & Caching",
  },
  Languages: {
    icon: <Code2 size={18} />,
    accent: "#6366f1",
    label: "Programming Languages",
  },
  "Tools & Deployment": {
    icon: <Wrench size={18} />,
    accent: "#c084fc",
    label: "Hosting & Tools",
  },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  let runningIndex = 0;

  useGSAP(
    () => {
      // Header
      gsap.fromTo(
        ".skills-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-header",
            start: "top 87%",
            once: true,
          },
        }
      );

      // Category headers
      gsap.fromTo(
        ".skills-category-header",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".skills-groups",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Batch animate skill pills as they scroll into view
      ScrollTrigger.batch(".skill-pill-item", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 20, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: "back.out(1.5)",
              stagger: 0.04,
              overwrite: true,
            }
          );
        },
        start: "top 90%",
        once: true,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-[#050507]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <div className="skills-header mb-20 opacity-0 max-w-3xl">
          <div className="doppelrand-shell !p-1 !rounded-full inline-flex mb-6">
            <div className="doppelrand-core px-3.5 py-1.5 flex items-center gap-2 text-xs font-mono font-semibold text-sky-400">
              <Code2 size={13} className="text-sky-400" />
              Technical Skills
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 leading-[1.1]">
            Skills & <br />
            <span className="bg-gradient-to-r from-white via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              technologies I use.
            </span>
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            The programming languages, frameworks, databases, and deployment platforms I work with.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="skills-groups space-y-16">
          {portfolioData.skills.map((group, groupIdx) => {
            const startIndex = runningIndex;
            runningIndex += group.technologies.length;

            return (
              <div key={group.category} className="space-y-6">
                {/* Category Header - Clean Editorial Hierarchy */}
                <div className="skills-category-header opacity-0 flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-sky-400/80 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20">
                      0{groupIdx + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-zinc-400 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
                    {group.technologies.length} technologies
                  </span>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                  {group.technologies.map((tech, i) => (
                    <div
                      key={tech}
                      className="skill-pill-item opacity-0"
                    >
                      <SkillPill name={tech} index={startIndex + i} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
