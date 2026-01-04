import '@/styles/globals.css'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { Header } from '@/components/ui/Header'

export const metadata = {
  title: 'DP5 - We Make You Grow | Sustainable Growth Partners',
  description: 'DP5 partners with ambitious companies to achieve sustainable, measurable growth through revenue-sharing commitment. No fluff. Just results.',
  keywords: ['growth partners', 'revenue share', 'sustainable growth', 'business growth', 'fractional CTO'],
  authors: [{ name: 'DP5' }],
  openGraph: {
    title: 'DP5 - We Make You Grow',
    description: 'Growth partners who only win when you win.',
    url: 'https://dp5.com',
    siteName: 'DP5',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DP5 - We Make You Grow',
    description: 'Growth partners who only win when you win.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ScrollProgress />
        <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  )
}
