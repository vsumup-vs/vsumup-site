"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/shared";
import { patterns, PatternCategory } from "@/constants/patterns";

export function PatternsSection() {
  const [activeTab, setActiveTab] = useState<PatternCategory>("architectural");

  const tabLabels: Record<PatternCategory, string> = {
    architectural: "Architectural",
    ai_collaboration: "AI Collaboration",
    security_infra: "Security Infra",
  };

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Tab Navigation */}
          <div className="lg:w-1/3">
            <SectionTitle subtitle="Architecture" title="Core Patterns." dark />
            <div className="space-y-3" role="tablist" aria-label="Architecture patterns">
              {(Object.keys(patterns) as PatternCategory[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  aria-selected={activeTab === tab}
                  aria-controls={`panel-${tab}`}
                  className={`w-full flex items-center justify-between p-4 rounded-xl
                              transition-all font-bold text-sm
                              ${activeTab === tab
                                ? "bg-blue-600 text-white"
                                : "bg-slate-900 text-slate-500 hover:bg-slate-800"}`}
                >
                  <span>{tabLabels[tab]}</span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Pattern Table */}
          <div
            className="lg:w-2/3 bg-slate-900 rounded-3xl border border-slate-800
                       overflow-hidden shadow-2xl"
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={activeTab}
          >
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-800 text-[10px] uppercase text-slate-500">
                  <th className="p-6">Logic</th>
                  <th className="p-6">Implementation</th>
                </tr>
              </thead>
              <tbody>
                {patterns[activeTab].map((p, i) => (
                  <tr key={i} className="border-b border-slate-800/50 last:border-0">
                    <td className="p-6 font-bold text-blue-400">{p.name}</td>
                    <td className="p-6 text-sm text-slate-400">{p.implementation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
