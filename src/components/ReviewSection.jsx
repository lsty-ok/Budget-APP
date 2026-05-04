const AVATAR_COLORS = ['#4f46e5','#0ea5e9','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899','#14b8a6']

const TESTIMONIALS = [
  { id: 'review-1', name: 'Om Amar',      role: 'Mahasiswa, PENS',    quote: 'Bagus banget jadi bisa beli rumah gara-gara ini!', rating: 5 },
  { id: 'review-2', name: 'Abah Farki',   role: 'Mahasiswa, UNSOED',  quote: 'Pengeluaran jadi lebih terkontrol tiap bulannya.',  rating: 5 },
  { id: 'review-3', name: 'Resty Eonni',  role: 'Mahasiswa, PENS',    quote: 'Aplikasinya simpel tapi powerful banget buat budgeting.', rating: 5 },
  { id: 'review-4', name: 'Koko Abdul',   role: 'Mahasiswa, UNAIR',   quote: 'Nggak takut lagi kehabisan uang di akhir bulan.',   rating: 5 },
  { id: 'review-5', name: 'Dinda Putri',  role: 'Mahasiswi, UGM',     quote: 'Fitur laporan visualnya bikin paham kondisi keuangan.',rating: 5 },
  { id: 'review-6', name: 'Budi Santoso', role: 'Mahasiswa, ITB',     quote: 'Pengingat budget-nya sangat membantu, wajib install!', rating: 4 },
  { id: 'review-7', name: 'Sari Dewi',    role: 'Mahasiswi, UNDIP',   quote: 'Tampilannya keren dan mudah dipahami. Recommended!',  rating: 5 },
  { id: 'review-8', name: 'Rizal Hakim',  role: 'Mahasiswa, UI',      quote: 'Akhirnya bisa nabung tiap bulan berkat BudJet.',     rating: 4 },
]

const Stars = ({ count }) => (
  <div className="review-card__stars" aria-label={`${count} bintang`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`review-star${i < count ? ' review-star--filled' : ''}`}>★</span>
    ))}
  </div>
)

const Avatar = ({ name, index }) => {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('')
  return (
    <div className="review-card__avatar" style={{ backgroundColor: AVATAR_COLORS[index % AVATAR_COLORS.length] }}>
      <span className="review-card__initials">{initials}</span>
    </div>
  )
}

const ReviewCard = ({ id, name, role, quote, rating, index }) => (
  <article className="review-card" id={id}>
    <Stars count={rating} />
    <p className="review-card__quote">"{quote}"</p>
    <hr className="review-card__divider" />
    <div className="review-card__user">
      <Avatar name={name} index={index} />
      <div className="review-card__info">
        <span className="review-card__name">{name}</span>
        <span className="review-card__role">{role} · <span className="review-card__verified">✓ Terverifikasi</span></span>
      </div>
    </div>
  </article>
)

import { useState, useRef } from 'react';

const DraggableTrack = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef(0);
  const startOffset = useRef(0);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    startY.current = e.pageY || (e.touches && e.touches[0].pageY);
    startOffset.current = offset;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const currentY = e.pageY || (e.touches && e.touches[0].pageY);
    const deltaY = currentY - startY.current;
    setOffset(startOffset.current + deltaY);
  };

  const handlePointerUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className={`review-track ${isDragging ? 'is-dragging' : ''}`}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUpOrLeave}
      onMouseLeave={handlePointerUpOrLeave}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUpOrLeave}
      onTouchCancel={handlePointerUpOrLeave}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div 
        className="review-drag-wrapper" 
        style={{ transform: `translateY(${offset}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

const ReviewSection = () => {
  const leftCol  = TESTIMONIALS.filter((_, i) => i % 2 === 0)
  const rightCol = TESTIMONIALS.filter((_, i) => i % 2 !== 0)
  return (
    <section id="ulasan" className="reviews">
      <div className="reviews__inner">
        <div className="reviews__left">
          <h2 className="reviews__heading">Apa Kata Mereka?</h2>
          <p className="reviews__subtext">
            Jangan hanya percaya kata kami. Lihat apa yang dikatakan oleh para pengguna BudJet.
          </p>
        </div>
        <div className="reviews__grid">
          <DraggableTrack>
            <div className="review-col review-col--down">
              {[...leftCol, ...leftCol, ...leftCol, ...leftCol].map((t, idx) => (
                <ReviewCard key={`left-${t.id}-${idx}`} {...t} index={TESTIMONIALS.indexOf(t)} />
              ))}
            </div>
          </DraggableTrack>
          <DraggableTrack>
            <div className="review-col review-col--up">
              {[...rightCol, ...rightCol, ...rightCol, ...rightCol].map((t, idx) => (
                <ReviewCard key={`right-${t.id}-${idx}`} {...t} index={TESTIMONIALS.indexOf(t)} />
              ))}
            </div>
          </DraggableTrack>
        </div>
      </div>
    </section>
  )
}

export default ReviewSection
