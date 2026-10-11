"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function AgenticConsole() {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    {
      id: 1,
      title: "Signal Ingestion & Noise Rejection",
      desc: "Edge Node #04 menyaring sinyal frekuensi tinggi Modbus RTU (100ms sample interval). Eliminasi distorsi harmonik elektromagnetik via FFT buffer.",
      latency: "1.2 ms",
      status: "COMPLETED",
    },
    {
      id: 2,
      title: "Autonomous RCFA Reasoning",
      desc: "Agent Vanguard Engine mengisolasi anomali spektrum getaran pada Bearing Stage 04 turbin uap. Probabilitas pelumasan rusak: 94.2%.",
      latency: "11.4 ms",
      status: "RUNNING",
    },
    {
      id: 3,
      title: "SCADA Interlock & Work-Order Dispatch",
      desc: "Penerbitan otomatis tiket darurat #WO-8910 ke Maximo CMMS dan modulasi frekuensi motor inverter secara bertahap via bus IEC 60870-5-104.",
      latency: "4.8 ms",
      status: "PENDING",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto rounded-[2.5rem] border border-black/10 bg-white/80 backdrop-blur-2xl p-8 sm:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-black/5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            V-AGENT RUNTIME: DETERMINISTIC MULTI-STEP REASONING
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mt-2 tracking-tight">
            Autonomous Incident Diagnostics & Resolution Loop
          </h3>
        </div>
        <div className="text-right font-mono text-xs text-zinc-500">
          <div>PIPELINE: SCADA-LOOP-PROD</div>
          <div className="text-emerald-600 font-semibold mt-0.5">IEC 62443 FAIL-SAFE ACTIVE</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {steps.map((step) => (
          <div
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
              activeStep === step.id
                ? "bg-[#111111] text-white border-black shadow-xl scale-[1.02]"
                : "bg-white/60 text-zinc-800 border-black/5 hover:border-black/20"
            }`}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] mb-4">
                <span className={activeStep === step.id ? "text-emerald-400" : "text-zinc-500"}>
                  PHASE 0{step.id}
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    activeStep === step.id
                      ? "bg-white/10 text-white"
                      : "bg-black/5 text-zinc-600"
                  }`}
                >
                  {step.latency}
                </span>
              </div>
              <h4 className="text-base font-bold mb-2">{step.title}</h4>
              <p
                className={`text-xs leading-relaxed ${
                  activeStep === step.id ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                {step.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
              <span className={activeStep === step.id ? "text-emerald-400" : "text-zinc-500"}>
                Status: {step.status}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
