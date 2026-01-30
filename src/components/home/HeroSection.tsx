import Link from "next/link";
import { Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-10 lg:pt-32 lg:pb-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900
                     text-white text-[11px] font-black uppercase tracking-widest mb-6"
        >
          <Rocket className="w-3 h-3 mr-2 text-blue-400" />
          31 Production Phases Delivered
        </div>
        <h1
          className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter
                     mb-5 leading-[0.9]"
        >
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
            Operational Maturity.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-8 leading-relaxed">
          From multi-tenant initiative management to HIPAA-compliant health engines,
          vsumup architects secure, AI-powered digital infrastructure for the modern
          enterprise.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/initiative"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl
                       font-black hover:bg-blue-700 hover:-translate-y-1
                       transition-all shadow-xl shadow-blue-200"
          >
            Initiative Manager
          </Link>
          <Link
            href="/health"
            className="w-full sm:w-auto px-8 py-4 bg-slate-50 text-slate-900
                       border border-slate-200 rounded-xl font-black
                       hover:bg-white transition-all"
          >
            Health Tech Engine
          </Link>
        </div>
      </div>
    </section>
  );
}
