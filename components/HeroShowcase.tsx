"use client";

import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroShowcase() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative mx-auto max-w-5xl px-4 py-8">
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#3CE6AC]/40 via-[#00E3FF]/30 to-[#D9F99D]/40 rounded-[3rem] blur-2xl opacity-70 pointer-events-none" />
      <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)]">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-[#0A0D14] border border-black/10 shadow-2xl flex flex-col justify-between p-4 sm:p-7">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover scale-105 filter contrast-125 brightness-90 mix-blend-screen opacity-75"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-[#0A0D14]/70 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#3CE6AC_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold tracking-wide">VG-STREAM // TURBINE STAGE 04 TELEMETRY</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleSound}
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white hover:bg-black/90 transition shadow-lg cursor-pointer"
                aria-label="Toggle sound"
              >
                {isMuted ? <VolumeX className="w-4 h-4"/> : <Volume2 className="w-4 h-4 text-emerald-400"/>}
              </button>
            </div>
          </div>
          <div className="relative z-10 my-auto max-w-sm sm:max-w-md mx-auto w-full">
            <div className="bg-[#12141A]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-start gap-3.5 transform hover:scale-105 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3CE6AC] to-[#00E3FF] flex-shrink-0 flex items-center justify-center text-[#0A0D14] font-black text-sm shadow-md">
                VG
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-white tracking-tight">Vanguard Autonomous Engine</span>
                  <span className="text-[10px] text-zinc-400 font-mono">11ms ago</span>
                </div>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  Bearing Stage 04 harmonic drift localized. Dispatched deterministic failover sequence #WO-8910.
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-3 border-t border-white/10">
            <span className="text-[#3CE6AC] font-semibold">Autonomous Field Agent Online</span>
            <span className="text-zinc-500 hidden sm:inline">Engine: V-ENG-7B Deterministic Loop</span>
          </div>
        </div>
      </div>
    </div>
  );
}
