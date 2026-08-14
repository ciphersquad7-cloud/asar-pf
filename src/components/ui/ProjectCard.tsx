"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { MagneticButton } from "@/components/ui/magnetic-button";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  outcome: string;
  github?: string;
  demo?: string;
  images?: string[];
  index: number;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  techStack,
  outcome,
  github,
  demo,
  images,
  index,
}: ProjectCardProps) {
  const isEven = index % 2 === 0;
  
  // Default fallback images per project index if not supplied
  const defaultImages = [
    ["/richat-1.jpg", "/richat-2.jpg", "/richat-3.jpg"],
    ["/linkoo-1.jpg", "/linkoo-2.jpg", "/linkoo-3.jpg"],
    ["/draken-1.jpg", "/draken-2.jpg", "/draken-3.jpg"],
  ];
  const projectImages = images && images.length > 0 ? images : (defaultImages[index] || ["/draken-1.jpg"]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Auto-play timer that pauses on hover/modal
  useEffect(() => {
    if (isHovered || lightboxOpen || projectImages.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, lightboxOpen, projectImages.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="group relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-center w-full py-8"
      >
        {/* Doppelrand Browser Chassis Mockup */}
        <div
          className={`w-full lg:w-[48%] aspect-[16/10] ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="doppelrand-shell h-full !p-1.5 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
            <div className="doppelrand-core h-full flex flex-col justify-between overflow-hidden relative bg-[#0a0a0f]">
              {/* Browser Top Window Bar */}
              <div className="h-10 px-4 bg-black/70 border-b border-white/5 flex items-center justify-between flex-shrink-0 z-20 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                <a 
                  href={demo || github || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-400 hover:text-sky-400 max-w-[200px] sm:max-w-[260px] truncate text-center transition-colors"
                >
                  https://{title.toLowerCase().replace(/\s+/g, '')}.dev
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="text-zinc-500 hover:text-white p-1 rounded transition-colors"
                    title="Expand View"
                    aria-label="Expand View"
                  >
                    <Maximize2 size={12} />
                  </button>
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Project Preview Carousel Area */}
              <div className="relative flex-grow overflow-hidden bg-black flex items-center justify-center select-none group/carousel">
                {/* Subtle Ambient Radial Highlight */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Sliding Viewport */}
                <div className="w-full h-full relative overflow-hidden flex items-center">
                  <motion.div
                    className="flex w-full h-full cursor-grab active:cursor-grabbing"
                    animate={{ x: `-${activeImageIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  >
                    {projectImages.map((src, i) => (
                      <div
                        key={i}
                        className="w-full h-full flex-shrink-0 relative overflow-hidden flex items-center justify-center bg-zinc-950/80"
                        onClick={() => setLightboxOpen(true)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt={`${title} screenshot ${i + 1}`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Floating Chevron Navigation Controls */}
                {projectImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/10 opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 z-30 hover:scale-110 active:scale-95 shadow-lg"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/10 opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 z-30 hover:scale-110 active:scale-95 shadow-lg"
                      aria-label="Next image"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}

                {/* Segmented Glass Indicator Pill Bar */}
                {projectImages.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30 bg-black/75 px-3 py-1.5 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl">
                    <span className="text-[9.5px] font-mono text-zinc-400 font-bold mr-1 select-none">
                      {activeImageIndex + 1}/{projectImages.length}
                    </span>
                    {projectImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(i);
                        }}
                        className={`group/dot relative h-1.5 rounded-full transition-all duration-300 ${
                          i === activeImageIndex
                            ? "w-6 bg-gradient-to-r from-sky-400 to-indigo-400 shadow-sm shadow-sky-400/50"
                            : "w-2 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Tech Bar */}
              <div className="flex items-center gap-1.5 flex-wrap px-4 py-2.5 bg-black/60 border-t border-white/5">
                {techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono font-medium px-2 py-0.5 bg-white/[0.03] text-zinc-300 rounded border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Side - Editorial & Impact-focused */}
        <div className={`w-full lg:w-[52%] flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sky-400 text-xs font-mono font-bold tracking-widest uppercase">
              {subtitle}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 group-hover:text-sky-400 transition-colors leading-tight">
            {title}
          </h3>

          {/* Clean Editorial Description */}
          <div className="mb-6 max-w-lg">
            <p className="text-zinc-400 text-sm sm:text-base leading-[1.7] font-normal">
              {description}
            </p>
          </div>

          {/* Structured Field: Real Outcome */}
          <div className="mb-6 pb-5 border-b border-white/5 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
              Outcome:
            </span>
            <span className="text-sm font-medium text-emerald-400">
              {outcome}
            </span>
          </div>

          {/* Action Buttons with Magnetic Springs */}
          <div className="flex flex-wrap items-center gap-3 mt-auto">
            {github && (
              <MagneticButton
                as="a"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.2}
                className="flex items-center gap-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-white px-5 py-2.5 rounded-full border border-white/10 text-xs font-bold transition-all active:scale-[0.98] backdrop-blur-md cursor-pointer"
              >
                <FaGithub size={15} />
                <span>Source Code</span>
              </MagneticButton>
            )}
            {demo && (
              <MagneticButton
                as="a"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.2}
                className="group inline-flex items-center bg-sky-500 hover:bg-sky-400 text-zinc-950 pl-5 pr-2 py-1.5 rounded-full text-xs font-bold transition-all active:scale-[0.98] shadow-lg shadow-sky-500/20 cursor-pointer"
              >
                <span>Live Demo</span>
                <span className="w-6 h-6 rounded-full bg-zinc-950 text-white flex items-center justify-center ml-2.5 group-hover:scale-105 group-hover:rotate-45 transition-transform duration-300">
                  <ExternalLink size={12} />
                </span>
              </MagneticButton>
            )}
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -top-12 right-0 flex items-center gap-3">
                <span className="text-xs font-mono text-zinc-400">
                  {title} • {activeImageIndex + 1}/{projectImages.length}
                </span>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close Preview"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={projectImages[activeImageIndex]}
                  alt={`${title} Preview`}
                  className="w-full h-full object-contain"
                />

                {projectImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-transform hover:scale-110 active:scale-95"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-transform hover:scale-110 active:scale-95"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

