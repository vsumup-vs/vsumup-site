import { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  Server,
  Eye,
  FileCheck,
  Users,
  Database,
  Globe,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security | vsumup",
  description:
    "Enterprise-grade security practices. HIPAA compliance, SOC 2 readiness, encryption standards, and data protection across all vsumup platforms.",
};

const securityPillars = [
  {
    icon: Lock,
    title: "Encryption at Rest & Transit",
    description:
      "All data encrypted using AES-256 at rest and TLS 1.3 in transit. Zero plaintext storage of sensitive information.",
    color: "blue",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA Compliance",
    description:
      "VitalEdge Health Systems built from the ground up for HIPAA Technical Safeguards with comprehensive audit logging.",
    color: "emerald",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description:
      "Granular RBAC with principle of least privilege. Multi-tenant isolation ensures complete data separation.",
    color: "indigo",
  },
  {
    icon: Eye,
    title: "Comprehensive Audit Trails",
    description:
      "Every access, modification, and export logged with timestamps, user context, and IP tracking for compliance.",
    color: "amber",
  },
];

const complianceItems = [
  { label: "HIPAA Technical Safeguards", status: "Compliant" },
  { label: "SOC 2 Type II", status: "In Progress" },
  { label: "GDPR Data Protection", status: "Compliant" },
  { label: "CCPA Privacy Rights", status: "Compliant" },
  { label: "FHIR R4 Interoperability", status: "Implemented" },
  { label: "HL7 v2.x Integration", status: "Supported" },
];

const infrastructureFeatures = [
  "Multi-region deployment with automated failover",
  "Daily encrypted backups with 30-day retention",
  "Private network isolation for database clusters",
  "Web Application Firewall (WAF) protection",
  "DDoS mitigation and rate limiting",
  "Automated vulnerability scanning (Dependabot, Snyk)",
  "Penetration testing by third-party security firms",
  "24/7 infrastructure monitoring and alerting",
];

export default function SecurityPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50
                       text-blue-700 text-xs font-black uppercase mb-6"
          >
            <ShieldCheck className="w-4 h-4 mr-2" /> Security First Architecture
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            Enterprise Security
            <br />
            <span className="text-blue-600">By Design.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Security is not an afterthought at vsumup. Every platform we build
            incorporates encryption, access controls, and audit capabilities
            from day one.
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {securityPillars.map((pillar) => {
            const Icon = pillar.icon;
            const colorClasses = {
              blue: "bg-blue-50 text-blue-600",
              emerald: "bg-emerald-50 text-emerald-600",
              indigo: "bg-indigo-50 text-indigo-600",
              amber: "bg-amber-50 text-amber-600",
            };
            return (
              <div
                key={pillar.title}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm
                           hover:shadow-lg transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4
                             ${colorClasses[pillar.color as keyof typeof colorClasses]}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-600">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Compliance & Infrastructure Section */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {/* Compliance Status */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-black text-slate-900">
                Compliance Status
              </h2>
            </div>
            <div className="space-y-4">
              {complianceItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-3 border-b border-slate-100
                             last:border-0"
                >
                  <span className="font-medium text-slate-700">{item.label}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold
                               ${
                                 item.status === "Compliant" ||
                                 item.status === "Implemented" ||
                                 item.status === "Supported"
                                   ? "bg-emerald-50 text-emerald-700"
                                   : "bg-amber-50 text-amber-700"
                               }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure Security */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-black text-slate-900">
                Infrastructure Security
              </h2>
            </div>
            <ul className="space-y-3">
              {infrastructureFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Data Protection Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 lg:p-16 text-white">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-black">Data Protection</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Your data is protected with industry-leading security measures.
                We implement defense-in-depth strategies to ensure multiple
                layers of protection.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  AES-256 encryption for data at rest
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  TLS 1.3 for all data in transit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  bcrypt password hashing (cost factor 12)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  JWT with secure refresh token rotation
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl font-black text-blue-400 mb-2">99.9%</div>
                <div className="text-xs font-bold text-slate-400 uppercase">
                  Uptime SLA
                </div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl font-black text-emerald-400 mb-2">0</div>
                <div className="text-xs font-bold text-slate-400 uppercase">
                  Data Breaches
                </div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl font-black text-indigo-400 mb-2">24/7</div>
                <div className="text-xs font-bold text-slate-400 uppercase">
                  Monitoring
                </div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl font-black text-amber-400 mb-2">MFA</div>
                <div className="text-xs font-bold text-slate-400 uppercase">
                  Enforced
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-slate-400" />
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
              Security Inquiries
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">
            Questions about our security practices?
          </h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Our security team is available to discuss compliance requirements,
            provide documentation, or address specific concerns.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white
                       rounded-xl font-bold hover:bg-slate-800 transition-all"
          >
            Contact Security Team
          </a>
        </div>
      </div>
    </div>
  );
}
