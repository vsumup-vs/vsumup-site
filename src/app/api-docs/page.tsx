import { Metadata } from "next";
import {
  Code2,
  Server,
  Shield,
  Zap,
  FileJson,
  Lock,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "API Documentation | vsumup",
  description:
    "RESTful APIs and HL7 FHIR R4 integration specifications for vsumup platforms. Secure, well-documented endpoints for enterprise integration.",
};

const apiProducts = [
  {
    name: "VitalEdge Health API",
    description:
      "HIPAA-compliant REST API for patient management, clinical observations, care programs, and billing readiness.",
    version: "v1.0",
    status: "Production",
    features: [
      "Patient & Clinician Management",
      "Observations & Assessments",
      "Care Program Enrollment",
      "Alert Rules Engine",
      "Billing Readiness Calculations",
      "Audit Logging",
    ],
    color: "emerald",
    docUrl: "https://vsumup-health.com/docs",
  },
  {
    name: "FHIR R4 Endpoints",
    description:
      "HL7 FHIR R4 compliant resources for EHR interoperability. Patient, Observation, Condition, and MedicationStatement resources.",
    version: "R4",
    status: "Production",
    features: [
      "Patient Resource (Read/Write)",
      "Observation Resource",
      "Condition Resource",
      "MedicationStatement Resource",
      "Practitioner Resource",
      "CapabilityStatement",
    ],
    color: "blue",
    docUrl: "https://vsumup-health.com/docs/fhir",
  },
  {
    name: "Initiative Manager API",
    description:
      "Multi-tenant initiative and project management API with real-time collaboration and resource tracking.",
    version: "v1.0",
    status: "Beta",
    features: [
      "Organization Management",
      "Initiative CRUD Operations",
      "Resource Allocation",
      "Timeline Management",
      "Collaboration Features",
      "Reporting & Analytics",
    ],
    color: "indigo",
    docUrl: "/contact",
  },
];

const authenticationMethods = [
  {
    method: "JWT Bearer Tokens",
    description: "OAuth 2.0 compliant JWT authentication with refresh token rotation",
    icon: Lock,
  },
  {
    method: "API Keys",
    description: "Scoped API keys for server-to-server integration",
    icon: Shield,
  },
  {
    method: "OAuth 2.0",
    description: "Social login support (Google, Microsoft) for user authentication",
    icon: FileJson,
  },
];

const codeExample = `// Example: Fetch patient observations
const response = await fetch(
  'https://api.vsumup-health.com/v1/observations',
  {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer YOUR_JWT_TOKEN',
      'Content-Type': 'application/json',
      'X-Organization-ID': 'org_123'
    }
  }
);

const { data } = await response.json();
// Returns: Array of Observation objects`;

const fhirExample = `// FHIR R4 Patient Resource
GET /fhir/Patient/patient_123

{
  "resourceType": "Patient",
  "id": "patient_123",
  "identifier": [{
    "system": "urn:oid:2.16.840.1.113883.4.1",
    "value": "123-45-6789"
  }],
  "name": [{
    "family": "Smith",
    "given": ["John"]
  }],
  "birthDate": "1980-01-15"
}`;

