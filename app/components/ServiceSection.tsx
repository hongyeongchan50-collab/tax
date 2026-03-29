import { Building2, Briefcase, FileText, MessageSquare } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: Building2,
    title: '개인사업자 세무 관리',
    desc: '사업 소득세 신고, 기장 관리, 경비 처리까지 통합 관리합니다.',
    items: ['종합소득세 신고', '경비 처리 정리', '신고 일정 관리'],
  },
  {
    icon: Briefcase,
    title: '프리랜서 종합소득세 신고',
    desc: '3.3% 원천징수 환급부터 종합소득세 신고까지 프리랜서에 맞게 진행합니다.',
    items: ['3.3% 환급 확인', '경비 항목 정리', '종합소득세 신고'],
  },
  {
    icon: FileText,
    title: '부가세 신고',
    desc: '일반과세자·간이과세자 구분에 맞게 부가세 신고를 정확하게 처리합니다.',
    items: ['일반·간이 과세 신고', '매입세액 공제 확인', '신고 기한 안내'],
  },
  {
    icon: MessageSquare,
    title: '단건 세무 상담',
    desc: '특정 항목이 궁금하거나 한 번만 확인이 필요할 때 이용하실 수 있습니다.',
    items: ['세금 계산 확인', '신고 누락 여부 확인', '처리 방향 안내'],
  },
];

export default function ServiceSection() {
  return (
    <section id="service" className="py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
            서비스
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
            필요한 서비스만 선택해서
            <br />
            이용하실 수 있습니다
          </h2>
          <div className="divider-gold" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <div className="bg-white rounded-xl p-7 card-premium h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    <h3 className="font-black text-[#0F172A] text-base tracking-tight leading-snug pt-1.5">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4">{item.desc}</p>
                  <ul className="flex flex-col gap-1.5">
                    {item.items.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs text-[#475569]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
