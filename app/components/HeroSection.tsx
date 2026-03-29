import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const stats = [
  { value: '절세 효과', label: '상황에 따라 다름', sublabel: '경비 처리 정리에 따라 차이 발생' },
  { value: '5분', label: '상담 시작까지', sublabel: '가입 없이 바로 가능' },
  { value: '100%', label: '비밀 보장', sublabel: '상담 내용 외부 공유 없음' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center overflow-hidden relative pt-16"
      style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #DBEAFE 40%, #EFF6FF 70%, #F0F9FF 100%)' }}
    >
      {/* 배경 장식: 십자 패턴 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 우측 상단 십자 패턴 */}
        {[...Array(6)].map((_, i) => (
          <div key={`h${i}`}>
            {[...Array(6)].map((_, j) => (
              <div
                key={`${i}-${j}`}
                className="absolute"
                style={{
                  right: `${6 + j * 4}%`,
                  top: `${10 + i * 12}%`,
                  width: '16px',
                  height: '16px',
                  opacity: 0.15,
                }}
              >
                <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-[#1E40AF]" />
                <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-[#1E40AF]" />
              </div>
            ))}
          </div>
        ))}
        {/* 좌측 하단 소프트 글로우 */}
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #BFDBFE, transparent 70%)' }}
        />
        {/* 우측 중앙 글로우 */}
        <div
          className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, #C9A84C22, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">

          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 py-12 lg:py-16">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 border border-[#C9A84C]/50 bg-[#C9A84C]/10 px-4 py-1.5 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                <span className="text-xs tracking-[0.15em] text-[#92681A] uppercase font-semibold">
                  지금 신고 기한이 다가오고 있습니다
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight tracking-tight mb-6">
                프리랜서·개인사업자 세금,
                <br />
                <span className="text-gold-gradient">헷갈리지 않게</span>
                <br />
                기준부터 정리해드립니다
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-lg text-[#334155] leading-relaxed mb-8 max-w-lg">
                <span className="font-semibold text-[#0F172A]">&ldquo;내가 맞게 신고하고 있는 걸까?&rdquo;</span> 더 이상 불안해하지 마세요.
                <br />
                무심코 놓친 경비 하나가 세금 폭탄이 되지 않도록,
                <br />
                지금 내 상황에 맞는 절세 기준을{' '}
                <span className="font-semibold text-[#0F172A]">간단한 상담으로 바로 확인</span>해 드립니다.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  href="#cta"
                  className="btn-gold px-8 py-4 text-base font-black rounded-lg text-center tracking-tight"
                >
                  내 세금 지금 바로 확인하기 →
                </a>
              </div>
              <p className="text-xs text-[#94A3B8] pl-1">
                가입 없음 · 스팸 없음 · 부담 없음 · 5분이면 충분합니다
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="border-t border-[#CBD5E1] pt-8 mt-10">
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl md:text-2xl font-black text-[#C9A84C] mb-0.5 tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[#1E293B] leading-tight font-semibold">{stat.label}</div>
                      <div className="text-[10px] text-[#64748B] mt-0.5">{stat.sublabel}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Expert Image — 배경에 완전히 통합 */}
          <AnimatedSection
            delay={0.2}
            className="order-1 lg:order-2 relative hidden lg:flex items-end self-stretch justify-center"
          >
            {/* 인물 뒤 부드러운 원형 빛 효과 */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-5/6 rounded-full opacity-60 blur-2xl"
              style={{ background: 'radial-gradient(ellipse at center bottom, #BFDBFE 0%, transparent 65%)' }}
            />
            {/* 인물 이미지 */}
            <div className="relative w-full flex items-end justify-center" style={{ minHeight: '540px' }}>
              <Image
                src="/expert.png"
                alt="세무 전문가"
                width={500}
                height={700}
                className="object-contain object-bottom drop-shadow-xl"
                style={{ maxHeight: '82vh', width: 'auto', transform: 'translateY(-60px)' }}
                priority
              />
              {/* 하단 페이드로 배경과 자연스럽게 블렌딩 */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #EFF6FF 0%, transparent 100%)' }}
              />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
