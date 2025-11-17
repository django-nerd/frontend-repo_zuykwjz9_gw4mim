const data = [
  {
    title: 'Demon Pump Vol. I',
    desc: 'Blackened trap, industrial metal, and relentless 808s to fuel your PRs.',
    color: 'from-red-700 to-red-900',
    tracks: 45
  },
  {
    title: 'Blood & Steel',
    desc: 'War drums, nu-metal, hard techno. For sets that don’t end.',
    color: 'from-rose-700 to-red-800',
    tracks: 52
  },
  {
    title: 'HELLMODE',
    desc: 'Peak aggression: DnB x metalcore x synthetic rage.',
    color: 'from-red-800 to-black',
    tracks: 39
  }
];

function Card({ item }) {
  return (
    <div className="group relative rounded-xl border border-red-900/40 bg-gradient-to-br p-6 transition hover:scale-[1.01] hover:border-red-700/60 hover:shadow-[0_0_35px_rgba(220,38,38,0.25)] " style={{
      boxShadow: 'inset 0 0 40px rgba(220,38,38,0.08)'
    }}>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br ${item.color}`} />
      <div className="relative">
        <h3 className="text-xl font-extrabold tracking-wider text-red-100 uppercase">{item.title}</h3>
        <p className="mt-2 text-sm text-red-200/80">{item.desc}</p>
        <div className="mt-4 text-xs uppercase tracking-widest text-red-300/70">{item.tracks} tracks</div>
        <a href="#" className="mt-6 inline-flex items-center justify-center rounded-md border border-red-800/60 bg-black/40 hover:bg-black/60 text-red-200 font-semibold tracking-widest uppercase px-4 py-2">Play</a>
      </div>
    </div>
  );
}

export default function Playlists() {
  return (
    <section id="playlists" className="relative py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-50 tracking-tight">Ritual Playlists</h2>
          <p className="text-red-200/70 text-sm max-w-sm">Curated to keep you in berserker mode. No fillers. Only fury.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((d) => (
            <Card key={d.title} item={d} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_40%_at_50%_0%,rgba(220,38,38,0.12)_0%,rgba(0,0,0,0)_60%)]" />
    </section>
  );
}
