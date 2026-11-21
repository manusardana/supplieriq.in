import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BarChart3, Factory, Search, ShoppingBag, ShieldCheck, Truck } from "lucide-react";

const modules = [
  { icon: Search, name: "Sourcing AI", text: "Search, qualify, and rank suppliers with market and risk context.", metric: "2.4x faster sourcing" },
  { icon: BarChart3, name: "Financial AI", text: "Connect spend, cost movements, forecasts, and margin opportunities.", metric: "One spend view" },
  { icon: ShoppingBag, name: "Buying AI", text: "Manage orders, commitments, approvals, and exceptions across categories.", metric: "Real-time control" },
  { icon: Factory, name: "Merchandising AI", text: "Align assortment, supplier capacity, cost, and demand signals.", metric: "Faster decisions" },
  { icon: ShieldCheck, name: "Compliance AI", text: "Track audits, certifications, corrective actions, and ESG obligations.", metric: "Always audit-ready" },
  { icon: Truck, name: "Supply Chain AI", text: "Detect risk and coordinate response across orders and shipments.", metric: "Earlier warning" },
];

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="border-b border-slate-800 px-6 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">The platform</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight tracking-tight">A decision system for every link in the supply chain.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">SupplierIQ connects operational data, enterprise systems, and AI recommendations in a purpose-built workspace for supply chain leaders.</p>
          </div>
        </section>
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map(({ icon: Icon, name, text, metric }) => (
              <article key={name} className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition hover:border-slate-700">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300"><Icon size={21} /></div>
                <h2 className="mt-6 text-xl font-semibold">{name}</h2>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{text}</p>
                <p className="mt-6 border-t border-slate-800 pt-4 text-xs font-semibold text-cyan-300">{metric}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="border-t border-slate-800 px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-xs text-slate-500">Procurement intelligence</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[["Spend", "₹82.4 Cr"], ["Savings", "₹6.2 Cr"], ["Suppliers", "248"]].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-slate-800 p-4"><p className="text-xs text-slate-500">{label}</p><p className="mt-2 font-semibold">{value}</p></div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-slate-800 p-4"><p className="text-xs text-slate-400">Recommended action</p><p className="mt-2 text-sm">Consolidate 12 component orders to improve capacity utilization.</p></div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-xs text-slate-500">Factory compliance</p>
              <div className="mt-6 space-y-4">
                {[["Social compliance", 92], ["Environmental", 84], ["Corrective actions", 76], ["Documentation", 88]].map(([label, value]) => (
                  <div key={String(label)}><div className="mb-2 flex justify-between text-xs"><span>{label}</span><span>{value}%</span></div><div className="h-2 rounded-full bg-slate-800"><div className="h-full rounded-full bg-cyan-400" style={{ width: `${value}%` }} /></div></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
