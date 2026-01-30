"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { CheckCircle, Send, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  organization: string;
  area: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  organization?: string;
  message?: string;
  submit?: string;
}

const PROJECT_AREAS = [
  "Health Tech / EHR Integration",
  "AI-Powered Workflow Automation",
  "Multi-Tenant SaaS Architecture",
  "Technical Partnership Inquiry",
] as const;

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    area: PROJECT_AREAS[0],
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Organization is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      setSubmitted(true);
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          area: formData.area,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setSubmitted(true);
    } catch {
      setErrors({ submit: "Failed to send. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      organization: "",
      area: PROJECT_AREAS[0],
      message: "",
      honeypot: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div
        className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6
                   relative overflow-hidden h-full flex flex-col items-center
                   justify-center text-center animate-in zoom-in duration-500"
      >
        <div
          className="w-16 h-16 bg-emerald-100 rounded-full flex items-center
                     justify-center mb-4"
        >
          <CheckCircle className="text-emerald-600 w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Inquiry Received</h3>
        <p className="text-slate-600 text-sm">
          A senior architect will review your message and reach out shortly.
        </p>
        <button
          onClick={resetForm}
          className="mt-4 text-blue-600 font-bold text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6
                 relative overflow-hidden"
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Honeypot field - hidden from users, catches bots */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="honeypot">
            Leave this field empty
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="block text-[10px] font-black uppercase tracking-widest text-slate-400"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full bg-slate-50 border rounded-lg p-3 text-sm outline-none
                          transition-colors
                          ${errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-slate-200 focus:border-blue-500"}`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-xs" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-[10px] font-black uppercase tracking-widest text-slate-400"
            >
              Work Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full bg-slate-50 border rounded-lg p-3 text-sm outline-none
                          transition-colors
                          ${errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-slate-200 focus:border-blue-500"}`}
              placeholder="john@enterprise.com"
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-xs" role="alert">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Organization Field */}
        <div className="space-y-1">
          <label
            htmlFor="organization"
            className="block text-[10px] font-black uppercase tracking-widest text-slate-400"
          >
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            value={formData.organization}
            onChange={handleChange}
            aria-invalid={!!errors.organization}
            aria-describedby={errors.organization ? "org-error" : undefined}
            className={`w-full bg-slate-50 border rounded-lg p-3 text-sm outline-none
                        transition-colors
                        ${errors.organization
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-200 focus:border-blue-500"}`}
            placeholder="Health Systems Inc."
          />
          {errors.organization && (
            <p id="org-error" className="text-red-500 text-xs" role="alert">
              {errors.organization}
            </p>
          )}
        </div>

        {/* Project Area Field */}
        <div className="space-y-1">
          <label
            htmlFor="area"
            className="block text-[10px] font-black uppercase tracking-widest text-slate-400"
          >
            Project Area
          </label>
          <select
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm
                       outline-none focus:border-blue-500 transition-colors"
          >
            {PROJECT_AREAS.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        {/* Message Field */}
        <div className="space-y-1">
          <label
            htmlFor="message"
            className="block text-[10px] font-black uppercase tracking-widest text-slate-400"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`w-full bg-slate-50 border rounded-lg p-3 text-sm outline-none
                        transition-colors h-20 resize-none
                        ${errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-200 focus:border-blue-500"}`}
            placeholder="How can we help you scale?"
          />
          {errors.message && (
            <p id="message-error" className="text-red-500 text-xs" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <p className="text-red-500 text-sm text-center" role="alert">
            {errors.submit}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-slate-900 text-white rounded-lg py-3 font-bold text-sm
                     hover:bg-blue-600 transition-all flex items-center justify-center
                     gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              Sending...
            </>
          ) : (
            <>
              Send Inquiry <Send size={16} />
            </>
          )}
        </button>

        <p className="text-[9px] text-slate-400 text-center leading-relaxed">
          By submitting, you agree to our privacy policy. Data handled per HIPAA standards.
        </p>
      </form>
    </div>
  );
}
