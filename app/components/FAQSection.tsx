'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const faqs = [
  {
    q: '프리랜서도 세무사가 필요한가요?',
    a: '소득 구조와 비용 처리에 따라 도움이 되는 경우가 많습니다. 특히 경비 처리 기준이 불명확하거나 종합소득세 신고가 처음이신 경우 한 번 확인해보시는 것을 권장드립니다.',
  },
  {
    q: '신고를 놓치면 어떻게 되나요?',
    a: '일정에 따라 가산세가 발생할 수 있습니다. 신고 기한을 넘겼더라도 빨리 자진신고하는 것이 유리하며, 상황에 따라 가산세를 줄일 수 있는 방법을 안내드립니다.',
  },
  {
    q: '이미 신고한 내용도 수정이 가능한가요?',
    a: '일정 조건에 따라 수정 신고가 가능합니다. 법정 신고기한으로부터 5년 이내라면 경정청구를 통해 과다 납부한 세금을 돌려받을 수 있는 경우도 있습니다.',
  },
  {
    q: '상담은 어떻게 진행되나요?',
    a: '초기 상담을 통해 현재 상황을 파악한 후, 필요한 서비스와 진행 방향을 안내드립니다. 비대면으로도 간편하게 시작하실 수 있습니다.',
  },
  {
    q: '업종이 특수한 경우에도 가능한가요?',
    a: '네, 업종별 세법 기준을 확인하고 상황에 맞게 처리합니다. 먼저 상담을 통해 업종과 소득 구조를 파악한 후 진행 방향을 안내드립니다.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight tracking-tight mb-5">
            자주 문의 주시는
            <br />
            내용입니다
          </h2>
          <div className="divider-gold" />
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="font-bold text-[#0F172A] text-sm leading-snug tracking-tight">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#94A3B8]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 border-t border-[#E2E8F0]">
                        <p className="text-[#475569] text-sm leading-relaxed pt-4">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
