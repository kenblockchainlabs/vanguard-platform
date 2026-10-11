"use client";

import React, { useState } from "react";
import { 
  AlertOctagon, 
  Terminal, 
  Lock, 
  ShieldCheck, 
  Zap, 
  Activity, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Sparkles,
  ArrowRight,
  Database
} from "lucide-react";

export default function GuardrailSimulator() {
  const [activeScenario, setActiveScenario] = useState<"NORMAL" | "PII_LEAK" | "INFINITE_LOOP">("NORMAL");

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl border border-white/10 bg-[#0C0D12]/95 backdrop-blur-2xl p-4 sm:p-7 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] font-sans">
      
      {/* Top Header & Scenario Toggle Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#3CE6AC] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#3CE6AC] font-semibold">
              LIVE GATEWAY PROXY V2.4 // ACTIVE SHIELD
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Agent Execution & Guardrail Pipeline
          </h3>
          <p className="text-xs text-zinc-400 font-mono mt-0.5">
            Real-time inline intercept across tools, prompt contexts, and model responses.
          </p>
        </div>

        {/* Apple-grade Interactive Scenario Pill Buttons */}
        <div className="flex flex-wrap items-center gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/10">
          <button
            onClick={() => setActiveScenario("NORMAL")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
              activeScenario === "NORMAL"
                ? "bg-[#3CE6AC] text-black font-bold shadow-[0_0_15px_rgba(60,230,172,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            Nominal Stream
          </button>
          <button
            onClick={() => setActiveScenario("PII_LEAK")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
              activeScenario === "PII_LEAK"
                ? "bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                : "text-amber-400/80 hover:text-amber-300 hover:bg-amber-400/10"
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            Intercept PII Leak
          </button>
          <button
            onClick={() => setActiveScenario("INFINITE_LOOP")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
              activeScenario === "INFINITE_LOOP"
                ? "bg-rose-500 text-white font-bold shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                : "text-rose-400/80 hover:text-rose-300 hover:bg-rose-500/10"
            }`}
          >
            <AlertOctagon className="w-3.5 h-3.5" />
            Kill Infinite Loop
          </button>
        </div>
      </div>

      {/* Main Grid: Responsive & Clean (No Tumpuk-tumpuk di Mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        
        {/* Left Column: 3 Metric Cards (Clean Spacing) */}
        <div className="lg:col-span-4 space-y-3.5 font-mono">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between text-zinc-500 text-xs">
              <span>SEMANTIC CACHE</span>
              <Database className="w-3.5 h-3.5 text-[#3CE6AC]" />
            </div>
            <div className="text-2xl font-black text-[#3CE6AC] mt-1.5">64.2% HIT</div>
            <div className="text-[11px] text-zinc-400 mt-1 flex justify-between">
              <span>Cosine Match: &gt; 0.92</span>
              <span className="text-emerald-400">Saved: $1,420</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between text-zinc-500 text-xs">
              <span>PII TRACE LATENCY</span>
              <Clock className="w-3.5 h-3.5 text-[#00E3FF]" />
            </div>
            <div className="text-2xl font-black text-[#00E3FF] mt-1.5">1.8 ms</div>
            <div className="text-[11px] text-zinc-400 mt-1 flex justify-between">
              <span>Zero-Retention RAM</span>
              <span className="text-sky-400">0ms Model Drift</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between text-zinc-500 text-xs">
              <span>LOOP CIRCUIT BREAKER</span>
              <Zap className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-2xl font-black text-amber-400 mt-1.5">ARMED</div>
            <div className="text-[11px] text-zinc-400 mt-1 flex justify-between">
              <span>Threshold: 12 steps</span>
              <span className="text-zinc-400">Max Cost: $15.00</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Waterfall & Dynamic Terminal */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
          
          {/* Request Waterfall Container */}
          <div className="p-5 rounded-2xl bg-[#08080B]/90 border border-white/10 font-mono text-xs space-y-3">
            <div className="text-zinc-400 pb-2.5 border-b border-white/10 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <Layers className="w-3.5 h-3.5 text-[#3CE6AC]" />
                REQUEST WATERFALL INSPECTOR
              </span>
              <span className="text-zinc-500 text-[11px]">Trace: #req-9081x</span>
            </div>

            {/* Step 1: Ingest */}
            <div className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-white/[0.02]">
              <span className="flex items-center gap-2 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Client Ingest & Auth Token Verification
              </span>
              <span className="text-zinc-500 font-bold">0.4 ms</span>
            </div>

            {/* Step 2: Dynamic Action based on Scenario */}
            {activeScenario === "PII_LEAK" ? (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 space-y-1.5 shadow-lg">
                <div className="font-bold flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-400" /> 
                  [GATEWAY ACTION] Sensitive Payload Intercepted (1.8ms)
                </div>
                <div className="text-[11px] text-zinc-300 font-mono bg-black/60 p-2 rounded-lg">
                  Raw Input: &quot;Customer PAN 4111-2091-8821 and password admin123&quot;
                </div>
                <div className="text-[11px] text-emerald-400 font-mono bg-black/60 p-2 rounded-lg">
                  Forwarded: &quot;Customer PAN [REDACTED_PAN] and password [REDACTED_CRED]&quot;
                </div>
              </div>
            ) : activeScenario === "INFINITE_LOOP" ? (
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 space-y-1.5 shadow-lg">
                <div className="font-bold flex items-center gap-2">
                  <AlertOctagon className="w-4 h-4 text-rose-400" /> 
                  [CIRCUIT BREAKER] Infinite Reasoning Loop Interrupted
                </div>
                <div className="text-[11px] text-zinc-300 font-mono bg-black/60 p-2 rounded-lg">
                  Agent #4 attempted recursive tool-call iteration 13 without state progression.
                </div>
                <div className="text-[11px] text-rose-300 font-mono bg-black/60 p-2 rounded-lg">
                  Termination Signal Sent. Prevented estimated overshoot: $340.20 USD.
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-white/[0.02]">
                <span className="flex items-center gap-2 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E3FF]" />
                  Inline Regex & NER Sanitizer (Zero PII Detected)
                </span>
                <span className="text-zinc-500 font-bold">1.2 ms</span>
              </div>
            )}

            {/* Step 3: MCP Protocol & Upstream Forward */}
            <div className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-white/[0.02]">
              <span className="flex items-center gap-2 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                MCP Tool Sandbox Routing & Upstream Forwarding
              </span>
              <span className="text-zinc-500 font-bold">3.1 ms</span>
            </div>

            {/* Terminal Live Trace Log */}
            <div className="mt-3 p-3.5 rounded-xl bg-black/80 border border-white/5 font-mono text-[11px] text-zinc-400 space-y-1">
              <div className="text-zinc-500 pb-1 border-b border-white/5 flex justify-between">
                <span>GATEWAY PROTOCOL STREAM</span>
                <span className="text-emerald-400 font-bold">200 OK</span>
              </div>
              <p className="text-zinc-300">
                &gt; [TRACE] Context tokens: 14,280 | Completion tokens: 412
              </p>
              <p className="text-zinc-400">
                &gt; [ROUTING] Protocol: Universal MCP Proxy / SSE streaming active
              </p>
              <p className="text-[#3CE6AC]">
                &gt; [AUDIT] Cryptographic Hash: sha256_e801b7a...902c (Saved in Client Vault)
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
