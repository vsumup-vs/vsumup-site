import { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Initiative Manager | vsumup",
  description: "Multi-tenant SaaS platform for strategic collaboration with AI-powered workflows.",
};

export default function InitiativePage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-10">
        <div
          className="bg-slate-900 rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-12 text-white
                     relative overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full
                       blur-[120px]"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10
                         border border-blue-500/20 text-blue-400 text-xs font-black
                         uppercase mb-4"
            >
              vsumup.online
            </div>
            <h1
              className="text-4xl lg:text-6xl font-black tracking-tighter mb-4
                         leading-none"
            >
              VSumUp Initiative Manager.
            </h1>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              The flagship multi-tenant SaaS platform for strategic collaboration. 31
              production phases, built on Next.js 16 and React 19, delivering
              enterprise-grade security and AI-powered workflows.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="px-4 py-3 bg-slate-800 rounded-xl border border-slate-700">
                <div className="text-sm font-black text-white">AES-256-GCM</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">
                  Credential Security
                </div>
              </div>
              <div className="px-4 py-3 bg-slate-800 rounded-xl border border-slate-700">
                <div className="text-sm font-black text-white">Claude SDK</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">
                  AI Content Workflows
                </div>
              </div>
              <div className="px-4 py-3 bg-slate-800 rounded-xl border border-slate-700">
                <div className="text-sm font-black text-white">46+ Models</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">
                  Tenant Isolation
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://vsumup.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white
                           rounded-xl font-black hover:bg-blue-700 transition-all
                           shadow-xl shadow-blue-500/20"
              >
                Launch vsumup.online <ExternalLink size={18} />
              </a>
              <a
                href="/case-studies/initiative"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white
                           rounded-xl font-black hover:bg-slate-700 transition-all
                           border border-slate-700"
              >
                View Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
