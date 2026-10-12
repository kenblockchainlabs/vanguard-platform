"use client";

import React, { useState } from "react";
import { Copy, Check, BookOpen, Sparkles, Code2, Terminal, Video } from "lucide-react";

export default function DeveloperDocs() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"cli" | "js" | "agent">("cli");

  const copyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const cliCode = `# 1. Initialize a new Vanguard Motion project
npx vanguard-motion init my-motion-ad

# 2. Add kinetic typography and 3D camera rig components
cd my-motion-ad
npx vanguard-motion add kinetic-typography camera-rig

# 3. Compile directly into broadcast 1080p 60FPS MP4 (Zero Cloud GPU)
npx vanguard-motion render index.html \\
  --low-memory-mode \\
  -o dist/vanguard-broadcast-master.mp4`;

  const jsCode = `import { renderComposition } from "@vanguard/motion-runtime";

// Programmatically render video ads from code
const videoArtifact = await renderComposition({
  entry: "index.html",
  resolution: { width: 1920, height: 1080 },
  fps: 60,
  props: {
    hook: "Most AI ads are made by humans...",
    punchline: "This one was written.",
    audioTrack: "bg_synth_bass.aac",
    accentColor: "#3CE6AC"
  },
  output: "public/output-ad.mp4"
});

console.log("Render completed in:", videoArtifact.durationMs + "ms");
console.log("Artifact MP4 path:", videoArtifact.outputPath);`;

  const agentCode = `// AI Coding Agent Workflow (Claude / Grok / Gemini)
// Agent reads AGENTS.md, writes semantic HTML/CSS/GSAP, then runs Vanguard CLI:

1. AGENT WRITES: index.html with <div class="hero"> and GSAP timeline
2. AGENT CHECKS: npx vanguard-motion check (WCAG contrast, layout, motion checks)
3. AGENT RENDERS: npx vanguard-motion render -o dist/master.mp4
4. RESULT: Broadcast-grade video generated autonomously from natural language!`;

  return (
    <section id="docs" className="py-20 px-6 max-w-5xl mx-auto font-mono">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-semibold mb-3">
          <Terminal className="w-3.5 h-3.5 text-[#3CE6AC]" />
          <span>DEVELOPER LOOP &bull; CODE-TO-VIDEO PIPELINE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Render Video Like You Build Software
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl mx-auto font-sans">
          No video editing timelines, no Adobe licenses, no expensive cloud GPUs. Build motion graphics with HTML, CSS, JavaScript, and headless Chromium.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#0C0C0E]/95 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Tab Headers */}
        <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-white/10 bg-[#121215]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("cli")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "cli"
                  ? "bg-[#3CE6AC] text-black"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Vanguard Motion CLI
            </button>
            <button
              onClick={() => setActiveTab("js")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "js"
                  ? "bg-[#3CE6AC] text-black"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Node.js / React API
            </button>
            <button
              onClick={() => setActiveTab("agent")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "agent"
                  ? "bg-[#3CE6AC] text-black"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              AI Agent Pipeline
            </button>
          </div>

          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <span className="text-[11px] text-zinc-500 font-mono">
              npx vanguard-motion render
            </span>
            <button
              onClick={() =>
                copyCode(
                  activeTab === "cli"
                    ? cliCode
                    : activeTab === "js"
                    ? jsCode
                    : agentCode,
                  1
                )
              }
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition cursor-pointer"
            >
              {copiedIndex === 1 ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 overflow-x-auto text-xs leading-relaxed text-zinc-300 bg-[#08080A]">
          <pre>
            <code>
              {activeTab === "cli" && cliCode}
              {activeTab === "js" && jsCode}
              {activeTab === "agent" && agentCode}
            </code>
          </pre>
        </div>

        {/* Bottom Banner */}
        <div className="px-6 py-3 border-t border-white/5 bg-[#0F0F12] flex flex-wrap items-center justify-between text-[11px] text-zinc-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Headless Chromium Engine
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              GSAP 3.14+ Camera Rig
            </span>
          </div>
          <span>Outputs: 1080p, 4K, 9:16 Vertical, 16:9 Landscape</span>
        </div>
      </div>
    </section>
  );
}
