
const items = Array.from({ length: 6 });

export default function Marketplace() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-8 text-2xl font-semibold">Featured Assets</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 hover:border-zinc-700"
          >
            <div className="mb-4 h-40 rounded-xl bg-zinc-800" />
            <h3 className="font-medium">Asset Title</h3>
            <p className="mt-1 text-sm text-zinc-400">High quality Roblox system</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold">$15</span>
              <button className="rounded-lg bg-zinc-800 px-3 py-1 text-sm hover:bg-zinc-700">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}