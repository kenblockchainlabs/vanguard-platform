"use client";

import React, { useState } from "react";
import { 
  Play, 
  Terminal, 
  Code2, 
  Camera, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Clock, 
  ArrowRight, 
  Cpu, 
  Copy, 
  Check,
  Video
} from "lucide-react";

interface PresetScenario {
  id: string;
  name: string;
  type: "HTML" | "GSAP" | "AUDIO" | "RENDER";
  codeSnippet: string;
  compiledOutput: string;
  actionTaken: string;
  renderTime: string;
  gpuCost: string;
  hash: string;
}

const PRESETS: PresetScenario[] = [
  {
    id: "kinetic",
    name: "Kinetic Typography Hook",
    type: "HTML",
    codeSnippet: `<div class="hero">
  <h1>Most AI ads are made by humans...</h1>
  <span class="punchline">This one was written.</span>
</div>`,
    compiledOutput: `[FRAME 001-090] Rendered at 1920x1080 60FPS. Crisp anti-aliased vectors, zero compression artifacts.`,
    actionTaken: "DOM element transformed into sub-pixel vector buffer and piped to headless Chromium.",
    renderTime: "1.2s",
    gpuCost: "$0.00 (Pure CPU / WASM)",
    hash: "sha256_kinetic_9f81a7b"
  },
  {
    id: "camera",
    name: "3D GSAP Camera Whip-Pan",
    type: "GSAP",
    codeSnippet: `tl.fromTo("#viewport-cam", 
  { scale: 1.35, rotationZ: 2 }, 
  { scale: 1.0, rotationZ: 0, duration: 0.8, ease: "expo.out" }
);`,
    compiledOutput: `[CAMERA MATRIX] Perspective: 1000px | Roll: -1.2deg | Punch-in zoom snap executed at t=7.0s.`,
    actionTaken: "GSAP timeline evaluated frame-by-frame with deterministic millisecond seeking.",
    renderTime: "2.4s",
    gpuCost: "$0.00 (Zero After Effects)",
    hash: "sha256_cam_3b02e1c"
  },
  {
    id: "audio",
    name: "Synth Bass & VO Sync",
    type: "AUDIO",
    codeSnippet: `<audio src="synth_bass.aac" data-start="0" data-volume="1" />
<audio src="voiceover_chris.aac" data-start="0.8" data-duck="3dB" />`,
    compiledOutput: `[AUDIO MUX] 48000Hz stereo AAC muxed. VO ducked -3dB under synth bass beat peak.`,
    actionTaken: "Multi-track audio waveform synchronized to video frames with zero drift.",
    renderTime: "0.8s",
    gpuCost: "$0.00 (FFmpeg Native)",
    hash: "sha256_audio_8c91a0f"
  },
  {
    id: "cli",
    name: "Headless CLI Compile",
    type: "RENDER",
    codeSnippet: `$ npx hyperframes render index.html \\
  --low-memory-mode \\
  -o dist/broadcast-master.mp4`,
    compiledOutput: `[ARTIFACT COMPILED] 30.0s 1080p MP4 written in 2m 16s. Ready for Twitter/X, TikTok & YouTube.`,
    actionTaken: "Zero cloud GPU dependencies. Runs directly inside cheap Linux VPS or local CLI.",
    renderTime: "Instant",
    gpuCost: "$0.00 (100% Local Run)",
    hash: "sha256_render_4d12e8b"
  }
];

export default function GuardrailSimulator() {
  const [activeScenario, setActiveScenario] = useState<PresetScenario>(PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const copyHash = () => {
    navigator.clipboard.writeText(activeScenario.hash);
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
              INTERACTIVE CODE-TO-VIDEO SANDBOX // V2.4
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Test Real-Time Motion Compilation
          </h3>
          <p className="text-xs text-zinc-400 font-mono mt-0.5">
            Select a code pattern below to see how HTML, CSS, and GSAP are compiled directly into broadcast video.
          </p>
        </div>

        {/* Engine Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-lg bg-white text-black font-semibold shadow-sm">
            HyperFrames
          </span>
          <span className="px-2.5 py-1 rounded-lg text-zinc-400">
            Chromium Headless
          </span>
          <span className="px-2.5 py-1 rounded-lg text-zinc-400">
            FFmpeg Native
          </span>
        </div>
      </div>

      {/* Scenario Selector */}
      <div className="py-4 border-b border-white/10">
        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-2.5">
          Select Motion Pipeline Element:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESETS.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setActiveScenario(scenario)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                activeScenario.id === scenario.id
                  ? "bg-white/[0.08] border-[#3CE6AC]/50 text-white shadow-[0_0_20px_rgba(60,230,172,0.15)]"
                  : "bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 font-semibold">
                  {scenario.type}
                </span>
                <span className="text-[11px] font-mono text-[#3CE6AC] font-bold">
                  {scenario.renderTime}
                </span>
              </div>
              <span className="text-xs font-semibold text-white leading-tight mt-1 line-clamp-1">
                {scenario.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Compare View: Raw Code In vs Rendered Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 font-mono text-xs">
        
        {/* Source Code */}
        <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-zinc-400 text-[11px]">
              <span className="flex items-center gap-1.5 text-[#3CE6AC] font-semibold">
                <Code2 className="w-3.5 h-3.5" />
                SOURCE CODE INPUT
              </span>
              <span>index.html / gsap.js</span>
            </div>
            <pre className="mt-3 text-zinc-300 leading-relaxed bg-[#111116] p-3 rounded-xl border border-white/5 text-[11px] overflow-x-auto whitespace-pre-wrap">
              {activeScenario.codeSnippet}
            </pre>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
            <span>Compiler: Evaluating DOM Nodes</span>
            <span className="text-[#3CE6AC] font-semibold">HEADLESS ACTIVE</span>
          </div>
        </div>

        {/* Render Output */}
        <div className="p-4 rounded-2xl bg-[#091512]/80 border border-[#3CE6AC]/30 flex flex-col justify-between relative overflow-hidden shadow-[0_0_30px_rgba(60,230,172,0.08)]">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#3CE6AC]/20 text-[#3CE6AC] text-[11px]">
              <span className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3CE6AC]" />
                COMPILED BROADCAST VIDEO
              </span>
              <span className="text-emerald-400 font-bold">
                {activeScenario.renderTime}
              </span>
            </div>
            <p className="mt-3 text-emerald-300 leading-relaxed bg-black/60 p-3 rounded-xl border border-[#3CE6AC]/20 text-[11px]">
              {activeScenario.compiledOutput}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
            <span className="text-zinc-400">Compute Cost:</span>
            <span className="text-[#3CE6AC] font-bold">{activeScenario.gpuCost}</span>
          </div>
        </div>

      </div>

      {/* Execution Proof Banner */}
      <div className="p-4 rounded-2xl bg-black/70 border border-white/10 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3CE6AC]">
            <Video className="w-4 h-4" />
          </div>
          <div>
            <div className="text-white font-semibold text-xs">
              Deterministic Video Compilation Proof
            </div>
            <div className="text-zinc-500 text-[11px]">
              Pipeline Action: <span className="text-zinc-300">{activeScenario.actionTaken}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={copyHash}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition cursor-pointer text-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy Hash"}</span>
          </button>
          <span className="text-[11px] text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            60 FPS Verified
          </span>
        </div>
      </div>

    </div>
  );
}
