import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Contact</p>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight">Let&apos;s talk.</h1>
              <p className="mt-6 leading-7 text-slate-300">Tell us what your team is trying to improve. We&apos;ll connect you with the right person.</p>
              <div className="mt-10 space-y-5 text-sm">
                <p><span className="block text-xs text-slate-500">Sales</span><a className="mt-1 block text-cyan-300" href="mailto:sales@supplieriq.in">sales@supplieriq.in</a></p>
                <p><span className="block text-xs text-slate-500">General</span><a className="mt-1 block text-cyan-300" href="mailto:hello@supplieriq.in">hello@supplieriq.in</a></p>
              </div>
            </div>
            <form className="grid gap-5 rounded-xl border border-slate-800 bg-slate-950 p-6 sm:grid-cols-2 sm:p-8">
              {["First name", "Last name", "Work email", "Company"].map((label) => (
                <label key={label} className="text-sm text-slate-300">{label}<input className="mt-2 h-11 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 outline-none transition placeholder:text-slate-600 focus:border-cyan-400" required /></label>
              ))}
              <label className="text-sm text-slate-300 sm:col-span-2">How can we help?<textarea className="mt-2 min-h-28 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-3 outline-none transition focus:border-cyan-400" required /></label>
              <button type="submit" className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 sm:col-span-2">Send message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
