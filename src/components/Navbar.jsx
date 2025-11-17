import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-red-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-sm bg-gradient-to-br from-red-600 to-red-800 shadow-[0_0_20px_rgba(220,38,38,0.6)]"></div>
          <span className="text-red-50 font-extrabold tracking-[0.2em] text-sm sm:text-base uppercase">
            STEROID <span className="text-red-500">SOUND</span>
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-6">
          <a href="#playlists" className="text-red-200/80 hover:text-red-300 text-sm uppercase tracking-widest">Playlists</a>
          <a href="#about" className="text-red-200/80 hover:text-red-300 text-sm uppercase tracking-widest">About</a>
        </nav>
        <button className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-red-900/40 text-red-200/80">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
