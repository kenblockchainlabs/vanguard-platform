"use client";

import React, { useState } from "react";
import { Cpu, Search, CheckCircle2, Zap, Shield, Sparkles } from "lucide-react";

interface ModelInfo {
  name: string;
  provider: "Anthropic" | "OpenAI" | "Google" | "Meta" | "DeepSeek" | "Mistral" | "Alibaba" | "Local";
  context: string;
  category: "Frontier Reasoning" | "Code & Agentic" | "Speed & Multimodal" | "Open Weights";
  badgeColor: string;
  latency: string;
}

const MODEL_REGISTRY: ModelInfo[] = [
  // Anthropic
  { name: "Claude 3.7 Sonnet (Hybrid)", provider: "Anthropic", context: "200k", category: "Frontier Reasoning", badgeColor: "#3CE6AC", latency: "1.2ms" },
  { name: "Claude 3.5 Sonnet", provider: "Anthropic", context: "200k", category: "Code & Agentic", badgeColor: "#3CE6AC", latency: "1.1ms" },
  { name: "Claude 3.5 Haiku", provider: "Anthropic", context: "200k", category: "Speed & Multimodal", badgeColor: "#3CE6AC", latency: "0.8ms" },
  { name: "Claude 3 Opus", provider: "Anthropic", context: "200k", category: "Frontier Reasoning", badgeColor: "#3CE6AC", latency: "1.9ms" },

  // OpenAI
  { name: "o3-mini (High Effort)", provider: "OpenAI", context: "200k", category: "Frontier Reasoning", badgeColor: "#00E3FF", latency: "1.4ms" },
  { name: "o1 / o1-preview", provider: "OpenAI", context: "128k", category: "Frontier Reasoning", badgeColor: "#00E3FF", latency: "2.1ms" },
  { name: "GPT-4o (Omni Realtime)", provider: "OpenAI", context: "128k", category: "Code & Agentic", badgeColor: "#00E3FF", latency: "1.0ms" },
  { name: "GPT-4o mini", provider: "OpenAI", context: "128k", category: "Speed & Multimodal", badgeColor: "#00E3FF", latency: "0.7ms" },

  // Google
  { name: "Gemini 2.5 Flash Thinking", provider: "Google", context: "1,000k", category: "Frontier Reasoning", badgeColor: "#818CF8", latency: "1.1ms" },
  { name: "Gemini 2.5 Pro (Deep Research)", provider: "Google", context: "2,000k", category: "Frontier Reasoning", badgeColor: "#818CF8", latency: "1.8ms" },
  { name: "Gemini 2.5 Flash", provider: "Google", context: "1,000k", category: "Speed & Multimodal", badgeColor: "#818CF8", latency: "0.6ms" },

  // DeepSeek
  { name: "DeepSeek-R1 (Reasoning 671B)", provider: "DeepSeek", context: "128k", category: "Frontier Reasoning", badgeColor: "#F43F5E", latency: "1.3ms" },
  { name: "DeepSeek-V3 (MoE 671B)", provider: "DeepSeek", context: "128k", category: "Code & Agentic", badgeColor: "#F43F5E", latency: "0.9ms" },
  { name: "DeepSeek-Coder-V2", provider: "DeepSeek", context: "128k", category: "Code & Agentic", badgeColor: "#F43F5E", latency: "0.9ms" },

  // Meta & Open Weights
  { name: "Llama 3.3 70B Instruct", provider: "Meta", context: "128k", category: "Open Weights", badgeColor: "#F59E0B", latency: "0.9ms" },
  { name: "Llama 3.1 405B Frontier", provider: "Meta", context: "128k", category: "Frontier Reasoning", badgeColor: "#F59E0B", latency: "2.2ms" },
  { name: "Qwen 2.5 72B Instruct", provider: "Alibaba", context: "128k", category: "Code & Agentic", badgeColor: "#10B981", latency: "1.0ms" },
  { name: "Qwen 2.5 Coder 32B", provider: "Alibaba", context: "128k", category: "Code & Agentic", badgeColor: "#10B981", latency: "0.8ms" },
  { name: "Mistral Large 2 (123B)", provider: "Mistral", context: "128k", category: "Code & Agentic", badgeColor: "#FB923C", latency: "1.2ms" },
  { name: "Codestral 25.01", provider: "Mistral", context: "256k", category: "Code & Agentic", badgeColor: "#FB923C", latency: "0.8ms" },
  { name: "Ollama / vLLM (Self-Hosted)", provider: "Local", context: "Unlimited", category: "Open Weights", badgeColor: "#A1A1AA", latency: "0.4ms" },
];

export default function UniversalModelGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Frontier Reasoning", "Code & Agentic", "Speed & Multimodal", "Open Weights"];

  const filteredModels = MODEL_REGISTRY.filter((m) => {
    const matchCat = selectedCategory === "All" || m.category === selectedCategory;
    const matchSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.provider.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="models" className="py-20 px-6 max-w-6xl mx-auto font-sans">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-3">
          <Cpu className="w-3.5 h-3.5 text-[#3CE6AC]" />
          <span>UNIVERSAL MODEL REGISTRY // 20+ NATIVE RUNTIMES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Every Frontier Model. Zero Vendor Lock-in.
        </h2>
        <p className="mt-3 text-sm text-zinc-400 font-mono max-w-2xl mx-auto">
          One uniform guardrail pipeline applies sub-2ms PII masking, circuit breakers, and semantic caching identically across all 20+ models.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#121215]/80 p-3 rounded-2xl border border-white/10 backdrop-blur-xl">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Claude, o3, Gemini, Llama..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-[#3CE6AC]/50"
          />
        </div>
      </div>

      {/* Model Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredModels.map((model, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-[#0F0F12]/80 border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-xl flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(60,230,172,0.1)]"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                <span
                  className="px-2 py-0.5 rounded-md font-semibold"
                  style={{
                    backgroundColor: `${model.badgeColor}15`,
                    color: model.badgeColor,
                    border: `1px solid ${model.badgeColor}30`,
                  }}
                >
                  {model.provider}
                </span>
                <span className="text-zinc-500">Context: {model.context}</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#3CE6AC] transition">
                {model.name}
              </h3>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3 h-3" /> Wasm Guard Armed
              </span>
              <span className="text-zinc-500">Trace: {model.latency}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Registry Footer Stats */}
      <div className="mt-8 text-center text-xs font-mono text-zinc-500 flex flex-wrap items-center justify-center gap-6">
        <span>● Hot-swap models in runtime without proxy restarts</span>
        <span className="hidden sm:inline">•</span>
        <span>● Automatic fallback routing during provider outages</span>
        <span className="hidden sm:inline">•</span>
        <span>● Zero prompt context caching on upstream servers</span>
      </div>
    </section>
  );
}
