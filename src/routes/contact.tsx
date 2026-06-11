import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, ShieldCheck, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Halifax Defence Consulting" },
      { name: "description", content: "Contact Halifax Defence Consulting. Initial discussions take place at a high level before next steps are agreed." },
      { property: "og:title", content: "Contact Halifax Defence Consulting" },
      { property: "og:description", content: "Begin a structured conversation about defence advisory support." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Enquiry from ${fd.get("name") || "website"}`);
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nOrganisation: ${fd.get("org")}\nEmail: ${fd.get("email")}\n\n${fd.get("message")}`,
    );
    window.location.href = `mailto:info@halifaxdefenceconsulting.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <section className="hero-gradient text-primary-foreground py-24 md:py-32">
        <div className="container-hdc max-w-4xl">
          <p className="eyebrow eyebrow-rule text-accent-soft">Contact</p>
          <h1 className="mt-6 text-primary-foreground">Begin a structured conversation.</h1>
          <p className="mt-7 text-lg text-primary-foreground/85 max-w-2xl">
            Initial discussions take place at a high level only. We then agree an appropriate
            next step together — without commitment or assumption.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-hdc grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="eyebrow eyebrow-rule">Direct contact</p>
              <h2 className="mt-5">Get in touch.</h2>
              <p className="mt-4 text-muted-foreground">
                For enquiries, please contact us using the form or directly by email.
              </p>
            </div>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent"><Mail className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">Email</div>
                  <a href="mailto:info@halifaxdefenceconsulting.com" className="text-base font-medium text-olive-forest hover:text-accent">info@halifaxdefenceconsulting.com</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent"><Clock className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">Response</div>
                  <p className="text-base text-foreground/85">We respond to suitable enquiries as promptly and professionally as possible.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent"><ShieldCheck className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">Discretion</div>
                  <p className="text-base text-foreground/85">Please share only high-level information until information boundaries have been agreed.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-lg border border-border bg-card p-8 md:p-10 shadow-card space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Organisation" name="org" />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-2">Nature of enquiry</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Please provide a high-level outline of your enquiry."
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">By submitting, an email draft will open for you to review before sending.</p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover transition-colors"
                >
                  Send enquiry
                </button>
              </div>
              {sent && (
                <p className="text-sm text-olive-forest">Thank you — your email client should now be open. If not, please email us directly.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-2">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
      />
    </div>
  );
}
