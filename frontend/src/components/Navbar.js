import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-semibold">
          FRONTLINES
        </Link>

        <div className="hidden gap-8 text-sm md:flex">
          <Link to="/units" className="hover:text-white">Marketplace</Link>
          <a className="hover:text-white">Sell</a>
          <a className="hover:text-white">Docs</a>
        </div>

        <Link
          to="/login"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200"
        >
          Log In
        </Link>
      </div>
    </nav>
  );
}
