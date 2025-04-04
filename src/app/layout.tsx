import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import Fathom from '../components/Fathom'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import '@/styles/page.css'
import { Redirects } from '@/lib/redirects'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Speedetail',
    default: 'Speedetail - Swift Time Scheduler',
  },
  description:
    'A4에 뽑아쓰는 자기주도 스케줄러 & 모바일 앱 [Self-Directed Scheduler for A4 Printing & Mobile App]',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    images: [
      {
        url: '/images/hero.png', // 공유용 대표 이미지 지정
        width: 1200,
        height: 630,
        alt: 'Speedetail Preview',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Speedetail RSS Feed"
          href="/feed.xml"
        />
      </head>
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <Fathom />
        <Redirects />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
