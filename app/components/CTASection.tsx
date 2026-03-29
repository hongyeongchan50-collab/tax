'use client';

import { useState } from 'react';
import { ShieldCheck, Clock, Lock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const reassurances = [
  { icon: ShieldCheck, text: '상담 내용은 외부에 절대 공유되지 않습니다' },
  { icon: Clock, text: '24시간 이내 담당자가 직접 연락드립니다' },
  { icon: Lock, text: '가입 없이, 부담 없이 시작할 수 있습니다' },
];

const businessTypes = [
  '프리랜서 (3.3% 원천징수)',
  '개인사업자 (일반과세)',
  '개인사업자 (간이과세)',
  '부동산 임대업',
  '기타',
];

export default function CTASection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    businessType: '',
    message: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Top message */}
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
            지금 바로 시작하세요
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
            &ldquo;나중에 알아봐야지&rdquo; 하다가
            <br />
            신고 기한이 지납니다
          </h2>
          <p className="text-[#475569] text-base max-w-lg mx-auto">
            5분 무료 상담으로 지금 바로 확인해보세요.
            <br />
            놓친 금액이 있다면 그 자리에서 안내해드립니다.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Reassurance */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-5 mb-10">
              {reassurances.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#C9A84C]" />
                    </div>
                    <p className="text-[#334155] text-sm font-medium">{item.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Risk Reversal */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <p className="font-black text-[#0F172A] text-sm mb-3 tracking-tight">
                &ldquo;비용이 부담스럽다&rdquo;는 분들께
              </p>
              <p className="text-[#475569] text-sm leading-relaxed">
                상담은 무료입니다. 진행 여부는 상담 이후에 결정하셔도 됩니다.<br />
                도움이 안 된다고 느끼시면 그냥 끝내셔도 됩니다.
              </p>
            </div>

            <div className="mt-5 bg-[#FFF7ED] rounded-xl p-5 border border-[#FED7AA]">
              <p className="font-black text-[#C2410C] text-sm mb-1 tracking-tight">
                ⚠️ 이런 분은 지금 당장 확인이 필요합니다
              </p>
              <ul className="text-xs text-[#EA580C] leading-relaxed space-y-1">
                <li>· 종합소득세 신고를 한 번도 제대로 해본 적 없는 분</li>
                <li>· 경비 처리를 거의 못 하고 신고한 분</li>
                <li>· 이미 신고했지만 뭔가 빠진 것 같은 분</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-[#E2E8F0]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[#0F172A] text-xl font-black mb-3 tracking-tight">신청 완료되었습니다</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    24시간 이내에 담당자가 직접 연락드립니다.
                    <br />
                    <span className="text-xs text-[#94A3B8] mt-1 block">
                      영업일 기준 · 스팸 문자 없음
                    </span>
                  </p>
                </div>
              ) : (
                <>
                  <p className="font-black text-[#0F172A] text-base mb-1 tracking-tight">
                    5분 무료 상담 신청
                  </p>
                  <p className="text-xs text-[#94A3B8] mb-6">
                    아래 정보만 남겨주시면 담당자가 직접 연락드립니다
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs text-[#64748B] mb-1.5 font-semibold">
                        성함 <span className="text-[#C9A84C]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="홍길동"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="input-premium w-full px-4 py-3 rounded-lg text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#64748B] mb-1.5 font-semibold">
                        연락처 <span className="text-[#C9A84C]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="010-0000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="input-premium w-full px-4 py-3 rounded-lg text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#64748B] mb-1.5 font-semibold">
                        해당하는 유형 <span className="text-[#C9A84C]">*</span>
                      </label>
                      <select
                        required
                        value={form.businessType}
                        onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                        className="input-premium w-full px-4 py-3 rounded-lg text-sm appearance-none"
                      >
                        <option value="" disabled>선택해 주세요</option>
                        {businessTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-[#64748B] mb-1.5 font-semibold">
                        궁금한 점 (선택)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="예) 3.3% 환급이 가능한지 확인하고 싶어요"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="input-premium w-full px-4 py-3 rounded-lg text-sm resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="agree"
                        required
                        checked={form.agree}
                        onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                        className="mt-0.5 accent-[#C9A84C]"
                      />
                      <label htmlFor="agree" className="text-xs text-[#64748B] leading-relaxed cursor-pointer">
                        개인정보 수집·이용에 동의합니다. 상담 목적으로만 사용되며 제3자에게 제공되지 않습니다.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn-gold w-full py-4 text-base font-black rounded-lg mt-1 tracking-tight"
                    >
                      내 세금 지금 바로 확인하기 →
                    </button>

                    <p className="text-center text-[10px] text-[#94A3B8]">
                      가입 없음 · 스팸 없음 · 24시간 이내 응답
                    </p>
                  </form>
                </>
              )}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
