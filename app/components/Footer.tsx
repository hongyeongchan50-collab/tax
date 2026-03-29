const footerLinks = [
  { label: '회사 소개', href: '#about' },
  { label: '업무 분야', href: '#services' },
  { label: '성공 사례', href: '#proof' },
  { label: '상담 신청', href: '#cta' },
];

export default function Footer() {
  return (
    <footer className="bg-[#060E20] border-t border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-lg font-black tracking-widest text-[#C9A84C] mb-1"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              PREMIUM TAX
            </div>
            <div className="text-[10px] tracking-[0.25em] text-[#8B96A8] uppercase mb-5">
              절세 & 세무회계 컨설팅
            </div>
            <p className="text-[#8B96A8] text-xs leading-relaxed">
              변화하는 세법 환경에서 대표님의 자산을 지키는
              <br />
              신뢰할 수 있는 세무 파트너입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#8B96A8] text-xs hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-[#8B96A8]">
              <li>
                <span className="text-[#C9A84C]/70 mr-2">TEL</span>
                02-0000-0000
              </li>
              <li>
                <span className="text-[#C9A84C]/70 mr-2">FAX</span>
                02-0000-0001
              </li>
              <li>
                <span className="text-[#C9A84C]/70 mr-2">MAIL</span>
                contact@premiumtax.co.kr
              </li>
              <li className="leading-relaxed">
                <span className="text-[#C9A84C]/70 mr-2">ADDR</span>
                서울특별시 강남구 테헤란로 000<br />
                <span className="ml-10">○○빌딩 0층</span>
              </li>
              <li>
                <span className="text-[#C9A84C]/70 mr-2">OPEN</span>
                평일 09:00 – 18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#C9A84C]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#8B96A8]/60 text-center md:text-left">
            COPYRIGHT ⓒ PREMIUM TAX. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[10px] text-[#8B96A8]/60">
            <a href="#" className="hover:text-[#C9A84C] transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-[#C9A84C] transition-colors">이용약관</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-[#0D1B3E]/60 rounded-sm px-5 py-4">
          <p className="text-xs text-[#8B96A8] leading-relaxed">
            본 웹사이트는 랜딩페이지 기획 및 디자인 포트폴리오 목적으로 제작된 가상의 페이지입니다. 사이트 내 기재된 세무사 정보, 절세 사례, 수치 데이터 및 리뷰는 전환율 최적화(CRO) 구조를 보여주기 위해 연출된 가상의 콘텐츠이며 실제 서비스와 무관합니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
