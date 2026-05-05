// ── Assets ──────────────────────────────────────────────────
import badgeSvg from '../assets/Icons/Group 2 2-1.svg'

/**
 * AboutSection (Section 2 — Tentang)
 * Card with the BudJet branding, title, and brief description.
 * Sits between the hero and the dark features section.
 */
const AboutSection = () => {
  return (
    <section id="tentang" className="about">
      <div className="about__card">

        {/* Left — Brand badge + title */}
        <div className="about__left">
          <img
            src={badgeSvg}
            alt="BudJet brand badge"
            className="about__badge"
          />
          <h2 className="about__title">
            Solusi Keuangan Bulanan<br />Mahasiswa
          </h2>
        </div>

        {/* Right — Description */}
        <div className="about__right">
          <p>
            Atur keuangan bulananmu agar terhindar dari{' '}
            <em>pengeluaran berlebihan</em> dan{' '}
            <em>tidak terencana</em> dengan aplikasi kami.
          </p>
        </div>

      </div>
    </section>
  )
}

export default AboutSection
