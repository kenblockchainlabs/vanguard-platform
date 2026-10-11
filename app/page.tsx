import React from "react";
import LuxuryVideoShowcase from "@/components/LuxuryVideoShowcase";
import HyperStudioCanvas from "@/components/HyperStudioCanvas";
import GuardrailSimulator from "@/components/GuardrailSimulator";
import SilkShaderBackground from "@/components/SilkShaderBackground";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Zap, 
  Layers, 
  Sparkles,
  Terminal,
  Activity,
  Cpu,
  CheckCircle2,
  Sliders,
  ExternalLink
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-[#FAFAF9] relative overflow-hidden font-sans selection:bg-[#3CE6AC] selection:text-black">
      {/* Background Dot Grid pattern ala HyperFrames */}
      <div className="absolute inset-0 hf-grid opacity-60 pointer-events-none -z-20" />

      {/* Cyber Ambient Radial Glows */}
      <div className="absolute top-[-5%] left-[15%] w-[800px] h-[800px] bg-gradient-to-tr from-[#3CE6AC]/20 via-[#00E3FF]/15 to-transparent rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-[35%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-br from-[#00E3FF]/15 via-[#3CE6AC]/10 to-transparent rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Top Navbar */}
      <nav className="border-b border-white/10 bg-[#09090B]/85 backdrop-blur-xl sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3CE6AC] to-[#00E3FF] flex items-center justify-center font-bold text-black text-sm shadow-[0_0_20px_rgba(60,230,172,0.4)]">
              VG
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white text-base leading-none block">
                VANGUARD
              </span>
              <span className="text-[10px] text-zinc-400 font-mono block tracking-widest mt-1">
                RUNTIME GATEWAY
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono text-zinc-400">
            <a href="#video-showcase" className="hover:text-[#3CE6AC] transition flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3CE6AC]" />
              Video Showcase
            </a>
            <a href="#studio" className="hover:text-white transition">Studio Canvas</a>
            <a href="#guardrails" className="hover:text-white transition">Guardrails</a>
            <a href="#mcp" className="hover:text-white transition">MCP Protocol</a>
            <a href="#simulator" className="hover:text-white transition">Sandbox</a>
            <a href="#compliance" className="hover:text-white transition">Security</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#video-showcase"
              className="px-5 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-[#3CE6AC] to-[#00E3FF] text-[#09090B] hover:brightness-110 transition shadow-[0_0_25px_rgba(60,230,172,0.35)] hover:scale-105 duration-200 cursor-pointer font-mono"
            >
              Watch Video →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto text-center relative overflow-hidden rounded-3xl">
        {/* WebGL Silk Shader Canvas Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none rounded-3xl">
          <SilkShaderBackground className="opacity-55 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/30 via-transparent to-[#09090B]" />
        </div>

        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#3CE6AC] animate-ping" />
          <span className="text-[#3CE6AC] font-semibold">VANGUARD RUNTIME 2.4</span>
          <span className="text-zinc-600">|</span>
          <span>DETERMINISTIC GUARDRAILS FOR AUTONOMOUS AGENTS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.06]">
          Eliminate Runaway Agent Loops. <br />
          <span className="bg-gradient-to-r from-[#3CE6AC] via-[#00E3FF] to-[#3CE6AC] bg-clip-text text-transparent">
            Redact PII in 1.8 Milliseconds.
          </span>
        </h1>

        <p className="mt-7 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          The deterministic proxy and audit layer built for autonomous multi-agent systems and Model Context Protocol (MCP) tool executions. Zero runaway billing, sub-2ms latency, strict zero-retention compliance.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 font-mono">
          <a
            href="#video-showcase"
            className="px-8 py-3.5 rounded-full text-sm font-bold bg-gradient-to-r from-[#3CE6AC] to-[#00E3FF] text-[#09090B] hover:brightness-110 transition flex items-center gap-2 shadow-[0_0_35px_rgba(60,230,172,0.4)] hover:scale-105 duration-200"
          >
            Watch Architecture Video <ArrowRight className="w-4 h-4"/>
          </a>
          <a
            href="#simulator"
            className="px-8 py-3.5 rounded-full text-sm font-semibold border border-white/15 bg-white/[0.04] text-white hover:bg-white/10 transition backdrop-blur-md"
          >
            Launch Live Sandbox
          </a>
        </div>
      </section>

      {/* HIGHLIGHT 1: Real Rendered Video Showcase Video ala HyperFrames */}
      <section id="video-showcase" className="py-6 px-4 max-w-7xl mx-auto">
        <LuxuryVideoShowcase />
      </section>

      {/* Corporate Metrics Bar */}
      <section className="py-12 px-6 max-w-6xl mx-auto border-y border-white/10 my-10 font-mono">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white">1.8 ms</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">PII Masking Latency</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#3CE6AC]">64.2%</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Semantic Cache Hit Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white">100%</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Loop Breaker Precision</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#00E3FF]">MCP Ready</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Model Context Protocol</div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT 2: Canvas Studio Interactive Preview */}
      <section id="studio" className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-[#3CE6AC] uppercase tracking-widest font-semibold block">
            DETERMINISTIC TIMELINE ENGINE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Real-Time Agent Execution Studio
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
            Watch reasoning frames, tool calls, and automated guardrail interventions unfold frame-by-frame.
          </p>
        </div>

        <HyperStudioCanvas />
      </section>

      {/* Interactive Simulator Section */}
      <section id="simulator" className="py-16 px-6">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-[#00E3FF] uppercase tracking-widest font-semibold block">
            INTERACTIVE PROTOCOL SANDBOX
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            Test Vanguard In Real-Time
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-2">
            Trigger live edge cases below to observe automated gateway protection and instant remediation.
          </p>
        </div>

        <GuardrailSimulator/>
      </section>

      {/* Feature Pillar Grid */}
      <section id="guardrails" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#3CE6AC] uppercase tracking-widest font-semibold">
            Enterprise Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            Deterministic Control Over Autonomous AI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#121215]/80 border border-white/10 hover:border-[#3CE6AC]/40 transition flex flex-col justify-between backdrop-blur-xl group shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#3CE6AC] group-hover:scale-110 transition">
                <Zap className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-bold text-white">
                Infinite Loop Circuit Breaker
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Prevents runaway recursive reasoning before bill shock occurs. Dynamically monitors tool recursion depth, halting repetitive loops within 12 iterations while saving up to $1,800/agent incident.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-[#3CE6AC]">
              99.99% Intercept Accuracy
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#121215]/80 border border-white/10 hover:border-[#00E3FF]/40 transition flex flex-col justify-between backdrop-blur-xl group shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#00E3FF] group-hover:scale-110 transition">
                <Lock className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-bold text-white">
                Zero-Retention PII Redactor
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Sub-2ms inline regex and NER stream filter. Automatically sanitizes PAN credit cards, API keys, and patient identifiers before payloads exit your private network perimeter.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-[#00E3FF]">
              1.8ms Stream Pipeline
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#121215]/80 border border-white/10 hover:border-[#3CE6AC]/40 transition flex flex-col justify-between backdrop-blur-xl group shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#3CE6AC] group-hover:scale-110 transition">
                <Layers className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-bold text-white">
                Model Context Protocol (MCP) Audit
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Native proxy gateway for all Anthropic MCP standard servers. Cryptographically signs tool-call inputs, outputs, and side-effects for forensic compliance and SOC2 auditing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-[#3CE6AC]">
              Immutable SHA-256 Receipts
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Trust Statement */}
      <section id="compliance" className="py-16 px-6 max-w-4xl mx-auto text-center border-t border-white/10 font-mono">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>ENTERPRISE COMPLIANCE & PRIVACY ASSURANCE</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Zero Data Training & Strict Tenant Isolation</h2>
        <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed max-w-2xl mx-auto">
          Vanguard Runtime operates under strict zero-retention principles. Your agent payloads, prompt traces, and database schemas are never stored, mirrored, or used for model training. Certified for ISO 27001 and SOC2 Type II environments.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 bg-[#09090B] font-mono text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#3CE6AC] to-[#00E3FF] flex items-center justify-center font-bold text-black text-[10px]">
              VG
            </div>
            <span>© 2026 PT Vanguard Rekayasa Sistem. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/compliance" className="hover:text-white transition">Compliance</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
