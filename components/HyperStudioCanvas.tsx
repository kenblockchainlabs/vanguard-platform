"use client";

import React, { useState, useEffect } from "react";
import { 
  Play, 
  RotateCcw, 
  Layers, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Sparkles,
  Sliders,
  Maximize2
} from "lucide-react";

export default function HyperStudioCanvas() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(1.42);
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const totalDuration = 4.0;

  // Auto-tick timeline simulation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= totalDuration) return 0;
        return Number((prev + 0.04).toFixed(2));
      });
    }, 40);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const layers = [
    { id: 0, name: "agent_orchestrator.ts", type: "MCP Host", color: "#3CE6AC", items: "12 Tools Active" },
    { id: 1, name: "semantic_cache_guard.wasm", type: "Wasm Filter", color: "#00E3FF", items: "Hit 64.2%" },
    { id: 2, name: "pii_redactor_stream.bin", type: "Zero-Retention", color: "#F59E0B", items: "1.8ms Trace" },
    { id: 3, name: "infinite_loop_breaker.so", type: "Circuit Breaker", color: "#EF4444", items: "Threshold: 15" },
  ];

  const currentFrame = Math.floor(currentTime * 60);

  return (
    <div className="w-full max-w-7xl mx-auto rounded-3xl border border-white/10 bg-[#0C0C0E]/95 backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_-20px_rgba(60,230,172,0.2)]">
      {/* Studio Top Control Bar */}
      <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 bg-[#121215]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-400/40" />
          </div>
          <div className="h-4 w-px bg-white/10 mx-1" />
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-white tracking-wide">
              VANGUARD RUNTIME STUDIO
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#3CE6AC]/15 border border-[#3CE6AC]/30 text-[#3CE6AC] font-mono text-[10px] font-bold">
              REC 60 FPS
            </span>
          </div>
        </div>

        {/* Viewport Specs */}
        <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#3CE6AC]" />
            Deterministic WASM Node
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-[#00E3FF] font-semibold">1080 × 1920 (9:16 Canvas)</span>
          <span className="text-zinc-600">|</span>
          <span>Frame: <strong className="text-white">{currentFrame}</strong>/240</span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-medium transition cursor-pointer border border-white/10"
          >
            <Play className={`w-3.5 h-3.5 ${isPlaying ? "text-[#3CE6AC] fill-[#3CE6AC]" : "text-zinc-400"}`} />
            {isPlaying ? "PAUSE" : "PLAY"}
          </button>
          <button 
            onClick={() => setCurrentTime(0)}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition cursor-pointer border border-white/10"
            title="Restart Timeline"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Studio Viewport (Interactive Stage) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-[#070709] relative">
        {/* Left Side: Layer Tree */}
        <div className="lg:col-span-3 border-r border-white/10 bg-[#0F0F12]/80 p-4 font-mono text-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-zinc-400 uppercase tracking-wider text-[11px]">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#3CE6AC]" />
                Runtime Tracks
              </span>
              <span>4 Active</span>
            </div>

            <div className="space-y-1.5 mt-3">
              {layers.map((layer) => (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`p-2.5 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                    activeLayer === layer.id
                      ? "bg-white/10 border-white/20 text-white shadow-sm"
                      : "bg-white/[0.02] border-transparent text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span 
                      className="w-2 h-2 rounded-full shrink-0" 
                      style={{ backgroundColor: layer.color }} 
                    />
                    <span className="truncate font-semibold">{layer.name}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono shrink-0 pl-1">
                    {layer.items}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Hardware Telemetry */}
          <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider flex justify-between">
              <span>SANDBOX RESOURCING</span>
              <span className="text-emerald-400">NOMINAL</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-zinc-300">
                <span>V8 Isolate Heap:</span>
                <span className="font-bold text-white">41.8 MB</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                <div className="bg-[#3CE6AC] h-full rounded-full transition-all duration-300" style={{ width: "32%" }} />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-zinc-300">
                <span>Stream Token Ingest:</span>
                <span className="font-bold text-[#00E3FF]">4,820 tok/s</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                <div className="bg-[#00E3FF] h-full rounded-full transition-all duration-300" style={{ width: "68%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Center: Stage Live Preview (Animasi Visual Mewah ala HyperFrames) */}
        <div className="lg:col-span-9 p-6 flex flex-col justify-between relative overflow-hidden hf-grid">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-radial from-[#3CE6AC]/10 via-transparent to-transparent pointer-events-none" />

          {/* Top Stage Bar */}
          <div className="flex items-center justify-between font-mono text-xs z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-zinc-300">
              <Activity className="w-3.5 h-3.5 text-[#3CE6AC] animate-pulse" />
              <span>LIVE REASONING PIPELINE: STAGE #0{activeLayer + 1}</span>
            </div>

            <div className="flex items-center gap-3 text-zinc-400">
              <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/10 text-white font-bold">
                {currentTime.toFixed(2)}s / 4.00s
              </span>
            </div>
          </div>

          {/* Canvas Dynamic Node Simulation */}
          <div className="my-8 z-10 flex flex-col items-center justify-center">
            <div className="w-full max-w-xl p-6 rounded-2xl bg-[#121215]/90 border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden backdrop-blur-xl">
              {/* Scanline laser animation */}
              <div 
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3CE6AC] to-transparent pointer-events-none transition-all duration-100 opacity-70"
                style={{ top: `${(currentTime / totalDuration) * 100}%` }}
              />

              <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3CE6AC] animate-ping" />
                  <span className="font-bold text-white">{layers[activeLayer].name}</span>
                </div>
                <span className="text-zinc-400 text-[11px]">Trace: #0x992B-AGENTIC</span>
              </div>

              {/* Dynamic Content based on Active Track */}
              <div className="py-5 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-black/70 border border-white/10 flex items-center justify-between">
                  <span className="text-zinc-400">Action:</span>
                  <span className="text-[#3CE6AC] font-bold">
                    {activeLayer === 0 && "MCP Tool Call: 'query_postgres_schema'"}
                    {activeLayer === 1 && "Semantic Distance Cosine: 0.942 (CACHE HIT)"}
                    {activeLayer === 2 && "Redacting PAN & Social Security Token"}
                    {activeLayer === 3 && "Evaluating Recurrent State Depth (Iteration 7/15)"}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-black/70 border border-white/10 flex items-center justify-between">
                  <span className="text-zinc-400">Determinism Check:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Passed (Zero Model Drift)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-black/70 border border-white/10 flex items-center justify-between">
                  <span className="text-zinc-400">Cumulative Savings:</span>
                  <span className="text-[#00E3FF] font-bold">
                    ${(currentTime * 342.5).toFixed(2)} USD Overrun Prevented
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Model Context Protocol (v1.0.4)</span>
                <span>SHA-256: 7f0a8c...2e91</span>
              </div>
            </div>
          </div>

          {/* Interactive Frame Slider / Playhead Scrub */}
          <div className="z-10 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
              <span className="text-[#3CE6AC] font-semibold">DETERMINISTIC TIMELINE SCRUBBER</span>
              <span>{Math.round((currentTime / totalDuration) * 100)}% COMPLETE</span>
            </div>

            {/* Custom Interactive Timeline Track */}
            <div 
              className="relative w-full h-8 bg-[#121215] border border-white/10 rounded-xl overflow-hidden cursor-pointer flex items-center px-2 group"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newRatio = clickX / rect.width;
                setCurrentTime(Number((newRatio * totalDuration).toFixed(2)));
              }}
            >
              {/* Tick markings */}
              <div className="absolute inset-0 flex justify-between px-3 pointer-events-none opacity-20">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-px h-full bg-white" />
                ))}
              </div>

              {/* Progress Fill */}
              <div 
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#3CE6AC]/30 via-[#00E3FF]/30 to-[#3CE6AC]/40 border-r-2 border-[#3CE6AC] transition-all duration-75"
                style={{ width: `${(currentTime / totalDuration) * 100}%` }}
              />

              {/* Playhead Marker */}
              <div 
                className="absolute top-1 bottom-1 w-2 rounded-full bg-white shadow-[0_0_10px_#3CE6AC] pointer-events-none transition-all duration-75"
                style={{ left: `calc(${(currentTime / totalDuration) * 100}% - 4px)` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
