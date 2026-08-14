"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GSAPMarquee } from "@/components/ui/gsap-marquee";
import { ShaderBackground } from "@/components/ui/blue-noise";
import { KeyedImage } from "@/components/ui/KeyedImage";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MARQUEE_ITEMS = [
  "MERN Stack",
  "React.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Socket.io",
  "Redis",
  "REST APIs",
  "JWT",
  "Zustand",
  "Vite",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "GitHub",
  "Render",
  "Railway",
  "Vercel",
  "Cloudinary",
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-visual",
        { opacity: 0, x: -40, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9 }
      )
        // Background text reveal behind the pic
        .fromTo(
          ".hero-bg-text",
          { opacity: 0, scale: 0.8, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" },
          "-=0.7"
        )
        .fromTo(
          ".hero-pill",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.7"
        )
        // GSAP Character Typing Animation
        .fromTo(
          ".name-char",
          { opacity: 0 },
          { 
            opacity: 1, 
            stagger: 0.08, 
            duration: 0.02, 
            ease: "none" 
          }
        )
        // Cursor blink loop
        .to(".typing-cursor", {
          opacity: 0,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        }, "-=0.2")
        .fromTo(
          ".hero-headline",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.2"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".hero-ctas",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".hero-marquee",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        );

      // 3D Card Tilt Interaction (Emil Kowalski style detail)
      const visualEl = containerRef.current?.querySelector(".hero-visual .doppelrand-shell") as HTMLElement;
      if (visualEl) {
        const onMouseMove = (e: MouseEvent) => {
          const rect = visualEl.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(visualEl, {
            rotateY: x * 0.05,
            rotateX: -y * 0.05,
            x: x * 0.04,
            y: y * 0.04,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 1000,
            overwrite: "auto",
          });
        };
        
        const onMouseLeave = () => {
          gsap.to(visualEl, {
            rotateY: 0,
            rotateX: 0,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.6)",
            overwrite: "auto",
          });
        };
        
        visualEl.addEventListener("mousemove", onMouseMove);
        visualEl.addEventListener("mouseleave", onMouseLeave);
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col justify-center pt-32 pb-0 overflow-hidden bg-[#050507]"
    >
      {/* Ambient Radial Spotlight & Glows */}
      <div className="absolute top-1/4 left-1/3 w-[60rem] h-[35rem] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[24rem] h-[24rem] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay with Radial Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Visual - Profile Picture with cool Gradient Border & Glow */}
        <div className="hero-visual w-full lg:w-[42%] relative flex justify-center items-center opacity-0 shrink-0">
          {/* Huge background text behind the picture */}
          <div className="absolute -z-10 text-[6.5rem] sm:text-[8rem] lg:text-[9.5rem] font-black tracking-tighter text-[#141418]/60 select-none pointer-events-none hero-bg-text font-sans uppercase leading-none select-none text-center transform -translate-y-8">
            Asarudeen
          </div>

          <div className="relative group doppelrand-shell !p-2.5 !rounded-3xl w-88 sm:w-[420px] max-w-full shadow-2xl overflow-hidden aspect-[3/4]">
            {/* Subtle Gradient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/25 via-indigo-600/10 to-transparent z-0 opacity-70 group-hover:scale-105 transition-transform duration-500" />
            
            <div className="doppelrand-core !rounded-[calc(1.5rem)] overflow-hidden h-full w-full relative z-10 bg-black">
              {/* WebGL Shader Background */}
              <ShaderBackground className="absolute inset-0 z-0 opacity-90" />
              
              {/* Keyed Image (removes black background, keeps subject opaque) */}
              <KeyedImage 
                src="/profile.jpg" 
                alt="Asarudeen S"
                threshold={35}
                className="w-full h-full object-cover grayscale contrast-[1.15] hover:grayscale-0 transition-all duration-700 ease-out relative z-10"
              />
              {/* Fade bottom to match background #050507 - 10% fade cover */}
              <div className="absolute inset-x-0 bottom-0 h-[10%] bg-gradient-to-t from-[#050507] via-[#050507] to-transparent pointer-events-none z-20" />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[60%] pt-4 lg:pt-0 z-20">
          {/* Doppelrand Top Status Pill with GSAP Typing Name */}
          <div className="hero-pill mb-6 inline-flex opacity-0">
            <div className="doppelrand-shell !p-1 !rounded-full">
              <div className="doppelrand-core px-5 py-2 flex items-center gap-2 text-sm font-mono font-medium text-zinc-300">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span className="text-white font-black tracking-widest uppercase flex items-center text-sm sm:text-base">
                  {"ASARUDEEN S".split("").map((char, i) => (
                    <span key={i} className="name-char opacity-0 inline-block text-sky-400">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                  <span className="typing-cursor inline-block w-1 h-4 bg-sky-400 ml-0.5" />
                </span>
                <span className="text-zinc-600 ml-1">•</span>
                <span className="text-zinc-400">
                  {portfolioData.personal.role}
                </span>
              </div>
            </div>
          </div>

          {/* Core Headline */}
          <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white leading-[1.1] max-w-2xl opacity-0">
            Full-stack developer building{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
              scalable web systems.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-base md:text-lg text-zinc-400 mb-9 max-w-xl font-normal leading-relaxed opacity-0">
            {portfolioData.personal.heroSubtitle}
          </p>

          {/* Action CTAs */}
          <div className="hero-ctas flex flex-wrap items-center gap-4 opacity-0">
            <MagneticButton
              as="a"
              href="#projects"
              strength={0.25}
              className="group relative inline-flex items-center bg-white hover:bg-zinc-100 text-zinc-950 pl-6 pr-2 py-2 rounded-full font-bold text-sm shadow-xl transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>View Projects</span>
              <span className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center ml-3 group-hover:scale-105 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={15} />
              </span>
            </MagneticButton>



            <div className="flex items-center gap-2 sm:ml-2">
              <MagneticButton
                as="a"
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.35}
                className="p-3.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors backdrop-blur-2xl cursor-pointer"
              >
                <FaGithub size={18} />
              </MagneticButton>
              <MagneticButton
                as="a"
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.35}
                className="p-3.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-sky-400 hover:bg-white/[0.08] transition-colors backdrop-blur-2xl cursor-pointer"
              >
                <FaLinkedin size={18} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker Strip */}
      <div className="hero-marquee w-full mt-16 pb-8 opacity-0 relative z-10">
        <div className="border-t border-b border-white/5 py-4">
          <GSAPMarquee
            items={MARQUEE_ITEMS}
            speed={35}
            className="py-1"
            itemClassName="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-widest px-4 flex items-center gap-4 before:content-['✦'] before:text-sky-500/60 before:mr-4"
          />
        </div>
      </div>
    </section>
  );
}
