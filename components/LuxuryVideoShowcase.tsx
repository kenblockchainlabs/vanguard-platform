"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Shield, Activity, Cpu } from "lucide-react";

export default function LuxuryVideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-8">
      {/* Dynamic Ambient Neon Glow Backing */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#3CE6AC]/30 via-[#00E3FF]/25 to-[#3CE6AC]/20 rounded-[2.5rem] blur-3xl opacity-75 pointer-events-none animate-pulse-glow" />

      {/* Outer Luxury Chassis Frame ala HyperFrames */}
      <div className="relative rounded-[2rem] p-2.5 sm:p-4 bg-[#121215]/90 backdrop-blur-2xl border border-white/15 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9)]">
        
        {/* Top Studio HUD Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-2 bg-[#0C0C0E]/90 rounded-xl border border-white/10 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#3CE6AC] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#3CE6AC] animate-ping" />
              LIVE RENDER ENGINE
            </span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-zinc-400 hidden sm:inline">Deterministic 60 FPS Canvas</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#00E3FF] text-[11px] font-semibold">
              H.264 / 1080p
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={togglePlay}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white transition cursor-pointer"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#3CE6AC]" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white transition cursor-pointer"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-zinc-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#3CE6AC]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#09090B] border border-white/10 shadow-2xl group">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
            src="/vanguard-demo.mp4"
          />

          {/* Futuristic Overlay Grid & Scanline */}
          <div className="absolute inset-0 bg-radial from-transparent via-[#09090B]/20 to-[#09090B]/60 pointer-events-none" />

          {/* Bottom Floating Glass Card */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md p-4 rounded-xl bg-[#0F0F12]/85 backdrop-blur-xl border border-white/15 shadow-2xl transition duration-300">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#3CE6AC] to-[#00E3FF] flex items-center justify-center text-black font-extrabold text-xs shadow-md">
                VG
              </div>
              <div>
                <div className="font-bold text-xs text-white tracking-wide">
                  Autonomous Runtime Pipeline
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">
                  SHA-256 Verified Tool Execution
                </div>
              </div>
            </div>
            <p className="text-[11px] text-zinc-300 font-mono mt-2 leading-relaxed">
              Real-time telemetry oscilloscope monitoring 4,820 tok/s with sub-2ms PII masking and loop interrupt armed.
            </p>
          </div>
        </div>

        {/* Bottom Specs Strip */}
        <div className="mt-3 px-3 py-2 flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <Cpu className="w-3.5 h-3.5 text-[#3CE6AC]" />
            Generated via Web Graphics Engine
          </span>
          <span className="text-zinc-500">1280 × 720 Progressive Scan</span>
        </div>
      </div>
    </div>
  );
}
