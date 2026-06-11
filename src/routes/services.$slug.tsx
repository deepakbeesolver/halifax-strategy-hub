import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getService, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} | Halifax Defence Consulting` : "Service | Halifax Defence Consulting";
    const description = s?.desc ?? "Halifax Defence Consulting advisory service.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <section className="py-32">
      <div className="container-hdc max-w-2xl text-center">
        <p className="eyebrow eyebrow-rule">Not found</p>
        <h1 className="mt-6">Service not found.</h1>
        <p className="mt-4 text-muted-foreground">The service you are looking for is not listed.</p>
        <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-accent font-semibold">
          <ArrowLeft className="h-4 w-4" /> Back to services
        </Link>
      </div>
    </section>
  ),
  errorComponent: ({ reset }) => (
    <section className="py-32">
      <div className="container-hdc max-w-2xl text-center">
        <h1>Something went wrong.</h1>
        <button onClick={reset} className="mt-6 text-accent font-semibold">Try again</button>
      </div>
    </section>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="hero-gradient text-primary-foreground py-24 md:py-28">
        <div className="container-hdc max-w-4xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent-soft">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-8 flex items-start gap-5">
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-accent/20 text-accent-soft">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="eyebrow text-accent-soft">Service</p>
              <h1 className="mt-3 text-primary-foreground">{service.title}</h1>
            </div>
          </div>
          <p className="mt-7 text-lg text-primary-foreground/85">{service.desc}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-hdc grid gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="eyebrow eyebrow-rule">Overview</p>
              <p className="mt-5 text-lg text-foreground/85 leading-relaxed">{service.overview}</p>
            </div>

            <div>
              <p className="eyebrow eyebrow-rule">Scope of work</p>
              <ul className="mt-6 space-y-3">
                {service.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow eyebrow-rule">Indicative deliverables</p>
              <ul className="mt-6 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow eyebrow-rule">Engagement</p>
              <p className="mt-5 text-foreground/85 leading-relaxed">{service.engagement}</p>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-lg border border-border bg-card p-7 shadow-card">
              <h3 className="text-xl">Discuss this service</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Engagements begin with a confidential conversation to clarify scope, sensitivity and timing.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent-hover"
              >
                Contact Halifax <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-stone-surface py-20">
        <div className="container-hdc">
          <p className="eyebrow eyebrow-rule">Related services</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map(({ slug, icon: I, title, desc }) => (
              <Link
                key={slug}
                to="/services/$slug"
                params={{ slug }}
                className="group rounded-lg border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent/60"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <I className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-2 text-sm text-foreground/75 line-clamp-3">{desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
