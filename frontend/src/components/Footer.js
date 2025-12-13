export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-14 text-sm text-zinc-400">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <span>© 2025 Frontlines</span>
        <div className="flex gap-6">
          <a className="hover:text-white">Terms</a>
          <a className="hover:text-white">Privacy</a>
          <a className="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
}