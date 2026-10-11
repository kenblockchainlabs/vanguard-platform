import React from "react";
import GuardrailSimulator from "@/components/GuardrailSimulator";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Zap, 
  Layers 
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-zinc-100 relative overflow-hidden font-sans selection:bg-[#3CE6AC] selection:text-black">
      {/* Glow mesh background */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-[#3CE6AC]/20 via-[#00E3FF]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-[#00E3FF]/15 via-[#3CE6AC]/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Top Navbar */}
      <nav className="border-b border-white/10 bg-[#09090B]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#3CE6AC] to-[#00E3FF] flex items-center justify-center font-bold text-black text-xs shadow-lg">
              VG
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white text-base leading-none block">VANGUARD</span>
              <span className="text-[10px] text-zinc-400 font-mono block tracking-wider mt-0.5">RUNTIME GATEWAY</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-400">
            <a href="#guardrails" className="hover:text-white transition">Guardrails</a>
            <a href="#mcp" className="hover:text-white transition">MCP Protocol</a>
            <a href="#demo" className="hover:text-white transition">Live Gateway</a>
            <a href="#compliance" className="hover:text-white transition">Security</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-full text-xs font-bold bg-[#3CE6AC] text-black hover:bg-[#32c995] transition shadow-lg hover:scale-105 duration-200">
              Deploy Gateway
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-8">
          <ShieldCheck className="w-4 h-4 text-[#3CE6AC]"/>
          ENTERPRISE OBSERVABILITY & GUARDRAILS FOR AUTONOMOUS AGENTS
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08]">
          Eliminate Runaway Agent Loops. Redact PII in 1.8ms.
        </h1>

        <p className="mt-6 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          The deterministic proxy and audit layer for multi-agent systems and Model Context Protocol (MCP) tool executions. Zero token overspend, strict zero-retention governance.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#demo"
            className="px-8 py-3.5 rounded-full text-sm font-bold bg-[#3CE6AC] text-black hover:bg-[#32c995] transition flex items-center gap-2 shadow-xl hover:scale-105 duration-200"
          >
            Launch Interactive Sandbox <ArrowRight className="w-4 h-4"/>
          </a>
          <a
            href="#mcp"
            className="px-8 py-3.5 rounded-full text-sm font-semibold border border-white/15 bg-white/5 text-white hover:bg-white/10 transition"
          >
            Read Architecture Whitepaper
          </a>
        </div>
      </section>

      {/* Corporate Metrics */}
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
            <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Loop Breaker Accuracy</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#00E3FF]">MCP Ready</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Model Context Protocol</div>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section id="demo" className="py-16 px-6">
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
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#3CE6AC]">
                <Zap className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-bold text-white">Infinite Loop Circuit Breaker</h3>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                Detects recursive tool invocations and state-space traps. Automatically terminates rogue agents before burning through organizational token budgets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-zinc-500">
              Enforces Max Iteration &amp; Budget Ceilings
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-sky-400">
                <Lock className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-bold text-white">Sub-2ms Zero-Retention PII Redactor</h3>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                Strips credit card numbers, secret API keys, credentials, and customer personal data in-flight before token serialization reaches cloud frontier models.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-zinc-500">
              HIPAA &amp; GDPR Compliant Pipeline
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400">
                <Layers className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-bold text-white">Model Context Protocol Audit Registry</h3>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                Every tool-call payload, system prompt delta, and response token is cryptographically stamped for internal security audits and compliance playback.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-zinc-500">
              Full Replayability &amp; Trace Graphs
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Compliance */}
      <footer id="compliance" className="border-t border-white/10 py-16 px-6 bg-black text-zinc-500 text-xs font-mono">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3CE6AC]" />
              Vanguard Runtime Systems Inc.
            </div>
            <p className="mt-2 text-zinc-400 max-w-sm font-sans text-xs leading-relaxed">
              Deterministic Guardrail Proxy &amp; Observability Infrastructure for Enterprise Multi-Agent Systems.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">LEGAL &amp; COMPLIANCE</span>
            <Link className="hover:text-white" href="/privacy">Privacy Policy (Zero-Data Retention)</Link>
            <Link className="hover:text-white" href="/terms">Terms of Gateway Service &amp; SLA</Link>
            <Link className="hover:text-white text-emerald-400" href="/compliance">Compliance &amp; Certifications</Link>
            <span className="text-zinc-600 mt-2">ISO 27001 / SOC2 Type II Aligned</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
