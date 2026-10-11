import React from "react";
import Link from "next/link";
import TelemetrySimulator from "@/components/TelemetrySimulator";
import HardwareCatalog from "@/components/HardwareCatalog";
import { ShieldCheck, ArrowRight, FileCheck2, Cpu, CheckCircle2, ChevronRight, Layers, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ECE9E2] text-stone-900 selection:bg-[#4EEDB2] selection:text-stone-950 font-sans">
      {/* Warm Iridescent Sticky Navigation */}
      <nav className="border-b border-stone-300/70 bg-[#ECE9E2]/85 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#4EEDB2] to-[#38BDF8] flex items-center justify-center font-bold text-stone-950 text-xs shadow-sm">
              VG
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-stone-950 text-sm">VANGUARD</span>
              <span className="text-[10px] text-stone-500 font-mono block leading-none">REKAYASA CERDAS</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-mono">
            <a href="#sandbox" className="text-stone-600 hover:text-stone-950 transition">
              Telemetry Sandbox
            </a>
            <a href="#hardware" className="text-stone-600 hover:text-stone-950 transition">
              Hardware
            </a>
            <a href="#deployments" className="text-stone-600 hover:text-stone-950 transition">
              Deployments
            </a>
            <Link
              href="/compliance"
              className="flex items-center gap-1 text-emerald-800 font-semibold hover:text-emerald-950 transition bg-emerald-100/60 px-2.5 py-1 rounded-md border border-emerald-200/80"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-emerald-700" /> Compliance & Legalitas
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-stone-300/80 text-[11px] font-mono text-stone-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              VG-NET 4.2 OPERATIONAL
            </div>
            <a
              href="#sandbox"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-stone-950 text-white hover:bg-stone-800 shadow-md transition"
            >
              Live Telemetry
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 text-xs font-mono font-medium mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          ENTERPRISE TELEMETRY & EDGE ANOMALY DETECTION
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-950 max-w-5xl mx-auto leading-[1.1]">
          Autonomous Incident Intelligence for Heavy Industry & Power Grids
        </h1>

        <p className="mt-6 text-stone-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Bridging legacy PLC/SCADA field instruments with real-time deterministic incident reasoning. Zero unscheduled downtime, millisecond-level telemetry triage, and complete on-premise data sovereignty.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#sandbox"
            className="px-6 py-3 rounded-xl text-xs font-bold bg-stone-950 text-white hover:bg-stone-800 transition flex items-center gap-2 shadow-lg shadow-stone-950/10"
          >
            Explore Telemetry Sandbox <ArrowRight className="w-4 h-4 text-emerald-400" />
          </a>
          <a
            href="#hardware"
            className="px-6 py-3 rounded-xl text-xs font-mono font-semibold border border-stone-300/90 bg-white/80 text-stone-800 hover:bg-stone-50 transition shadow-sm flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 text-stone-600" /> View Hardware Datasheet
          </a>
          <Link
            href="/compliance"
            className="px-5 py-3 rounded-xl text-xs font-mono font-semibold border border-emerald-300 bg-emerald-50/80 text-emerald-900 hover:bg-emerald-100 transition shadow-sm flex items-center gap-1.5"
          >
            <FileCheck2 className="w-4 h-4 text-emerald-700" /> Legalitas & Kepatuhan
          </Link>
        </div>

        {/* Iridescent Feature Badges */}
        <div className="mt-12 pt-8 border-t border-stone-300/60 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-left font-mono text-xs">
          <div className="p-3 rounded-xl bg-white/70 border border-stone-300/70 shadow-sm">
            <span className="text-[10px] text-stone-400 block">LATENCY</span>
            <span className="font-bold text-stone-900 text-sm">14ms Edge Triage</span>
          </div>
          <div className="p-3 rounded-xl bg-white/70 border border-stone-300/70 shadow-sm">
            <span className="text-[10px] text-stone-400 block">STANDARD</span>
            <span className="font-bold text-emerald-800 text-sm">IEC 62443 SL-3</span>
          </div>
          <div className="p-3 rounded-xl bg-white/70 border border-stone-300/70 shadow-sm">
            <span className="text-[10px] text-stone-400 block">AIR-GAP</span>
            <span className="font-bold text-sky-800 text-sm">100% On-Premise</span>
          </div>
          <div className="p-3 rounded-xl bg-white/70 border border-stone-300/70 shadow-sm">
            <span className="text-[10px] text-stone-400 block">AVAILABILITY</span>
            <span className="font-bold text-stone-900 text-sm">99.999% SLA</span>
          </div>
        </div>
      </section>

      {/* Telemetry Simulator Section */}
      <section id="sandbox" className="py-12 px-6">
        <TelemetrySimulator />
      </section>

      {/* Hardware Catalog Section */}
      <section id="hardware">
        <HardwareCatalog />
      </section>

      {/* Compliance Highlight Banner */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-emerald-300/80 bg-gradient-to-r from-emerald-50/90 via-sky-50/70 to-white/90 p-8 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider bg-emerald-100 px-2.5 py-0.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Kepatuhan Regulasi & Tata Kelola
            </div>
            <h3 className="text-2xl font-bold text-stone-950 tracking-tight">
              Kepatuhan Hukum, BSSN IIV & Standar IEC 62443
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Pelajari rincian legalitas PT Vanguard Rekayasa Cerdas, sertifikasi TKDN Kementerian Perindustrian, kepatuhan BSSN untuk Infrastruktur Informasi Vital, serta audit integritas sistem air-gapped.
            </p>
          </div>

          <Link
            href="/compliance"
            className="shrink-0 px-6 py-3 rounded-xl bg-stone-950 text-white hover:bg-stone-800 text-xs font-mono font-bold transition flex items-center gap-2 shadow-md"
          >
            Buka Halaman Compliance <ChevronRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>
      </section>

      {/* Proven Deployments Section */}
      <section id="deployments" className="py-16 max-w-6xl mx-auto px-6 border-t border-stone-300/70">
        <div className="mb-8">
          <span className="font-mono text-xs text-emerald-800 font-bold uppercase tracking-wider bg-emerald-100/70 px-2.5 py-1 rounded-full border border-emerald-200">
            PROVEN DEPLOYMENTS
          </span>
          <h2 className="text-3xl font-extrabold text-stone-950 mt-3 tracking-tight">
            Enterprise Field History
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Validasi performa deterministik pada instalasi gardu transmisi, pembangkit, dan pabrik kimia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono text-xs">
          <div className="p-6 rounded-2xl bg-white/80 border border-stone-300/80 shadow-sm hover:shadow-md transition">
            <div className="text-stone-400 text-[11px]">DEPLOYMENT / 2025</div>
            <div className="text-stone-950 font-bold text-sm mt-1.5 font-sans">
              Turbine Bearing Predictive Vibration
            </div>
            <p className="text-stone-600 font-sans text-xs mt-2">
              Continuous 10kHz sampling preventing unplanned generator trip during peak grid demand.
            </p>
            <div className="text-emerald-700 font-semibold mt-4 pt-3 border-t border-stone-100">
              PT Jawa Power Perkasa
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-stone-300/80 shadow-sm hover:shadow-md transition">
            <div className="text-stone-400 text-[11px]">DEPLOYMENT / 2025</div>
            <div className="text-stone-950 font-bold text-sm mt-1.5 font-sans">
              SCADA Lift Pump Energy Mapping
            </div>
            <p className="text-stone-600 font-sans text-xs mt-2">
              Transient peak detection reducing cavitation wear and optimizing pumping cycles by 18%.
            </p>
            <div className="text-emerald-700 font-semibold mt-4 pt-3 border-t border-stone-100">
              Perumda Tirta Mineral
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-stone-300/80 shadow-sm hover:shadow-md transition">
            <div className="text-stone-400 text-[11px]">DEPLOYMENT / 2024</div>
            <div className="text-stone-950 font-bold text-sm mt-1.5 font-sans">
              Isolated Modbus Boiler Telemetry
            </div>
            <p className="text-stone-600 font-sans text-xs mt-2">
              Galvanic isolated bridge operating in harsh corrosive ambient without single packet loss.
            </p>
            <div className="text-emerald-700 font-semibold mt-4 pt-3 border-t border-stone-100">
              Batam Fast Petrochem
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-300/80 py-12 px-6 bg-[#E5E1D8] text-stone-600 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded bg-gradient-to-tr from-[#4EEDB2] to-[#38BDF8] flex items-center justify-center font-bold text-stone-950 text-[10px]">
                VG
              </div>
              <span className="font-bold text-stone-950">PT Vanguard Rekayasa Cerdas</span>
            </div>
            <p className="text-stone-600 max-w-sm leading-relaxed">
              Industrial Automation, Deterministic Edge Computing & Real-Time Telemetry Systems.
            </p>
            <p className="text-stone-500 mt-2 font-mono text-[11px]">
              Batam Industrial Park, Kepulauan Riau — Indonesia
            </p>
          </div>

          <div className="flex flex-col gap-2 font-mono text-[11px]">
            <span className="text-stone-950 font-bold">STANDARDS & GOVERNANCE</span>
            <Link href="/compliance" className="text-emerald-800 font-semibold hover:underline flex items-center gap-1">
              • Legalitas & Kepatuhan Regulasi (Compliance)
            </Link>
            <span>• IEC 62443 Industrial Cybersecurity Compliant</span>
            <span>• ISO 9001:2015 Engineering Quality Standards</span>
            <span>• ISO/IEC 27001:2022 Information Security Management</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
