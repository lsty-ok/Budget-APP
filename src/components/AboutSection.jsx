import logoSvg from '../assets/Icons/Group 2 2-1.svg'

const VALUE_PROPS = [
  {
    id: 'vp-kontrol',
    icon: '🎯',
    title: 'Kontrol Penuh',
    desc: 'Pantau setiap pengeluaran secara real-time, kapan saja dan di mana saja.',
  },
  {
    id: 'vp-analisis',
    icon: '📊',
    title: 'Analisis Cerdas',
    desc: 'Laporan visual mingguan dan bulanan yang mudah dipahami sekilas.',
  },
  {
    id: 'vp-notif',
    icon: '🔔',
    title: 'Pengingat Anggaran',
    desc: 'Notifikasi otomatis saat pengeluaranmu mendekati batas yang ditentukan.',
  },
]

const AboutSection = () => (
  <section id="tentang" className="about">
    <div className="about__card">
      <div className="about__left">
        <img src={logoSvg} alt="BudJet brand badge" className="about__badge" />
        <h2 className="about__title">
          Solusi Keuangan Bulanan<br />Mahasiswa
        </h2>
        <p className="about__subtitle">
          Atur keuangan bulananmu agar terhindar dari <em>overspending</em> dan pengeluaran yang tidak terkontrol.
        </p>
      </div>

      <div className="about__right">
        {VALUE_PROPS.map(({ id, icon, title, desc }) => (
          <div key={id} className="about__vp-card" id={id}>
            <div className="about__vp-icon">{icon}</div>
            <div className="about__vp-text">
              <h3 className="about__vp-title">{title}</h3>
              <p className="about__vp-desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default AboutSection
