import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "프리랜서·개인사업자 세무 컨설팅 | 세금 한 번에 정리",
  description:
    "부가세, 종합소득세, 절세 전략까지. AI 데이터 분석 기반으로 가산세 없이 정확하게, 합법적으로 세금을 줄여드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistMono.variable} h-full`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0F172A]">{children}</body>
    </html>
  );
}
