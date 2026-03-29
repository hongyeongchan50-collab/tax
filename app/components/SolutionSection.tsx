import AnimatedSection from './AnimatedSection';

const steps = [
  {
    num: '01',
    title: '현재 소득·신고 상태 무료 진단',
    desc: '어디서부터 시작해야 할지 모르겠다면, 먼저 현재 상태를 파악하는 것이 우선입니다.',
  },
  {
    num: '02',
    title: '놓친 경비 항목 전수 확인',
    desc: '업종별로 인정되는 경비 항목이 다릅니다. 놓친 항목 하나가 수십만 원 차이를 만듭니다.',
  },
  {
    num: '03',
    title: '오류 없는 신고 처리',
    desc: '기한 내에 정확하게 신고합니다. 실수로 인한 가산세나 수정 신고 리스크를 없앱니다.',
  },
  {
    num: '04',
    title: '이후 일정 및 관리 방법 안내',
    desc: '한 번만 도움받고 끝이 아닙니다. 다음 신고까지 스스로 관리할 수 있도록 안내드립니다.',
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
            해결 방식
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight tracking-tight mb-3">
            복잡하게 느껴지는 이유는
            <br />
            순서를 모르기 때문입니다
          </h2>
          <p className="text-[#475569] text-base">
            처음부터 끝까지 단계별로 함께 정리해드립니다.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.12}>
              <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] h-full">
                <span className="text-4xl font-black text-[#C9A84C]/20 tracking-tight leading-none block mb-4">
                  {step.num}
                </span>
                <h3 className="font-black text-[#0F172A] text-sm tracking-tight mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <p className="text-[#64748B] text-sm">
            ※ 필요한 단계만 선택해서 진행하실 수 있습니다.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
