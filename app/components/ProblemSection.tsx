import AnimatedSection from './AnimatedSection';

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: '잘못된 기장 구조',
    desc: '단순 기장만으로는 수천만 원의 공제 기회를 놓칩니다. 업종·규모에 최적화된 회계 구조가 없으면 매년 과도한 세금을 납부하게 됩니다.',
    loss: '연간 최대 3,000만원+',
    lossLabel: '초과 납세 위험 (예시)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: '놓친 공제 항목',
    desc: '연구개발비, 중소기업 특별세액공제, 고용창출 투자세액공제 등 놓치기 쉬운 공제 항목은 30가지가 넘습니다. 전문가만이 찾아낼 수 있습니다.',
    loss: '누적 공제 손실 1억+',
    lossLabel: '5년 기준 (예시)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: '세무조사 무방비',
    desc: '세무조사는 예고 없이 찾아옵니다. 체계적인 증빙 관리와 사전 대비 없이는 추징세액과 가산세로 수억 원의 손실이 발생할 수 있습니다.',
    loss: '추징세액 최대 5억+',
    lossLabel: '법인 기준 (예시)',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase font-medium mb-4">
            당신이 모르는 위협
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            모르면 내야 하는
            <br />
            <span className="text-[#8B1A1A]">&apos;징벌적 세금&apos;</span>
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-[#243659] text-lg max-w-xl mx-auto leading-relaxed">
            잘못된 세무 구조가 매년 대표님의 통장을 갉아먹고 있습니다.
            <br />
            지금 점검하지 않으면 손실은 계속 누적됩니다.
          </p>
        </AnimatedSection>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <AnimatedSection
              key={item.title}
              animation="fade-up"
              delay={((i * 100) as 0 | 100 | 200 | 300 | 400 | 500)}
            >
              <div className="bg-white rounded-sm p-8 shadow-sm card-premium h-full flex flex-col">
                {/* Icon */}
                <div className="text-[#8B1A1A] mb-5">{item.icon}</div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-[#0D1B3E] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#243659] text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>

                {/* Loss indicator */}
                <div className="border-t border-[#EDE5D8] pt-5">
                  <div className="text-[#8B1A1A] font-black text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
                    {item.loss}
                  </div>
                  <div className="text-xs text-[#8B96A8] mt-1">{item.lossLabel}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom callout */}
        <AnimatedSection animation="fade-up" delay={400} className="mt-12 text-center">
          <div className="inline-block bg-[#0D1B3E] text-white px-8 py-4 rounded-sm">
            <p className="text-sm font-medium">
              <span className="text-[#C9A84C] font-bold">지금 바로</span> 전문가와 무료로 세무 진단을 받아보세요
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
