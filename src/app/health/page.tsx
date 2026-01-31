import { Metadata } from "next";
import { Activity, Database, ShieldCheck, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "VitalEdge Health Systems | vsumup",
  description: "HIPAA-compliant EHR and Remote Patient Monitoring infrastructure with HL7/FHIR integration.",
};

export default function HealthPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            <div
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50
                         text-emerald-700 text-xs font-black uppercase mb-4"
            >
              <ShieldCheck className="w-4 h-4 mr-2" /> HIPAA Compliant Engine
            </div>
            <h1
              className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-4
                         leading-none"
            >
              VitalEdge <br />
              Health Systems.
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Bridging clinical workflows with technical precision. VitalEdge is our
              core health-tech engine, powering modern EHRs and Remote Patient
              Monitoring platforms.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-3xl font-black text-emerald-600 mb-1">30%</div>
                <div className="text-xs font-bold text-slate-400 uppercase">
                  Faster Data Retrieval
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-600 mb-1">100%</div>
                <div className="text-xs font-bold text-slate-400 uppercase">
                  HL7/FHIR Integration
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://vsumup-health.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white
                           rounded-xl font-bold hover:bg-emerald-700 transition-all"
              >
                Visit vsumup-health.com <ExternalLink size={18} />
              </a>
              <a
                href="/case-studies/health"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white
                           rounded-xl font-bold hover:bg-slate-700 transition-all"
              >
                View Case Study
              </a>
            </div>
          </div>

          {/* Feature Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl relative">
            <div
              className="absolute top-0 right-0 -mt-4 -mr-4 bg-emerald-600 text-white
                         px-4 py-1.5 rounded-xl font-black text-xs"
            >
              Live Module
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-black text-slate-900 flex items-center gap-2 mb-1">
                  <Activity className="text-emerald-500 w-5 h-5" /> Real-time Vitals
                </h4>
                <p className="text-sm text-slate-500">
                  Cloud-based tracking for wearables with automated clinical alerting.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-black text-slate-900 flex items-center gap-2 mb-1">
                  <Database className="text-blue-500 w-5 h-5" /> Centralized EHR
                </h4>
                <p className="text-sm text-slate-500">
                  Aggregated patient data for epidemiological studies and practice management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
