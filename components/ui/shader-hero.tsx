"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { MeshGradient } from "@paper-design/shaders-react"
import { ArrowRight, ShieldCheck, Activity, Zap, Lock, RefreshCw, Layers } from "lucide-react"

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

      {/* 21st.dev Dynamic Interactive MeshGradient */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#09090B", "#0C1713", "#002B24", "#3CE6AC"]}
        speed={0.2}
      />

      {/* Overlay vignette */}
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
          <span>DETERMINISTIC AI GATEWAY</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
        >
          Deterministic Control for{" "}
          <span className="bg-gradient-to-r from-[#3CE6AC] via-[#00E3FF] to-white bg-clip-text text-transparent">
            Autonomous AI Agents.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed drop-shadow-md"
        >
          The deterministic proxy and guardrail layer engineered for high-volume agentic workloads. Zero runaway loops, sub-2ms PII masking, and cryptographic execution proofs.
        </motion.p>

        {/* CTA Buttons */}
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

        {/* GANTI DAFTAR NAMA MODEL JADI 4 KEUNGGULAN UTAMA VANGUARD */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-14 pt-8 border-t border-white/10 w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#3CE6AC] font-mono text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" /> Loop Breaker
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                Detects & halts recursive reasoning loops before token bill overruns.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#00E3FF] font-mono text-xs font-semibold">
                <Lock className="w-3.5 h-3.5" /> Sub-2ms PII Mask
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                Zero-retention inline regex & NER strips credentials before network egress.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                <RefreshCw className="w-3.5 h-3.5" /> Semantic Cache
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                Cosine similarity caching delivers 64.2% hit rates on repetitive tool calls.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold">
                <Layers className="w-3.5 h-3.5" /> Immutable Audit
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                SHA-256 cryptographic verification for every multi-agent tool execution.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
