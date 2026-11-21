import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BookDemoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Product demo</p>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight">See your supply chain differently.</h1>
              <p className="mt-6 leading-7 text-slate-300">A tailored walkthrough of SupplierIQ for your categories, teams, and priority workflows.</p>
              <ul className="mt-8 space-y-4 text-sm text-slate-300">
                {["A 30-minute platform overview", "A walkthrough based on your use case", "Clear next steps and implementation guidance"].map((item) => <li key={item}>✓ <span className="ml-2">{item}</span></li>)}
              </ul>
            </div>
            <form className="grid gap-5 rounded-xl border border-cyan-400/20 bg-slate-950 p-6 sm:grid-cols-2 sm:p-8">
              {["First name", "Last name", "Work email", "Company"].map((label) => (
                <label key={label} className="text-sm text-slate-300">{label}<input className="mt-2 h-11 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 outline-none focus:border-cyan-400" required /></label>
              ))}
              <label className="text-sm text-slate-300 sm:col-span-2">Primary goal<select className="mt-2 h-11 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 outline-none focus:border-cyan-400"><option>Sourcing and supplier discovery</option><option>Procurement intelligence</option><option>Factory compliance</option><option>Supply chain risk</option></select></label>
              <button type="submit" className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 sm:col-span-2">Request demo</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
