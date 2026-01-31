import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Shield,
  Database,
  Activity,
  CheckCircle2,
  Lock,
  FileCheck,
  Users,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "VitalEdge Health Case Study | vsumup",
  description:
    "How vsumup built a HIPAA-compliant Remote Patient Monitoring platform with FHIR R4 interoperability from the ground up.",
};

export default function HealthCaseStudyPage() {
  const metrics = [
    { value: "100%", label: "HIPAA Compliant", sublabel: "Technical safeguards" },
    { value: "FHIR R4", label: "Interoperability", sublabel: "EHR integration ready" },
    { value: "8", label: "Care Programs", sublabel: "RTM, RPM, CCM support" },
    { value: "24/7", label: "Alert Monitoring", sublabel: "Real-time clinical alerts" },
  ];

  const complianceFeatures = [
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Encryption at Rest & Transit",
      description: "AES-256 encryption for all PHI storage, TLS 1.3 for data in transit.",
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Comprehensive Audit Trails",
      description:
        "Every PHI access logged with user ID, timestamp, IP address, and action type.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Role-Based Access Control",
      description:
        "8 permission levels from Super Admin to Patient, with principle of least privilege.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Multi-Tenant Isolation",
      description:
        "Complete data separation between organizations enforced at ORM level.",
    },
  ];

  const architecture = [
    {
      layer: "Frontend",
      tech: "React 18, Vite, Tailwind CSS",
      detail: "Mobile-first responsive UI with real-time updates via SSE",
    },
    {
      layer: "API",
      tech: "Node.js, Express 5, REST + FHIR R4",
      detail: "47 endpoints documented in OpenAPI, JWT authentication",
    },
    {
      layer: "Database",
      tech: "PostgreSQL, Prisma ORM",
      detail: "46+ models with full audit logging and soft deletes",
    },
    {
      layer: "Infrastructure",
      tech: "Digital Ocean, S3, CloudFront",
      detail: "HIPAA-eligible hosting with automated backups",
    },
  ];

  const clinicalFeatures = [
    "Patient enrollment in RTM, RPM, CCM programs",
    "Real-time vital signs monitoring with configurable alerts",
    "Care gap detection and population health management",
    "Billing readiness calculations with CPT code tracking",
    "Prior authorization workflow management (EAH module)",
    "FHIR R4 resources: Patient, Observation, Condition, MedicationStatement",
    "Clinical decision support with evidence-based recommendations",
    "Automated compliance verification and issue tracking",
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <Link
            href="/health"
            className="inline-flex items-center gap-2 text-emerald-100 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to VitalEdge Health
          </Link>

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase mb-6">
            <Heart className="w-4 h-4 mr-2" /> Internal Case Study
          </div>

          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter mb-6">
            Building HIPAA-Compliant
            <br />
            <span className="text-emerald-200">Healthcare Infrastructure.</span>
          </h1>

          <p className="text-xl text-emerald-100 max-w-3xl leading-relaxed">
            VitalEdge is the clinical intelligence engine powering our healthcare
            vision. Here&apos;s how we built a standards-compliant RPM/RTM/CCM platform
            from scratch—and what we learned along the way.
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-emerald-800 border-y border-emerald-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-emerald-200">{metric.label}</div>
                <div className="text-xs text-emerald-400">{metric.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Challenge */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">
              The Challenge
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-6">
              Healthcare Software Is Hard
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Building healthcare software isn&apos;t just about features—it&apos;s about
              trust. Patient data demands the highest levels of security, compliance,
              and reliability. We needed infrastructure that clinicians could depend on
              for patient safety.
            </p>
            <div className="space-y-3">
              {[
                "HIPAA compliance is table stakes, not a feature",
                "EHR interoperability requires FHIR expertise",
                "CMS billing rules change annually",
                "Clinical workflows vary by specialty and organization",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <Stethoscope className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-black text-slate-900 mb-3">Our Commitment</h3>
            <p className="text-slate-600 mb-4">
              Build the healthcare platform we&apos;d want our own family members to be
              monitored on—secure, reliable, and designed for real clinical workflows.
            </p>
            <div className="text-sm text-slate-500">
              Every architectural decision filtered through: &quot;Would this be safe for
              patient care?&quot;
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">
            Compliance First
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-12">
            HIPAA Built Into Every Layer
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {complianceFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">
          Technical Architecture
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-12">
          Built for Scale and Interoperability
        </h2>
        <div className="space-y-4">
          {architecture.map((layer) => (
            <div
              key={layer.layer}
              className="p-6 bg-slate-900 rounded-xl text-white flex flex-col lg:flex-row lg:items-center gap-4"
            >
              <div className="lg:w-32">
                <div className="text-xs font-black text-emerald-400 uppercase">
                  {layer.layer}
                </div>
              </div>
              <div className="lg:w-64">
                <div className="font-mono text-sm text-slate-300">{layer.tech}</div>
              </div>
              <div className="flex-1">
                <div className="text-slate-400 text-sm">{layer.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Features */}
      <div className="bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-xs font-black text-emerald-200 uppercase tracking-wider mb-4">
                Clinical Capabilities
              </div>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-6">
                Features That Clinicians Actually Need
              </h2>
              <p className="text-emerald-100 leading-relaxed">
                Every feature was designed in consultation with clinical workflows.
                We prioritized what matters for patient outcomes, not just technical
                elegance.
              </p>
            </div>
            <div className="space-y-3">
              {clinicalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-emerald-200 mt-0.5 flex-shrink-0" />
                  <span className="text-emerald-50">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">
          The Results
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-12">
          What We Built
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <Database className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-black text-slate-900 mb-2">Complete EHR Foundation</h3>
            <p className="text-slate-600 text-sm">
              46+ database models covering patients, clinicians, observations,
              medications, billing, and audit trails.
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <Shield className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-black text-slate-900 mb-2">Zero Security Incidents</h3>
            <p className="text-slate-600 text-sm">
              Security-first architecture with continuous vulnerability scanning,
              penetration testing, and compliance monitoring.
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <TrendingUp className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-black text-slate-900 mb-2">Production Ready</h3>
            <p className="text-slate-600 text-sm">
              Deployed with comprehensive testing, documentation, and operational
              runbooks for clinical use.
            </p>
          </div>
        </div>
      </div>

      {/* Key Learnings */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">
              Key Learnings
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-8">
              What Healthcare Taught Us
            </h2>
            <div className="space-y-4">
              {[
                "Compliance isn't a checkbox—it's a culture. HIPAA must be embedded in every design decision.",
                "FHIR is the future. Investing in standards-based interoperability pays dividends for EHR integration.",
                "Billing is as important as clinical features. CMS reimbursement rules drive real-world adoption.",
                "Clinicians know their workflows. Build with them, not for them.",
                "Audit everything. You'll need it for compliance, debugging, and continuous improvement.",
              ].map((learning, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">{learning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl lg:text-3xl font-black mb-4">
            Ready to build on VitalEdge?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Explore our API documentation or contact us for partnership opportunities.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://vsumup-health.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-black hover:bg-emerald-50 transition-all"
            >
              View API Docs
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-emerald-700 rounded-xl font-black hover:bg-emerald-800 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
