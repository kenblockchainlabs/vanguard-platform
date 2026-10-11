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
import { Terminal, Activity, AlertTriangle, Zap, CheckCircle2 } from "lucide-react";

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
      "[SYSTEM INIT] Hardware polling rate: 100ms via RS-485 Modbus RTU.",
      "[TELEMETRY STREAM] Stream channel VG-NET-4.2 established.",
      "[INCIDENT ENGINE] Baseline deterministic anomaly model loaded.",
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
        `[${ts}] CRITICAL ALERT: Thermal anomaly detected on Turbine Bearing 04.`,
        `[${ts}] SPECTRAL ANALYSIS: High-frequency resonance localized on Pump-B bearing cage.`,
        `[${ts}] DISPATCH RECOMMENDATION: Lubricant film breakdown suspected. Auto-generated Work Order #WO-8910 sent to Maintenance SCADA.`,
        ...prev.slice(0, 4),
      ]);
    } else if (newMode === "VOLTAGE_SPIKE") {
      setLogs((prev) => [
        `[${ts}] PHASE DRIFT DETECTED: 3-Phase unbalanced current spike on Line 2.`,
        `[${ts}] TRANSIENT EVENT: Modbus Node #12 isolated to prevent inverter flashover.`,
        ...prev.slice(0, 4),
      ]);
    } else {
      setLogs((prev) => [
        `[${ts}] NORMALIZATION: In-line operating conditions returned to nominal parameters.`,
        ...prev.slice(0, 4),
      ]);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl border border-stone-300/80 bg-white/75 backdrop-blur-xl p-6 sm:p-8 shadow-xl shadow-stone-900/5">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-200/80 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-800 font-semibold bg-emerald-100/70 px-2 py-0.5 rounded-full border border-emerald-200">
              Telemetry Diagnostic Console v4.2
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
            Turbine Stage 2 — Live Modbus Node Telemetry
          </h3>
          <p className="text-stone-500 text-xs sm:text-sm font-sans mt-0.5">
            Real-time deterministic signal analysis streamed directly from edge compute nodes.
          </p>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          <button
            onClick={() => handleTrigger("NORMAL")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 border shadow-sm ${
              mode === "NORMAL"
                ? "bg-emerald-500 text-stone-950 border-emerald-600 font-bold shadow-emerald-500/20"
                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            Normal Flow
          </button>
          <button
            onClick={() => handleTrigger("OVERHEAT")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 border shadow-sm ${
              mode === "OVERHEAT"
                ? "bg-rose-600 text-white border-rose-700 font-bold shadow-rose-600/20"
                : "bg-white text-rose-700 border-rose-200 hover:bg-rose-50"
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
            Trigger Overheat
          </button>
          <button
            onClick={() => handleTrigger("VOLTAGE_SPIKE")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 border shadow-sm ${
              mode === "VOLTAGE_SPIKE"
                ? "bg-amber-500 text-stone-950 border-amber-600 font-bold shadow-amber-500/20"
                : "bg-white text-amber-800 border-amber-200 hover:bg-amber-50"
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            Trigger Voltage Spike
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-[#F4F1EA] p-5 rounded-xl border border-stone-300/70 shadow-inner">
          <div className="flex items-center justify-between text-xs font-mono text-stone-600 mb-4 pb-2 border-b border-stone-300/60">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-3 h-1 rounded-full bg-emerald-500" /> Temp (°C)
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-3 h-1 rounded-full bg-sky-500" /> Vibration (mm/s)
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-3 h-1 rounded-full bg-amber-500" /> Current (A)
              </span>
            </div>
            <span className="text-stone-500 font-mono text-[11px] bg-white/70 px-2 py-0.5 rounded border border-stone-200">
              Live 100ms Stream
            </span>
          </div>

          <div className="h-[270px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#E2DDD4" strokeDasharray="3 3" />
                <XAxis dataKey="time" stroke="#78716c" tick={{ fontSize: 10, fill: "#78716c" }} />
                <YAxis stroke="#78716c" tick={{ fontSize: 10, fill: "#78716c" }} domain={["auto", "auto"]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderColor: "#d6d3d1",
                    borderRadius: "8px",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.08)",
                    fontSize: 12,
                    fontFamily: "monospace",
                    color: "#1c1917",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="vibration"
                  stroke="#0284c7"
                  strokeWidth={2.5}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="#d97706"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#111111] text-stone-100 p-5 rounded-xl border border-stone-800 flex flex-col justify-between font-mono text-xs shadow-lg">
          <div>
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-stone-800 text-stone-300">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-xs tracking-wide uppercase text-stone-200">Incident Inference Stream</span>
            </div>
            <div className="space-y-2.5 overflow-y-auto max-h-[220px] pr-1">
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={`leading-relaxed break-words text-[11px] p-2 rounded border ${
                    log.includes("CRITICAL")
                      ? "text-rose-300 bg-rose-950/40 border-rose-800/60 font-semibold"
                      : log.includes("PHASE DRIFT")
                      ? "text-amber-300 bg-amber-950/40 border-amber-800/60 font-semibold"
                      : log.includes("SYSTEM") || log.includes("NORMALIZATION")
                      ? "text-emerald-300 bg-emerald-950/30 border-emerald-800/50"
                      : "text-stone-300 bg-stone-900/60 border-stone-800"
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
            <span>Model: <span className="text-stone-200 font-semibold">V-ENG-7B</span></span>
            <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
              Latency: 14ms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
