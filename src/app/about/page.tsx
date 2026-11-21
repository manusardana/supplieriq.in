import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="border-b border-slate-800 px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">About us</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight tracking-tight">We are building the intelligence layer for supply chains.</h1>
            </div>
            <p className="text-lg leading-8 text-slate-300">SupplierIQ exists to help teams make faster, better decisions across sourcing, procurement, compliance, finance, and logistics—especially in the complex world of footwear and apparel.</p>
          </div>
        </section>
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {[
              ["Vertical by design", "Deep workflows and data models for footwear, apparel, retail, and manufacturing."],
              ["AI with context", "Recommendations grounded in supplier, operational, commercial, and compliance data."],
              ["Built for action", "Purposeful workflows that move teams from insight to accountable execution."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-xl border border-slate-800 p-6"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
