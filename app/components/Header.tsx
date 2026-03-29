'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { label: '회사소개', href: '#problem' },
  { label: '서비스내용', href: '#solution' },
  { label: '상세 분야', href: '#service' },
  { label: 'Q&A', href: '#faq' },
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0]'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex flex-col items-center leading-none">
            <span className="text-2xl font-black tracking-widest text-[#C9A84C]">
              TAX STUDIO
            </span>
            <span className="text-sm tracking-tight text-[#475569] mt-0.5">
              세무 컨설팅
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm tracking-tight text-[#475569] hover:text-[#C9A84C] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="#cta" className="btn-gold px-5 py-2.5 text-sm font-bold rounded-lg">
              컨설팅 신청
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-[#475569] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#E2E8F0] py-3 bg-white">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-2 text-[#475569] hover:text-[#C9A84C] text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 pb-1 px-2">
              <a href="#cta" onClick={() => setMenuOpen(false)} className="btn-gold block w-full py-3 text-sm font-bold rounded-lg text-center">
                컨설팅 신청
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
