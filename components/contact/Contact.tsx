"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Loader2, AlertCircle, Mail, MapPin } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  company: string;
  type: string;
  budget: string;
  description: string;
};

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  type: "",
  budget: "",
  description: "",
};

const projectTypes = [
  "Website",
  "Web Application",
  "Mobile Application",
  "Backend/API",
  "Custom Software",
  "Other",
];

const budgets = [
  "Under €1,000",
  "€1,000 – €3,000",
  "€3,000 – €5,000",
  "€5,000 – €10,000",
  "€10,000+",
  "Not sure yet",
];

export function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.type) e.type = "Select a project type.";
    if (!form.description.trim() || form.description.trim().length < 20)
      e.description = "Tell us a little more (20+ characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // TODO: connect to Resend/Formspree — placeholder submission
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  const update =
    (key: keyof FormState) =>
    (
      ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setForm((f) => ({ ...f, [key]: ev.target.value }));
      if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
    };

  return (
    <Section id="contact" className="border-t border-white/[0.06]">
      <div className="grid grid-cols-12 gap-y-14 md:gap-x-14">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-4 bg-mist-500" /> Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-md text-bone">
              Have an idea? Let's build it.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-mist-400 leading-relaxed">
              Tell us what you're trying to build. We'll review your
              requirements and get back to you with the next steps.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 space-y-4 text-[14px]">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08]">
                  <Mail className="h-4 w-4 text-mist-400" strokeWidth={1.6} />
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="text-bone/90 hover:text-bone transition-colors focus-ring rounded"
                >
                  {site.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08]">
                  <MapPin className="h-4 w-4 text-mist-400" strokeWidth={1.6} />
                </span>
                <span className="text-mist-400">{site.location}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-7">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-10"
          >
            {status === "success" ? (
              <div className="flex flex-col items-start py-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                  <Check className="h-5 w-5 text-accent" />
                </span>
                <h3 className="mt-6 font-display text-3xl text-bone">
                  Thanks — we've received your brief.
                </h3>
                <p className="mt-3 max-w-md text-mist-400 leading-relaxed">
                  We'll review the details and reply within a few working days
                  with next steps or any follow-up questions.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initial);
                    setStatus("idle");
                  }}
                  className="btn-secondary mt-8 focus-ring"
                >
                  Send another brief
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Name"
                    required
                    error={errors.name}
                    id="f-name"
                  >
                    <input
                      id="f-name"
                      value={form.name}
                      onChange={update("name")}
                      autoComplete="name"
                      required
                      className="input"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field
                    label="Email"
                    required
                    error={errors.email}
                    id="f-email"
                  >
                    <input
                      id="f-email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      autoComplete="email"
                      required
                      className="input"
                      placeholder="you@company.com"
                    />
                  </Field>
                </div>

                <Field label="Company" error={errors.company} id="f-company">
                  <input
                    id="f-company"
                    value={form.company}
                    onChange={update("company")}
                    autoComplete="organization"
                    className="input"
                    placeholder="Company (optional)"
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Project type"
                    required
                    error={errors.type}
                    id="f-type"
                  >
                    <select
                      id="f-type"
                      value={form.type}
                      onChange={update("type")}
                      required
                      className="input"
                    >
                      <option value="" disabled>
                        Select a type
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Budget range" error={errors.budget} id="f-budget">
                    <select
                      id="f-budget"
                      value={form.budget}
                      onChange={update("budget")}
                      className="input"
                    >
                      <option value="" disabled>
                        Select a budget
                      </option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field
                  label="Project description"
                  required
                  error={errors.description}
                  id="f-desc"
                >
                  <textarea
                    id="f-desc"
                    value={form.description}
                    onChange={update("description")}
                    required
                    rows={5}
                    className="input min-h-[130px] resize-y"
                    placeholder="What are you trying to build? Who is it for? Any constraints or timelines we should know?"
                  />
                </Field>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary focus-ring disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Start a Conversation
                        <ArrowUpRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[12px] text-mist-500">
                    We reply within a few working days.
                  </p>
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-3 text-[13px] text-red-200">
                    <AlertCircle className="h-4 w-4 mt-0.5" />
                    <span>
                      Something went wrong sending your brief. Please try again
                      or email us directly.
                    </span>
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          color: #f5f4ef;
          padding: 12px 14px;
          font-size: 14px;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        :global(.input:hover) {
          border-color: rgba(255, 255, 255, 0.14);
        }
        :global(.input:focus) {
          outline: none;
          border-color: rgba(198, 242, 78, 0.5);
          background: rgba(255, 255, 255, 0.03);
        }
        :global(.input::placeholder) {
          color: #6e6e74;
        }
        :global(select.input) {
          appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%236E6E74' stroke-width='1.5'/></svg>");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }
        :global(select.input option) {
          background: #0a0a0b;
          color: #f5f4ef;
        }
      `}</style>
    </Section>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center justify-between text-[12px] uppercase tracking-[0.18em] text-mist-500 mb-2"
      >
        <span>
          {label}
          {required && <span className="text-mist-500"> *</span>}
        </span>
        {error && <span className="text-[11px] text-red-300 normal-case tracking-normal">{error}</span>}
      </label>
      {children}
    </div>
  );
}
