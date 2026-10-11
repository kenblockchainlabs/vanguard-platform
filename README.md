# Vanguard Runtime Engine

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Model Context Protocol](https://img.shields.io/badge/MCP-1.0.4-emerald.svg)](https://modelcontextprotocol.io/)
[![Zero Retention](https://img.shields.io/badge/Privacy-Zero--Retention-green.svg)](https://vanguard-platform-gamma.vercel.app/privacy)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Deterministic State Rollback, Recursive Loop Breaker, and Zero-Retention Guardrail Gateway for Autonomous Multi-Agent Workloads.**

---

## ⚡ Core Architecture

Vanguard Runtime operates as an in-memory execution proxy and audit layer positioned between client orchestrators (Claude Code, AutoGPT, CrewAI, LangGraph) and tool-calling execution environments (Bash, SQL, File Systems, Remote APIs).

```
[ Multi-Agent Orchestrator ]
           │
           ▼ (Tool Execution Stream)
┌────────────────────────────────────────────────────────┐
│               VANGUARD RUNTIME GATEWAY                 │
│                                                        │
│  1. In-Memory PII & Secret Redactor (Sub-2ms)          │
│  2. Infinite Recursion Loop Breaker (Depth >= 12)       │
│  3. Multi-Agent Transaction Rollback Journal           │
│  4. Vector Cosine Semantic Cache (64.2% Hit Rate)      │
│  5. Immutable SHA-256 Audit Log Receipt                │
└────────────────────────────────────────────────────────┘
           │
           ▼ (Sanitized Execution)
[ Execution Sandbox / Remote Model API ]
```

---

## 🚀 Quickstart

### 1. Installation

```bash
npm install @vanguard/runtime-sdk
# or
pip install vanguard-sdk
```

### 2. TypeScript / Node.js Integration

```typescript
import { VanguardGateway } from "@vanguard/runtime-sdk";

const vanguard = new VanguardGateway({
  apiKey: process.env.VANGUARD_API_KEY,
  policy: {
    maxLoopIterations: 12,        // Halts non-divergent tool recursions
    piiRedaction: "strict",       // 1.8ms zero-retention regex + NER masking
    semanticCache: true,          // Cosine similarity cache (64.2% hit rate)
    mcpAuditLog: "sha256"         // Cryptographic execution receipt
  }
});

// Proxy an autonomous agent execution with state rollback support
const session = await vanguard.executeAgentLoop({
  agentId: "devin-worker-04",
  tools: ["fs_write", "sql_migrate", "docker_build"],
  task: "Refactor PostgreSQL schema and migrate user table",
  rollbackOnFailure: true
});

console.log("Safe Agent Execution Output:", session.output);
console.log("Forensic Hash:", session.auditHash);
```

### 3. Model Context Protocol (MCP) Configuration

Add Vanguard to your Claude Desktop or MCP Client configuration (`mcp_config.json`):

```json
{
  "mcpServers": {
    "vanguard-guardrail-gateway": {
      "command": "npx",
      "args": ["-y", "@vanguard/mcp-gateway@latest"],
      "env": {
        "VANGUARD_GATEWAY_URL": "https://gateway.vanguard-runtime.com/v1",
        "SUPPORTED_PROVIDERS": "anthropic,openai,google,deepseek",
        "CIRCUIT_BREAKER_MAX_DEPTH": "12",
        "ZERO_RETENTION_PII": "true"
      }
    }
  }
}
```

---

## 🛡️ Enterprise Failure Modes Solved

| Failure Mode | Standard LLM Providers | Vanguard Runtime Solution |
| :--- | :--- | :--- |
| **Runaway Agent Recursion** | Token quota exhausted, bill spikes $1,000+ overnight | **Circuit Breaker:** State convergence watchdog halts loop at depth 12 |
| **Accidental Credential Leak** | Secret enters model context window & logs permanently | **Zero-Retention RAM Masking:** Intercepts PAN, API keys, and PII in 1.4ms |
| **Side-Effect Database Damage** | Failed migration leaves database partially corrupted | **State Rollback Journal:** Automatically rolls back transactions on failure |
| **Repetitive Tool Calls** | Pays full token cost for identical repetitive queries | **Semantic Vector Cache:** Returns in 0.2ms with $0 token consumption |

---

## 🏛️ Compliance & Governance

- **Zero Data Training:** No prompt payloads or tool outputs are ever stored or used for model training.
- **SOC2 Type II & ISO 27001 Alignment:** Every execution generates a client-side immutable SHA-256 verification hash.
- **Governing Legal Entity:** PT Vanguard Rekayasa Sistem (Jakarta & Batam, Indonesia).

---

## 📄 License

MIT License © 2026 PT Vanguard Rekayasa Sistem. All rights reserved.
