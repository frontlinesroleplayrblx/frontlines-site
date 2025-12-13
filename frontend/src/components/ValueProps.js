export default function ValueProps() {
    return (
        <section className="mx-auto mt-28 max-w-7xl px-6">
            <h2 className="text-3xl font-semibold">We Like To Keep It Fast And Easy</h2>
            <p className="mt-2 max-w-xl text-zinc-400">Frontlines gives Roblox developers everything they need to buy, sell, and scale.</p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-indigo-600 p-5">High Accuracy</div>
                <div className="rounded-xl border border-white/10 bg-zinc-900 p-5">Secure Payments</div>
                <div className="rounded-xl border border-white/10 bg-zinc-900 p-5">Easy Integrations</div>
                <div className="rounded-xl border border-white/10 bg-zinc-900 p-5">Friendly Support</div>
            </div>
        </section>
    );
}