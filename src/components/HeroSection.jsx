import phoneImg      from '../assets/Images/iPhone 13 Pro - Double Top.png'
import playstoreIcon  from '../assets/Icons/ri_google-play-fill.svg'
import logoInline     from '../assets/Icons/Group 2 2.svg'
import HeroWave       from './HeroWave'

const HeroSection = () => (
  <section id="beranda" className="hero">
    <HeroWave />
    <div className="hero__inner">

      {/* Kiri — Mockup HP */}
      <div className="hero__image-wrapper">
        <img src={phoneImg} alt="Tampilan aplikasi BudJet di iPhone" className="hero__image" />
        <div className="hero__image-shadow" />
      </div>

      {/* Kanan — Copy + CTA */}
      <div className="hero__content">

        {/* Badge baru */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Baru di Play Store
        </div>

        <h1 className="hero__headline">
          Kelola Lebih Cerdas,<br />Hidup Lebih Baik
        </h1>

        <p className="hero__subtext">
          Capai potensi pengelolaan keuangan dengan{' '}
          <img src={logoInline} alt="BudJet" style={{ display: 'inline-block', height: '1em', verticalAlign: 'middle', margin: '0 4px', transform: 'translateY(2px)' }} />
          , cara pintar mengelola uang bulananmu.
        </p>

        {/* Dual CTA */}
        <div className="hero__cta-group">
          <a
            href="https://play.google.com/store/apps/details?id=com.budjet.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta hero__cta--primary"
            id="hero-download-btn"
          >
            <img src={playstoreIcon} alt="" aria-hidden="true" />
            Unduh Sekarang
          </a>
          <a href="#fitur" className="hero__cta hero__cta--ghost" id="hero-features-btn">
            Lihat Fitur
          </a>
        </div>

        {/* Trust badges */}
        <div className="hero__trust">
          <span>⭐ 4.8 Rating</span>
          <span className="hero__trust-sep">·</span>
          <span>10.000+ Pengguna</span>
          <span className="hero__trust-sep">·</span>
          <span>Gratis Selamanya</span>
        </div>

      </div>
    </div>
  </section>
)

export default HeroSection
