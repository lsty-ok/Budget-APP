import { useState, useEffect } from 'react'

// ── Assets ──────────────────────────────────────────────────
import logoSvg from '../assets/Icons/Group 2 2-1.svg'

/**
 * Navbar
 * Sticky pill-shaped navigation bar with mobile hamburger toggle.
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#beranda')

  const links = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang',  href: '#tentang'  },
    { label: 'Fitur',    href: '#fitur'    },
    { label: 'Ulasan',   href: '#ulasan'   },
  ]

  // Update active state based on scroll position (Scrollspy)
  useEffect(() => {
    const handleScroll = () => {
      let currentActive = links[0].href
      // Reverse iterate to find the active section
      for (let i = links.length - 1; i >= 0; i--) {
        const { href } = links[i]
        const sectionId = href.substring(1)
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          // Check if top of section is above the middle of the viewport
          if (rect.top <= window.innerHeight / 2) {
            currentActive = href
            break
          }
        }
      }
      setActiveLink(currentActive)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // trigger sekali di awal

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <nav className="navbar" aria-label="Navigasi utama">
      <div className="navbar__inner">
        {/* Logo */}
        <a 
          href="#beranda" 
          aria-label="BudJet — kembali ke atas"
          onClick={() => setActiveLink('#beranda')}
        >
          <img
            src={logoSvg}
            alt="BudJet logo"
            className="navbar__logo"
          />
        </a>

        {/* Desktop links */}
        <ul
          className={`navbar__links ${menuOpen ? 'open' : ''}`}
          role="list"
        >
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={activeLink === href ? 'active' : ''}
                onClick={() => {
                  setActiveLink(href)
                  setMenuOpen(false)
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="navbar__toggle"
          aria-label="Buka menu navigasi"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
