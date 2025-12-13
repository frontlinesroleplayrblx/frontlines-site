export default function FeaturedProduct() {
    return (
        <section className="mx-auto mt-20 max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                    <img src="/placeholder.jpg" className="h-72 w-full object-cover" />
                    <div className="p-6">
                        <p className="text-xs text-indigo-400">NEW PRODUCT</p>
                        <h3 className="mt-2 text-2xl font-semibold">Fully Scripted +1 Speed Simulator</h3>
                        <p className="mt-2 text-zinc-400">High quality Roblox system ready to deploy.</p>
                        <button className="mt-4 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium hover:bg-indigo-500">View Product</button>
                    </div>
                </div>


                <div className="space-y-4">
                    <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">Top Seller #1</div>
                    <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">Top Seller #2</div>
                    <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">Top Seller #3</div>
                </div>
            </div>
        </section>
    );
}