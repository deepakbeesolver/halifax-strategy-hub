import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Halifax Defence Consulting" },
      { name: "description", content: "Halifax Defence Consulting is a UK-based defence advisory firm built on judgement, restraint and disciplined documentation in complex environments." },
      { property: "og:title", content: "About Halifax Defence Consulting" },
      { property: "og:description", content: "Built to support serious organisations in defence, security and government-facing work." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="hero-gradient text-primary-foreground py-24 md:py-32">
        <div className="container-hdc max-w-4xl">
          <p className="eyebrow eyebrow-rule text-accent-soft">About Halifax</p>
          <h1 className="mt-6 text-primary-foreground">
            A UK defence advisory firm built for high-trust decisions.
          </h1>
          <p className="mt-7 text-lg text-primary-foreground/85 max-w-2xl">
            Halifax Defence Consulting was established to help organisations operating in and
            around defence ask better questions, prepare stronger documentation and approach
            sensitive decisions with discipline.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-hdc grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-rule">Our Approach</p>
            <h2 className="mt-5">Clarity before commitment.</h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-foreground/85">
            <p>
              We work in the space between ambition and decision. Many organisations know what
              they want to achieve, but they need support in defining the route, organising the
              evidence and preparing the right materials for internal or external review.
            </p>
            <p>
              Our outputs — briefing papers, options notes, risk registers, procurement readiness
              documents, requirements summaries, supplier question sets, decision logs, meeting
              records, policy notes, capability roadmaps and tender material — are not created
              for appearance. They are created so decision-makers can understand the position
              and act with greater confidence.
            </p>
            <p>
              We do not overcomplicate matters to make advisory work appear more substantial.
              We do not exaggerate. The objective is a clear and proportionate evidence trail
              for important decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-surface py-24">
        <div className="container-hdc">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-rule">Our Values</p>
            <h2 className="mt-5">Discretion, evidence, judgement.</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { t: "Discretion", d: "Information boundaries are agreed early and respected throughout. Sensitive work requires sensitive handling." },
              { t: "Evidence", d: "Recommendations are supported by reasoning. If a decision cannot be explained clearly, it is probably not ready." },
              { t: "Judgement", d: "Defence environments reward proportionate thinking, not maximalist claims. We slow the right things down." },
              { t: "Restraint", d: "We do not overstate capability or reach. Our credibility is built through accuracy." },
              { t: "Documentation", d: "Decisions should be explainable, evidenced, documented and capable of being defended later." },
              { t: "Responsibility", d: "We recognise when matters require further legal, technical, regulatory or specialist review." },
            ].map(({ t, d }) => (
              <div key={t} className="rounded-lg border border-border bg-card p-7 shadow-card">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-hdc grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-rule">Why Halifax Was Established</p>
            <h2 className="mt-5">Helping serious organisations approach serious decisions properly.</h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-foreground/85">
            <p>
              Halifax was established with a clear operating principle: a serious decision should
              be capable of being explained, evidenced, documented and defended. If a
              recommendation cannot be supported by reasoning, it needs more work.
            </p>
            <p>
              Where work involves multiple stakeholders, cross-border engagement, sensitive
              sectors, hardware systems, procurement processes, technology integration or
              regulated defence-related activity, structure becomes essential — not optional.
            </p>
            <p>
              Halifax helps clients understand requirements, prepare questions, review supplier
              information, structure work responsibly and ensure that the right issues are
              identified early — before they become avoidable problems later.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-olive-forest text-primary-foreground py-20">
        <div className="container-hdc flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-primary-foreground max-w-xl">Begin a structured conversation with Halifax.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-accent/60 px-7 py-3.5 text-sm font-semibold text-accent-soft hover:bg-accent/10">
              Explore our services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
