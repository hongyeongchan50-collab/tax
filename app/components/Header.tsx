'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { label: '회사 소개', href: '#about' },
  { label: '업무 분야', href: '#services' },
  { label: '성공 사례', href: '#proof' },
  { label: '세무 정보', href: '#info' },
  { label: '상담 신청', href: '#cta' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1B3E]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span
              className="text-xl font-black tracking-widest text-[#C9A84C]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              PREMIUM TAX
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[#8B96A8] uppercase mt-0.5">
              절세 & 세무회계 컨설팅
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.slice(0, -1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-[#B0BAC9] hover:text-[#C9A84C] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#cta"
              className="btn-gold px-5 py-2.5 text-sm font-bold tracking-wide rounded-sm"
            >
              무료 상담 신청
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-[#C9A84C] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#C9A84C]/20 py-4 bg-[#0D1B3E]/98">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-2 text-[#B0BAC9] hover:text-[#C9A84C] text-sm tracking-wide transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
