"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, Terminal, Cpu, Zap, Database, Layout } from "lucide-react";
import { GSAPCounter } from "@/components/ui/gsap-counter";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { value: 3, suffix: "+", label: "Web Applications" },
    { value: 10, suffix: "+", label: "Technologies Used" },
    { value: 15, suffix: "+", label: "Skills Applied" },
    { value: 100, suffix: "%", label: "Project Commitment" },
  ];

  useGSAP(
    () => {
      // Header reveal
      gsap.fromTo(
        ".about-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-header",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Stats bar
      gsap.fromTo(
        ".about-stats",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 88%",
            once: true,
          },
        }
      );

      // Bento cards stagger
      gsap.fromTo(
        ".bento-card",
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".bento-grid",
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 relative bg-[#050507] overflow-hidden"
    >
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[25rem] bg-sky-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[25rem] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        {/* Section Header - First Person Voice */}
        <div className="about-header mb-16 max-w-3xl opacity-0">
          <div className="doppelrand-shell !p-1 !rounded-full inline-flex mb-6">
            <div className="doppelrand-core px-3.5 py-1.5 flex items-center gap-2 text-xs font-mono font-semibold text-sky-400">
              <Terminal size={13} className="text-sky-400" />
              About Me
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
            {portfolioData.personal.aboutHeading}
          </h2>

          <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-normal">
            {portfolioData.personal.aboutBio}
          </p>
        </div>

        {/* Stats Strip */}
        <div className="about-stats opacity-0 mb-16">
          <div className="doppelrand-shell">
            <div className="doppelrand-core p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center py-2 border-r last:border-r-0 border-white/5">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">
                    <GSAPCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="bento-grid grid grid-cols-12 gap-6 grid-flow-dense">
          {/* Bento Cell 1: Web App Development (Col Span 7) */}
          <div className="bento-card col-span-12 lg:col-span-7 opacity-0">
            <div className="doppelrand-shell h-full">
              <div className="doppelrand-core p-8 md:p-10 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black text-sky-400 uppercase tracking-widest">
                        Web App Development
                      </span>
                    </div>
                    <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    Node.js & Express REST APIs
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-normal">
                    I write clean, modular REST API routes in Node.js and Express, connecting React frontends to database storage with proper validation and error handling.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/5 text-xs font-mono text-emerald-400 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      GET /api/v1/projects
                    </span>
                    <span className="text-zinc-500">200 OK</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "React.js", "REST APIs"].map((t) => (
                      <span key={t} className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] px-3 py-1 rounded-lg border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Cell 2: Real-Time Messaging (Col Span 5) */}
          <div className="bento-card col-span-12 lg:col-span-5 opacity-0">
            <div className="doppelrand-shell h-full">
              <div className="doppelrand-core p-8 md:p-10 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black text-amber-400 uppercase tracking-widest">
                        Real-Time Features
                      </span>
                    </div>
                    <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    Socket.io & Redis Caching
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-normal">
                    I build instant chat features using Socket.io WebSockets and use Redis in-memory caching to store frequent user session data.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/5 text-xs font-mono text-amber-400 flex items-center justify-between">
                    <span>Socket.io WebSocket Event</span>
                    <span className="text-zinc-500">sub-10ms</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Socket.io", "Redis", "WebSockets"].map((t) => (
                      <span key={t} className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] px-3 py-1 rounded-lg border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Cell 3: Auth & Media Storage (Col Span 5) */}
          <div className="bento-card col-span-12 lg:col-span-5 opacity-0">
            <div className="doppelrand-shell h-full">
              <div className="doppelrand-core p-8 md:p-10 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black text-emerald-400 uppercase tracking-widest">
                        Auth & Storage
                      </span>
                    </div>
                    <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    MongoDB, JWT & Cloudinary
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-normal">
                    I design MongoDB schemas, secure user sessions with JSON Web Tokens, store user media uploads on Cloudinary, and send OTP emails via Brevo/Nodemailer.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/5 text-xs font-mono text-emerald-400 flex items-center justify-between">
                    <span>JWT Auth & Brevo OTP</span>
                    <span className="text-zinc-500 font-bold">Verified</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "JWT", "Cloudinary", "Brevo"].map((t) => (
                      <span key={t} className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] px-3 py-1 rounded-lg border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Cell 4: Deployment & Tools (Col Span 7) */}
          <div className="bento-card col-span-12 lg:col-span-7 opacity-0">
            <div className="doppelrand-shell h-full">
              <div className="doppelrand-core p-8 md:p-10 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black text-purple-400 uppercase tracking-widest">
                        Deployment & Hosting
                      </span>
                    </div>
                    <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    Render, Railway & Vercel
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-normal">
                    I deploy Node.js backend services and web servers on Render and Railway, and host frontend React applications on Vercel with environment variable configuration.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/5 text-xs font-mono text-purple-400 flex items-center justify-between">
                    <span>Render / Railway Deployment</span>
                    <span className="text-zinc-500 font-bold">Live</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Render", "Railway", "Vercel", "Git"].map((t) => (
                      <span key={t} className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] px-3 py-1 rounded-lg border border-white/5">
                        {t}
                      </span>
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
