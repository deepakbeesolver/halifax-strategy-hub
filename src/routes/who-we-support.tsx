import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, ShieldCheck, Factory, Truck, Cpu, ClipboardList, Globe2 } from "lucide-react";

export const Route = createFileRoute("/who-we-support")({
  head: () => ({
    meta: [
      { title: "Who We Support | Halifax Defence Consulting" },
      { name: "description", content: "Government departments, defence primes, security organisations, specialist suppliers, technology companies, procurement teams and international partners." },
      { property: "og:title", content: "Who We Support" },
      { property: "og:description", content: "Organisations operating in and around the defence enterprise." },
      { property: "og:url", content: "/who-we-support" },
    ],
    links: [{ rel: "canonical", href: "/who-we-support" }],
  }),
  component: WhoWeSupport,
});

const groups = [
  { icon: Building2, t: "Government Departments", d: "Structured advisory and documentation support for teams operating in defence and security-facing environments." },
  { icon: Factory, t: "Defence Primes", d: "Discipline around requirements, supplier coordination, capability narratives and partner engagement." },
  { icon: ShieldCheck, t: "Security Organisations", d: "Information-handling, governance and proportionate engagement on sensitive matters." },
  { icon: Truck, t: "Specialist Suppliers", d: "Helping suppliers structure their offer, prepare evidence and engage primes and government professionally." },
  { icon: Cpu, t: "Technology Companies", d: "Translating innovation into defence-relevant requirements, integration and adoption pathways." },
  { icon: ClipboardList, t: "Procurement Teams", d: "Procurement readiness, requirement notes, supplier comparison and tender preparation." },
  { icon: Globe2, t: "International Partners", d: "Cross-border engagement framed responsibly — with clear information boundaries and regulated-activity awareness." },
];

function WhoWeSupport() {
  return (
    <>
      <section className="hero-gradient text-primary-foreground py-24 md:py-32">
        <div className="container-hdc max-w-4xl">
          <p className="eyebrow eyebrow-rule text-accent-soft">Who We Support</p>
          <h1 className="mt-6 text-primary-foreground">
            We work with organisations whose decisions matter.
          </h1>
          <p className="mt-7 text-lg text-primary-foreground/85 max-w-2xl">
            Halifax supports clients and partners across the defence enterprise — from government
            departments and primes through to specialist suppliers, technology companies and
            international partners.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-hdc grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ icon: Icon, t, d }) => (
            <article key={t} className="rounded-lg border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/60">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent-soft text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-olive-forest text-primary-foreground py-20">
        <div className="container-hdc flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <h2 className="text-primary-foreground max-w-xl">
            Wherever you sit in the defence enterprise, we structure work to withstand scrutiny.
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
