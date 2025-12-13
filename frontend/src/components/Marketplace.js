const items = Array.from({ length: 6 });

export default function Marketplace() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Featured Assets</h2>
        <a className="text-sm text-indigo-400 hover:text-indigo-300">View all</a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((_, i) => (
          <div
            key={i}
            className="group rounded-xl border border-white/5 bg-[#11131a] p-4 transition hover:border-white/10"
          >
            <div className="mb-4 h-40 rounded-lg bg-[#1a1d26]" />

            <h3 className="font-medium text-zinc-100 group-hover:text-white">
              Asset Title
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              High-quality Roblox system
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold">$15</span>
              <button className="rounded-md bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}