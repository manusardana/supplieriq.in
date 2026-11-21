import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, BarChart3, Factory, ShieldCheck, Sparkles, Truck } from "lucide-react";

const capabilities = [
  { icon: Sparkles, title: "Sourcing AI", text: "Discover suppliers, compare capabilities, and generate defensible sourcing recommendations." },
  { icon: BarChart3, title: "Financial AI", text: "Improve cost visibility, forecast exposure, and find margin opportunities across the portfolio." },
  { icon: Factory, title: "Compliance AI", text: "Monitor audits, corrective actions, ESG risks, and factory performance in real time." },
  { icon: Truck, title: "Supply Chain AI", text: "Anticipate delays and orchestrate exceptions before they disrupt production or delivery." },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-16">
        <section className="relative isolate border-b border-slate-800/70">
          <div className="grid-surface absolute inset-0 -z-10" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                <Sparkles size={14} /> The AI operating system for supply chains
              </div>
              <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                Decisions from source to shipment.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                SupplierIQ brings sourcing, procurement, compliance, finance, and operations into one intelligent platform built for footwear and apparel.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="/book-demo" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Book a demo <ArrowRight size={16} />
                </a>
                <a href="/platform" className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">
                  Explore the platform
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/95 shadow-2xl shadow-cyan-950/40">
                <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                  <div>
                    <p className="text-xs text-slate-500">Executive overview</p>
                    <p className="mt-1 text-sm font-semibold">Supplier performance</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">Live</span>
                </div>
                <div className="grid grid-cols-3 gap-px bg-slate-800">
                  {[["Active suppliers", "248"], ["On-time delivery", "94.2%"], ["Spend at risk", "₹4.8 Cr"]].map(([label, value]) => (
                    <div key={label} className="bg-slate-950 p-4">
                      <p className="text-[10px] text-slate-500">{label}</p>
                      <p className="mt-2 text-xl font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-medium text-slate-300">Supplier risk</p>
                    <p className="text-xs text-slate-500">Last 30 days</p>
                  </div>
                  <div className="space-y-3">
                    {[["Apollo Footwear", "Low", "92", "emerald"], ["Meridian Textiles", "Medium", "76", "amber"], ["Nova Manufacturing", "Low", "88", "emerald"], ["Pacific Exports", "High", "61", "rose"]].map(([name, risk, score, color]) => (
                      <div key={name} className="grid grid-cols-[1fr_70px_44px] items-center gap-3 rounded-lg border border-slate-800/80 px-3 py-3">
                        <div className="min-w-0">
                          <p className="truncate text-xs font-medium">{name}</p>
                          <div className="mt-2 h-1.5 rounded-full bg-slate-800"><div className={`h-full rounded-full bg-${color}-400`} style={{ width: `${score}%` }} /></div>
                        </div>
                        <span className={`text-xs text-${color}-300`}>{risk}</span>
                        <span className="text-right text-sm font-semibold">{score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-800/70 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">One intelligence layer</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold tracking-tight sm:text-4xl">Every supply chain decision, connected.</h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-slate-950 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"><Icon size={19} /></div>
                  <h3 className="mt-5 font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/5 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="text-sm font-semibold text-cyan-300">See SupplierIQ in action</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Turn fragmented supply chain data into action.</h2>
            </div>
            <a href="/book-demo" className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
              Book a demo <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
