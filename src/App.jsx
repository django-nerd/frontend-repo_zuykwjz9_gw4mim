import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Playlists from './components/Playlists';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Playlists />
        <section id="about" className="relative py-24 bg-gradient-to-b from-black via-black to-red-950/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-red-50 tracking-tight">About</h2>
            <p className="mt-6 max-w-3xl text-red-200/80 leading-relaxed">
              Steroid Sound is your domain for brutal workout soundtracks. We blend industrial, metal, hard techno, and dark electronica to keep you locked in and unbreakable. Designed for lifters who crave intensity and precision.
            </p>
          </div>
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_35%_at_50%_0%,rgba(127,29,29,0.15)_0%,rgba(0,0,0,0)_60%)]" />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
