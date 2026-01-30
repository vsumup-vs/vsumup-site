import Link from "next/link";
import { Command, Stethoscope, Sparkles, ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/shared";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  externalUrl: string;
  externalLabel: string;
  hoverColor: string;
  buttonHoverColor: string;
}

function ProductCard({
  icon,
  title,
  description,
  href,
  externalUrl,
  externalLabel,
  hoverColor,
  buttonHoverColor,
}: ProductCardProps) {
  return (
    <div
      className={`flex flex-col p-8 bg-white rounded-3xl border border-slate-200
                  transition-all group shadow-sm ${hoverColor}`}
    >
      {icon}
      <h4 className="text-xl font-black mb-2">{title}</h4>
      <p className="text-sm text-slate-500 mb-6">{description}</p>
      <div className="mt-auto space-y-3">
        <Link
          href={href}
          className={`block w-full py-3 bg-slate-900 text-white text-xs font-bold
                      rounded-xl text-center transition-colors ${buttonHoverColor}`}
        >
          Internal Case Study
        </Link>
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-3 border border-slate-200
                     text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50
                     transition-colors"
        >
          {externalLabel} <ExternalLink size={12} className="ml-2" />
        </a>
      </div>
    </div>
  );
}

export function ProductCardsSection() {
  const products = [
    {
      icon: <Command className="w-10 h-10 text-blue-600 mb-6" />,
      title: "Initiative Manager",
      description: "Multi-tenant SaaS for enterprise collaboration and strategy execution.",
      href: "/initiative",
      externalUrl: "https://vsumup.online/",
      externalLabel: "vsumup.online",
      hoverColor: "hover:border-blue-500",
      buttonHoverColor: "hover:bg-blue-600",
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-emerald-600 mb-6" />,
      title: "vsumup Health",
      description: "HIPAA-compliant RPM and EHR infrastructure with FHIR interoperability.",
      href: "/health",
      externalUrl: "https://vsumup-health.com",
      externalLabel: "vsumup-health.com",
      hoverColor: "hover:border-emerald-500",
      buttonHoverColor: "hover:bg-emerald-600",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-indigo-600 mb-6" />,
      title: "Me@AI",
      description: "Personalized AI agentic workflows and conversation parsing.",
      href: "/meai",
      externalUrl: "https://me-at-ai.com",
      externalLabel: "me-at-ai.com",
      hoverColor: "hover:border-indigo-500",
      buttonHoverColor: "hover:bg-indigo-600",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Ecosystem" title="Scalable Logic. Unified Execution." />
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.href} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
