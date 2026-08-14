"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ParticleSphereAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const numParticles = 300;
    const sphereRadius = Math.min(width, height) * 0.4;
    const centerX = width / 2;
    const centerY = height / 2;

    class Particle {
      theta: number;
      phi: number;
      r: number;
      x: number = 0;
      y: number = 0;
      z: number = 0;
      size: number;
      baseColor: string;

      constructor() {
        this.theta = Math.random() * Math.PI * 2;
        this.phi = Math.acos(Math.random() * 2 - 1);
        this.r = sphereRadius;
        this.size = Math.random() * 1.5 + 0.5;
        
        const colors = ["#60a5fa", "#3b82f6", "#8b5cf6", "#c084fc"];
        this.baseColor = colors[Math.floor(Math.random() * colors.length)];
      }

      update(time: number) {
        this.theta += 0.005;
        
        // Convert spherical to cartesian coordinates
        this.x = this.r * Math.sin(this.phi) * Math.cos(this.theta);
        this.y = this.r * Math.sin(this.phi) * Math.sin(this.theta);
        this.z = this.r * Math.cos(this.phi);

        // Add some breathing effect
        const breath = Math.sin(time * 0.001 + this.phi) * 5;
        this.x += (this.x / this.r) * breath;
        this.y += (this.y / this.r) * breath;
        this.z += (this.z / this.r) * breath;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Perspective projection
        const fov = 250;
        const scale = fov / (fov + this.z + sphereRadius);
        const projectedX = centerX + this.x * scale;
        const projectedY = centerY + this.y * scale;

        // Fading based on Z (back particles are dimmer)
        const alpha = Math.max(0.1, Math.min(1, (this.z + sphereRadius) / (sphereRadius * 2)));

        ctx.beginPath();
        ctx.arc(projectedX, projectedY, this.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = this.baseColor;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Sort by Z index to draw back particles first
      particles.sort((a, b) => a.z - b.z);

      particles.forEach((p) => {
        p.update(time);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute inset-4 bg-purple-500/20 rounded-full blur-2xl" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />
    </div>
  );
}
