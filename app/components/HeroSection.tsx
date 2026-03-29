import AnimatedSection from './AnimatedSection';

const stats = [
  { value: '1,200억+', label: '누적 절세액', sublabel: '(예시 데이터)' },
  { value: '9,200개+', label: '고객사 누적', sublabel: '(예시 데이터)' },
  { value: '70%+', label: '평균 절세율', sublabel: '(예시 데이터)' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D1B3E]"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.08),transparent)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1B3E] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center gap-2 border border-[#C9A84C]/30 px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-xs tracking-[0.2em] text-[#C9A84C] uppercase font-medium">
                세무공무원 출신 베테랑 전문가
              </span>
            </div>
          </AnimatedSection>

          {/* Main Headline */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              대표님의 소중한 자산,
              <br />
              <span className="text-gold-gradient">법률의 테두리</span> 안에서
              <br />
              완벽하게 수호합니다
            </h1>
          </AnimatedSection>

          {/* Sub copy */}
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-[#8B96A8] leading-relaxed mb-10 max-w-2xl">
              작년에 납부한 세금, 과연 최선이었을까요?
              <br />
              전문가의 눈으로 놓친 절세 혜택을 찾아드립니다.
              <br className="hidden md:block" />
              <span className="text-[#B0BAC9]">
                AI 데이터 기반 분석으로 당신이 모르는 절세 구조를 설계합니다.
              </span>
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <a
                href="#cta"
                className="btn-gold px-8 py-4 text-base font-bold tracking-wide rounded-sm text-center"
              >
                지금 바로 무료 상담 신청 →
              </a>
              <a
                href="#services"
                className="btn-outline-gold px-8 py-4 text-base font-semibold tracking-wide rounded-sm text-center"
              >
                서비스 더 알아보기
              </a>
            </div>
          </AnimatedSection>

          {/* Stats Bar */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="border-t border-[#C9A84C]/20 pt-10">
              <div className="grid grid-cols-3 gap-8 max-w-xl">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-2xl md:text-3xl font-black text-[#C9A84C] mb-1"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#8B96A8] leading-tight">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-[#8B96A8]/50">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8B96A8]/60">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C9A84C]/50 to-transparent" />
      </div>
    </section>
  );
}
