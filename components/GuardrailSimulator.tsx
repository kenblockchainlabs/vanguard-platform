"use client";

import React, { useState } from "react";
import { AlertOctagon, Terminal, Lock } from "lucide-react";

export default function GuardrailSimulator() {
  const [activeScenario, setActiveScenario] = useState<"NORMAL" | "PII_LEAK" | "INFINITE_LOOP">("NORMAL");

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl border border-white/10 bg-[#121215]/80 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#3CE6AC] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#3CE6AC] font-semibold">
              Live Gateway Proxy v2.4 (MCP Verified)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Agent Execution & Guardrail Enforcement Pipeline
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveScenario("NORMAL")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition border cursor-pointer ${
              activeScenario === "NORMAL"
                ? "bg-[#3CE6AC] text-black font-bold border-transparent"
                : "bg-white/5 text-zinc-300 border-white/10 hover:border-white/20"
            }`}
          >
            Nominal Stream
          </button>
          <button
            onClick={() => setActiveScenario("PII_LEAK")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition border cursor-pointer ${
              activeScenario === "PII_LEAK"
                ? "bg-amber-500 text-black font-bold border-transparent"
                : "bg-white/5 text-amber-400 border-amber-500/20 hover:bg-amber-500/10"
            }`}
          >
            Intercept PII Leak
          </button>
          <button
            onClick={() => setActiveScenario("INFINITE_LOOP")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition border cursor-pointer ${
              activeScenario === "INFINITE_LOOP"
                ? "bg-rose-500 text-white font-bold border-transparent"
                : "bg-white/5 text-rose-400 border-rose-500/20 hover:bg-rose-500/10"
            }`}
          >
            Kill Infinite Loop
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Waterfall Metrics */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-zinc-500 block">SEMANTIC CACHE</span>
              <span className="text-lg font-bold text-[#3CE6AC] mt-1 block">64.2% HIT</span>
              <span className="text-[10px] text-zinc-400 mt-1 block">Saved: $1,420 today</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-zinc-500 block">PII TRACE LATENCY</span>
              <span className="text-lg font-bold text-sky-400 mt-1 block">1.8 ms</span>
              <span className="text-[10px] text-zinc-400 mt-1 block">Zero-retention</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-zinc-500 block">LOOP CIRCUIT BREAKER</span>
              <span className="text-lg font-bold text-emerald-400 mt-1 block">ARMED</span>
              <span className="text-[10px] text-zinc-400 mt-1 block">Limit: 15 iterations</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3">
            <div className="text-zinc-400 pb-2 border-b border-white/10 flex justify-between">
              <span>REQUEST WATERFALL INSPECTOR</span>
              <span className="text-zinc-500">Trace: #req-9081x</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-zinc-300">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Client Ingest & Auth Token Verification
                </span>
                <span className="text-zinc-500">0.4ms</span>
              </div>

              {activeScenario === "PII_LEAK" ? (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300">
                  <div className="font-bold flex items-center gap-2">
                    <Lock className="w-4 h-4 text-amber-400" /> [GATEWAY ACTION] Sensitive Payload Intercepted
                  </div>
                  <div className="text-[11px] mt-1 text-zinc-300">
                    Input: &quot;Process customer credit card 4111-2091-8821 and password admin123&quot;
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-0.5">
                    Sanitized Payload Sent: &quot;Process customer credit card [REDACTED_PAN] and password [REDACTED_CRED]&quot;
                  </div>
                </div>
              ) : activeScenario === "INFINITE_LOOP" ? (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300">
                  <div className="font-bold flex items-center gap-2">
                    <AlertOctagon className="w-4 h-4 text-rose-400" /> [CIRCUIT BREAKER] Infinite Reasoning Loop Interrupted
                  </div>
                  <div className="text-[11px] mt-1 text-zinc-300">
                    Agent #4 attempted recursive tool-call iteration 16 without state progression.
                  </div>
                  <div className="text-[11px] text-rose-400 mt-0.5">
                    Execution terminated automatically. Saved estimated token overshoot: $340.20.
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    PII Redaction Engine (Zero leakage policy)
                  </span>
                  <span className="text-zinc-500">1.2ms</span>
                </div>
              )}

              <div className="flex items-center justify-between text-zinc-300">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  MCP Tool Registry & Sandbox Routing
                </span>
                <span className="text-zinc-500">3.1ms</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Upstream Frontier Model Forwarding
                </span>
                <span className="text-zinc-500">18.4ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time Console Stream */}
        <div className="p-5 rounded-2xl bg-black border border-white/10 font-mono text-[11px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-zinc-400 pb-3 mb-3 border-b border-white/10">
              <Terminal className="w-3.5 h-3.5 text-[#3CE6AC]" />
              <span>Gateway Audit Stream</span>
            </div>
            <div className="space-y-2 text-zinc-300">
              <p className="text-emerald-400">[SYSTEM] Proxy initialized on port :8080.</p>
              <p className="text-zinc-400">[ROUTING] Protocol: Anthropic MCP / SSE streaming.</p>
              {activeScenario === "PII_LEAK" && (
                <p className="text-amber-400">[GUARDRAIL] PII Pattern matched: ISO-IEC-27001 sanitization applied.</p>
              )}
              {activeScenario === "INFINITE_LOOP" && (
                <p className="text-rose-400">[CIRCUIT] Loop detector tripped. SIGKILL dispatched to Agent worker.</p>
              )}
              <p className="text-zinc-500">[TRACE] Context tokens: 14,280 | Completion tokens: 412.</p>
            </div>
          </div>
          <div className="pt-3 border-t border-white/10 text-zinc-500 flex justify-between text-[10px]">
            <span>Audit Hash: SHA-256</span>
            <span className="text-[#3CE6AC]">Status: 200 OK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
