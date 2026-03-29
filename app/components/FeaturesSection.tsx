import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    tag: '고위험 대응',
    title: '세무조사\n완벽 대응',
    desc: '세무공무원 출신 전문가의 내부 경험을 바탕으로 세무조사를 사전에 철저히 대비합니다. 증빙 자료 체계화, 세무조사 시뮬레이션, 현장 동행 대응까지 일괄 지원합니다.',
    points: ['사전 위험 진단 리포트', '증빙자료 DB 체계화', '조사관 대응 전문 동행'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    tag: '자산 이전',
    title: '가업 승계 &\n법인 전환',
    desc: '개인사업자의 법인 전환, 가업 승계, 지분 이전 등 생애 최대의 세무 이벤트를 최소 세금으로 완성합니다. 가족 간 자산 이전의 합법적 구조를 설계합니다.',
    points: ['개인→법인 전환 절세 설계', '가업상속공제 최적화', '증여·상속세 사전 플래닝'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    tag: '자산 관리',
    title: '고소득자\n자산 관리 전략',
    desc: '연 매출 10억 이상 고소득 사업자를 위한 종합 절세 전략입니다. 소득 분산, 부동산 절세, 금융소득 관리, 퇴직금 설계까지 자산 전반을 아우릅니다.',
    points: ['소득 분산 최적화 설계', '부동산 양도세 절세 전략', '금융·퇴직소득 통합 관리'],
  },
];

export default function FeaturesSection() {
  return (
    <section id="services" className="py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase font-medium mb-4">
            핵심 서비스
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            대표님의 상황에 맞는
            <br />
            프리미엄 세무 솔루션
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-[#243659] text-base max-w-lg mx-auto">
            단순 세금 신고를 넘어, 대표님의 자산을 지키는 전략적 파트너가 됩니다.
          </p>
        </AnimatedSection>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimatedSection
              key={svc.title}
              animation="fade-up"
              delay={((i * 100) as 0 | 100 | 200 | 300 | 400 | 500)}
            >
              <div className="bg-white rounded-sm p-8 shadow-sm card-premium h-full flex flex-col group">
                {/* Tag */}
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] font-semibold mb-4 block">
                  {svc.tag}
                </span>

                {/* Icon */}
                <div className="text-[#0D1B3E] group-hover:text-[#C9A84C] transition-colors duration-300 mb-5">
                  {svc.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-black text-[#0D1B3E] mb-4 leading-tight whitespace-pre-line"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {svc.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-px bg-[#C9A84C]/40 group-hover:bg-[#C9A84C] transition-colors duration-300 mb-4" />

                {/* Desc */}
                <p className="text-[#243659] text-sm leading-relaxed mb-6 flex-1">
                  {svc.desc}
                </p>

                {/* Points */}
                <ul className="flex flex-col gap-2 mb-6">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-[#243659]">
                      <span className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href="#cta"
                  className="text-xs font-semibold text-[#C9A84C] tracking-wide hover:text-[#A8882E] transition-colors flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                >
                  상담 신청하기
                  <span>→</span>
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
