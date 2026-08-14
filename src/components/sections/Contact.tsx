"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MagneticButton } from "@/components/ui/magnetic-button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  useGSAP(
    () => {
      // Main contact card reveal
      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 45, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-card",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Stagger inner elements
      gsap.fromTo(
        ".contact-inner > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.25,
          scrollTrigger: {
            trigger: ".contact-card",
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 relative bg-[#050507] overflow-hidden"
    >
      {/* Ambient Lighting Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[30rem] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="contact-card max-w-4xl mx-auto opacity-0">
          <div className="doppelrand-shell">
            <div className="doppelrand-core p-8 sm:p-16 text-center relative overflow-hidden">
              <div className="contact-inner space-y-0">
                {/* Header Tag */}
                <div className="doppelrand-shell !p-1 !rounded-full inline-flex mb-6">
                  <div className="doppelrand-core px-3.5 py-1.5 flex items-center gap-2 text-xs font-mono font-semibold text-sky-400">
                    <Send size={12} className="text-sky-400" />
                    Contact
                  </div>
                </div>

                <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1] block">
                  Get in <br />
                  <span className="bg-gradient-to-r from-white via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                    touch.
                  </span>
                </h2>

                <p className="text-base md:text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed font-normal block">
                  If you have a full-time role, a freelance project, or want to connect—send me an email.
                </p>

                {/* Island Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 max-w-lg mx-auto">
                  <MagneticButton
                    as="a"
                    href={`mailto:${portfolioData.personal.email}`}
                    strength={0.25}
                    className="w-full sm:w-auto flex-1 group inline-flex items-center justify-center bg-sky-500 hover:bg-sky-400 text-zinc-950 pl-6 pr-2 py-2 rounded-full font-bold text-sm shadow-xl transition-all cursor-pointer active:scale-[0.98]"
                  >
                    <Mail size={16} className="mr-2" />
                    <span>Send Email</span>
                    <span className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center ml-3 group-hover:scale-105 group-hover:rotate-45 transition-transform duration-300">
                      <ArrowUpRight size={15} />
                    </span>
                  </MagneticButton>

                  <MagneticButton
                    as="button"
                    onClick={handleCopyEmail}
                    strength={0.25}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] text-white border border-white/10 hover:bg-white/[0.08] font-semibold text-sm transition-colors backdrop-blur-xl cursor-pointer active:scale-[0.98]"
                  >
                    {copied ? (
                      <>
                        <Check size={16} className="text-emerald-400" />
                        <span className="text-emerald-400 font-mono text-xs">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </MagneticButton>
                </div>

                {/* Details Bar - Socials Only */}
                <div className="pt-8 border-t border-white/5 flex justify-center">
                  <div className="flex items-center justify-center gap-6 p-4 px-8 rounded-2xl bg-white/[0.02] border border-white/5 max-w-md w-full">
                    <MagneticButton
                      as="a"
                      href={portfolioData.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      strength={0.35}
                      className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <FaGithub size={16} />
                      GitHub Profile
                    </MagneticButton>
                    <span className="text-zinc-700">|</span>
                    <MagneticButton
                      as="a"
                      href={portfolioData.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      strength={0.35}
                      className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-sky-400 transition-colors cursor-pointer"
                    >
                      <FaLinkedin size={16} />
                      LinkedIn Profile
                    </MagneticButton>
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
