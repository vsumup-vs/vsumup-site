import Link from "next/link";
import { footerLinks } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-24">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl italic">V</span>
              </div>
              <span className="text-3xl font-black tracking-tighter">vsumup</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-10 leading-relaxed text-lg">
              Technical Architects specializing in multi-tenant SaaS, HIPAA health
              tech, and AI software.
            </p>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-xs mb-8">
              Ecosystem
            </h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm text-left">
              {footerLinks.ecosystem.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-xs mb-8">
              Case Studies
            </h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm text-left">
              {footerLinks.caseStudies.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical */}
          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-xs mb-8">
              Technical
            </h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm text-left">
              {footerLinks.technical.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-12 border-t border-slate-800 flex flex-col md:flex-row
                     justify-between items-center gap-6 text-[10px] text-slate-500
                     font-black uppercase tracking-[0.2em]"
        >
          <p>© {new Date().getFullYear()} vsumup. 31 PRODUCTION PHASES COMPLETED.</p>
          <div className="flex gap-10">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Compliance
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
