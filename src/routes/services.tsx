import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Boxes, ShieldCheck, FileText, Network, Crosshair, Cpu, Scale, GraduationCap, Globe2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Halifax Defence Consulting" },
      { name: "description", content: "Strategy advisory, hardware and systems, risk assessment, procurement, capability, cyber & intelligence, policy and technology integration." },
      { property: "og:title", content: "Services — Halifax Defence Consulting" },
      { property: "og:description", content: "Structured advisory services across the defence decision lifecycle." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Compass, title: "Strategy Advisory", desc: "We translate ambition into a decision-ready picture for senior leaders. Strategy work is connected to risk, procurement, capability and governance rather than treated in isolation." },
  { icon: Boxes, title: "Hardware & Systems Advisory", desc: "Discipline around equipment, supplier review, command-and-control, communications, sensors, sustainment and operational procedures — including sensitive or regulated categories." },
  { icon: ShieldCheck, title: "Risk & Threat Assessment", desc: "Clear, practical and decision-focused risk understanding. Helping clients see what matters, what to escalate and when further specialist review is required." },
  { icon: FileText, title: "Procurement Support", desc: "Procurement readiness, requirement notes, supplier information summaries, comparison material and structured tender preparation." },
  { icon: Network, title: "Capability Development", desc: "Identifying gaps, clarifying dependencies and developing practical pathways for improvement — where organisations know more is needed but the route is unclear." },
  { icon: Crosshair, title: "Cyber & Intelligence", desc: "Information-handling, governance, decision boundaries and proportionate engagement in sensitive technical environments." },
  { icon: GraduationCap, title: "Training & Simulation", desc: "Defining training equipment requirements, simulation needs and the operational context that supports adoption and sustainment." },
  { icon: Scale, title: "Policy & Compliance", desc: "Structured policy, controls and documentation. Compliance treated as a foundation for defence-facing work, not an afterthought." },
  { icon: Cpu, title: "Technology Integration", desc: "Connecting systems, procedures and people across complex operational stacks — including where new technologies meet existing constraints." },
  { icon: Globe2, title: "International Partnerships", desc: "Structured cross-border engagement: framing discussions, documenting actions, respecting information boundaries and identifying regulated activity early." },
];

function Services() {
  return (
    <>
      <section className="hero-gradient text-primary-foreground py-24 md:py-32">
        <div className="container-hdc max-w-4xl">
          <p className="eyebrow eyebrow-rule text-accent-soft">Services</p>
          <h1 className="mt-6 text-primary-foreground">
            Advisory, liaison and support across the defence enterprise.
          </h1>
          <p className="mt-7 text-lg text-primary-foreground/85 max-w-2xl">
            Our services are designed for situations where decisions need to be clear, documented
            and capable of being reviewed. Each service connects to the others — risk to
            procurement, capability to policy, strategy to international engagement.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-hdc">
          <div className="grid gap-7 md:grid-cols-2">
            {services.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-lg border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:border-accent/60">
                <div className="flex items-start gap-5">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl">{title}</h3>
                    <p className="mt-3 text-foreground/80 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-surface py-20">
        <div className="container-hdc flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
          <div className="max-w-xl">
            <p className="eyebrow eyebrow-rule">Tendering & Procurement</p>
            <h2 className="mt-5">Preparation that withstands scrutiny.</h2>
            <p className="mt-4 text-muted-foreground">
              Where a procurement is approaching, Halifax supports requirement clarification,
              supplier engagement structure, evaluation material and decision logs.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover">
            Discuss tendering support <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
