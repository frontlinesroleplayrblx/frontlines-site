import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 text-center">
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          The Developer Marketplace
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Buy and sell premium Roblox assets, systems, and UI kits — built by real developers.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            to="/units"
            className="rounded-lg bg-indigo-600 px-7 py-3 font-medium text-white hover:bg-indigo-500"
          >
            Browse Marketplace
          </Link>

          <button className="rounded-lg border border-white/10 px-7 py-3 font-medium text-zinc-200 hover:bg-white/5">
            Start Selling
          </button>
        </div>
      </div>
    </section>
  );
}
