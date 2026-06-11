import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, FileText, Compass, Network, Cpu, Scale, Crosshair, Boxes } from "lucide-react";
import heroImg from "@/assets/hero-command.jpg";
import aerospace from "@/assets/sector-aerospace.jpg";
import strategy from "@/assets/sector-strategy.jpg";
import cyber from "@/assets/sector-cyber.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halifax Defence Consulting | Strategic Defence & Government Advisory" },
      { name: "description", content: "UK-based defence advisory and international liaison firm. Structured support for high-trust decisions across defence, security, procurement and governance." },
      { property: "og:title", content: "Halifax Defence Consulting" },
      { property: "og:description", content: "Defence consulting for serious decisions in complex environments." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Compass, title: "Strategy Advisory", desc: "Translate ambition into structured, decision-ready direction for senior leaders.", href: "/services" },
  { icon: Boxes, title: "Hardware & Systems Advisory", desc: "Discipline around equipment requirements, supplier review and sustainment.", href: "/services" },
  { icon: ShieldCheck, title: "Risk & Threat Assessment", desc: "Clear, practical risk understanding that supports defensible decisions.", href: "/services" },
  { icon: FileText, title: "Procurement Support", desc: "Procurement readiness, requirement notes and tender preparation materials.", href: "/services" },
  { icon: Network, title: "Capability Development", desc: "Identify gaps, clarify dependencies and develop practical improvement paths.", href: "/services" },
  { icon: Crosshair, title: "Cyber & Intelligence", desc: "Information-handling, governance and decision boundaries in sensitive work.", href: "/services" },
  { icon: Cpu, title: "Technology Integration", desc: "Connect systems, procedures and people across complex operational stacks.", href: "/services" },
  { icon: Scale, title: "Policy & Compliance", desc: "Structured policy, controls and documentation for defence-facing activity.", href: "/services" },
];

const supports = [
  "Government Departments",
  "Defence Primes",
  "Security Organisations",
  "Specialist Suppliers",
  "Technology Companies",
  "Procurement Teams",
  "International Partners",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden hero-gradient text-primary-foreground">
        <div className="absolute inset-0 -z-10 opacity-25">
          <img src={heroImg} alt="" width={1920} height={1080} className="h-full w-full object-cover mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-tr from-olive-forest/90 via-olive-deep/70 to-transparent" />
        </div>
        <div className="container-hdc relative py-28 md:py-40 max-w-4xl">
          <p className="eyebrow eyebrow-rule text-accent-soft">Halifax Defence Consulting</p>
          <h1 className="mt-6 text-primary-foreground">
            Defence consulting for serious decisions in complex environments.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-primary-foreground/85">
            A UK-based defence advisory and international liaison firm supporting organisations
            across defence, security, procurement, capability, hardware systems, technology,
            risk and governance. We help bring structure to high-trust decisions where clarity,
            documentation and responsible engagement matter.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover transition-colors shadow-elevated">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-accent/70 px-7 py-3.5 text-sm font-semibold text-accent-soft hover:bg-accent/10 transition-colors">
              Explore our services
            </Link>
          </div>
          <p className="mt-10 text-sm text-primary-foreground/70">
            For enquiries:{" "}
            <a href="mailto:info@halifaxdefenceconsulting.com" className="text-accent-soft hover:text-accent underline-offset-4 hover:underline">
              info@halifaxdefenceconsulting.com
            </a>
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24">
        <div className="container-hdc grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-rule">Introduction</p>
            <h2 className="mt-5">Bringing order to defence complexity.</h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-foreground/85">
            <p>
              Defence work is rarely straightforward. A single decision may involve strategic
              priorities, operational requirements, supplier capability, procurement expectations,
              international stakeholders, legal and regulatory considerations, sensitive
              information, commercial risk and reputational consequences.
            </p>
            <p>
              Halifax exists to help bring order to that complexity. We support clients and
              partners by helping them define requirements, assess risks, prepare documentation,
              structure discussions, review supplier information, develop procurement readiness,
              strengthen governance and approach international engagement responsibly.
            </p>
            <p className="font-medium text-olive-forest">
              Serious defence-related work should not be driven by vague claims or unsupported
              assumptions. Our approach is built around careful communication, professional
              restraint, documented reasoning and practical judgement.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="bg-stone-surface py-24">
        <div className="container-hdc">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow eyebrow-rule">Who We Support</p>
              <h2 className="mt-5 max-w-2xl">Organisations operating in and around the defence enterprise.</h2>
            </div>
            <Link to="/who-we-support" className="text-sm font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-2">
              See all sectors <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-px bg-border md:grid-cols-3 lg:grid-cols-4 overflow-hidden rounded-lg border border-border">
            {supports.map((s) => (
              <li key={s} className="bg-background px-6 py-5 text-sm font-medium text-olive-forest">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-24">
        <div className="container-hdc">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-rule">Core Services</p>
            <h2 className="mt-5">Structured advisory across the defence decision lifecycle.</h2>
            <p className="mt-5 text-muted-foreground">
              From early-stage strategy through procurement readiness, capability development and
              policy compliance — designed for environments where decisions must be clear,
              documented and capable of being reviewed.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link
                to={href}
                key={title}
                className="group rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-card"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HALIFAX */}
      <section className="bg-olive-forest text-primary-foreground py-24">
        <div className="container-hdc grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-rule text-accent-soft">Why Halifax</p>
            <h2 className="mt-5 text-primary-foreground">
              A serious decision should be capable of being explained, evidenced and defended.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8">
            {[
              { t: "Judgement, not jargon", d: "We focus on practical judgement, restraint and documented reasoning — not contacts, confidence or technical language alone." },
              { t: "Discipline at the start", d: "The most valuable work happens before formal commitments. Clarifying requirements, identifying risks and defining roles early." },
              { t: "Built to withstand scrutiny", d: "Outputs are designed so decision-makers, programme teams, procurement leads and advisers can act with confidence." },
              { t: "Responsible international engagement", d: "Cross-border discussions are structured carefully, with information boundaries and regulated activity considered from the outset." },
            ].map(({ t, d }) => (
              <div key={t} className="border-l-2 border-accent pl-6">
                <h3 className="text-xl text-primary-foreground">{t}</h3>
                <p className="mt-2 text-primary-foreground/75 text-base">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-24">
        <div className="container-hdc">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-rule">Featured Sectors</p>
            <h2 className="mt-5">Where our work is most relevant.</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { img: aerospace, title: "Aerospace & Air Systems", desc: "Capability discussions linked to training, sustainment and governance." },
              { img: strategy, title: "Strategy & Programme Governance", desc: "Decision-ready pictures that senior leaders can act on with confidence." },
              { img: cyber, title: "Cyber, Intelligence & Technology", desc: "Information handling, integration and proportionate technology adoption." },
            ].map((s) => (
              <article key={s.title} className="group overflow-hidden rounded-lg border border-border bg-card shadow-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-hdc">
          <div className="rounded-2xl border border-border bg-stone-surface p-10 md:p-16 flex flex-col md:flex-row gap-10 items-start md:items-center justify-between">
            <div className="max-w-xl">
              <p className="eyebrow eyebrow-rule">Begin a discussion</p>
              <h2 className="mt-5">Approach serious decisions properly.</h2>
              <p className="mt-4 text-muted-foreground">
                Discussions start at a high level. We then agree the appropriate next step
                together — without commitment or assumption.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover">
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-olive-forest/30 px-7 py-3.5 text-sm font-semibold text-olive-forest hover:bg-background">
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
