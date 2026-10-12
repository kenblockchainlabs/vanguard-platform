"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { MeshGradient } from "@paper-design/shaders-react"
import { ArrowRight, Terminal, Zap, Shield, Sparkles, Layers, RefreshCw } from "lucide-react"

export const ShaderHero = () => {
  return (
    <div className="relative min-h-[94vh] bg-[#09090B] overflow-hidden w-full flex flex-col justify-center items-center font-sans border-b border-white/10 px-6 py-20">
      
      {/* SVG filter glass effect dari 21st.dev (TIDAK DIUBAH) */}
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

      {/* 21st.dev Dynamic Interactive MeshGradient (TIDAK DIUBAH) */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#09090B", "#0C1713", "#002B24", "#3CE6AC"]}
        speed={0.2}
      />

      {/* Overlay vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#09090B]/40 to-[#09090B]/80 pointer-events-none" />
      <div className="absolute inset-0 hf-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        
        {/* Top Minimalist Pill Badge — Hook Presisi Sesuai Video */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-white/15 text-xs font-mono tracking-wide text-zinc-300 backdrop-blur-xl shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-[#3CE6AC] animate-ping" />
          <span className="text-[#3CE6AC] font-semibold">&lt;!-- index.html --&gt;</span>
          <span className="text-zinc-600">/</span>
          <span>THIS AI AD WAS WRITTEN IN CODE</span>
        </motion.div>

        {/* Killer Hook Headline — Sinkron 100% Dengan Video Benchmark */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
        >
          Most AI ads are made by humans.{" "}
          <span className="bg-gradient-to-r from-[#3CE6AC] via-[#00E3FF] to-white bg-clip-text text-transparent">
            This one was written.
          </span>
        </motion.h1>

        {/* Sub-headline — Mempertegas Posisi Vanguard Runtime Tools */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed drop-shadow-md"
        >
          Trained on real production work, not demo scripts. The deterministic runtime gateway and kinetic execution layer for autonomous AI agents.
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
            Watch The Output In 60 FPS <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#studio"
            className="rounded-full px-7 py-3.5 text-sm font-medium border border-white/20 bg-black/40 text-zinc-200 hover:bg-black/60 hover:text-white transition duration-200 backdrop-blur-xl cursor-pointer flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-[#3CE6AC]" /> Inspect Agent Pipeline
          </a>
        </motion.div>

        {/* Feature Bento Cards — Sinkron dengan Video Frame Breakdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-14 pt-8 border-t border-white/10 w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#3CE6AC] font-mono text-xs font-semibold">
                <Terminal className="w-3.5 h-3.5" /> Plan Mode
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                Autonomous task decomposition with instant deterministic verification.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#00E3FF] font-mono text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" /> Loop Breaker
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                Halts runaway recursive agent loops before billing shock hits.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#C084FC] font-mono text-xs font-semibold">
                <Layers className="w-3.5 h-3.5" /> Skills & MCP
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                Native Model Context Protocol servers and persistent workflow hooks.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#3CE6AC] font-mono text-xs font-semibold">
                <Shield className="w-3.5 h-3.5" /> Real Work Trained
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                Tested against real terminal pipelines, not mock demo scripts.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
