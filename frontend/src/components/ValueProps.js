export default function ValueProps() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 md:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-semibold">
            We Like To Keep It Fast And Easy
          </h2>
          <p className="mt-4 max-w-md text-zinc-400">
            Buying assets for Frontlines has never been easier. Browse, purchase,
            and start creating instantly.
          </p>

          <div className="mt-10 space-y-4">
            <div className="rounded-xl bg-blue-600 p-4">
              <div className="font-medium">High Accuracy</div>
              <div className="text-sm text-blue-100">
                Our algorithms ensure extremely precise results
              </div>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <div className="font-medium">Secure Payments</div>
              <div className="text-sm text-zinc-400">
                Fully encrypted and protected transactions
              </div>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <div className="font-medium">Easy Integrations</div>
              <div className="text-sm text-zinc-400">
                Plug assets straight into your workflow
              </div>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <div className="font-medium">Friendly Support</div>
              <div className="text-sm text-zinc-400">
                Real people, real help
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-900 p-4 shadow-2xl">
            <div className="aspect-video rounded-lg bg-zinc-800" />

            <div className="absolute -bottom-6 -left-6 rounded-xl bg-zinc-950 px-4 py-2 text-sm shadow-lg">
              $16.28
            </div>

            <div className="absolute -top-6 -right-6 rounded-xl bg-zinc-950 px-4 py-2 text-sm shadow-lg">
              $39.95
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
