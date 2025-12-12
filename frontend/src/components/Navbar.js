export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold tracking-tight">ClearlyDev</div>
        <div className="hidden gap-8 text-sm md:flex">
          <a className="hover:text-white">Marketplace</a>
          <a className="hover:text-white">Sell</a>
          <a className="hover:text-white">Docs</a>
        </div>
        <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200">
          Sign In
        </button>
      </div>
    </nav>
  );
}