export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-28 text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          The Roblox Developer Marketplace
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
          Buy and sell high-quality assets, systems, and UI kits built by real developers.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-indigo-600 px-6 py-3 font-medium hover:bg-indigo-500">
            Browse Marketplace
          </button>
          <button className="rounded-xl border border-zinc-700 px-6 py-3 font-medium hover:bg-zinc-900">
            Start Selling
          </button>
        </div>
      </div>
    </section>
  );
}
