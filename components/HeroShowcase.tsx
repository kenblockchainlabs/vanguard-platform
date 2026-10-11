"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, Activity } from "lucide-react";

export default function HeroShowcase() {
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative mx-auto max-w-5xl px-4 pt-4 pb-16">
      {/* Outer Glow & Glass Frame Container */}
      <div className="relative rounded-[2.5rem] p-3 sm:p-5 bg-gradient-to-b from-white/90 via-white/40 to-white/70 border border-white/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)] backdrop-blur-2xl">
        
        {/* Mock Screen Bezel */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-[#0A0D14] border border-black/10 shadow-2xl flex flex-col justify-between p-5 sm:p-7">
          
          {/* High-Fi Looping Visual: Background Canvas Telemetry */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted={muted}
              playsInline
              className="h-full w-full object-cover opacity-65 mix-blend-screen scale-105 filter contrast-125"
              src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-digital-network-lines-41315-large.mp4"
            />
            {/* Grain & Hologram Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-[#0A0D14]/80" />
            <div className="absolute inset-0 bg-[radial-gradient(#3CE6AC_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
          </div>

          {/* Top Video HUD Controls */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>LIVE INDUSTRIAL FEED // TURBINE-STAGE-04</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-zinc-300">
                Tue Sep 29 11:55 AM
              </span>
              <button
                onClick={() => setMuted(!muted)}
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white hover:bg-black/80 transition cursor-pointer"
                aria-label="Toggle mute"
              >
                {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Floating Card Pop-up (Exact HyperFrames Style) */}
          <div className="relative z-10 my-auto max-w-sm sm:max-w-md mx-auto w-full">
            <div className="bg-[#12141A]/90 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-start gap-3.5 transform hover:scale-105 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3CE6AC] to-[#00E3FF] flex-shrink-0 flex items-center justify-center text-[#0A0D14] font-black text-sm shadow-md">
                VG
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-white tracking-tight">
                    Vanguard SCADA Diagnostics
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">now</span>
                </div>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  Bearing Stage 04 harmonic drift localized. Dispatched deterministic failover sequence #WO-8910.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Video Metadata */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-[#3CE6AC] font-semibold">100ms Deterministic Inference Active</span>
            </div>
            <span className="text-zinc-500 hidden sm:inline">Engine: V-ENG-7B (Sub-15ms)</span>
          </div>

        </div>
      </div>
    </div>
  );
}
