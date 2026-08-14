"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { portfolioData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ExperienceEducation() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header
      gsap.fromTo(
        ".exp-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-header",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Timeline line draw animation
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".timeline-line",
            start: "top 80%",
            once: true,
          },
        }
      );

      // Education items slide in from left
      gsap.fromTo(
        ".edu-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".edu-timeline",
            start: "top 82%",
            once: true,
          },
        }
      );

      // Timeline dots pop
      gsap.fromTo(
        ".timeline-dot",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(2)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".edu-timeline",
            start: "top 82%",
            once: true,
          },
        }
      );

      // Cert cards from right
      gsap.fromTo(
        ".cert-item",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".certs-grid",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Activities
      gsap.fromTo(
        ".activities-card",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".activities-card",
            start: "top 87%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 relative bg-[#050507] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="exp-header mb-20 max-w-3xl opacity-0">
          <div className="doppelrand-shell !p-1 !rounded-full inline-flex mb-6">
            <div className="doppelrand-core px-3.5 py-1.5 flex items-center gap-2 text-xs font-mono font-semibold text-sky-400">
              <span className="text-sky-400 font-bold">•</span>
              Education & Credentials
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
            Education & <br />
            <span className="bg-gradient-to-r from-white via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              certifications.
            </span>
          </h2>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-normal">
            Formal computer science coursework in algorithms, database design, and systems architecture alongside technical credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Timeline (7 cols) - STRICTLY NO ICONS */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono font-bold text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
                EDUCATION
              </span>
              <h3 className="text-2xl font-bold text-white">
                Academic History
              </h3>
            </div>

            <div className="edu-timeline relative ml-4 space-y-10 pl-8">
              {/* Animated timeline vertical line */}
              <div className="timeline-line absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/60 via-sky-400/20 to-transparent" />

              {portfolioData.education.map((edu) => (
                <div key={edu.degree} className="edu-item opacity-0 relative group">
                  {/* Timeline Glowing Node Dot */}
                  <span className="timeline-dot absolute -left-[39px] top-2.5 h-4 w-4 rounded-full bg-[#050507] border-2 border-sky-400 group-hover:bg-sky-400 group-hover:shadow-[0_0_14px_rgba(56,189,248,0.9)] transition-all" />

                  <div className="doppelrand-shell">
                    <div className="doppelrand-core p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                          {edu.degree}
                        </h4>
                        <span className="px-3 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono font-bold text-sky-400">
                          {edu.score}
                        </span>
                      </div>

                      <p className="text-zinc-300 font-medium text-sm mb-4">
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-mono">
                        <span className="text-zinc-400">
                          Period: <span className="text-zinc-200">{edu.period}</span>
                        </span>
                        <span className="text-zinc-400">
                          Domain: <span className="text-zinc-200">Computer Science & Application</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Hackathons (5 cols) - STRICTLY NO ICONS */}
          <div className="lg:col-span-5 space-y-12">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-mono font-bold text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                  CREDENTIALS
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Certifications
                </h3>
              </div>

              <div className="certs-grid grid gap-4">
                {portfolioData.certifications.map((cert) => (
                  <div key={cert.name} className="cert-item opacity-0">
                    <div className="doppelrand-shell !p-1">
                      <div className="doppelrand-core p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.9)]" />
                          <div>
                            <h4 className="text-sm font-bold text-white">
                              {cert.name}
                            </h4>
                            <span className="text-xs font-mono text-zinc-400">
                              Issuer: {cert.issuer}
                            </span>
                          </div>
                        </div>
                        {(cert as { name: string; issuer: string; link?: string }).link ? (
                          <a
                            href={(cert as { name: string; issuer: string; link?: string }).link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider hover:bg-emerald-500/20 transition-colors"
                          >
                            Verified
                          </a>
                        ) : (
                          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular Activities */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono font-bold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  ACHIEVEMENTS
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Hackathons & Events
                </h3>
              </div>

              <div className="activities-card opacity-0">
                <div className="doppelrand-shell">
                  <div className="doppelrand-core p-6 space-y-4">
                    {portfolioData.activities.map((act, index) => (
                      <div key={index} className="flex gap-3 text-sm text-zinc-300">
                        <span className="text-amber-400 font-mono font-bold">•</span>
                        <p className="leading-relaxed font-normal">{act}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
