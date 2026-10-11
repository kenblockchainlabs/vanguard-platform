import React from "react";
import { ShieldCheck, ArrowUpRight, Cpu, Layers } from "lucide-react";

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
    <section className="py-16 max-w-6xl mx-auto px-4">
      <div className="mb-10 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-900 text-xs font-mono font-medium mb-3">
          <Layers className="w-3.5 h-3.5 text-emerald-600" />
          FIELD-TESTED HARDWARE DEPLOYMENTS
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          Deterministic Edge Hardware
        </h2>
        <p className="text-stone-600 mt-2 max-w-2xl text-sm sm:text-base leading-relaxed">
          Ruggedized DIN-Rail compute nodes and high-frequency sensor interfaces manufactured to interface directly with high-voltage and high-vibration plants.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hardwareItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-stone-300/80 bg-white/80 backdrop-blur-xl p-7 hover:border-emerald-400 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300 flex flex-col justify-between group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-stone-100 text-stone-900 font-bold border border-stone-200">
                  {item.id}
                </span>
                <span className="text-xs text-stone-600 font-mono flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {item.certification}
                </span>
              </div>

              <div className="flex items-start gap-3 mt-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-100 to-sky-100 border border-emerald-200/60 flex items-center justify-center shrink-0 text-emerald-700">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition">
                    {item.name}
                  </h3>
                  <p className="text-xs text-sky-700 font-mono font-medium mt-0.5">{item.category}</p>
                </div>
              </div>

              <p className="text-stone-600 text-sm mt-4 leading-relaxed font-sans">
                {item.description}
              </p>

              <div className="mt-6 space-y-2 border-t border-stone-200 pt-4">
                {item.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-xs font-mono py-1.5 border-b border-stone-100 last:border-0"
                  >
                    <span className="text-stone-500">{spec.label}</span>
                    <span className="text-stone-800 font-semibold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
              <button className="text-xs font-mono font-semibold text-stone-900 flex items-center gap-1.5 hover:text-emerald-700 transition group-hover:translate-x-0.5 duration-200">
                Request Engineering Datasheet (PDF) <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-emerald-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
