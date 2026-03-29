import AnimatedSection from './AnimatedSection';
import CounterAnimation from './CounterAnimation';

const counters = [
  { target: 1200, suffix: '억+', label: '누적 절세액', sublabel: '(예시 데이터)' },
  { target: 9200, suffix: '개+', label: '고객사 누적', sublabel: '(예시 데이터)' },
  { target: 70, suffix: '%+', label: '평균 절세율', sublabel: '(예시 데이터)' },
  { target: 15, suffix: '년+', label: '세무 전문 경력', sublabel: '세무공무원 출신' },
];

const cases = [
  {
    category: '제조업',
    title: 'A 제조업체',
    result: '연간 세금 3,200만원 절감',
    desc: '법인 전환 및 소득 분산 구조 설계를 통해 대표이사 근로소득세와 법인세를 동시에 최적화했습니다.',
    saving: '3,200만원',
    badge: '법인 전환',
  },
  {
    category: '의료업',
    title: 'B 의원',
    result: '소득세 신고 구조 최적화',
    desc: '원장님의 급여 구조 재설계와 의료기기 감가상각 전략을 통해 종합소득세를 대폭 절감했습니다.',
    saving: '2,100만원',
    badge: '절세 설계',
  },
  {
    category: '부동산 임대',
    title: 'C 부동산 임대사업자',
    result: '양도소득세 절세 설계',
    desc: '장기보유특별공제와 매도 시점 전략 조정으로 양도세 부담을 합법적으로 최소화했습니다.',
    saving: '1억 1,000만원',
    badge: '양도세 절세',
  },
];

export default function SocialProofSection() {
  return (
    <section id="proof" className="py-28 bg-[#0D1B3E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase font-medium mb-4">
            숫자로 증명합니다
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            수치가 말하는
            <br />
            <span className="text-gold-gradient">압도적인 실적</span>
          </h2>
          <div className="divider-gold mx-auto" />
        </AnimatedSection>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#C9A84C]/15 rounded-sm overflow-hidden mb-20">
          {counters.map((item, i) => (
            <AnimatedSection
              key={item.label}
              delay={i * 0.1}
            >
              <div className="bg-[#0D1B3E] px-8 py-10 text-center">
                <div
                  className="text-4xl md:text-5xl font-black text-[#C9A84C] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  <CounterAnimation target={item.target} suffix={item.suffix} />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-[#8B96A8] text-xs">{item.sublabel}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Section Sub Header */}
        <AnimatedSection className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase font-medium mb-3">
            고객 성공 사례
          </p>
          <p className="text-[#8B96A8] text-sm">
            ※ 아래 사례는 실제 구조 변경의 예시이며, 개인정보 보호를 위해 익명 처리된 가상 데이터입니다.
          </p>
        </AnimatedSection>

        {/* Case Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <AnimatedSection
              key={item.title}
              delay={i * 0.1}
            >
              <div className="bg-[#1B2A4A] rounded-sm p-7 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* Top row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B96A8] font-medium">
                    {item.category}
                  </span>
                  <span className="text-[10px] bg-[#C9A84C]/15 text-[#C9A84C] px-2 py-0.5 rounded-full font-semibold tracking-wide">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-white font-bold text-lg mb-1"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#8B96A8] text-xs mb-4">{item.result}</p>

                {/* Desc */}
                <p className="text-[#B0BAC9] text-sm leading-relaxed flex-1 mb-6">
                  {item.desc}
                </p>

                {/* Saving */}
                <div className="border-t border-[#C9A84C]/15 pt-5">
                  <div className="text-xs text-[#8B96A8] mb-1">절감 세액 (예시)</div>
                  <div
                    className="text-2xl font-black text-[#C9A84C]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {item.saving}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
