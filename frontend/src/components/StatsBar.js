export default function StatsBar() {
  return (
    <section className="relative z-10 mx-auto -mt-20 max-w-5xl px-6">
      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-zinc-900/90 p-6 backdrop-blur md:grid-cols-3">
        <div className="text-center">
          <div className="text-2xl font-semibold">$2,378,392</div>
          <div className="mt-1 text-xs text-zinc-400">Processed Sales</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-semibold">46,864</div>
          <div className="mt-1 text-xs text-zinc-400">Total Purchases</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-semibold">36,285</div>
          <div className="mt-1 text-xs text-zinc-400">Products Uploaded</div>
        </div>
      </div>
    </section>
  );
}
