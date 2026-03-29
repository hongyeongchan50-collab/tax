import AnimatedSection from './AnimatedSection';

const cases = [
  {
    label: '프리랜서 A',
    desc: '경비 처리 기준 정리 후 신고 부담 감소',
  },
  {
    label: '개인사업자 B',
    desc: '누락된 항목 확인 후 세금 재조정 진행',
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
            간단 사례
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight tracking-tight mb-5">
            실제로 이런 분들이
            <br />
            이용하셨습니다
          </h2>
          <div className="divider-gold" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {cases.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.15}>
              <div className="bg-[#F8FAFC] rounded-xl p-7 border border-[#E2E8F0] flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#0F172A] text-sm mb-1 tracking-tight">{item.label}</p>
                  <p className="text-[#475569] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.35}>
          <p className="text-[#94A3B8] text-xs">
            ※ 이해를 돕기 위한 예시이며 실제 결과는 상황에 따라 달라질 수 있습니다.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
