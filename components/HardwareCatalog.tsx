import React from "react";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

const hardwareItems = [
  {
    id: "VG-EDGE-400",
    name: "VG-Edge 400 Industrial Gateway",
    category: "Edge Computing & Telemetry Bridge",
    description:
      "Engineered for harsh industrial field installations. Aggregates legacy PLC buses with high-speed deterministic anomaly inference pipelines.",
    specs: [
      { label: "Processor", value: "Quad-core ARM Cortex-A53 @ 1.4 GHz" },
      { label: "Fieldbus Bus", value: "Dual Galvanic Isolated RS-485 Modbus RTU" },
      { label: "Uplink", value: "Gigabit Ethernet + 4G LTE Cat-4 Auto-failover" },
      { label: "Enclosure", value: "IP67 Anodized Aluminium, DIN-Rail mountable" },
      { label: "Operating Temp", value: "-40°C to +85°C Industrial Grade" },
    ],
    certification: "IEC 62443 / CE Industrial Certified",
  },
  {
    id: "VG-SENSE-AXIS",
    name: "VG-Sense Anomaly Node",
    category: "Condition-Monitoring Sensor Array",
    description:
      "Piezoelectric accelerometer with synchronous triaxial vibration and surface contact temperature telemetry designed for mission-critical rotating assets.",
    specs: [
      { label: "Sensing Element", value: "Piezoelectric Shear-mode Accelerometer" },
      { label: "Bandwidth", value: "0.5 Hz – 10 kHz (Dynamic Range ±50g)" },
      { label: "Connectivity", value: "Sub-GHz LoRaWAN + RS-485 Modbus" },
      { label: "Hazardous Rating", value: "ATEX Zone 2 / IECEx Intrinsically Safe" },
      { label: "Power Profile", value: "10-Year Internal Li-SOCl2 Battery or 24V DC" },
    ],
    certification: "ATEX Zone 2 Intrinsically Safe",
  },
];

export default function HardwareCatalog() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <div className="mb-10 text-left">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
          Hardware Field Deployments
        </span>
        <h2 className="text-3xl font-extrabold text-[#111111] mt-2 tracking-tight">
          Deterministic Edge Hardware
        </h2>
        <p className="text-zinc-600 mt-2 max-w-2xl text-sm leading-relaxed">
          Ruggedized DIN-Rail compute nodes and high-frequency sensor interfaces manufactured to interface directly with high-voltage and high-vibration plants.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hardwareItems.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 hover:border-black/30 transition duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-black/5">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#111111] text-white">
                  {item.id}
                </span>
                <span className="text-xs text-zinc-500 font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  {item.certification}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#111111] mt-5">
                {item.name}
              </h3>
              <p className="text-xs text-sky-700 font-mono mt-1 font-semibold">{item.category}</p>
              <p className="text-zinc-600 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 space-y-2 border-t border-black/5 pt-4">
                {item.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-xs font-mono py-1.5 border-b border-black/[0.04]"
                  >
                    <span className="text-zinc-500">{spec.label}</span>
                    <span className="text-zinc-900 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5">
              <button className="text-xs font-mono text-[#111111] font-semibold flex items-center gap-1.5 hover:text-sky-700 transition">
                Request Engineering Datasheet (PDF) <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
