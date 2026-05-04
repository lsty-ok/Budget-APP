import { useState, useEffect, useRef } from 'react'

const STATS = [
  { id: 'stat-users',    value: 10000, suffix: '+', label: 'Pengguna Aktif',     symbol: '👥' },
  { id: 'stat-rating',   value: 4.8,   suffix: '★', label: 'Rating Play Store',  symbol: '⭐', isFloat: true },
  { id: 'stat-rank',     value: 1,     suffix: '',  label: 'Aplikasi Keuangan\nMahasiswa', symbol: '#' },
  { id: 'stat-free',     value: 100,   suffix: '%', label: 'Gratis Selamanya',   symbol: '🎁' },
]

const useCountUp = (target, duration = 1800, isFloat = false, start = false) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(isFloat ? parseFloat((eased * target).toFixed(1)) : Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration, isFloat])
  return count
}

const StatCard = ({ id, value, suffix, label, symbol, isFloat = false, visible }) => {
  const count = useCountUp(value, 1800, isFloat, visible)
  return (
    <div className="stat-card" id={id}>
      <div className="stat-card__symbol">{symbol}</div>
      <div className="stat-card__number">
        {isFloat ? count.toFixed(1) : count.toLocaleString('id-ID')}{suffix}
      </div>
      <div className="stat-card__label">{label}</div>
    </div>
  )
}

const StatsSection = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={ref}>
      <div className="stats__inner">
        {STATS.map((s) => <StatCard key={s.id} {...s} visible={visible} />)}
      </div>
    </section>
  )
}

export default StatsSection
