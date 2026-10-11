"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { MeshGradient } from "@paper-design/shaders-react"
import { ArrowRight, ShieldCheck, Activity } from "lucide-react"

export const ShaderHero = () => {
  return (
    <div className="relative min-h-[92vh] bg-[#09090B] overflow-hidden w-full flex flex-col justify-center items-center font-sans border-b border-white/10 px-6 py-20">
      
      {/* SVG filter glass effect dari 21st.dev */}
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

      {/* 21st.dev Dynamic Interactive MeshGradient (background animasi hidup) */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#09090B", "#0C1713", "#002B24", "#3CE6AC"]}
        speed={0.2}
      />

      {/* Overlay vignette halus agar teks di tengah 100% kontras dan tajam terbaca */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#09090B]/40 to-[#09090B]/80 pointer-events-none" />
      <div className="absolute inset-0 hf-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        
        {/* Top Minimalist Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-white/15 text-xs font-mono tracking-wide text-zinc-300 backdrop-blur-xl shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-[#3CE6AC] animate-ping" />
          <span className="text-[#3CE6AC] font-semibold">VANGUARD RUNTIME 2.4</span>
          <span className="text-zinc-600">/</span>
          <span>UNIVERSAL AI GATEWAY</span>
        </motion.div>

        {/* Clean, Bold, 100% Legible Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
        >
          Deterministic Control for{" "}
          <span className="bg-gradient-to-r from-[#3CE6AC] via-[#00E3FF] to-white bg-clip-text text-transparent">
            All AI Model Workloads.
          </span>
        </motion.h1>

        {/* Clean Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed drop-shadow-md"
        >
          The universal proxy and guardrail layer engineered for frontier models and multi-agent workflows. Zero runaway billing, sub-2ms PII sanitization, and deterministic execution logs across any provider.
        </motion.p>

        {/* Sleek CTA Buttons */}
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
            Watch Architecture Video <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#docs"
            className="rounded-full px-7 py-3.5 text-sm font-medium border border-white/20 bg-black/40 text-zinc-200 hover:bg-black/60 hover:text-white transition duration-200 backdrop-blur-xl cursor-pointer"
          >
            Explore SDK & Docs
          </a>
        </motion.div>

        {/* Universal Provider Compatibility Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-14 pt-8 border-t border-white/10 w-full flex flex-col items-center"
        >
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mb-4">
            Native Interoperability with All Frontier Models & Agent Runtimes
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-zinc-300">
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3CE6AC]" /> Anthropic (Claude)
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E3FF]" /> OpenAI (GPT-4o / o3)
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Google (Gemini 2.5)
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Meta (Llama 3.3)
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> DeepSeek & Open Weights
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
