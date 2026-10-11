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
  Database,
  Cpu,
  RefreshCw,
  Copy,
  Check
} from "lucide-react";

interface PresetScenario {
  id: string;
  name: string;
  type: "PII" | "LOOP" | "SECRET" | "INJECTION";
  prompt: string;
  sanitized: string;
  actionTaken: string;
  timeMs: string;
  costSaved: string;
  hash: string;
}

const PRESETS: PresetScenario[] = [
  {
    id: "pan",
    name: "Customer Credit Card (PAN)",
    type: "PII",
    prompt: "Process subscription for user@acme.corp using card 4111-2091-8821-9044 and CVV 891.",
    sanitized: "Process subscription for user@acme.corp using card [REDACTED_PAN_VISA] and CVV [REDACTED_CVV].",
    actionTaken: "Zero-retention regex & NER masked sensitive financial tokens before model egress.",
    timeMs: "1.4ms",
    costSaved: "$0.00 (Compliance Passed)",
    hash: "sha256_9f81a7b...c01"
  },
  {
    id: "loop",
    name: "Runaway Recursive Tool Loop",
    type: "LOOP",
    prompt: "Agent #04 calling 'fetch_schema()' in recursion loop at depth 13 without state divergence.",
    sanitized: "[EXECUTION_HALTED] Maximum recursion threshold reached (12 iterations). Circuit breaker tripped.",
    actionTaken: "Automated circuit breaker intercepted execution loop. Terminated before runaway token overshoot.",
    timeMs: "0.8ms",
    costSaved: "$340.20 USD Prevented",
    hash: "sha256_3b02e1c...7d9"
  },
  {
    id: "api_key",
    name: "Leaked Anthropic / OpenAI API Key",
    type: "SECRET",
    prompt: "Deploy proxy with upstream key sk-ant-api03-K92mZ018xZaA9910Lqpz912 and db_pass: SuperSecretP@ss!",
    sanitized: "Deploy proxy with upstream key [REDACTED_SECRET_APIKEY] and db_pass: [REDACTED_CREDENTIAL].",
    actionTaken: "Entropy scanner detected high-entropy private key. Scrubbed in-memory with zero disk writes.",
    timeMs: "1.6ms",
    costSaved: "Zero Secret Leakage",
    hash: "sha256_8801d4a...11e"
  },
  {
    id: "cache",
    name: "Repetitive Tool Call (Semantic Cache)",
    type: "INJECTION",
    prompt: "Summarize Q3 financial metrics for APAC region and compare variance with previous quarter.",
    sanitized: "[CACHE_HIT] Cosine similarity 0.942. Served from memory without upstream model forwarding.",
    actionTaken: "Direct memory return. Zero latency, zero token consumption on upstream provider.",
    timeMs: "0.2ms",
    costSaved: "$0.45 per query (100% saved)",
    hash: "sha256_11b89fa...aa4"
  }
];

export default function GuardrailSimulator() {
  const [selectedPreset, setSelectedPreset] = useState<PresetScenario>(PRESETS[0]);
  const [activeModel, setActiveModel] = useState<string>("Claude 3.7 Sonnet");
  const [copied, setCopied] = useState(false);

  const copyReceipt = () => {
    navigator.clipboard.writeText(selectedPreset.hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl border border-white/10 bg-[#0C0D12]/95 backdrop-blur-2xl p-5 sm:p-8 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9)] font-sans">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3CE6AC] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#3CE6AC] font-semibold">
              INTERACTIVE GUARDRAIL PLAYGROUND // V2.4
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Live Agent Execution & Intercept Cockpit
          </h3>
          <p className="text-xs text-zinc-400 font-mono mt-0.5">
            Test how Vanguard isolates PII, breaks infinite loops, and caches repetitive agent calls in real-time.
          </p>
        </div>

        {/* Model Switcher Pill */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 text-xs font-mono">
          {["Claude 3.7", "GPT-4o", "Gemini 2.5", "DeepSeek R1"].map((m) => (
            <button
              key={m}
              onClick={() => setActiveModel(m)}
              className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                activeModel.includes(m.split(" ")[0])
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Selector Strip (Simple & Powerful) */}
      <div className="py-4 border-b border-white/10">
        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-2.5">
          Select Live Incident Scenario:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setSelectedPreset(preset)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                selectedPreset.id === preset.id
                  ? "bg-white/[0.08] border-[#3CE6AC]/50 text-white shadow-[0_0_20px_rgba(60,230,172,0.15)]"
                  : "bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 font-semibold">
                  {preset.type}
                </span>
                <span className="text-[11px] font-mono text-[#3CE6AC] font-bold">
                  {preset.timeMs}
                </span>
              </div>
              <span className="text-xs font-semibold text-white leading-tight mt-1 line-clamp-1">
                {preset.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Payload Inspector (Before vs After) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 font-mono text-xs">
        
        {/* RAW AGENT INGEST */}
        <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-zinc-400 text-[11px]">
              <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                RAW INGEST PAYLOAD
              </span>
              <span>Client -&gt; Proxy</span>
            </div>
            <p className="mt-3 text-zinc-300 leading-relaxed bg-[#111116] p-3 rounded-xl border border-white/5 text-[11px]">
              &quot;{selectedPreset.prompt}&quot;
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
            <span>Security Scan: Evaluating</span>
            <span className="text-amber-400 font-semibold">INTERCEPT TRIGGERED</span>
          </div>
        </div>

        {/* VANGUARD DETERMINISTIC SANITIZED OUTPUT */}
        <div className="p-4 rounded-2xl bg-[#091512]/80 border border-[#3CE6AC]/30 flex flex-col justify-between relative overflow-hidden shadow-[0_0_30px_rgba(60,230,172,0.08)]">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#3CE6AC]/20 text-[#3CE6AC] text-[11px]">
              <span className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3CE6AC]" />
                SANITIZED EGRESS / RESOLUTION
              </span>
              <span className="text-emerald-400 font-bold">{selectedPreset.timeMs}</span>
            </div>
            <p className="mt-3 text-emerald-300 leading-relaxed bg-black/60 p-3 rounded-xl border border-[#3CE6AC]/20 text-[11px]">
              {selectedPreset.sanitized}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
            <span className="text-zinc-400">Outcome:</span>
            <span className="text-[#3CE6AC] font-bold">{selectedPreset.costSaved}</span>
          </div>
        </div>

      </div>

      {/* Real-Time Telemetry & Forensic Receipt Bar */}
      <div className="p-4 rounded-2xl bg-black/70 border border-white/10 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3CE6AC]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-white font-semibold text-xs">
              Cryptographic Execution Proof
            </div>
            <div className="text-zinc-500 text-[11px]">
              Hash: <span className="text-zinc-300">{selectedPreset.hash}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={copyReceipt}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition cursor-pointer text-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Hash Copied!" : "Copy Receipt"}</span>
          </button>
          <span className="text-[11px] text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            SOC2 Verified
          </span>
        </div>
      </div>

    </div>
  );
}
