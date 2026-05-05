// ── Assets ──────────────────────────────────────────────────
import phoneImg        from '../assets/Images/iPhone 13 Pro - Double Top.png'
import playstoreIcon   from '../assets/Icons/ri_google-play-fill.svg'
import logoInline      from '../assets/Icons/Group 2 2.svg'
import HeroWave        from './HeroWave'

/**
 * HeroSection (Section 1 — Beranda)
 * Full-height hero with headline, subtext, CTA button, and floating phone mockup.
 */
const HeroSection = () => {
  return (
    <section id="beranda" className="hero">
      <HeroWave />
      <div className="hero__inner">

        {/* Left — Phone mockup */}
        <div className="hero__image-wrapper">
          <img
            src={phoneImg}
            alt="Tampilan aplikasi BudJet di iPhone"
            className="hero__image"
          />
          <div className="hero__image-shadow"></div>
        </div>

        {/* Right — Copy + CTA */}
        <div className="hero__content">
          <h1 className="hero__headline">
            Kelola lebih cerdas,<br />hidup lebih baik
          </h1>

          <p className="hero__subtext">
            Capai potensi pengelolaan keuangan dengan{' '}
            <img src={logoInline} alt="BudJet" style={{ display: 'inline-block', height: '1em', verticalAlign: 'middle', margin: '0 4px', transform: 'translateY(2px)' }} />
            , cara pintar mengelola uang
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.budjet.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta"
            id="hero-try-now-btn"
          >
            <img src={playstoreIcon} alt="Google Play Store" aria-hidden="true" />
            Coba Sekarang
          </a>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
