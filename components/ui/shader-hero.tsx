"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Activity, Cpu, Layers } from "lucide-react"

export const ShaderHero = () => {
  return (
    <div className="relative min-h-[92vh] bg-[#09090B] overflow-hidden w-full flex flex-col justify-center items-center font-sans border-b border-white/10 px-6 py-20">
      
      {/* Luxury Apple-style Subtle Dynamic Grid & Radial Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(60,230,172,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-40" />

      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#00E3FF]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        
        {/* Top Minimalist Pill Badge (Apple Style) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wide text-zinc-300 backdrop-blur-xl shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#3CE6AC]" />
          <span className="text-[#3CE6AC] font-semibold">VANGUARD RUNTIME 2.4</span>
          <span className="text-zinc-600">/</span>
          <span>UNIVERSAL AI GATEWAY</span>
        </motion.div>

        {/* Clean, Sharp, 100% Legible Apple Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl"
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
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed"
        >
          The universal proxy and guardrail layer engineered for frontier models and multi-agent workflows. Zero runaway billing, sub-2ms PII sanitization, and deterministic execution logs across any provider.
        </motion.p>

        {/* Apple Style Sleek CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4 font-mono text-sm"
        >
          <a
            href="#video-showcase"
            className="rounded-full px-7 py-3.5 text-sm font-semibold bg-[#FAFAF9] text-[#09090B] hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition duration-200 shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center gap-2"
          >
            Watch Architecture Video <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#docs"
            className="rounded-full px-7 py-3.5 text-sm font-medium border border-white/15 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.08] hover:text-white transition duration-200 backdrop-blur-md"
          >
            Explore SDK & Docs
          </a>
        </motion.div>

        {/* Universal Provider Compatibility Bar (BUKAN CUMA ANTHROPIC - SEMUA PROVIDER) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-14 pt-8 border-t border-white/10 w-full flex flex-col items-center"
        >
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4">
            Native Interoperability with All Frontier Models & Agent Runtimes
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-zinc-400">
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
