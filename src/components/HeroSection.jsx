import phoneImg      from '../assets/Images/iPhone 13 Pro - Double Top.png'
import playstoreIcon  from '../assets/Icons/ri_google-play-fill.svg'
import logoInline     from '../assets/Icons/Bud_et.svg'

const HeroSection = () => (
  <section id="beranda" className="hero">
    <div className="hero__inner">

      {/* Mockup HP (Kiri) */}
      <div className="hero__image-wrapper">
        <div className="hero__image-glow" />
        <img src={phoneImg} alt="Tampilan aplikasi BudJet di iPhone" className="hero__image" />
        <div className="hero__image-shadow" />
      </div>

      {/* Copy + CTA (Kanan) */}
      <div className="hero__content">
        <h1 className="hero__headline">
          Kelola Lebih Cerdas,<br />Hidup Lebih Baik
        </h1>

        <p className="hero__subtext">
          Capai potensi pengelolaan keuangan dengan cara yang elegan.<br />
          <img src={logoInline} alt="BudJet" style={{ display: 'inline-block', height: '1em', verticalAlign: 'middle', margin: '0 4px', transform: 'translateY(2px)' }} /> membantu Anda mengelola uang tanpa stres.
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
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>

    </div>
  </section>
)

export default HeroSection
