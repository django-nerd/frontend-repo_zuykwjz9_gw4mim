import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-red-50 drop-shadow-[0_0_35px_rgba(220,38,38,0.35)]">
              STEROID SOUND
            </h1>
            <p className="mt-4 text-red-200/80 text-lg md:text-xl max-w-2xl">
              The most brutal, high-octane gym anthems forged in the abyss. Bleed reps. Break limits. Dominate the iron.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#playlists" className="inline-flex items-center justify-center rounded-md bg-red-600 hover:bg-red-700 text-white font-bold tracking-wider uppercase px-5 py-3 shadow-[0_0_25px_rgba(220,38,38,0.45)] transition">
                Enter the Pit
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-md border border-red-800/60 bg-black/40 hover:bg-black/60 text-red-200 font-semibold tracking-widest uppercase px-5 py-3">
                What is this?
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/95" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_50%_0%,rgba(220,38,38,0.25)_0%,rgba(0,0,0,0)_60%)]" />
    </section>
  );
}
