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
  Terminal,
  Zap,
  Camera,
  Music,
  ArrowRight
} from "lucide-react";

export default function HyperStudioCanvas() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(7.4);
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const totalDuration = 30.0;

  // Auto-tick timeline simulation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= totalDuration) return 0;
        return Number((prev + 0.1).toFixed(1));
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const layers = [
    { 
      id: 0, 
      name: "gsap_camera_rig.js", 
      badge: "3D Motion Cam", 
      color: "#3CE6AC", 
      status: "Active (Whip-Pan)",
      desc: "Animates 3D perspective, viewport zoom-ins, and rotational camera tilts."
    },
    { 
      id: 1, 
      name: "kinetic_type_hero.html", 
      badge: "DOM Elements", 
      color: "#00E3FF", 
      status: "Frame-Accurate",
      desc: "Pure semantic HTML/CSS rendered directly without video decoding artifacts."
    },
    { 
      id: 2, 
      name: "audio_neural_sync.aac", 
      badge: "Audio Waveform", 
      color: "#A78BFA", 
      status: "BGM + VO Sync",
      desc: "Audio stream muxer locks synth bass beats and AI voiceover timing to the millisecond."
    },
    { 
      id: 3, 
      name: "headless_frame_pipe.wasm", 
      badge: "WASM Compiler", 
      color: "#F59E0B", 
      status: "60 FPS Output",
      desc: "Headless Chromium frame grabber pipes uncompressed raw frames directly into FFmpeg."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl border border-white/10 bg-[#0C0D12]/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] font-sans">
      
      {/* Studio Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between px-6 py-3.5 border-b border-white/10 bg-[#12131A]/70">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
          </div>
          <div className="h-4 w-px bg-white/10 mx-1"></div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="font-semibold text-white tracking-wide">
              MOTION ENGINE INSPECTOR
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#3CE6AC]/15 border border-[#3CE6AC]/30 text-[#3CE6AC] text-[10px] font-bold">
              HEADLESS RENDER
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-[#3CE6AC]" />
            Camera Rig: Perspective 1000px
          </span>
          <span className="text-zinc-600">•</span>
          <span>Frame: <strong className="text-white">{Math.floor(currentTime * 30)}</strong>/900</span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-medium transition cursor-pointer border border-white/10"
          >
            <Play className={`w-3.5 h-3.5 text-[#3CE6AC] ${isPlaying ? "fill-[#3CE6AC]" : ""}`} />
            {isPlaying ? "PAUSE" : "RESUME"}
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

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px] bg-[#070709] relative">
        
        {/* Left Column: Animation Track Pipeline */}
        <div className="lg:col-span-4 border-r border-white/10 bg-[#0A0B10]/70 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-zinc-400 font-mono text-[11px] uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#3CE6AC]" />
                Render Pipeline Tracks
              </span>
              <span className="text-emerald-400 font-semibold">4 / 4 ACTIVE</span>
            </div>

            <div className="space-y-2 mt-3.5">
              {layers.map((layer, index) => (
                <div 
                  key={layer.id}
                  onClick={() => setActiveLayer(index)}
                  className={`p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    activeLayer === index 
                      ? "bg-white/[0.08] border-white/20 shadow-[0_0_20px_rgba(60,230,172,0.1)] text-white" 
                      : "bg-white/[0.02] border-transparent text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-2 h-2 rounded-full shrink-0" 
                        style={{ backgroundColor: layer.color }}
                      />
                      <span className="font-mono text-xs font-bold text-white">
                        {layer.name}
                      </span>
                    </div>
                    <span 
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                      style={{ 
                        backgroundColor: `${layer.color}15`, 
                        color: layer.color,
                        border: `1px solid ${layer.color}30` 
                      }}
                    >
                      {layer.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 font-mono text-xs space-y-2">
            <div className="flex justify-between text-[11px] text-zinc-400">
              <span>WASM Headless Buffer:</span>
              <span className="text-white font-bold">1920 × 1080 @ 60 FPS</span>
            </div>
            <div className="flex justify-between text-[11px] text-zinc-400">
              <span>Raw Frame Encode Throughput:</span>
              <span className="text-[#00E3FF] font-bold">382 frames/sec</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Frame & Scrubber */}
        <div className="lg:col-span-8 p-6 flex flex-col justify-between relative overflow-hidden hf-grid">
          <div className="absolute inset-0 bg-radial from-[#3CE6AC]/10 via-transparent to-transparent pointer-events-none" />

          {/* Current Frame Status Badge */}
          <div className="flex items-center justify-between font-mono text-xs z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-zinc-300">
              <Activity className="w-3.5 h-3.5 text-[#3CE6AC] animate-pulse" />
              <span>TIMELINE SCENE: {layers[activeLayer].badge.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400">
              <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/10 text-white font-bold">
                {currentTime.toFixed(2)}s / 30.00s
              </span>
            </div>
          </div>

          {/* Code Motion Card Preview */}
          <div className="my-6 z-10 flex flex-col items-center justify-center">
            <div className="w-full max-w-lg p-6 rounded-2xl bg-[#12131A]/90 border border-white/15 shadow-[0_0_60px_rgba(0,0,0,0.8)] relative overflow-hidden backdrop-blur-2xl">
              <div 
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3CE6AC] to-transparent pointer-events-none transition-all duration-75 opacity-80"
                style={{ top: `${(currentTime / totalDuration) * 100}%` }}
              />

              <div className="flex items-center justify-between pb-3.5 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3CE6AC] animate-ping" />
                  <span className="font-bold text-white">&lt;!-- motion-composition.html --&gt;</span>
                </div>
                <span className="text-zinc-500 text-[11px]">Render: #0x992B-60FPS</span>
              </div>

              <div className="py-4 space-y-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                  <span className="text-zinc-400">Camera Rig Z-Rotation:</span>
                  <span className="text-[#3CE6AC] font-bold">-1.20deg (Aggressive Tilt)</span>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                  <span className="text-zinc-400">Kinetic Typography:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    &quot;This one was written.&quot;
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                  <span className="text-zinc-400">Audio Track Synchronization:</span>
                  <span className="text-[#00E3FF] font-bold">Locked &lt; 1ms to Synth Bass</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Deterministic Code Motion</span>
                <span>Zero After Effects</span>
              </div>
            </div>
          </div>

          {/* Scrubber Bar */}
          <div className="z-10 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
              <span className="text-[#3CE6AC] font-semibold">
                HEADLESS FRAME SCRUBBER
              </span>
              <span>{Math.round((currentTime / totalDuration) * 100)}% COMPLETE</span>
            </div>
            
            <div 
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newPct = clickX / rect.width;
                setCurrentTime(Number((newPct * totalDuration).toFixed(1)));
              }}
              className="relative w-full h-8 bg-[#121215] border border-white/10 rounded-xl overflow-hidden cursor-pointer flex items-center px-2 group"
            >
              <div className="absolute inset-0 flex justify-between px-3 pointer-events-none opacity-20">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-px h-full bg-white" />
                ))}
              </div>

              <div 
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#3CE6AC]/30 via-[#00E3FF]/30 to-[#3CE6AC]/40 border-r-2 border-[#3CE6AC] transition-all duration-75"
                style={{ width: `${(currentTime / totalDuration) * 100}%` }}
              />

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