export default function ApiDocsPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50
                       text-indigo-700 text-xs font-black uppercase mb-6"
          >
            <Code2 className="w-4 h-4 mr-2" /> Developer Resources
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            API
            <br />
            <span className="text-indigo-600">Documentation.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Well-documented, secure APIs for seamless integration. RESTful
            endpoints and HL7 FHIR R4 compliance for healthcare interoperability.
          </p>
        </div>

        {/* API Products */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {apiProducts.map((api) => {
            const colorClasses = {
              emerald: {
                badge: "bg-emerald-50 text-emerald-700",
                border: "hover:border-emerald-500",
                button: "bg-emerald-600 hover:bg-emerald-700",
              },
              blue: {
                badge: "bg-blue-50 text-blue-700",
                border: "hover:border-blue-500",
                button: "bg-blue-600 hover:bg-blue-700",
              },
              indigo: {
                badge: "bg-indigo-50 text-indigo-700",
                border: "hover:border-indigo-500",
                button: "bg-indigo-600 hover:bg-indigo-700",
              },
            };
            const colors = colorClasses[api.color as keyof typeof colorClasses];

            return (
              <div
                key={api.name}
                className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm
                           transition-all ${colors.border}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.badge}`}>
                    {api.version}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold
                               ${api.status === "Production" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}
                  >
                    {api.status}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{api.name}</h3>
                <p className="text-slate-600 text-sm mb-6">{api.description}</p>
                <ul className="space-y-2 mb-6">
                  {api.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={api.docUrl}
                  target={api.docUrl.startsWith("http") ? "_blank" : undefined}
                  rel={api.docUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl
                             font-bold transition-all w-full justify-center ${colors.button}`}
                >
                  {api.docUrl === "/contact" ? "Request Access" : "View Docs"}
                  {api.docUrl.startsWith("http") && <ExternalLink size={16} />}
                  {api.docUrl === "/contact" && <ArrowRight size={16} />}
                </a>
              </div>
            );
          })}
        </div>

        {/* Authentication Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-10 lg:p-16 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-indigo-600" />
                <h2 className="text-3xl font-black text-slate-900">Authentication</h2>
              </div>
              <p className="text-slate-600 text-lg mb-8">
                All API endpoints are secured with industry-standard authentication.
                Choose the method that best fits your integration requirements.
              </p>
              <div className="space-y-4">
                {authenticationMethods.map((auth) => {
                  const Icon = auth.icon;
                  return (
                    <div
                      key={auth.method}
                      className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{auth.method}</h4>
                        <p className="text-sm text-slate-600">{auth.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="bg-slate-900 rounded-2xl p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-slate-500 text-xs font-mono">example.js</span>
                </div>
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* FHIR Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 lg:p-16 text-white mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-8 h-8 text-blue-200" />
                <h2 className="text-3xl font-black">HL7 FHIR R4</h2>
              </div>
              <p className="text-blue-100 text-lg mb-6">
                Full FHIR R4 compliance for seamless EHR integration. Connect with
                Epic, Cerner, and other major healthcare systems using standardized
                resources.
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                  US Core Profile compliance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                  SMART on FHIR authorization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                  Bulk Data Export support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                  USCDI V3 data elements
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-slate-900/50 rounded-2xl p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <FileJson className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-200 text-xs font-mono">FHIR Patient Resource</span>
                </div>
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{fhirExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Rate Limits & Support */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-amber-500" />
              <h3 className="text-xl font-black text-slate-900">Rate Limits</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">Standard Plan</span>
                <span className="font-bold text-slate-900">1,000 req/min</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">Enterprise Plan</span>
                <span className="font-bold text-slate-900">10,000 req/min</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-600">Burst Limit</span>
                <span className="font-bold text-slate-900">100 req/sec</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-black text-slate-900">API Support</h3>
            </div>
            <p className="text-slate-600 mb-6">
              Our developer relations team is available to assist with integration,
              troubleshooting, and custom requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white
                         rounded-xl font-bold hover:bg-slate-800 transition-all"
            >
              Contact Developer Support
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* SDKs Coming Soon */}
        <div className="text-center bg-slate-100 rounded-2xl p-10">
          <h3 className="text-2xl font-black text-slate-900 mb-4">SDKs Coming Soon</h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Official client libraries for JavaScript/TypeScript, Python, and Ruby
            are in development. Sign up to be notified when they launch.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-sm font-bold text-slate-700">
              JavaScript/TS
            </span>
            <span className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-sm font-bold text-slate-700">
              Python
            </span>
            <span className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-sm font-bold text-slate-700">
              Ruby
            </span>
            <span className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-sm font-bold text-slate-700">
              Go
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
