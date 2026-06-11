import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | Halifax Defence Consulting" },
      { name: "description", content: "Notes and commentary on structured decision-making, procurement, capability and governance in defence environments." },
      { property: "og:title", content: "Insights — Halifax Defence Consulting" },
      { property: "og:description", content: "Considered notes for defence and government-facing leaders." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

const notes = [
  { t: "Why early-stage structure matters more than late-stage rescue", d: "The most valuable defence work happens before formal commitments. Clarifying requirements and identifying risks early prevents avoidable problems later." },
  { t: "Documentation that withstands review", d: "If a recommendation cannot be supported by reasoning, it is not ready. Decision logs and options notes are not bureaucracy — they are evidence." },
  { t: "Responsible international engagement", d: "Cross-border discussions can create opportunity but require discipline. Information boundaries, regulated activity and stakeholder roles need clarity from day one." },
];

function Insights() {
  return (
    <>
      <section className="hero-gradient text-primary-foreground py-24 md:py-32">
        <div className="container-hdc max-w-4xl">
          <p className="eyebrow eyebrow-rule text-accent-soft">Insights</p>
          <h1 className="mt-6 text-primary-foreground">Considered notes on disciplined defence work.</h1>
          <p className="mt-7 text-lg text-primary-foreground/85 max-w-2xl">
            Short commentary on how structured thinking, documentation and restraint produce
            better outcomes in defence and security-facing environments.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-hdc grid gap-8 md:grid-cols-3">
          {notes.map((n) => (
            <article key={n.t} className="rounded-lg border border-border bg-card p-8 shadow-card">
              <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">Note</p>
              <h2 className="mt-4 text-2xl">{n.t}</h2>
              <p className="mt-4 text-muted-foreground">{n.d}</p>
            </article>
          ))}
        </div>
        <div className="container-hdc mt-16">
          <p className="text-sm text-muted-foreground">
            Longer-form insights are published periodically. For tailored discussion, please get
            in touch directly.
          </p>
        </div>
      </section>
    </>
  );
}
