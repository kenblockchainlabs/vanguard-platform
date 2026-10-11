"use client";

import React, { useState } from "react";
import { Copy, Check, BookOpen, Sparkles, Code2, Globe } from "lucide-react";

export default function DeveloperDocs() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"ts" | "python" | "mcp">("ts");

  const copyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const tsCode = `import { VanguardGateway } from "@vanguard/runtime-sdk";

// Initialize universal deterministic guardrail gateway for any AI provider
const vanguard = new VanguardGateway({
  apiKey: process.env.VANGUARD_API_KEY,
  // Routes to Anthropic, OpenAI, Google Gemini, DeepSeek, or local Ollama
  provider: "universal",
  policy: {
    maxLoopIterations: 12,        // Auto-kills infinite reasoning loops
    piiRedaction: "strict",       // 1.8ms zero-retention token masking
    semanticCache: true,          // Cosine similarity cache (64.2% hit rate)
    mcpAuditLog: "sha256"         // Cryptographic execution receipt
  }
});

// Proxy an autonomous agent execution with any LLM provider
const response = await vanguard.executeAgentLoop({
  model: "claude-3-5-sonnet", // or "gpt-4o", "gemini-2.5-flash", "deepseek-v3"
  tools: ["fs_read", "github_pr_create", "bash_exec"],
  task: "Audit production Kubernetes telemetry and generate remediation patch"
});

console.log("Verified Agent Output:", response.output);
console.log("Cryptographic Trace Receipt:", response.auditHash);`;

  const pythonCode = `from vanguard_sdk import VanguardRuntime, GuardrailConfig

# Universal Gateway for OpenAI, Anthropic, Gemini, Meta & DeepSeek
client = VanguardRuntime(
    api_key="vg_live_8912b7a...",
    provider="universal",
    config=GuardrailConfig(
        infinite_loop_breaker=True,
        max_cost_per_session=15.00,  # Auto-kills runaway agent token bill
        zero_retention_pii=True,
        universal_model_support=True
    )
)

# Intercept and protect agent execution across frontier models
with client.trace(agent_name="SRE_Remediation_Agent") as run:
    result = run.forward_model_call(
        model="gpt-4o",  # or "claude-3-5-sonnet", "gemini-2.5", "deepseek-r1"
        prompt="Analyze telemetry latency spike on cluster node worker-4",
        tools=tools
    )
    print(f"Sanitized Result: {result.text}")
    print(f"Cost Saved via Semantic Cache: \${run.cost_saved}")`;

  const mcpCode = `{
  "mcpServers": {
    "vanguard-universal-gateway": {
      "command": "npx",
      "args": ["-y", "@vanguard/mcp-gateway@latest"],
      "env": {
        "VANGUARD_GATEWAY_URL": "https://gateway.vanguard-runtime.com/v1",
        "SUPPORTED_PROVIDERS": "anthropic,openai,google,deepseek,ollama",
        "VANGUARD_AUDIT_ENABLED": "true",
        "CIRCUIT_BREAKER_MAX_DEPTH": "12"
      }
    }
  }
}`;

  return (
    <section id="docs" className="py-20 px-6 max-w-5xl mx-auto font-mono">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-semibold mb-3">
          <Globe className="w-3.5 h-3.5 text-[#3CE6AC]" />
          <span>UNIVERSAL MODEL INTEGRATION & PROTOCOL SPEC</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          One SDK. All Frontier Models.
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl mx-auto font-sans">
          Route through Anthropic Claude, OpenAI, Google Gemini, DeepSeek, or local weights with identical sub-2ms guardrails and zero code changes.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#0C0C0E]/95 backdrop-blur-xl overflow-hidden shadow-2xl">
        <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-white/10 bg-[#121215]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("ts")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "ts"
                  ? "bg-[#3CE6AC] text-black"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              TypeScript / Node.js
            </button>
            <button
              onClick={() => setActiveTab("python")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "python"
                  ? "bg-[#00E3FF] text-black"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Python SDK
            </button>
            <button
              onClick={() => setActiveTab("mcp")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "mcp"
                  ? "bg-amber-400 text-black"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              mcp_config.json
            </button>
          </div>

          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <span className="text-[11px] text-zinc-500 font-mono">
              {activeTab === "ts" && "npm install @vanguard/runtime-sdk"}
              {activeTab === "python" && "pip install vanguard-sdk"}
              {activeTab === "mcp" && "Universal Gateway Proxy v2.4"}
            </span>
            <button
              onClick={() => {
                const code = activeTab === "ts" ? tsCode : activeTab === "python" ? pythonCode : mcpCode;
                copyCode(code, 1);
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition cursor-pointer"
            >
              {copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedIndex === 1 ? "Copied!" : "Copy"}</span>
            </button>
          </div>
        </div>

        <div className="p-6 overflow-x-auto text-xs leading-relaxed text-zinc-300 bg-[#08080A]">
          <pre>
            <code>
              {activeTab === "ts" && tsCode}
              {activeTab === "python" && pythonCode}
              {activeTab === "mcp" && mcpCode}
            </code>
          </pre>
        </div>

        <div className="px-6 py-3 border-t border-white/10 bg-[#101013] flex flex-wrap items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#3CE6AC]">
              <Sparkles className="w-3.5 h-3.5" /> Zero Token Overhead
            </span>
            <span className="flex items-center gap-1 text-[#00E3FF]">
              <Code2 className="w-3.5 h-3.5" /> Universal Model Routing
            </span>
          </div>
          <span>Package Registry: npmjs.org / PyPI</span>
        </div>
      </div>
    </section>
  );
}
