import Link from "next/link";
import { Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900
                     text-white text-[11px] font-black uppercase tracking-widest mb-10"
        >
          <Rocket className="w-3 h-3 mr-2 text-blue-400" />
          31 Production Phases Delivered
        </div>
        <h1
          className="text-6xl lg:text-9xl font-black text-slate-900 tracking-tighter
                     mb-8 leading-[0.85]"
        >
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
            Operational Maturity.
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-slate-500 mb-12 leading-relaxed">
          From multi-tenant initiative management to HIPAA-compliant health engines,
          vsumup architects secure, AI-powered digital infrastructure for the modern
          enterprise.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/initiative"
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl
                       font-black text-xl hover:bg-blue-700 hover:-translate-y-1
                       transition-all shadow-2xl shadow-blue-200"
          >
            Initiative Manager
          </Link>
          <Link
            href="/health"
            className="w-full sm:w-auto px-10 py-5 bg-slate-50 text-slate-900
                       border border-slate-200 rounded-2xl font-black text-xl
                       hover:bg-white transition-all"
          >
            Health Tech Engine
          </Link>
        </div>
      </div>
    </section>
  );
}
