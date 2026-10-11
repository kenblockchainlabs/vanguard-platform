import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#ECE9E2] text-zinc-800 px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-black/10 shadow-sm">
        <Link className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-black mb-6" href="/">
          <ArrowLeft className="w-4 h-4" /> Return to Platform
        </Link>
        <h1 className="text-3xl font-extrabold text-[#111111]">Privacy Policy & Data Security</h1>
        <p className="text-xs font-mono text-zinc-500 mt-1">Last Updated: March 2025 | PT Vanguard Rekayasa Cerdas</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-700">
          <section>
            <h2 className="text-base font-bold text-black mb-2">1. Industrial Telemetry Scopes</h2>
            <p>PT Vanguard Rekayasa Cerdas operates edge gateways and deterministic condition-monitoring infrastructure. We collect hardware sensor readouts (vibration spectra, thermal contact data, current signatures) exclusively for failure diagnostics.</p>
          </section>
          <section>
            <h2 className="text-base font-bold text-black mb-2">2. IEC 62443 Cyber-Physical Governance</h2>
            <p>All telemetry streams transit through isolated Modbus/Ethernet tunnels protected with AES-256 encryption. Telemetry packets never contain personal identifiable human data (PII).</p>
          </section>
          <section>
            <h2 className="text-base font-bold text-black mb-2">3. On-Premises & Private Cloud Inference</h2>
            <p>Our analytical anomaly models evaluate telemetry directly on edge DIN-rail nodes or isolated client virtual private clouds (VPC). No operational machinery data is shared with third parties.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
