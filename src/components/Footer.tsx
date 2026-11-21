export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="text-lg font-semibold tracking-tight text-white">
              Supplier<span className="text-cyan-400">IQ</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              The AI operating system for modern supply chain teams.
            </p>
          </div>
          {[
            ["Product", [["Platform", "/platform"], ["Pricing", "/pricing"], ["Book a demo", "/book-demo"]]],
            ["Company", [["About", "/about"], ["Investors", "/investors"], ["Contact", "/contact"]]],
            ["Solutions", [["Sourcing AI", "/platform"], ["Compliance AI", "/platform"], ["Supply Chain AI", "/platform"]]],
          ].map(([title, links]) => (
            <div key={String(title)}>
              <h3 className="text-sm font-semibold text-white">{title as string}</h3>
              <div className="mt-4 space-y-3">
                {(links as string[][]).map(([label, href]) => (
                  <a key={label} href={href} className="block text-sm text-slate-400 transition hover:text-cyan-300">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} SupplierIQ. All rights reserved.</p>
          <p>Built for footwear, apparel, retail, and manufacturing.</p>
        </div>
      </div>
    </footer>
  );
}
