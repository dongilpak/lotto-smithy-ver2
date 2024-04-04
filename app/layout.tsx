import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Lotto-Smithy',
    default: 'Lotto-Smithy',
  },
  description:
    '로또 번호를 선택된 추출 방법에 맞춰서 자동으로 번호를 제공합니다. 가장 하단에는 추천 번호 목록을 제공합니다. 필요에 따라 번호 목록을 저장하여 모아서 볼 수 있으며 이미지 파일로 저장할 수 있습니다. 또한 이번 회차 당첨 번호 및 당첨금 안내를 하고 있으며 구매까지 남은 시간을 표시하고 있습니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
