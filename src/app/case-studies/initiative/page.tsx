import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Users,
  GitBranch,
  Shield,
  Zap,
  CheckCircle2,
  Clock,
  TrendingUp,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Initiative Manager Case Study | vsumup",
  description:
    "How vsumup uses Initiative Manager internally to coordinate product development across three platforms with 31 production phases.",
};

export default function InitiativeCaseStudyPage() {
  const metrics = [
    { value: "31", label: "Production Phases", sublabel: "Shipped to date" },
    { value: "46+", label: "Database Models", sublabel: "Multi-tenant isolation" },
    { value: "3", label: "Product Teams", sublabel: "Coordinated daily" },
    { value: "100%", label: "Strategy Visibility", sublabel: "Cross-team alignment" },
  ];

  const challenges = [
    {
      title: "Multi-Product Coordination",
      description:
        "Managing roadmaps, sprints, and dependencies across VitalEdge Health, Me@AI, and Initiative Manager itself required a unified command center.",
    },
    {
      title: "Strategic Alignment",
      description:
        "Ensuring every feature shipped ties back to company OKRs, with clear traceability from initiative to execution.",
    },
    {
      title: "Resource Allocation",
      description:
        "Balancing engineering bandwidth across three concurrent products while maintaining velocity on all fronts.",
    },
  ];

  const solutions = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Hierarchical Initiative Structure",
      description:
        "Epics → Initiatives → Milestones → Tasks. Every piece of work traces back to strategic objectives with full audit trail.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Cross-Team Workspaces",
      description:
        "Dedicated workspaces for Health, AI, and Platform teams with shared visibility into dependencies and blockers.",
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "AI-Powered Planning",
      description:
        "Claude SDK integration suggests task breakdowns, estimates complexity, and identifies potential conflicts before they occur.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Enterprise Security",
      description:
        "AES-256-GCM encryption for credentials, RBAC with 8 permission levels, and complete audit logging for compliance.",
    },
  ];

  const timeline = [
    { phase: "Phase 1-10", title: "Foundation", description: "Core platform, auth, multi-tenancy" },
    { phase: "Phase 11-20", title: "Collaboration", description: "Real-time sync, comments, notifications" },
    { phase: "Phase 21-31", title: "Intelligence", description: "AI workflows, analytics, integrations" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <Link
            href="/initiative"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Initiative Manager
          </Link>

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase mb-6">
            <Building2 className="w-4 h-4 mr-2" /> Internal Case Study
          </div>

          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter mb-6">
            How vsumup Runs on
            <br />
            <span className="text-blue-400">Initiative Manager.</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            We don&apos;t just build Initiative Manager—we run our entire company on it.
            From product roadmaps to daily standups, here&apos;s how we use our own
            platform to ship three products simultaneously.
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-slate-800 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-300">{metric.label}</div>
                <div className="text-xs text-slate-500">{metric.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl">
          <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">
            The Challenge
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-8">
            Coordinating a Three-Product Ecosystem
          </h2>
          <div className="space-y-6">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200"
              >
                <h3 className="font-black text-slate-900 mb-2">{challenge.title}</h3>
                <p className="text-slate-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solution */}
      <div className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">
            Our Solution
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-12">
            Building the Operating System for vsumup
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {solution.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-2">{solution.title}</h3>
                <p className="text-slate-600 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">
          Development Journey
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-12">
          31 Phases of Continuous Shipping
        </h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {timeline.map((item, index) => (
            <div key={item.phase} className="relative">
              <div className="p-6 bg-slate-900 rounded-xl text-white">
                <div className="text-blue-400 text-xs font-black uppercase mb-2">
                  {item.phase}
                </div>
                <h3 className="text-xl font-black mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
              {index < timeline.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="text-xs font-black text-blue-200 uppercase tracking-wider mb-4">
            The Results
          </div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-12">
            What We Achieved
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black mb-1">60% Faster Planning</h3>
                <p className="text-blue-100 text-sm">
                  Sprint planning reduced from 2 hours to 45 minutes with AI-assisted
                  task breakdown.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black mb-1">Zero Missed Dependencies</h3>
                <p className="text-blue-100 text-sm">
                  Cross-product dependencies automatically tracked and surfaced
                  before they become blockers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black mb-1">3x Shipping Velocity</h3>
                <p className="text-blue-100 text-sm">
                  From 10 phases in Year 1 to 31 phases total—accelerating with
                  each iteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Learnings */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl">
          <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">
            Key Learnings
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-8">
            What We Learned Building This
          </h2>
          <div className="space-y-4">
            {[
              "Dogfooding is non-negotiable. Using your own product daily exposes friction you'd never find otherwise.",
              "Multi-tenancy from day one. Retrofitting tenant isolation is 10x harder than building it in.",
              "AI assistance works best as a copilot, not autopilot. Human judgment remains essential for strategic decisions.",
              "Audit trails aren't just for compliance—they're invaluable for debugging and learning from past decisions.",
            ].map((learning, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-600">{learning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl lg:text-3xl font-black mb-4">
            Ready to run your organization on Initiative Manager?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            See how our platform can transform your strategic execution.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://vsumup.online"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 rounded-xl font-black hover:bg-blue-700 transition-all"
            >
              Try Initiative Manager
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-slate-800 rounded-xl font-black hover:bg-slate-700 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
