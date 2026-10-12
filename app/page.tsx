import React from "react";
import LuxuryVideoShowcase from "@/components/LuxuryVideoShowcase";
import HyperStudioCanvas from "@/components/HyperStudioCanvas";
import MotionSandbox from "@/components/MotionSandbox";
import AnimatedMetrics from "@/components/AnimatedMetrics";
import { ShaderHero } from "@/components/ui/shader-hero";
import DeveloperDocs from "@/components/DeveloperDocs";
import { VanguardLogo } from "@/components/VanguardLogo";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Terminal, 
  Zap, 
  Layers, 
  Video, 
  Cpu, 
  CheckCircle2,
  RefreshCw,
  Sparkles,
  Camera,
  Code2
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-[#FAFAF9] relative overflow-hidden font-sans selection:bg-[#3CE6AC] selection:text-black">
      {/* Background Dot Grid pattern */}
      <div className="absolute inset-0 hf-grid opacity-30 pointer-events-none -z-20" />

      {/* Top Navbar */}
      <nav className="border-b border-white/10 bg-[#09090B]/90 backdrop-blur-xl sticky top-0 z-50 px-6 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <VanguardLogo className="w-9 h-9" />
            <div>
              <span className="font-extrabold tracking-tight text-white text-base leading-none block">
                VANGUARD
              </span>
              <span className="text-[10px] text-zinc-400 font-mono block tracking-widest mt-1">
                MOTION RUNTIME
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7 text-xs font-mono text-zinc-400">
            <a href="#video-showcase" className="hover:text-[#3CE6AC] transition flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3CE6AC]" />
              Output Showcase
            </a>
            <a href="#studio" className="hover:text-white transition">Motion Inspector</a>
            <a href="#simulator" className="hover:text-white transition">Live Sandbox</a>
            <a href="#docs" className="hover:text-white transition">Developer Loop</a>
            <a href="#architecture" className="hover:text-white transition">Architecture</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#docs"
              className="px-5 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition duration-200 shadow-sm cursor-pointer font-mono"
            >
              Start Building →
            </a>
          </div>
        </div>
      </nav>

      {/* Next-Gen 21st.dev Apple-Grade Minimalist Shader Hero (TIDAK DIUBAH BACKGROUND-NYA, COPY WRITING 100% SINKRON) */}
      <ShaderHero />

      {/* Corporate Metrics Bar: 60 FPS, $0 GPU COST, 100% Deterministic, < 18ms Compute */}
      <AnimatedMetrics />

      {/* HIGHLIGHT 1: Real Rendered Architecture Video Showcase (DITAMPILKAN DI ATAS AGAR LANGSUNG KELIHATAN) */}
      <section id="video-showcase" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <span className="font-mono text-xs text-[#3CE6AC] uppercase tracking-widest font-semibold block">
            THE SOURCE &bull; OUTPUT DEMO
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            You&apos;re Watching The Output.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
            Built with pure code: HTML, CSS, JavaScript, and Vanguard Motion runtime.
          </p>
        </div>
        <LuxuryVideoShowcase />
      </section>

      {/* HIGHLIGHT 2: MOTION INSPECTOR & TIMELINE CANVAS */}
      <section id="studio" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-[#00E3FF] uppercase tracking-widest font-semibold block">
            HEADLESS RENDERING STUDIO
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Frame-By-Frame Execution Timeline
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
            Inspect camera rigs, kinetic typography DOM nodes, and neural audio waveforms.
          </p>
        </div>

        <HyperStudioCanvas />
      </section>

      {/* Interactive Simulator Section */}
      <section id="simulator" className="py-16 px-6">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-[#00E3FF] uppercase tracking-widest font-semibold block">
            INTERACTIVE MOTION SANDBOX
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            Test Code-To-Video In Real-Time
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-2">
            Switch between animation pipelines below to see how code compiles directly into broadcast frames.
          </p>
        </div>

        <MotionSandbox />
      </section>

      {/* Developer Docs & Code Integration */}
      <DeveloperDocs />

      {/* Feature Pillar Grid — Mengapa Code-Driven Video adalah Masa Depan */}
      <section id="architecture" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#3CE6AC] uppercase tracking-widest font-semibold">
            Trained On Real Work &bull; Not Demo Scripts
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            Workflows That Fit How Developers Actually Ship
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#121215]/80 border border-white/10 hover:border-[#3CE6AC]/40 transition flex flex-col justify-between backdrop-blur-xl group shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#3CE6AC] group-hover:scale-110 transition">
                <Code2 className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-bold text-white">
                Pure Semantic Web Code
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Render crisp vector typography directly from HTML, CSS, SVG, and Canvas. No pixelated text compression, no bloated video editing files.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-[#3CE6AC]">
              Crisp Vector Quality
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#121215]/80 border border-white/10 hover:border-[#00E3FF]/40 transition flex flex-col justify-between backdrop-blur-xl group shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#00E3FF] group-hover:scale-110 transition">
                <Camera className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-bold text-white">
                GSAP 3D Camera Rigs
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Control perspective zooms, rotational tilts, and whip-pan snaps purely with GSAP timelines. Frame-rate independent and deterministic.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-[#00E3FF]">
              3D Spatial Perspective
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#121215]/80 border border-white/10 hover:border-[#3CE6AC]/40 transition flex flex-col justify-between backdrop-blur-xl group shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#3CE6AC] group-hover:scale-110 transition">
                <Cpu className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-bold text-white">
                Zero Cloud GPU Dependencies
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Compile broadcast 60 FPS MP4s directly on cheap Linux VPS or your local machine via headless Chromium and FFmpeg. Save thousands in render farm fees.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-[#3CE6AC]">
              $0.00 Cloud Render Bill
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Engineering Statement */}
      <section id="compliance" className="py-16 px-6 max-w-4xl mx-auto text-center border-t border-white/10 font-mono">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>PRODUCTION-GRADE CODE MOTION ARCHITECTURE</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Deterministic Rendering &bull; Zero Frame Drift</h2>
        <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed max-w-2xl mx-auto">
          Built for software engineers, growth hackers, and autonomous AI agents. Every animation frame is compiled deterministically with exact millisecond timestamp alignment and uncompressed audio pipeline.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 bg-[#09090B] font-mono text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <VanguardLogo className="w-8 h-8" />
            <div>
              <span className="font-bold text-white block">PT Vanguard Rekayasa Sistem</span>
              <span className="text-[11px] text-zinc-500 block">&copy; 2026 Vanguard Motion Runtime. All rights reserved.</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/compliance" className="hover:text-white transition">Compliance</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
