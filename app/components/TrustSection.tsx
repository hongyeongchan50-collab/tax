import AnimatedSection from './AnimatedSection';

const proofs = [
  {
    num: '평균 245만 원',
    label: '평균 절세액',
    desc: '* 최근 1년 프리랜서·개인사업자 고객 데이터 기준\n(개인 상황에 따라 다를 수 있습니다)',
  },
  {
    num: '가산세 0원',
    label: '무신고 가산세 최대 20% 차단',
    desc: '기한 내 정확한 신고로 불필요한 가산세를 원천 차단합니다.',
  },
  {
    num: '상담 만족도 98%',
    label: '철저한 정보 보안',
    desc: '상담에서 나눈 내용은 외부에 절대 공유되지 않습니다.',
  },
];

const cases = [
  {
    tag: '프리랜서',
    before: '경비 처리 기준을 몰라서 수입 전액에 세금 신고',
    after: '업무 관련 경비 정리 후 세금 부담 감소',
  },
  {
    tag: '개인사업자',
    before: '부가세 신고를 혼자 하다가 누락 항목 발생',
    after: '누락 항목 확인 및 경정청구로 환급 진행',
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
            &ldquo;진짜 도움이 될까?&rdquo; 에 대한 답변
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight tracking-tight">
            의심되시는 거 압니다.
            <br />
            그래서 먼저 보여드립니다
          </h2>
        </AnimatedSection>

        {/* Proof numbers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {proofs.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.15}>
              <div className="bg-white rounded-xl p-7 border border-[#E2E8F0] text-center h-full">
                <div className="text-2xl md:text-3xl font-black text-[#C9A84C] tracking-tight mb-1">
                  {item.num}
                </div>
                <div className="font-bold text-[#0F172A] text-sm mb-2">{item.label}</div>
                <p className="text-[#64748B] text-xs leading-relaxed whitespace-pre-line">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mini cases */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {cases.map((item, i) => (
            <AnimatedSection key={item.tag} delay={i * 0.15}>
              <div className="bg-white rounded-xl p-6 border border-[#E2E8F0]">
                <span className="text-xs font-bold text-[#C9A84C] bg-[#C9A84C]/10 px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-[#94A3B8] shrink-0 mt-0.5">BEFORE</span>
                    <p className="text-xs text-[#64748B] leading-relaxed">{item.before}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-[#C9A84C] shrink-0 mt-0.5">AFTER</span>
                    <p className="text-xs text-[#0F172A] font-semibold leading-relaxed">{item.after}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-[#94A3B8] text-xs text-center mb-14">
            ※ 위 내용은 이해를 돕기 위한 예시이며, 실제 결과는 개인 상황에 따라 달라질 수 있습니다.
          </p>
        </AnimatedSection>

        {/* 실제 후기 */}
        <AnimatedSection delay={0.5}>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <div className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#C9A84C] text-sm">★</span>
                ))}
              </div>
              <p className="text-[#334155] text-sm leading-relaxed mb-4">
                &ldquo;작년에 혼자 하다가 가산세까지 물었는데, 올해는 상담 후 150만 원 환급받았습니다.<br />진작 올 걸 후회했어요.&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#E2E8F0] flex items-center justify-center text-xs font-bold text-[#64748B]">김</div>
                <span className="text-xs text-[#94A3B8]">IT 개발 프리랜서 김O민 님</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#C9A84C] text-sm">★</span>
                ))}
              </div>
              <p className="text-[#334155] text-sm leading-relaxed mb-4">
                &ldquo;경비 처리 항목을 정리했더니 세금이 생각보다 많이 줄었어요.<br />스마트스토어 하면서 이런 게 있는지도 몰랐네요.&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#E2E8F0] flex items-center justify-center text-xs font-bold text-[#64748B]">이</div>
                <span className="text-xs text-[#94A3B8]">스마트스토어 2년 차 대표 이O지 님</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 담당자 신뢰 요소 */}
        <AnimatedSection delay={0.6}>
          <div className="bg-[#0F172A] rounded-xl px-8 py-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full bg-[#C9A84C]/20 border-2 border-[#C9A84C]/40 flex items-center justify-center shrink-0">
              <span className="text-2xl">👨‍💼</span>
            </div>
            <div className="flex-1">
              <p className="text-white font-black text-sm mb-1">세무사가 직접 상담을 진행합니다</p>
              <p className="text-[#94A3B8] text-xs leading-relaxed">
                AI 자동 응답이나 상담사가 아닙니다. 담당 세무사가 직접 현황을 확인하고 방향을 안내드립니다.
              </p>
            </div>
            <a href="#cta" className="btn-gold px-6 py-3 text-sm font-black rounded-lg whitespace-nowrap shrink-0">
              상담 신청하기 →
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
