import './style.css'

import Navbar          from './components/Navbar'
import HeroSection     from './components/HeroSection'
import AboutSection    from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import ReviewSection   from './components/ReviewSection'
import Footer          from './components/Footer'
import Reveal          from './components/Reveal'

/**
 * App — Root component v2
 *
 * Urutan section:
 *   1. HeroSection     — #beranda   (white + particle bg)
 *   2. StatsSection    — stats      (white, animated counters)  [NEW]
 *   3. AboutSection    — #tentang   (white, value props cards)
 *   4. FeaturesSection — #fitur     (dark bg, tabs)
 *   5. ReviewSection   — #ulasan    (lime bg, infinite scroll)
 *   6. DownloadSection — #download  (dark gradient, CTA)       [NEW]
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Reveal><AboutSection /></Reveal>
        <Reveal><FeaturesSection /></Reveal>
        <Reveal><ReviewSection /></Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App
