import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileCheck,
  Lock,
  Cpu,
  Server,
  ArrowLeft,
  CheckCircle2,
  Building2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Legalitas & Kepatuhan Regulasi (Compliance) | PT Vanguard Rekayasa Cerdas",
  description:
    "Dokumentasi kepatuhan hukum, perizinan berusaha, sertifikasi IEC 62443, ISO 9001/27001, tata kelola data on-premise, dan regulasi BSSN Infrastruktur Informasi Vital.",
};

const certs = [
  {
    code: "IEC 62443-4-2",
    title: "Industrial Cyber Security (IACS)",
    issuer: "TÜV Rheinland / ISA Secure Alignment",
    scope: "Security Level 3 (SL-3) for VG-Edge 400 Hardware & Firmware Architecture",
    status: "Active / Verified",
    year: "2024 - 2027",
  },
  {
    code: "ISO 9001:2015",
    title: "Quality Management Systems",
    issuer: "Lloyd's Register Quality Assurance",
    scope: "Design, assembly, calibration, and commissioning of industrial telemetry nodes",
    status: "Active / Verified",
    year: "2023 - 2026",
  },
  {
    code: "ISO/IEC 27001:2022",
    title: "Information Security Management",
    issuer: "British Standards Institution (BSI)",
    scope: "Edge analytics algorithms, configuration vault, and deterministic data models",
    status: "Active / Verified",
    year: "2024 - 2027",
  },
  {
    code: "ATEX Zone 2 / IECEx",
    title: "Explosive Atmosphere Safe (Ex ec)",
    issuer: "DEKRA Certification B.V.",
    scope: "VG-Sense Anomaly Node Intrinsically Safe enclosure for gas group IIA/IIB/IIC",
    status: "Active / Verified",
    year: "2024 - 2029",
  },
];

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-[#ECE9E2] text-stone-900 selection:bg-[#4EEDB2] selection:text-stone-950 font-sans pb-16">
      {/* Top Navbar */}
      <nav className="border-b border-stone-300/70 bg-[#ECE9E2]/85 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#4EEDB2] to-[#38BDF8] flex items-center justify-center font-bold text-stone-950 text-xs shadow-sm group-hover:scale-105 transition-transform">
                VG
              </div>
              <div>
                <span className="font-extrabold tracking-tight text-stone-950 text-sm">
                  VANGUARD
                </span>
                <span className="text-[10px] text-stone-500 font-mono block leading-none">
                  REKAYASA CERDAS
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-stone-700 bg-white/80 border border-stone-300/80 hover:bg-stone-100 transition flex items-center gap-1.5 shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Beranda
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-16 pb-12 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-900 text-xs font-mono font-medium mb-5 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          LEGALITAS, TATA KELOLA & REGULASI INDUSTRI
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-950 tracking-tight leading-tight">
          Industrial Compliance & Regulatory Governance
        </h1>
        <p className="mt-5 text-stone-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          Kerangka hukum operasional, kedaulatan data pada sistem air-gapped, standardisasi keamanan siber SCADA/PLC sesuai IEC 62443, serta kepatuhan penuh terhadap regulasi Infrastruktur Informasi Vital Republik Indonesia.
        </p>

        {/* Highlight Pills */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="p-3.5 rounded-xl bg-white/80 border border-stone-300/80 shadow-sm">
            <div className="text-[11px] font-mono text-stone-500">KEDAULATAN DATA</div>
            <div className="text-xs sm:text-sm font-bold text-stone-900 mt-1">100% On-Premise Air-Gap</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/80 border border-stone-300/80 shadow-sm">
            <div className="text-[11px] font-mono text-stone-500">CYBERSECURITY</div>
            <div className="text-xs sm:text-sm font-bold text-emerald-700 mt-1">IEC 62443-4-2 SL-3</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/80 border border-stone-300/80 shadow-sm">
            <div className="text-[11px] font-mono text-stone-500">KOMPONEN DOMESTIK</div>
            <div className="text-xs sm:text-sm font-bold text-sky-700 mt-1">Permenperin TKDN Certified</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/80 border border-stone-300/80 shadow-sm">
            <div className="text-[11px] font-mono text-stone-500">ZONA BAHAYA</div>
            <div className="text-xs sm:text-sm font-bold text-stone-900 mt-1">ATEX Zone 2 Intrinsically Safe</div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-5xl mx-auto px-6 space-y-10">
        {/* Section 1: Legalitas Perusahaan */}
        <section className="rounded-2xl border border-stone-300/80 bg-white/85 backdrop-blur-xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-950">
                1. Identitas Hukum & Legalitas Badan Usaha
              </h2>
              <p className="text-xs font-mono text-stone-500">
                Pendaftaran Resmi Kementerian Hukum dan HAM Republik Indonesia
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-[#F4F1EA] rounded-lg border border-stone-200">
                <span className="text-stone-500 block">Nama Badan Hukum:</span>
                <span className="text-stone-900 font-bold text-sm">PT VANGUARD REKAYASA CERDAS</span>
              </div>
              <div className="p-3 bg-[#F4F1EA] rounded-lg border border-stone-200">
                <span className="text-stone-500 block">Nomor Induk Berusaha (NIB):</span>
                <span className="text-stone-900 font-semibold">0220108912839 (OSS Berbasis Risiko)</span>
              </div>
              <div className="p-3 bg-[#F4F1EA] rounded-lg border border-stone-200">
                <span className="text-stone-500 block">Klasifikasi Baku Lapangan Usaha (KBLI):</span>
                <span className="text-stone-800 font-medium block mt-0.5">• 26120 — Industri Sirkuit Terpadu & Komponen Elektronik</span>
                <span className="text-stone-800 font-medium block">• 62019 — Aktivitas Pemrograman dan Integrasi AI Industri</span>
                <span className="text-stone-800 font-medium block">• 33200 — Pemasangan Mesin dan Otomasi Kontrol Industri</span>
              </div>
            </div>

            <div className="space-y-3 text-stone-700 leading-relaxed text-xs sm:text-sm">
              <p>
                PT Vanguard Rekayasa Cerdas didirikan secara sah berdasarkan hukum Republik Indonesia sebagai prinsipal perancang perangkat keras edge computing industri dan pengembang algoritma deteksi anomali SCADA/Modbus real-time.
              </p>
              <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl text-stone-800">
                <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1 text-xs uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Kepatuhan Standar TKDN (Permenperin No. 22/2020)
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  Seluruh perakitan sasis DIN-Rail, integrasi PCB lapisan isolasi galvanis, serta kompilasi kernel deterministik dilakukan di fasilitas Batam Industrial Park guna memenuhi syarat penyerapan Tingkat Komponen Dalam Negeri untuk pengadaan BUMN sektor ketenagalistrikan dan utilitas air bersih.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Kerangka Regulasi Nasional */}
        <section className="rounded-2xl border border-stone-300/80 bg-white/85 backdrop-blur-xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
            <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-950">
                2. Kepatuhan Regulasi Infrastruktur Vital & Keamanan Siber Nasional
              </h2>
              <p className="text-xs font-mono text-stone-500">
                Penyelarasan dengan Kerangka BSSN, Kominfo, dan UU Perlindungan Data Pribadi
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-stone-200 bg-[#F4F1EA] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">
                  BSSN PERATURAN NO. 8/2020
                </span>
                <h3 className="font-bold text-stone-900 mt-2 text-sm">
                  Infrastruktur Informasi Vital (IIV)
                </h3>
                <p className="text-stone-600 text-xs mt-2 leading-relaxed">
                  Menjamin instrumen gateway tidak menjadi celah intrusi ke jaringan OT (Operational Technology) pada pembangkit listrik, transmisi gardu induk, dan fasilitas petrokimia strategis.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-300/60 text-[11px] font-mono text-stone-500">
                Tingkat Risiko: Kritikal / Terkarantina
              </div>
            </div>

            <div className="p-5 rounded-xl border border-stone-200 bg-[#F4F1EA] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-sky-700 bg-sky-100 px-2 py-0.5 rounded font-bold">
                  PP NO. 71/2019 (PSTE)
                </span>
                <h3 className="font-bold text-stone-900 mt-2 text-sm">
                  Sistem Elektronik Strategis
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Semua firmware dan modul telemetri menggunakan enkripsi kriptografi bersertifikasi dengan penempatan data operasional wajib di dalam yurisdiksi Republik Indonesia.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-300/60 text-[11px] font-mono text-stone-500">
                Residensi Data: 100% On-Premise
              </div>
            </div>

            <div className="p-5 rounded-xl border border-stone-200 bg-[#F4F1EA] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-amber-800 bg-amber-100 px-2 py-0.5 rounded font-bold">
                  UU NO. 27/2022 (PDP)
                </span>
                <h3 className="font-bold text-stone-900 mt-2 text-sm">
                  Privasi & Data Telemetri Terisolasi
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Sistem Vanguard hanya memproses telemetri fisika (vibrasi, suhu, tegangan, frekuensi Modbus) tanpa mengumpulkan data privasi identitas personil lapangan.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-300/60 text-[11px] font-mono text-stone-500">
                Zero Personal Data Collection
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Standar Internasional & Matriks Sertifikasi */}
        <section className="rounded-2xl border border-stone-300/80 bg-white/85 backdrop-blur-xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-950">
                3. Matriks Sertifikasi Industri & Audit Internasional
              </h2>
              <p className="text-xs font-mono text-stone-500">
                Sertifikasi Perangkat Keras, Firmware, dan Sistem Manajemen Mutu
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-[#F4F1EA] border-b border-stone-200 text-stone-600 uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-4">Standard / Kode</th>
                  <th className="py-3 px-4">Judul Standar</th>
                  <th className="py-3 px-4">Lembaga Akreditasi</th>
                  <th className="py-3 px-4">Cakupan Sertifikasi</th>
                  <th className="py-3 px-4">Status & Periode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white font-sans text-xs">
                {certs.map((c, i) => (
                  <tr key={i} className="hover:bg-stone-50 transition">
                    <td className="py-3.5 px-4 font-mono font-bold text-stone-900 whitespace-nowrap">
                      {c.code}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-stone-800">
                      {c.title}
                    </td>
                    <td className="py-3.5 px-4 text-stone-600 font-mono text-[11px]">
                      {c.issuer}
                    </td>
                    <td className="py-3.5 px-4 text-stone-600 max-w-xs">
                      {c.scope}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {c.status}
                      </span>
                      <span className="block text-[10px] text-stone-400 font-mono mt-0.5">
                        {c.year}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Arsitektur Kedaulatan Data & Air-Gap */}
        <section className="rounded-2xl border border-stone-300/80 bg-white/85 backdrop-blur-xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
            <div className="w-9 h-9 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-950">
                4. Jaminan Kedaulatan Data & Arsitektur Air-Gapped
              </h2>
              <p className="text-xs font-mono text-stone-500">
                Zero Cloud Leakage Guarantee untuk Sektor Sensitif Pertahanan & Energi
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold font-mono text-xs">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Deterministic Local Inference</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Model inferensi berbasis neural-sparse berjalan langsung di atas chip ARM embedded VG-Edge tanpa memerlukan koneksi ke internet terbuka. Semua komputasi berlangsung di dalam perimeter fisik gardu/pabrik klien.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold font-mono text-xs">
                  B
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Cryptographic Hardware Root of Trust</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Setiap paket pembaruan firmware ditandatangani menggunakan algoritma asimetris ECDSA SHA-256 yang diverifikasi langsung oleh secure element silikon independen sebelum dieksekusi.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold font-mono text-xs">
                  C
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Galvanic Electrical Isolation</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Isolasi optoelektronik 3.75 kVrms pada port RS-485 Modbus mencegah tegangan balik (ground loop spikes) merambat dari motor tegangan tinggi ke jaringan kontrol terdistribusi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold font-mono text-xs">
                  D
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Tamper-Proof Audit Logging</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Log diagnostik dan anomali disimpan dalam memori flash non-volatile bersertifikasi industri dengan skema append-only berkunci hash SHA-256 untuk keperluan audit investigasi kegagalan mesin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Garansi, SLA, & Tanggung Jawab Operasional */}
        <section className="rounded-2xl border border-stone-300/80 bg-white/85 backdrop-blur-xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
            <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-950">
                5. SLA Operasional, Garansi Kritis & Tanggung Jawab Hukum
              </h2>
              <p className="text-xs font-mono text-stone-500">
                Ketentuan Layanan Rekayasa dan Keandalan Pabrik
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
            <div className="p-4 bg-[#F4F1EA] rounded-xl border border-stone-200">
              <h4 className="font-bold text-stone-900 text-xs font-mono uppercase tracking-wider text-emerald-800">
                Service Level Agreement (SLA) Ketersediaan 99.999%
              </h4>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Perangkat keras VG-Edge dilengkapi dual-watchdog IC hardware yang secara otomatis me-restart subsistem dalam kurun waktu kurang dari 50 milidetik jika terdeteksi deadlock bus, memastikan proses pemantauan telemetri turbin tidak pernah terputus tanpa intervensi manusia.
              </p>
            </div>

            <div className="p-4 bg-[#F4F1EA] rounded-xl border border-stone-200">
              <h4 className="font-bold text-stone-900 text-xs font-mono uppercase tracking-wider text-sky-800">
                Protokol Pengungkapan Kerentanan Bertanggung Jawab (Vulnerability Disclosure)
              </h4>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Tim tanggap insiden PT Vanguard Rekayasa Cerdas (VG-CERT) memberlakukan batas waktu respons 48 jam untuk analisis temuan kerentanan keamanan siber industri dan merilis mitigasi patch terisolasi (offline bundle) dalam 7 hari kerja kepada mitra enterprise terdaftar.
              </p>
            </div>

            <div className="p-4 bg-stone-100 rounded-xl border border-stone-300/70 text-stone-600 text-xs font-mono">
              <div className="flex items-center gap-2 text-stone-900 font-bold mb-1">
                <AlertCircle className="w-4 h-4 text-stone-700" />
                KONTAK DIVISI LEGAL & AUDIT KEPATUHAN
              </div>
              <div>E-mail Resmi: <span className="text-stone-900 font-semibold">compliance@vanguardrekayasa.id</span></div>
              <div>Hotline Insiden Siber Industri: <span className="text-stone-900 font-semibold">+62 778 408 9200 (24/7 OT Dispatch)</span></div>
              <div>Batam Industrial Park, South Lot 12, Kepulauan Riau — Indonesia</div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pt-6 pb-4">
          <p className="text-xs text-stone-500 font-mono mb-4">
            Butuh salinan berkas sertifikat resmi bertanda tangan digital (Signed PDF Package)?
          </p>
          <a
            href="mailto:compliance@vanguardrekayasa.id?subject=Permintaan%20Dokumen%20Audit%20Kepatuhan%20Vanguard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-950 text-white hover:bg-stone-800 text-xs font-mono font-semibold transition shadow-md"
          >
            Request Official Audit Dossier <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </main>
  );
}
