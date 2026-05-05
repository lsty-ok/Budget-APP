import logoSvg from '../assets/Icons/Group 2 2-1.svg'

/**
 * Footer
 * Bottom section for copyright and links
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        
        {/* Kolom 1: Brand & Deskripsi */}
        <div className="footer__brand">
          <img src={logoSvg} alt="BudJet Logo" className="footer__logo" />
          <p>
            Capai potensi pengelolaan keuangan dengan cara pintar mengelola uang.
            Dirancang khusus untuk membantu Anda meraih kebebasan finansial tanpa batas.
          </p>
        </div>

        {/* Kolom 2: Tautan Cepat */}
        <div className="footer__links">
          <h4>Aplikasi</h4>
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a href="#fitur">Fitur</a>
          <a href="#ulasan">Ulasan</a>
        </div>

        {/* Kolom 3: Legalitas & Bantuan */}
        <div className="footer__links">
          <h4>Bantuan</h4>
          <a href="/kebijakan-privasi">Kebijakan Privasi</a>
          <a href="/syarat-ketentuan">Syarat Ketentuan</a>
          <a href="/faq">Tanya Jawab (FAQ)</a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {new Date().getFullYear()} Tim PDBL BudJet. All Rights Reserved.</p>
        <div className="footer__bottom-links">
          <a href="https://play.google.com/store/apps/details?id=com.budjet.app" target="_blank" rel="noopener noreferrer">Unduh di Play Store</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
