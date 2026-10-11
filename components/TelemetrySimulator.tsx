"use client";

import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Terminal } from "lucide-react";

type Mode = "NORMAL" | "OVERHEAT" | "VOLTAGE_SPIKE";

interface TelemetryPoint {
  time: string;
  temp: number;
  vibration: number;
  current: number;
}

export default function TelemetrySimulator() {
  const [mode, setMode] = useState<Mode>("NORMAL");
  const [data, setData] = useState<TelemetryPoint[]>([]);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const initialData: TelemetryPoint[] = Array.from({ length: 15 }, (_, i) => ({
      time: `14:${20 + Math.floor(i / 2)}:${(i % 2) * 30}`,
      temp: 64 + Math.random() * 2,
      vibration: 2.1 + Math.random() * 0.3,
      current: 41 + Math.random() * 1.5,
    }));
    setData(initialData);

    setLogs([
      "[SYSTEM INIT] Telemetry bus active on RS-485 Modbus RTU (100ms sample).",
      "[NODE STATUS] VG-Edge-400 stream nominal.",
      "[INFERENCE ENGINE] Deterministic vibration baseline synchronized.",
    ]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().toTimeString().split(" ")[0];
      let newTemp = 65 + (Math.random() * 3 - 1.5);
      let newVib = 2.2 + (Math.random() * 0.4 - 0.2);
      let newCurrent = 42 + (Math.random() * 2 - 1);

      if (mode === "OVERHEAT") {
        newTemp = 96.4 + Math.random() * 4;
        newVib = 7.8 + Math.random() * 1.2;
      } else if (mode === "VOLTAGE_SPIKE") {
        newCurrent = 78.5 + Math.random() * 5;
      }

      setData((prev) => [
        ...prev.slice(1),
        {
          time: timestamp,
          temp: parseFloat(newTemp.toFixed(1)),
          vibration: parseFloat(newVib.toFixed(2)),
          current: parseFloat(newCurrent.toFixed(1)),
        },
      ]);
    }, 1500);

    return () => clearInterval(interval);
  }, [mode]);

  const handleTrigger = (newMode: Mode) => {
    setMode(newMode);
    const ts = new Date().toISOString().substring(11, 23);

    if (newMode === "OVERHEAT") {
      setLogs((prev) => [
        `[${ts}] CRITICAL ALERT: Thermal threshold breached on Bearing Stage 04.`,
        `[${ts}] SPECTRAL DIAGNOSTIC: High-frequency harmonic spikes on Pump-B.`,
        `[${ts}] DISPATCH: Predictive Work Order #WO-8910 sent to Maintenance SCADA.`,
        ...prev.slice(0, 4),
      ]);
    } else if (newMode === "VOLTAGE_SPIKE") {
      setLogs((prev) => [
        `[${ts}] VOLTAGE EVENT: 3-Phase unbalanced current transient on Line 2.`,
        `[${ts}] ISOLATION: Modbus Node #12 isolated to safeguard power electronics.`,
        ...prev.slice(0, 4),
      ]);
    } else {
      setLogs((prev) => [
        `[${ts}] STABILIZATION: Telemetry parameters restored to nominal limits.`,
        ...prev.slice(0, 4),
      ]);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-black/5 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-600 font-semibold">
              Live Edge Diagnostics Console v4.2
            </span>
          </div>
          <h3 className="text-xl font-bold text-[#111111] mt-1 tracking-tight">
            Turbine Stage 2 — Live Modbus Node Telemetry
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleTrigger("NORMAL")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition border ${
              mode === "NORMAL"
                ? "bg-[#111111] text-white border-transparent"
                : "bg-white text-zinc-700 border-black/10 hover:border-black/30"
            }`}
          >
            Normal Flow
          </button>
          <button
            onClick={() => handleTrigger("OVERHEAT")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition border ${
              mode === "OVERHEAT"
                ? "bg-rose-600 text-white border-transparent"
                : "bg-white text-rose-600 border-rose-200 hover:bg-rose-50"
            }`}
          >
            Simulate Overheat
          </button>
          <button
            onClick={() => handleTrigger("VOLTAGE_SPIKE")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition border ${
              mode === "VOLTAGE_SPIKE"
                ? "bg-amber-600 text-white border-transparent"
                : "bg-white text-amber-600 border-amber-200 hover:bg-amber-50"
            }`}
          >
            Simulate Voltage Spike
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-[#F9F8F6] p-5 rounded-2xl border border-black/5">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-600 mb-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2.5 h-1 rounded-full bg-emerald-500" /> Temp (°C)
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2.5 h-1 rounded-full bg-sky-500" /> Vibration (mm/s)
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2.5 h-1 rounded-full bg-amber-500" /> Current (A)
              </span>
            </div>
            <span className="text-zinc-400">100ms In-Flight</span>
          </div>
          <div className="h-[260px] w-full">
            <ResponsiveContainer height="100%" width="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#E5E5E0" strokeDasharray="3 3" />
                <XAxis dataKey="time" stroke="#71717A" tick={{ fontSize: 10 }} />
                <YAxis stroke="#71717A" tick={{ fontSize: 10 }} domain={["auto", "auto"]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#E5E7EB",
                    borderRadius: "12px",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    fontSize: "12px",
                    fontFamily: "monospace",
                  }}
                />
                <Line dataKey="temp" dot={false} stroke="#10B981" strokeWidth={2.5} type="monotone" />
                <Line dataKey="vibration" dot={false} stroke="#0284C7" strokeWidth={2.5} type="monotone" />
                <Line dataKey="current" dot={false} stroke="#D97706" strokeWidth={2} type="monotone" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#111111] text-zinc-300 p-5 rounded-2xl border border-black/10 flex flex-col justify-between font-mono text-xs">
          <div>
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-white/10 text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Inference Diagnostic Stream</span>
            </div>
            <div className="space-y-2.5 overflow-y-auto max-h-[220px]">
              {logs.map((log, idx) => (
                <p
                  key={idx}
                  className={`leading-relaxed break-words text-[11px] ${
                    log.includes("CRITICAL")
                      ? "text-rose-400 font-semibold"
                      : log.includes("VOLTAGE")
                      ? "text-amber-300"
                      : log.includes("SYSTEM") || log.includes("STABILIZATION")
                      ? "text-emerald-400"
                      : "text-zinc-300"
                  }`}
                >
                  {log}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
            <span>Model: Deterministic V-ENG-7B</span>
            <span className="text-emerald-400">Inference: 12ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
