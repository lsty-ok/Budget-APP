import { useState, useEffect } from 'react'
import logoSvg from '../assets/Icons/Group 2 2-1.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#beranda')
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { label: 'Beranda',  href: '#beranda'  },
    { label: 'Tentang',  href: '#tentang'  },
    { label: 'Fitur',    href: '#fitur'    },
    { label: 'Ulasan',   href: '#ulasan'   },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      for (const { href } of links) {
        const el = document.getElementById(href.substring(1))
        if (el) {
          const rect = el.getBoundingClientRect()
          // Cek jika elemen berada di pertengahan viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveLink(href)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="navbar" aria-label="Navigasi utama">
      <div className={`navbar__inner${scrolled ? ' navbar__inner--scrolled' : ''}`}>
        {/* Logo */}
        <div className="navbar__brand-container">
          <a href="#beranda" aria-label="BudJet — kembali ke atas" onClick={() => setActiveLink('#beranda')}>
            <img src={logoSvg} alt="BudJet logo" className="navbar__logo" />
          </a>
        </div>

        {/* Nav Links */}
        <ul className={`navbar__links${menuOpen ? ' open' : ''}`} role="list">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={activeLink === href ? 'active' : ''}
                onClick={() => { setActiveLink(href); setMenuOpen(false) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side — auth buttons */}
        <div className="navbar__actions">
          <a href="#download" className="navbar__btn-masuk" id="navbar-masuk-btn">Masuk</a>
          <a
            href="https://play.google.com/store/apps/details?id=com.budjet.app"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__btn-daftar"
            id="navbar-daftar-btn"
          >
            Daftar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`navbar__toggle${menuOpen ? ' navbar__toggle--open' : ''}`}
          aria-label="Buka menu navigasi"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(p => !p)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && <div className="navbar__backdrop" onClick={() => setMenuOpen(false)} />}
    </nav>
  )
}

export default Navbar
