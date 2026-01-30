import { Metadata } from "next";
import { Mail, Shield, MapPin, Rocket } from "lucide-react";
import { SectionTitle } from "@/components/shared";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | vsumup",
  description: "Start a technical partnership with vsumup. Enterprise EHR deployment, AI-powered workflows, and multi-tenant SaaS architecture.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Content side */}
          <div>
            <div className="mb-6">
              <h2 className="text-base font-bold tracking-widest uppercase mb-2 text-blue-600">
                Connect
              </h2>
              <h3 className="text-3xl lg:text-4xl font-black tracking-tighter text-slate-900">
                Start a Technical Partnership.
              </h3>
            </div>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Whether you&apos;re looking for enterprise EHR deployment leadership,
              AI-powered workflow automation, or multi-tenant SaaS architecture, our
              team is ready to scale with you.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 bg-blue-50 rounded-lg flex items-center
                             justify-center shrink-0"
                >
                  <Mail className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Enterprise Inquiries</h4>
                  <p className="text-slate-500 text-sm">support@vsumup.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center
                             justify-center shrink-0"
                >
                  <Shield className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Compliance & Security</h4>
                  <p className="text-slate-500 text-sm">
                    Trust center and HIPAA certification requests.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 bg-slate-50 rounded-lg flex items-center
                             justify-center shrink-0"
                >
                  <MapPin className="text-slate-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Technical Hub</h4>
                  <p className="text-slate-500 text-sm">Infrastructure & DevOps Support</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <h5 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <Rocket className="text-blue-600 w-4 h-4" /> Fast-Track Engagement
              </h5>
              <p className="text-xs text-slate-500 leading-relaxed">
                Most technical scoping calls are scheduled within 24-48 hours of your
                inquiry. Our senior architects personally review all integration requests.
              </p>
            </div>
          </div>

          {/* Form side */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
