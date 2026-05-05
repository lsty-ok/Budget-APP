import playstoreIcon from '../assets/Icons/ri_google-play-fill.svg'

const DownloadSection = () => (
  <section id="download" className="download">
    <div className="download__inner">
      <div className="download__content">
        <span className="download__badge">🚀 Tersedia Gratis</span>
        <h2 className="download__title">Mulai Perjalanan Finansialmu<br />Hari Ini</h2>
        <p className="download__sub">Gratis. Tanpa kartu kredit. Langsung pakai.</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.budjet.app"
          target="_blank"
          rel="noopener noreferrer"
          className="download__cta"
          id="download-cta-btn"
        >
          <img src={playstoreIcon} alt="Google Play Store" aria-hidden="true" />
          Unduh di Play Store
        </a>
        <div className="download__trust">
          <span>⭐ 4.8 Rating</span>
          <span className="download__trust-sep">·</span>
          <span>10.000+ Pengguna</span>
          <span className="download__trust-sep">·</span>
          <span>100% Gratis</span>
        </div>
      </div>
      <div className="download__glow" aria-hidden="true" />
    </div>
  </section>
)

export default DownloadSection
