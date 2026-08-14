"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header
      gsap.fromTo(
        ".projects-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Project items slide in
      document.querySelectorAll(".project-item").forEach((el, i) => {
        const isEven = i % 2 === 0;
        gsap.fromTo(
          el,
          { opacity: 0, x: isEven ? -25 : 25, y: 20 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 87%",
              once: true,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 relative bg-[#050507] overflow-hidden"
    >
      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="projects-header mb-20 max-w-3xl opacity-0">
          <div className="doppelrand-shell !p-1 !rounded-full inline-flex mb-6">
            <div className="doppelrand-core px-3.5 py-1.5 flex items-center gap-2 text-xs font-mono font-semibold text-sky-400">
              <Layers size={13} className="text-sky-400" />
              Featured Projects
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
            Web applications & <br />
            <span className="bg-gradient-to-r from-white via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              full-stack builds.
            </span>
          </h2>

          <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-normal">
            Projects built with React, Node.js, Express, MongoDB, Socket.io, and Redis.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-12">
          {portfolioData.projects.map((project, index) => (
            <div key={project.title} className="project-item opacity-0">
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                description={(project as any).description}
                techStack={project.techStack}
                outcome={project.outcome}
                github={project.github}
                demo={project.demo}
                images={project.images}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
