"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

function AnimatedCounter({ 
  value, 
  decimals = 0, 
  prefix = "", 
  suffix = "" 
}: { 
  value: number; 
  decimals?: number; 
  prefix?: string; 
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = value / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function AnimatedMetrics() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto border-y border-white/10 my-8 font-mono">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        {/* Metric 1: Latency */}
        <div className="p-2">
          <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-center justify-center">
            <AnimatedCounter value={1.8} decimals={1} suffix=" ms" />
          </div>
          <div className="text-xs text-zinc-500 mt-1.5 uppercase tracking-wider font-semibold">
            PII Masking Latency
          </div>
        </div>

        {/* Metric 2: Cache Hit Rate */}
        <div className="p-2">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#3CE6AC] flex items-center justify-center">
            <AnimatedCounter value={64.2} decimals={1} suffix="%" />
          </div>
          <div className="text-xs text-zinc-500 mt-1.5 uppercase tracking-wider font-semibold">
            Semantic Cache Hit Rate
          </div>
        </div>

        {/* Metric 3: Precision */}
        <div className="p-2">
          <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-center justify-center">
            <AnimatedCounter value={100} decimals={0} suffix="%" />
          </div>
          <div className="text-xs text-zinc-500 mt-1.5 uppercase tracking-wider font-semibold">
            Loop Breaker Precision
          </div>
        </div>

        {/* Metric 4: Intercept Velocity */}
        <div className="p-2">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#00E3FF] flex items-center justify-center">
            <AnimatedCounter value={1.4} decimals={1} prefix="< " suffix="ms" />
          </div>
          <div className="text-xs text-zinc-500 mt-1.5 uppercase tracking-wider font-semibold">
            Inline Wasm Intercept
          </div>
        </div>

      </div>
    </section>
  );
}
