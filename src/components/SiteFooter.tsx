import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/hdc-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-olive-forest text-primary-foreground">
      <div className="container-hdc py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="font-serif text-xl">Halifax Defence Consulting</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-accent-soft/80">Strategic Defence & Government Advisory</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-md">
            A UK-based defence advisory and international liaison firm supporting clients in defence,
            security, procurement, capability development, hardware systems, technology, risk and
            governance.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="eyebrow eyebrow-rule mb-4 text-accent-soft">Explore</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent-soft">About</Link></li>
            <li><Link to="/services" className="hover:text-accent-soft">Services</Link></li>
            <li><Link to="/who-we-support" className="hover:text-accent-soft">Who We Support</Link></li>
            <li><Link to="/insights" className="hover:text-accent-soft">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-accent-soft">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="eyebrow eyebrow-rule mb-4 text-accent-soft">Contact</div>
          <p className="text-sm text-primary-foreground/80">
            For enquiries, please contact:
          </p>
          <a
            href="mailto:info@halifaxdefenceconsulting.com"
            className="mt-1 inline-block text-base font-medium text-accent-soft hover:text-accent"
          >
            info@halifaxdefenceconsulting.com
          </a>
          <p className="mt-3 text-xs text-primary-foreground/60">
            We respond to suitable enquiries as promptly and professionally as possible.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-hdc flex flex-col md:flex-row justify-between gap-3 py-6 text-xs text-primary-foreground/55">
          <span>© {new Date().getFullYear()} Halifax Defence Consulting Limited. All rights reserved.</span>
          <span>United Kingdom · Defence advisory & international liaison</span>
        </div>
      </div>
    </footer>
  );
}
