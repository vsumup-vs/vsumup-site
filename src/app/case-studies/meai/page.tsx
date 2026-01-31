import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  MessageSquare,
  Zap,
  Share2,
  Brain,
  CheckCircle2,
  Sparkles,
  GitMerge,
  Workflow,
  Search,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Me@AI Case Study | vsumup",
  description:
    "How vsumup leverages AI-powered conversation parsing and agentic workflows internally to accelerate product development.",
};

export default function MeAiCaseStudyPage() {
  const metrics = [
    { value: "11", label: "Webhook Events", sublabel: "Real-time distribution" },
    { value: "RAG", label: "Agentic Search", sublabel: "Tavily + Serper" },
    { value: "100%", label: "HMAC Signed", sublabel: "Secure webhooks" },
    { value: "3x", label: "Faster Research", sublabel: "vs manual search" },
  ];

  const useCases = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Conversation → Initiatives",
      description:
        "Strategic discussions automatically parsed into structured milestones and tasks in Initiative Manager.",
      example:
        "\"Let's add FHIR support to VitalEdge\" becomes an epic with 15 auto-generated tasks.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Research Acceleration",
      description:
        "Agentic RAG workflows search across documentation, codebases, and the web to answer technical questions.",
      example:
        "\"What's the CMS billing requirement for RTM?\" returns verified CMS documentation in seconds.",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Code Understanding",
      description:
        "AI agents analyze our codebase to explain architecture, find dependencies, and suggest improvements.",
      example:
        "\"How does the billing service calculate eligibility?\" provides code walkthrough with line references.",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Documentation Generation",
      description:
        "Technical documentation auto-generated from code comments, API specs, and architectural decisions.",
      example:
        "API documentation for 47 endpoints generated from OpenAPI spec + code analysis.",
    },
  ];

  const architecture = [
    {
      component: "Conversation Parser",
      description: "Natural language → structured data extraction using Claude SDK",
      tech: "Claude 3.5 Sonnet, custom prompts",
    },
    {
      component: "Agentic RAG",
      description: "Multi-source search with intelligent result synthesis",
      tech: "Tavily, Serper, vector embeddings",
    },
    {
      component: "Webhook System",
      description: "11 event types with HMAC-SHA256 signed payloads",
      tech: "Express, retry queues, delivery tracking",
    },
    {
      component: "Initiative Bridge",
      description: "Bidirectional sync with Initiative Manager",
      tech: "REST API, real-time updates",
    },
  ];

  const webhookEvents = [
    "conversation.created",
    "conversation.parsed",
    "initiative.generated",
    "task.created",
    "research.completed",
    "document.generated",
    "agent.started",
    "agent.completed",
    "error.occurred",
    "webhook.test",
    "system.health",
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 relative z-10">
          <Link
            href="/meai"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Me@AI
          </Link>

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase mb-6">
            <Bot className="w-4 h-4 mr-2" /> Internal Case Study
          </div>

          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-white mb-6">
            AI That Works
            <br />
            <span className="text-indigo-400">The Way We Work.</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Me@AI isn&apos;t just a product—it&apos;s how we accelerate everything at
            vsumup. From research to documentation to strategic planning, AI agents
            are embedded in our daily workflows.
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-slate-900 border-y border-slate-800">
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

      {/* The Vision */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-4">
              The Vision
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-6">
              Human-AI Partnership, Not Replacement
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We built Me@AI on a simple principle: AI should amplify human
              capabilities, not replace human judgment. Every workflow is designed
              as a collaboration—AI handles research and synthesis, humans make
              decisions.
            </p>
            <div className="space-y-3">
              {[
                "AI proposes, humans dispose",
                "Transparency in reasoning, not black boxes",
                "Speed without sacrificing accuracy",
                "Integration, not isolation",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <Sparkles className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-black text-white mb-3">
              The Copilot Philosophy
            </h3>
            <p className="text-slate-400 mb-4">
              Every AI agent in Me@AI is a copilot, not an autopilot. They surface
              information, suggest actions, and handle repetitive work—but strategic
              decisions remain human.
            </p>
            <div className="text-sm text-slate-500">
              &quot;AI is a bicycle for the mind&quot; — we&apos;re building the best
              bicycle we can.
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-4">
            How We Use It
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-12">
            Daily AI Workflows at vsumup
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-6 bg-slate-950 rounded-xl border border-slate-800"
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="font-black text-white mb-2">{useCase.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{useCase.description}</p>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="text-xs text-slate-500 uppercase font-bold mb-1">
                    Example
                  </div>
                  <p className="text-sm text-indigo-300 italic">{useCase.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-4">
          Technical Architecture
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-12">
          Built for Real Workflows
        </h2>
        <div className="space-y-4">
          {architecture.map((item) => (
            <div
              key={item.component}
              className="p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col lg:flex-row lg:items-center gap-4"
            >
              <div className="lg:w-48">
                <div className="font-black text-white">{item.component}</div>
              </div>
              <div className="flex-1">
                <div className="text-slate-400 text-sm">{item.description}</div>
              </div>
              <div className="lg:w-48">
                <div className="font-mono text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-lg inline-block">
                  {item.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Webhook Events */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-black text-indigo-200 uppercase tracking-wider mb-4">
                Event-Driven Architecture
              </div>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-6">
                11 Webhook Event Types
              </h2>
              <p className="text-indigo-100 leading-relaxed mb-6">
                Every action in Me@AI emits HMAC-signed webhook events, enabling
                real-time integration with Initiative Manager and external systems.
              </p>
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-indigo-200" />
                <span className="text-sm text-indigo-200">
                  Secure, reliable, retryable delivery
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {webhookEvents.map((event) => (
                <div
                  key={event}
                  className="px-3 py-2 bg-indigo-700/50 rounded-lg border border-indigo-500/30 font-mono text-xs text-indigo-100"
                >
                  {event}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integration */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-4">
          Ecosystem Integration
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-8">
          Connected to Everything
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <GitMerge className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="font-black text-white mb-2">Initiative Manager</h3>
            <p className="text-slate-400 text-sm">
              Parsed conversations become initiatives. Research results attach to
              tasks. Bidirectional sync keeps everything connected.
            </p>
          </div>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <Zap className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="font-black text-white mb-2">VitalEdge Health</h3>
            <p className="text-slate-400 text-sm">
              AI agents research CMS regulations, analyze clinical workflows, and
              generate documentation for healthcare features.
            </p>
          </div>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <Code2 className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="font-black text-white mb-2">Development Workflow</h3>
            <p className="text-slate-400 text-sm">
              Code analysis, PR summaries, documentation generation—all powered by
              AI agents that understand our codebase.
            </p>
          </div>
        </div>
      </div>

      {/* Key Learnings */}
      <div className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-4">
              Key Learnings
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-8">
              What AI Taught Us About AI
            </h2>
            <div className="space-y-4">
              {[
                "Prompt engineering is software engineering. Treat prompts with the same rigor as code—version control, testing, iteration.",
                "Agentic workflows need guardrails. Autonomy is powerful, but bounded autonomy prevents runaway costs and errors.",
                "RAG quality depends on chunking strategy. How you split and index content matters more than the model you use.",
                "Webhooks are essential for real-world integration. AI in isolation is a demo; AI with webhooks is a product.",
                "Humans and AI are better together. The best outcomes come from AI doing research and synthesis, humans making decisions.",
              ].map((learning, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">{learning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl lg:text-3xl font-black mb-4">
            Ready to explore AI-powered workflows?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
            See how Me@AI can accelerate your team&apos;s productivity.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://me-at-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-indigo-700 rounded-xl font-black hover:bg-indigo-50 transition-all"
            >
              Explore Me@AI
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-indigo-700 rounded-xl font-black hover:bg-indigo-800 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
