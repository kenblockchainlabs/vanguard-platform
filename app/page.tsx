import React from "react";
import TelemetrySimulator from "@/components/TelemetrySimulator";
import HardwareCatalog from "@/components/HardwareCatalog";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Volume2, BellRing, Sparkles, Activity, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ECE9E2] text-zinc-900 relative overflow-hidden font-sans">
      {/* Iridescent Aura Background Blobs persis HyperFrames.dev */}
      <div className="absolute top-[-10%] left-[15%] w-[650px] h-[650px] bg-gradient-to-tr from-[#A7F3D0]/70 via-[#BAE6FD]/50 to-[#FDE68A]/50 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[25%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-[#D9F99D]/60 via-[#E9D5FF]/40 to-[#BAE6FD]/50 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Top Navbar */}
      <nav className="border-b border-black/5 bg-[#ECE9E2]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center font-bold text-white text-xs">
              VG
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-[#111111] text-base">VANGUARD</span>
              <span className="text-[10px] text-zinc-500 font-mono block leading-none">REKAYASA CERDAS</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/60 border border-black/5 text-[11px] font-mono text-zinc-600 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            VG-NET 4.2 OPERATIONAL
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black transition shadow-sm">
              Book Technical Audit
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-20 pb-8 px-6 max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-black/10 text-zinc-800 text-xs font-mono mb-8 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600"/>
          ENTERPRISE TELEMETRY & EDGE ANOMALY DETECTION
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#111111] max-w-5xl mx-auto leading-[1.08]">
          Autonomous Incident Intelligence for Heavy Industry.
        </h1>

        <p className="mt-6 text-zinc-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Bridging legacy PLC/SCADA field instruments with real-time deterministic incident reasoning. Zero unscheduled downtime, millisecond-level telemetry triage.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#sandbox"
            className="px-8 py-3.5 rounded-full text-sm font-semibold bg-[#111111] text-white hover:bg-black transition flex items-center gap-2 shadow-xl hover:scale-105 duration-200"
          >
            Explore Telemetry Sandbox <ArrowRight className="w-4 h-4"/>
          </a>
          <a
            href="#hardware"
            className="px-8 py-3.5 rounded-full text-sm font-semibold border border-black/15 bg-white/70 text-zinc-800 hover:bg-white transition"
          >
            View Hardware Datasheet
          </a>
        </div>
      </section>

      {/* HyperFrames Style Video Showcase Frame */}
      <section className="py-6 px-4 max-w-5xl mx-auto">
        <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-gradient-to-b from-white/90 via-white/50 to-white/80 border border-white/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] backdrop-blur-xl">
          {/* Outer Screen Bezel */}
          <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-[#0E1015] border border-black/10 shadow-inner flex flex-col justify-between p-4 sm:p-6 text-white">
            
            {/* Background Looping Industrial Ambient Animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E3A8A]/30 via-[#064E3B]/30 to-[#0F172A] opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

            {/* Top Bar Video Overlays ala HyperFrames */}
            <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-medium">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse"/>
                  SCADA LIVE FEED: SECTOR-04
                </span>
                <span className="hidden sm:inline-block text-zinc-500">1080p 60FPS SYNCHRONIZED</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-zinc-300">
                  Tue Sep 29 11:55 AM
                </span>
                <button className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition">
                  <Volume2 className="w-3.5 h-3.5"/>
                </button>
              </div>
            </div>

            {/* Floating Notification Pop-up (Exact HyperFrames Style) */}
            <div className="relative z-10 my-auto max-w-sm sm:max-w-md mx-auto w-full">
              <div className="bg-[#18181B]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 shadow-2xl flex items-start gap-3.5 transform hover:scale-[1.02] transition duration-300">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#3CE6AC] to-[#00E3FF] flex-shrink-0 flex items-center justify-center text-black font-bold text-xs shadow-md">
                  VG
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-white tracking-wide">Vanguard SCADA Guard</span>
                    <span className="text-[10px] text-zinc-500 font-mono">now</span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-0.5 leading-snug">
                    Turbine 04 bearing vibration spike detected. Work Order #WO-8910 generated automatically.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-medium">Deterministic Inference Engine Running</span>
              </div>
              <span className="text-zinc-500">Latency: 12ms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Telemetry Simulator Sandbox */}
      <section id="sandbox" className="py-16 px-6">
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
            Interactive Field Simulation
          </span>
          <h2 className="text-3xl font-extrabold text-[#111111] mt-1">
            Real-Time Edge Diagnostic Console
          </h2>
        </div>
        <TelemetrySimulator/>
      </section>

      {/* Hardware Section */}
      <section id="hardware">
        <HardwareCatalog/>
      </section>

      {/* Field Deployments (Suriota Benchmark) */}
      <section className="py-20 max-w-6xl mx-auto px-6 border-t border-black/10">
        <div className="mb-8">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
            Proven Industrial Deployments
          </span>
          <h2 className="text-2xl font-bold text-[#111111] mt-1">Enterprise Field History</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono text-xs">
          <div className="p-6 rounded-2xl bg-white/70 border border-black/5 shadow-sm">
            <div className="text-zinc-500">DEPLOYMENT / 2025</div>
            <div className="text-zinc-900 font-bold mt-1 text-sm">Turbine Bearing Predictive Vibration</div>
            <div className="text-emerald-700 mt-4 font-semibold">PT Jawa Power Perkasa</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/70 border border-black/5 shadow-sm">
            <div className="text-zinc-500">DEPLOYMENT / 2025</div>
            <div className="text-zinc-900 font-bold mt-1 text-sm">SCADA Lift Pump Energy Mapping</div>
            <div className="text-emerald-700 mt-4 font-semibold">Perumda Tirta Mineral</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/70 border border-black/5 shadow-sm">
            <div className="text-zinc-500">DEPLOYMENT / 2024</div>
            <div className="text-zinc-900 font-bold mt-1 text-sm">Isolated Modbus Boiler Telemetry</div>
            <div className="text-emerald-700 mt-4 font-semibold">Batam Fast Petrochem</div>
          </div>
        </div>
      </section>

      {/* Corporate Compliance Footer */}
      <footer className="border-t border-black/10 py-16 px-6 bg-[#E3DFD7] text-zinc-600 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <span className="font-bold text-zinc-900 text-sm">PT Vanguard Rekayasa Cerdas</span>
            <p className="mt-2 text-zinc-600 max-w-sm leading-relaxed">
              Industrial Automation, Edge Gateways & Real-Time Telemetry Systems.
            </p>
            <p className="text-zinc-500 mt-2 font-mono text-[11px]">
              Batam Industrial Park, Kepulauan Riau — Indonesia
            </p>
          </div>

          <div className="flex flex-col gap-2 font-mono text-[11px]">
            <span className="text-zinc-900 font-semibold tracking-wider">COMPLIANCE & LEGAL</span>
            <Link className="hover:text-black underline underline-offset-4" href="/privacy">
              Privacy Policy & Data Security
            </Link>
            <Link className="hover:text-black underline underline-offset-4" href="/terms">
              Terms of Engineering Services (SLA)
            </Link>
            <Link className="hover:text-black underline underline-offset-4 text-emerald-800 font-medium" href="/compliance">
              Regulatory Compliance & Certifications
            </Link>
            <span className="text-zinc-500 mt-2">IEC 62443 / ISO 9001:2015 Compliant</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
