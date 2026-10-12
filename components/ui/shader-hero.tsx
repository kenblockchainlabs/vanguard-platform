"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { MeshGradient } from "@paper-design/shaders-react"
import { ArrowRight, Video, Sparkles, Terminal, Cpu, Play } from "lucide-react"

export const ShaderHero = () => {
  return (
    <div className="relative min-h-[92vh] bg-[#09090B] overflow-hidden w-full flex flex-col justify-center items-center font-sans border-b border-white/10 px-6 py-20">
      
      {/* SVG filter glass effect dari 21st.dev (TETAP UTUH) */}
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.004" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.25" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 0.9 0"
              result="tint"
            />
          </filter>
        </defs>
      </svg>

      {/* 21st.dev Dynamic Interactive MeshGradient (TETAP UTUH) */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#09090B", "#0C1713", "#002B24", "#3CE6AC"]}
        speed={0.2}
      />

      {/* Overlay vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#09090B]/40 to-[#09090B]/80 pointer-events-none" />
      <div className="absolute inset-0 hf-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        
        {/* Top Minimalist Pill Badge — GENERAL & PROFESIONAL (TANPA SEBUT MERK) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-white/15 text-xs font-mono tracking-wide text-zinc-300 backdrop-blur-xl shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-[#3CE6AC] animate-ping" />
          <span className="text-[#3CE6AC] font-semibold">VANGUARD MOTION RUNTIME</span>
          <span className="text-zinc-600">/</span>
          <span>PROGRAMMATIC CODE-TO-VIDEO</span>
        </motion.div>

        {/* Clear & User-Friendly Headline — Langsung Paham Produknya */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
        >
          Create Video Ads With Code.{" "}
          <span className="bg-gradient-to-r from-[#3CE6AC] via-[#00E3FF] to-white bg-clip-text text-transparent">
            No After Effects.
          </span>
        </motion.h1>

        {/* Clear & Practical Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed drop-shadow-md"
        >
          Transform simple prompts and web code directly into broadcast 60 FPS video. Vanguard Motion renders every animation frame deterministically on CPU. Zero cloud GPU bill.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4 font-mono text-sm"
        >
          <a
            href="#video-showcase"
            className="rounded-full px-7 py-3.5 text-sm font-semibold bg-[#FAFAF9] text-[#09090B] hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition duration-200 shadow-[0_0_30px_rgba(60,230,172,0.3)] flex items-center gap-2 cursor-pointer"
          >
            <Play className="h-4 w-4 fill-black" /> Watch Video Output (32s)
          </a>
          <a
            href="#simulator"
            className="rounded-full px-7 py-3.5 text-sm font-medium border border-white/20 bg-black/40 text-zinc-200 hover:bg-black/60 hover:text-white transition duration-200 backdrop-blur-xl cursor-pointer flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-[#3CE6AC]" /> Try Interactive Sandbox
          </a>
        </motion.div>

        {/* 3 Step Simpel: How It Works */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-14 pt-8 border-t border-white/10 w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#3CE6AC] font-mono text-xs font-semibold">
                <span className="w-5 h-5 rounded-full bg-[#3CE6AC]/20 flex items-center justify-center text-[11px]">1</span>
                Write Code or Prompt
              </div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Describe your scene in natural language or write semantic HTML, CSS styling, and GSAP camera timelines.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#00E3FF] font-mono text-xs font-semibold">
                <span className="w-5 h-5 rounded-full bg-[#00E3FF]/20 flex items-center justify-center text-[11px]">2</span>
                Headless Local Render
              </div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Headless Chromium captures every pixel with zero frame drop directly on local CPU. Zero cloud GPU bill.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#A78BFA] font-mono text-xs font-semibold">
                <span className="w-5 h-5 rounded-full bg-[#A78BFA]/20 flex items-center justify-center text-[11px]">3</span>
                Export 60 FPS MP4
              </div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Native FFmpeg bundles crisp vectors and synchronized audio into broadcast-grade video ready for posting.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
