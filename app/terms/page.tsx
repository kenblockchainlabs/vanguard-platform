import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#ECE9E2] text-zinc-800 px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-black/10 shadow-sm">
        <Link className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-black mb-6" href="/">
          <ArrowLeft className="w-4 h-4" /> Return to Platform
        </Link>
        <h1 className="text-3xl font-extrabold text-[#111111]">Terms of Engineering Services</h1>
        <p className="text-xs font-mono text-zinc-500 mt-1">Version 2.4 | PT Vanguard Rekayasa Cerdas</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-700">
          <section>
            <h2 className="text-base font-bold text-black mb-2">1. Scope of Telemetry Deployment</h2>
            <p>Vanguard supplies edge computing devices, telemetry firmware, and deterministic predictive maintenance analytics. Deployments are bound by technical facility audit specifications.</p>
          </section>
          <section>
            <h2 className="text-base font-bold text-black mb-2">2. Service Level Agreement (SLA)</h2>
            <p>Edge hardware gateways guarantee a 99.98% telemetry uptime via dual-path LTE/Ethernet failover. In-line anomaly notifications trigger within 50ms of critical threshold violations.</p>
          </section>
          <section>
            <h2 className="text-base font-bold text-black mb-2">3. Plant Operational Safety</h2>
            <p>Vanguard incident diagnostics act as decision-support systems for licensed plant engineers. Final physical emergency trip sequences remain governed by certified hardware interlocks.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
