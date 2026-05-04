import { useState } from 'react'
import mockupBack     from '../assets/Images/3_31_2026_21_19_6_contentcore.xyz 1.png'
import mockupFront    from '../assets/Images/Android Compact - 10 1.png'
import mockupLaporan  from '../assets/Images/mockup-laporan-visual.png'
import mockupPengingat from '../assets/Images/mockup-pengingat-pintar.png'

const TABS = [
  {
    id: 'tab-budgeting',
    label: 'Anggaran Harian',
    tag: 'Unggulan',
    title: 'Penganggaran Harian Pintar',
    desc: 'Fitur yang membantu mengelola keuangan secara cerdas dan terkontrol. Secara otomatis mencatat, mengelompokkan, dan menganalisis pengeluaranmu.',
    bullets: ['Pencatatan otomatis per kategori', 'Batas anggaran harian & bulanan', 'Ringkasan pengeluaran instan'],
    imgBack: mockupBack,
    imgFront: mockupFront,
  },
  {
    id: 'tab-laporan',
    label: 'Laporan Visual',
    tag: 'Analitik',
    title: 'Laporan Keuangan Visual',
    desc: 'Lihat kondisi keuanganmu lewat grafik dan chart yang mudah dipahami. Bandingkan pengeluaran antar bulan dengan satu sentuhan.',
    bullets: ['Grafik pie & bar interaktif', 'Perbandingan pengeluaran bulanan', 'Ekspor laporan ke PDF'],
    imgBack: mockupLaporan,
    imgFront: null,
  },
  {
    id: 'tab-pengingat',
    label: 'Pengingat Pintar',
    tag: 'Notifikasi',
    title: 'Pengingat Anggaran Otomatis',
    desc: 'Jangan sampai kebablasan! BudJet akan mengingatkanmu saat anggaran hampir habis, sehingga kamu selalu dalam kendali.',
    bullets: ['Notifikasi saat 80% anggaran terpakai', 'Pengingat tagihan bulanan', 'Atur limit per kategori'],
    imgBack: mockupPengingat,
    imgFront: null,
  },
]

const FeaturesSection = () => {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section id="fitur" className="features">
      <h2 className="features__heading">Fitur Yang Membuat Kami Berbeda</h2>

      {/* Tab Navigation */}
      <div className="features__tabs">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            id={t.id}
            className={`features__tab-btn${active === i ? ' features__tab-btn--active' : ''}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Feature Card */}
      <div className="features__card" key={tab.id}>
        <div className="features__mockup">
          <img src={tab.imgBack} alt={tab.title} className="features__mockup-back" />
          {tab.imgFront && (
            <img src={tab.imgFront} alt={tab.title} className="features__mockup-front" />
          )}
        </div>

        <div className="features__content">
          <span className="features__tag">{tab.tag}</span>
          <h3 className="features__title">{tab.title}</h3>
          <p className="features__desc">{tab.desc}</p>
          <ul className="features__bullets">
            {tab.bullets.map((b, i) => (
              <li key={i} className="features__bullet"><span className="features__bullet-icon">✓</span>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
