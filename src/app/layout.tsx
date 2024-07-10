import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Providers from '@/components/Providers';
import MetaData from '@/assets/data/metadata.json';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });
const metaData = MetaData;

export const metadata: Metadata = {
  title: metaData.service_name,
  description: metaData.service_description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
