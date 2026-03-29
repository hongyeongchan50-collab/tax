'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const guarantees = [
  {
    icon: '🔒',
    title: '완전한 비밀 보장',
    desc: '상담 내용은 절대 외부에 공개되지 않습니다.',
  },
  {
    icon: '⚡',
    title: '24시간 내 응답',
    desc: '신청 후 영업일 기준 24시간 이내에 전문가가 연락드립니다.',
  },
  {
    icon: '🎯',
    title: '맞춤 절세 진단',
    desc: '무료 초기 상담으로 예상 절세액을 산출해 드립니다.',
  },
];

const businessTypes = [
  '개인사업자',
  '법인사업자',
  '의료업 (의원·병원)',
  '부동산 임대',
  '프리랜서·고소득자',
  '스타트업·벤처',
  '기타',
];

export default function CTASection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    businessType: '',
    message: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-28 bg-[#0D1B3E] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(201,168,76,0.05),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <AnimatedSection animation="fade-up">
              <p className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase font-medium mb-4">
                무료 상담 신청
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                지금 바로
                <br />
                <span className="text-gold-gradient">1분 만에</span>
                <br />
                절세 진단 받기
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-[#8B96A8] text-base leading-relaxed mb-10">
                대표님이 작년에 납부한 세금, 과연 최선이었을까요?
                전문가가 직접 분석해 드리는 무료 세무 진단을 통해
                숨겨진 절세 기회를 발견하세요.
              </p>

              {/* Guarantees */}
              <div className="flex flex-col gap-5">
                {guarantees.map((g) => (
                  <div key={g.title} className="flex items-start gap-4">
                    <span className="text-xl mt-0.5">{g.icon}</span>
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">{g.title}</div>
                      <div className="text-[#8B96A8] text-xs">{g.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tel */}
              <div className="mt-10 pt-8 border-t border-[#C9A84C]/15">
                <p className="text-xs text-[#8B96A8] mb-2">전화 상담</p>
                <a
                  href="tel:02-0000-0000"
                  className="text-2xl font-black text-[#C9A84C] tracking-wide"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  02-0000-0000
                </a>
                <p className="text-xs text-[#8B96A8] mt-1">평일 09:00 – 18:00</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-[#1B2A4A] rounded-sm p-8 border border-[#C9A84C]/15">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                    신청이 완료되었습니다
                  </h3>
                  <p className="text-[#8B96A8] text-sm">
                    영업일 기준 24시간 이내에<br />전문가가 직접 연락드리겠습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs text-[#8B96A8] mb-2 tracking-wide">
                      성함 <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="홍길동"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-premium w-full px-4 py-3 rounded-sm text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#8B96A8] mb-2 tracking-wide">
                      연락처 <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-premium w-full px-4 py-3 rounded-sm text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#8B96A8] mb-2 tracking-wide">
                      사업 형태 <span className="text-[#C9A84C]">*</span>
                    </label>
                    <select
                      required
                      value={form.businessType}
                      onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                      className="input-premium w-full px-4 py-3 rounded-sm text-sm appearance-none"
                    >
                      <option value="" disabled>선택해 주세요</option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#1B2A4A]">{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-[#8B96A8] mb-2 tracking-wide">
                      문의 내용
                    </label>
                    <textarea
                      rows={4}
                      placeholder="상담 받고 싶은 내용을 간략히 적어주세요."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="input-premium w-full px-4 py-3 rounded-sm text-sm resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agree"
                      required
                      checked={form.agree}
                      onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                      className="mt-0.5 accent-[#C9A84C]"
                    />
                    <label htmlFor="agree" className="text-xs text-[#8B96A8] leading-relaxed cursor-pointer">
                      개인정보 수집·이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며
                      제3자에게 제공되지 않습니다.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full py-4 text-base font-black tracking-wide rounded-sm mt-2"
                  >
                    무료 절세 진단 신청하기 →
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
