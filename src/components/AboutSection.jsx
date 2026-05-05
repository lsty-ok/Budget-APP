import logoSvg from '../assets/Icons/Group 2 2-1.svg'

import { Target, BarChart2, Bell } from 'lucide-react'

const VALUE_PROPS = [
  {
    id: 'vp-kontrol',
    icon: <Target size={28} color="#d4e866" />,
    title: 'Kontrol Penuh',
    desc: 'Pantau setiap pengeluaran secara real-time, kapan saja dan di mana saja.',
  },
  {
    id: 'vp-analisis',
    icon: <BarChart2 size={28} color="#d4e866" />,
    title: 'Analisis Cerdas',
    desc: 'Laporan visual mingguan dan bulanan yang mudah dipahami sekilas.',
  },
  {
    id: 'vp-notif',
    icon: <Bell size={28} color="#d4e866" />,
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
          Atur keuangan bulananmu agar terhindar dari <em>pengeluaran berlebihan</em> dan <em>tidak terencana</em> dengan aplikasi kami.
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
