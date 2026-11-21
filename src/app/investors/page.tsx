import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function InvestorsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="border-b border-slate-800 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Investor relations</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight">A vertical AI platform for the world&apos;s supply chains.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">SupplierIQ is creating the operating system for sourcing, procurement, compliance, finance, and supply chain decisions in footwear and apparel.</p>
          </div>
        </section>
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <article className="rounded-xl border border-slate-800 p-7">
              <p className="text-xs text-slate-500">Five-year revenue plan</p>
              <div className="mt-6 space-y-4">
                {[["Year 1", "₹0.5 Cr"], ["Year 2", "₹2.5 Cr"], ["Year 3", "₹7 Cr"], ["Year 4", "₹15 Cr"], ["Year 5", "₹30 Cr"]].map(([year, value]) => (
                  <div key={year} className="flex items-center justify-between border-b border-slate-800 pb-3"><span className="text-sm text-slate-400">{year}</span><span className="font-semibold">{value}</span></div>
                ))}
              </div>
            </article>
            <article className="rounded-xl border border-slate-800 p-7">
              <p className="text-xs text-slate-500">Seed round allocation</p>
              <div className="mt-6 space-y-4">
                {[["Product development", "40%"], ["Sales and marketing", "25%"], ["Hiring", "20%"], ["Infrastructure", "10%"], ["Legal and administration", "5%"]].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between border-b border-slate-800 pb-3"><span className="text-sm text-slate-400">{label}</span><span className="font-semibold">{value}</span></div>
                ))}
              </div>
            </article>
          </div>
          <div className="mx-auto mt-8 max-w-7xl rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7">
            <p className="text-sm text-slate-300">For investor information and a copy of our investor memorandum, contact <a className="font-semibold text-cyan-300" href="mailto:investors@supplieriq.in">investors@supplieriq.in</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
