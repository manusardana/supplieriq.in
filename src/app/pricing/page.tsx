import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="border-b border-slate-800 px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Pricing</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight">Start with what matters. Scale with confidence.</h1>
            <p className="mt-6 text-lg text-slate-300">Enterprise plans tailored to your modules, supplier base, users, integrations, and operating scale.</p>
          </div>
        </section>
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            {[
              ["Foundation", "For teams beginning supplier intelligence.", ["One core AI module", "Supplier and spend visibility", "Standard integrations", "Team onboarding"], "Custom"],
              ["Growth", "For connected sourcing and operations.", ["Multiple AI modules", "Workflow automation", "Risk and compliance monitoring", "Advanced analytics"], "Custom"],
              ["Enterprise", "For global, multi-category organizations.", ["Complete SupplierIQ platform", "Custom integrations", "Dedicated success team", "Enterprise controls"], "Custom"],
            ].map(([name, text, features, price], index) => (
              <article key={String(name)} className={`rounded-xl border p-7 ${index === 1 ? "border-cyan-400/50 bg-cyan-400/[0.04]" : "border-slate-800 bg-slate-950"}`}>
                {index === 1 && <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-cyan-300">Most popular</p>}
                <h2 className="text-2xl font-semibold">{name as string}</h2>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{text as string}</p>
                <p className="mt-8 text-3xl font-semibold">{price as string}</p>
                <p className="mt-1 text-xs text-slate-500">Annual enterprise agreement</p>
                <ul className="mt-7 space-y-3 border-t border-slate-800 pt-6">
                  {(features as string[]).map((feature) => <li key={feature} className="text-sm text-slate-300">✓ <span className="ml-2">{feature}</span></li>)}
                </ul>
                <a href="/book-demo" className={`mt-8 flex justify-center rounded-lg px-4 py-3 text-sm font-semibold ${index === 1 ? "bg-cyan-400 text-slate-950" : "border border-slate-700 text-white"}`}>Talk to sales</a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
