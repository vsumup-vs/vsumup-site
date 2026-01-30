import { Metadata } from "next";
import { MessageSquare, Zap, Share2, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Me@AI | vsumup",
  description: "Personalizing human-AI interaction through conversation-to-initiative parsing and agentic RAG workflows.",
};

export default function MeAiPage() {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-indigo-500 mb-3 mx-auto" />,
      title: "Conversation Parsing",
      description: "Transforming dialogue into structured milestones and initiatives.",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500 mb-3 mx-auto" />,
      title: "Agentic RAG",
      description: "Next-gen search and retrieval using Tavily and Serper integration.",
    },
    {
      icon: <Share2 className="w-6 h-6 text-blue-500 mb-3 mx-auto" />,
      title: "Webhook Delivery",
      description: "HMAC-signed real-time event distribution across 11 event types.",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-10 text-center">
        <div
          className="inline-block px-4 py-2 rounded-full bg-indigo-500/10
                     border border-indigo-500/20 text-indigo-400 text-xs font-black
                     uppercase mb-4"
        >
          Strategic AI Partnership
        </div>
        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-4">
          Me@AI
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-6 leading-relaxed">
          Personalizing human-AI interaction through conversation-to-initiative
          parsing and agentic RAG workflows, powered by the vsumup technical core.
        </p>

        <div className="flex justify-center mb-8">
          <a
            href="https://me-at-ai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white
                       rounded-xl font-black hover:bg-indigo-700 transition-all
                       shadow-xl shadow-indigo-500/20"
          >
            Explore me-at-ai.com <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-5 bg-slate-900 rounded-xl border border-slate-800"
            >
              {feature.icon}
              <h4 className="font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
