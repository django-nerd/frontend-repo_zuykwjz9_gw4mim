export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-red-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs tracking-widest uppercase text-red-300/70">© {new Date().getFullYear()} Steroid Sound. Forged in darkness.</p>
        <div className="text-xs text-red-300/60">
          Built for hardcore gym warriors.
        </div>
      </div>
    </footer>
  )
}
