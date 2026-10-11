import React from "react";
import TelemetrySimulator from "@/components/TelemetrySimulator";
import HardwareCatalog from "@/components/HardwareCatalog";
import HeroShowcase from "@/components/HeroShowcase";
import AgenticConsole from "@/components/AgenticConsole";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ECE9E2] text-zinc-900 relative overflow-hidden font-sans selection:bg-[#3CE6AC] selection:text-black">
      {/* Background Iridescent Mesh */}
      <div className="absolute top-[-10%] left-[15%] w-[650px] h-[650px] bg-gradient-to-tr from-[#A7F3D0]/70 via-[#BAE6FD]/50 to-[#FDE68A]/50 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-[#D9F99D]/60 via-[#E9D5FF]/40 to-[#BAE6FD]/50 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[75%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-[#BAE6FD]/60 via-[#A7F3D0]/40 to-[#FDE68A]/40 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Top Navbar */}
      <nav className="border-b border-black/5 bg-[#ECE9E2]/85 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center font-bold text-white text-xs shadow-sm">
              VG
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-[#111111] text-base leading-none block">VANGUARD</span>
              <span className="text-[10px] text-zinc-500 font-mono block tracking-wider mt-0.5">REKAYASA CERDAS</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-600 font-medium">
            <a href="#agents" className="hover:text-black transition">Autonomous Agent</a>
            <a href="#hardware" className="hover:text-black transition">Edge Hardware</a>
            <a href="#sandbox" className="hover:text-black transition">Live Telemetry</a>
            <a href="#deployments" className="hover:text-black transition">Field History</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black transition shadow-sm hover:scale-105 duration-200">
              Request Technical Audit
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-6 px-6 max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-black/10 text-zinc-800 text-xs font-mono mb-8 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600"/>
          ENTERPRISE INDUSTRIAL TELEMETRY & EDGE ANOMALY DIAGNOSTICS
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#111111] max-w-5xl mx-auto leading-[1.08]">
          Autonomous Incident Intelligence for Heavy Industry.
        </h1>

        <p className="mt-6 text-zinc-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Mengintegrasikan instrumentasi SCADA/PLC eksisting dengan agen penalaran anomali deterministik. Mencegah kegagalan turbin, pompa, dan kompresor secara otonom dalam orde milidetik.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#agents"
            className="px-8 py-3.5 rounded-full text-sm font-semibold bg-[#111111] text-white hover:bg-black transition flex items-center gap-2 shadow-xl hover:scale-105 duration-200"
          >
            Pelajari Agentic Engine <ArrowRight className="w-4 h-4"/>
          </a>
          <a
            href="#hardware"
            className="px-8 py-3.5 rounded-full text-sm font-semibold border border-black/15 bg-white/70 text-zinc-800 hover:bg-white transition"
          >
            Spesifikasi Gateway DIN-Rail
          </a>
        </div>
      </section>

      {/* Video Showcase */}
      <HeroShowcase/>

      {/* Corporate Metrics */}
      <section className="py-12 px-6 max-w-6xl mx-auto border-y border-black/10 my-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#111111]">&lt; 15 ms</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Edge Inference Latency</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#111111]">99.98%</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Telemetry Link Uptime</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#111111]">IEC 62443</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Cybersecurity Certified</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#111111]">50,000+</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Field Signals Ingested</div>
          </div>
        </div>
      </section>

      {/* Agentic Loop Section */}
      <section id="agents" className="py-16 px-6">
        <AgenticConsole/>
      </section>

      {/* Telemetry Simulator */}
      <section id="sandbox" className="py-16 px-6">
        <div className="text-center mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
            Interactive Field Simulation
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] mt-1">
            Real-Time Edge Diagnostic Console
          </h2>
          <p className="text-zinc-600 mt-2 max-w-xl mx-auto text-sm">
            Uji respons inferensi telemetri langsung terhadap simulasi overheating dan lonjakan voltase instrumen.
          </p>
        </div>
        <TelemetrySimulator/>
      </section>

      {/* Hardware Catalog */}
      <section id="hardware">
        <HardwareCatalog/>
      </section>

      {/* Case Studies */}
      <section id="deployments" className="py-20 max-w-6xl mx-auto px-6 border-t border-black/10">
        <div className="mb-10 text-left">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
            Proven Industrial Deployments
          </span>
          <h2 className="text-3xl font-extrabold text-[#111111] mt-1">Enterprise Field History</h2>
          <p className="text-zinc-600 text-sm mt-1">Implementasi terverifikasi di pembangkit listrik, fasilitas utilitas air, dan petrokimia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="p-6 rounded-3xl bg-white/70 border border-black/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-zinc-400 font-medium">SEKTOR ENERGI / 2025</div>
              <div className="text-zinc-900 font-bold mt-2 text-base">Turbine Bearing Predictive Vibration</div>
              <p className="text-zinc-600 mt-3 font-sans text-xs leading-relaxed">
                Pemasangan sensor getaran triaksial pada turbin uap 120MW untuk deteksi dini deformasi bantalan sebelum jadwal overhaul tahunan.
              </p>
            </div>
            <div className="text-emerald-700 font-bold mt-6 pt-4 border-t border-black/5">
              PT Jawa Power Perkasa
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white/70 border border-black/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-zinc-400 font-medium">UTILITAS AIR / 2025</div>
              <div className="text-zinc-900 font-bold mt-2 text-base">SCADA Lift Pump Energy Mapping</div>
              <p className="text-zinc-600 mt-3 font-sans text-xs leading-relaxed">
                Integrasi gateway VG-Edge 400 pada 14 stasiun pompa distribusi air guna memetakan efisiensi konsumsi daya spesifik dan kavitasi pompa.
              </p>
            </div>
            <div className="text-emerald-700 font-bold mt-6 pt-4 border-t border-black/5">
              Perumda Tirta Mineral
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white/70 border border-black/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-zinc-400 font-medium">PETROKIMIA / 2024</div>
              <div className="text-zinc-900 font-bold mt-2 text-base">Isolated Modbus Boiler Telemetry</div>
              <p className="text-zinc-600 mt-3 font-sans text-xs leading-relaxed">
                Pemantauan instrumen burner dan boiler bertekanan tinggi dengan jaringan Modbus RTU terisolasi galvanik sesuai standar hazardous ATEX Zone 2.
              </p>
            </div>
            <div className="text-emerald-700 font-bold mt-6 pt-4 border-t border-black/5">
              Batam Fast Petrochem
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-16 px-6 bg-[#E3DFD7] text-zinc-600 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-[#111111] flex items-center justify-center font-bold text-white text-[10px]">
                VG
              </div>
              <span className="font-bold text-zinc-900 text-sm">PT Vanguard Rekayasa Cerdas</span>
            </div>
            <p className="text-zinc-600 max-w-sm leading-relaxed mt-2">
              Sistem Otomasi Industri, Edge Gateways, dan Telemetri Prediktif Mandiri.
            </p>
            <p className="text-zinc-500 mt-2 font-mono text-[11px]">
              Batam Industrial Park, Muka Kuning, Batam — Kepulauan Riau, Indonesia
            </p>
          </div>

          <div className="flex flex-col gap-2 font-mono text-[11px]">
            <span className="text-zinc-900 font-semibold tracking-wider">COMPLIANCE & LEGAL</span>
            <Link className="hover:text-black underline underline-offset-4" href="/privacy">
              Privacy Policy & Cyber-Physical Data Security
            </Link>
            <Link className="hover:text-black underline underline-offset-4" href="/terms">
              Terms of Engineering Services (SLA & Liability)
            </Link>
            <Link className="hover:text-black underline underline-offset-4 text-emerald-800 font-medium" href="/compliance">
              Regulatory Compliance & Certifications
            </Link>
            <span className="text-zinc-500 mt-2">IEC 62443 / ISO 9001:2015 Engineering Quality</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
