import fitur1 from '../assets/Images/fitur1.png'
import fitur2 from '../assets/Images/fitur2.png'
import fitur3 from '../assets/Images/fitur3.png'

const FeaturesSection = () => {
  return (
    <section id="fitur" className="features">
      <div className="features__header">
        <h2 className="features__heading">Fitur Yang Membuat Kami Berbeda</h2>
        <p className="features__subheading">Desain yang memikirkan Anda. Fungsionalitas yang bekerja untuk Anda.</p>
      </div>

      <div className="features__grid">
        {/* Row 1 */}
        <div className="features__row">
          <div className="features__image-col">
            <img src={fitur1} alt="Daily Smart Budgeting" />
          </div>
          <div className="features__text-col">
            <span className="features__tag">Otomatisasi</span>
            <h3 className="features__title">Daily Smart Budgeting</h3>
            <p className="features__desc">
              Fitur yang membantu mengelola keuangan secara cerdas dan terkontrol. BudJet secara otomatis mencatat, mengelompokkan, dan menganalisis pengeluaran Anda setiap hari tanpa kerumitan.
            </p>
            <ul className="features__bullets">
              <li className="features__bullet"><span className="features__check">✓</span> Kategorisasi otomatis berbasis AI.</li>
              <li className="features__bullet"><span className="features__check">✓</span> Peringatan limit pengeluaran harian.</li>
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="features__row features__row--reverse">
          <div className="features__image-col">
            <img src={fitur2} alt="Voice Input" />
          </div>
          <div className="features__text-col">
            <span className="features__tag">Inovasi</span>
            <h3 className="features__title">Voice Input</h3>
            <p className="features__desc">
              Capek nulis pengeluaran? Cukup ucapkan pengeluaranmu, otomatis masuk ke catatan. Teknologi pengenalan suara kami memahami konteks dan nominal dengan akurat.
            </p>
            <blockquote className="features__quote">
              "Beli kopi 45 ribu hari ini." — langsung tercatat di kategori Makanan & Minuman.
            </blockquote>
          </div>
        </div>

        {/* Row 3 */}
        <div className="features__row">
          <div className="features__image-col">
            <img src={fitur3} alt="Laporan Bulanan" />
          </div>
          <div className="features__text-col">
            <span className="features__tag">Analisis</span>
            <h3 className="features__title">Laporan Bulanan</h3>
            <p className="features__desc">
              Ingin lihat pengeluaranmu dalam bentuk Excel? Atau ingin membagikan pengeluaranmu ke orang-orang. Sekarang dengan satu klik, kamu bisa mengunduh pengeluaranmu.
            </p>
            <a href="#laporan" className="features__link">
              Lihat contoh laporan <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
