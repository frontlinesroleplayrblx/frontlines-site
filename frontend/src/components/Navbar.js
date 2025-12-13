
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0d12]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-wide">
          FRONTLINES
        </Link>

        <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
          <Link to="/units" className="hover:text-white">Marketplace</Link>
          <a className="hover:text-white">Sell</a>
          <a className="hover:text-white">Docs</a>
        </div>

        <Link
          to="/login"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
