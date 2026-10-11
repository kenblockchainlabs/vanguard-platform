"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MeshGradient } from "@paper-design/shaders-react"
import { ArrowRight, Sparkles, ShieldCheck, Activity } from "lucide-react"

const letterAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const containerAnimation = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
}

export const ShaderHero = () => {
  const title = "Deterministic Control Over Autonomous Agents"
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#09090B] relative overflow-hidden w-full flex flex-col justify-center items-center font-sans border-b border-white/10"
    >
      <svg className="absolute inset-0 w-0 h-0">
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

      {/* 21st.dev Dynamic Interactive MeshGradient with HyperFrames Mint #3CE6AC & Cyan #00E3FF */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#09090B", "#0C1713", "#002B24", "#3CE6AC"]}
        speed={0.2}
      />

      {/* Secondary Ambient Grid Matrix */}
      <div className="absolute inset-0 hf-grid opacity-50 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 px-4 py-1.5 rounded-full bg-white/[0.06] text-white text-xs font-mono font-medium flex items-center gap-2 backdrop-blur-xl border border-white/15 shadow-[0_0_20px_rgba(60,230,172,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#3CE6AC] animate-ping" />
          <span className="text-[#3CE6AC] font-semibold">VANGUARD RUNTIME 2.4</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-300">ENTERPRISE AGENT OBSERVABILITY & GUARDRAILS</span>
        </motion.div>

        <motion.h1
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-2xl flex flex-wrap justify-center leading-[1.08] max-w-4xl"
        >
          {title.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-3 sm:mr-4">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letterAnimation}
                  className={
                    word === "Autonomous" || word === "Agents"
                      ? "bg-gradient-to-r from-[#3CE6AC] via-[#00E3FF] to-[#3CE6AC] bg-clip-text text-transparent"
                      : ""
                  }
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 max-w-2xl text-base md:text-xl text-zinc-300 leading-relaxed font-sans"
        >
          Stop runaway agent recursion, strip PII in <strong className="text-white">1.8 milliseconds</strong>, and cryptographically audit Model Context Protocol (MCP) tool executions before token bill shock strikes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4 font-mono text-sm"
        >
          <a
            href="#video-showcase"
            className="rounded-2xl px-8 py-4 text-base font-bold bg-gradient-to-r from-[#3CE6AC] to-[#00E3FF] text-[#09090B] hover:brightness-110 shadow-[0_0_35px_rgba(60,230,172,0.45)] hover:scale-105 duration-200 transition flex items-center gap-2"
          >
            Watch Architecture Video <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#docs"
            className="rounded-2xl px-8 py-4 text-base font-semibold bg-white/5 border border-white/15 text-white hover:bg-white/10 backdrop-blur-xl transition"
          >
            Explore SDK & Specs
          </a>
        </motion.div>

        {/* Live Status Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400"
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#3CE6AC]" />
            Zero Data Training (SOC2 Type II)
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#00E3FF]" />
            Sub-2ms Inline Wasm Intercept
          </span>
        </motion.div>
      </div>
    </div>
  )
}
