import AnimatedSection from './AnimatedSection';

const problems = [
  {
    emoji: '💸',
    title: '경비 처리 1건 놓치면',
    desc: '수십만 원이 그대로 세금으로 나갑니다. 뭐가 되는지 기준을 모르면\n당연히 손해입니다.',
  },
  {
    emoji: '⏰',
    title: '신고 기한을 넘기면',
    desc: '가산세가 발생할 수 있습니다. 상황에 따라 부과 기준은 달라지지만,\n몰랐다고 예외는 없습니다.',
  },
  {
    emoji: '😰',
    title: '혼자 신고하다 실수하면',
    desc: '나중에 세무서에서 연락이 옵니다. 그때 수정하면 더 복잡해집니다.',
  },
  {
    emoji: '🔍',
    title: '검색해도 내 상황엔 안 맞고',
    desc: '프리랜서와 개인사업자는 업종과 소득 구조마다 처리 방식이 다릅니다.\n일반 정보로는 부족합니다.',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
            혹시 지금 이런 상황이신가요?
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight tracking-tight">
            세금을 혼자 처리할 때
            <br />
            가장 많이 손해 보는 순간들
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {problems.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.12}>
              <div className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm h-full">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <div>
                    <h3 className="font-black text-[#0F172A] text-sm tracking-tight mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[#475569] text-sm leading-relaxed whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="text-center">
          <div className="inline-block bg-[#0F172A] text-white px-8 py-4 rounded-xl">
            <p className="text-sm font-semibold">
              위 상황 중 하나라도 해당된다면,{' '}
              <span className="text-[#C9A84C] font-black">지금 바로 확인이 필요합니다.</span>
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
