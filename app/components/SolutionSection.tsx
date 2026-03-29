import AnimatedSection from './AnimatedSection';

const steps = [
  {
    num: '01',
    title: '심층 세무 진단',
    desc: '3년간의 재무 데이터와 세무 신고 내역을 AI로 분석해 현재 구조의 문제점을 정밀 진단합니다.',
  },
  {
    num: '02',
    title: '최적 절세 구조 설계',
    desc: '업종·규모·성장 단계에 맞는 법인 구조, 소득 분산, 공제 전략을 맞춤 설계합니다.',
  },
  {
    num: '03',
    title: '실시간 세무 관리',
    desc: '월별 세무 리포트와 AI 챗봇 상담으로 절세 구조가 지속 최적화되도록 관리합니다.',
  },
  {
    num: '04',
    title: '세무조사 완벽 대응',
    desc: '증빙 자료 체계화와 사전 시뮬레이션으로 세무조사에 완벽히 대비합니다.',
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-28 bg-[#0D1B3E] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5">
        <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full border border-[#C9A84C]" />
        <div className="absolute right-16 top-1/3 w-64 h-64 rounded-full border border-[#C9A84C]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <AnimatedSection animation="fade-up">
              <p className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase font-medium mb-4">
                우리의 솔루션
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                단순 기장이
                <br />
                아닙니다.
                <br />
                <span className="text-gold-gradient">AI 기반 절세</span>
                <br />
                구조 설계입니다.
              </h2>
              <div className="divider-gold mb-6" />
              <p className="text-[#8B96A8] text-base leading-relaxed mb-8">
                세무 신고만 해주는 시대는 끝났습니다. 우리는 수천 개 기업의
                데이터를 학습한 AI 분석 시스템으로 귀사에 최적화된 절세 구조를
                법률의 테두리 안에서 설계하고, 지속적으로 최적화합니다.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  '세무공무원 출신 전문가의 정밀한 세무 전략',
                  'AI 데이터 분석 기반 절세 구조 설계',
                  '월별 실시간 세무 리포트 제공',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] mt-0.5 shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-[#B0BAC9] text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Process Steps */}
          <div className="relative">
            {/* Vertical gold line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#C9A84C]/10 via-[#C9A84C]/60 to-[#C9A84C]/10" />

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <AnimatedSection
                  key={step.num}
                  animation="fade-up"
                  delay={((i * 100) as 0 | 100 | 200 | 300 | 400 | 500)}
                >
                  <div className="relative pl-16 pb-10 last:pb-0">
                    {/* Step dot */}
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#1B2A4A] border border-[#C9A84C]/40 flex items-center justify-center">
                      <span
                        className="text-[#C9A84C] text-xs font-black tracking-wider"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {step.num}
                      </span>
                    </div>

                    <div className="bg-[#1B2A4A] rounded-sm p-6 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-colors duration-300">
                      <h3
                        className="text-white font-bold mb-2"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[#8B96A8] text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
