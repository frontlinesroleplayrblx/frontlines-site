export default function StatsBar() {
    return (
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur">
            <div className="grid grid-cols-1 gap-8 px-8 py-6 text-center md:grid-cols-3">
                <div>
                    <p className="text-2xl font-semibold">$2,378,392</p>
                    <p className="mt-1 text-sm text-zinc-400">Processed Sales</p>
                </div>
                <div>
                    <p className="text-2xl font-semibold">46,864</p>
                    <p className="mt-1 text-sm text-zinc-400">Total Purchases</p>
                </div>
                <div>
                    <p className="text-2xl font-semibold">36,285</p>
                    <p className="mt-1 text-sm text-zinc-400">Products Uploaded</p>
                </div>
            </div>
        </div>
    );
}