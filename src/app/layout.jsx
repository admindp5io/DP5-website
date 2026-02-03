import '@/styles/globals.css'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { Header } from '@/components/ui/Header'

export const metadata = {
  title: 'DP5 - We Deliver Growth, Not Just Advice | Revenue-Share Growth Partners',
  description: 'DP5 partners with B2B companies to drive sustainable, measurable growth. We fund experiments, execute weekly, and share upside—you only pay when revenue grows.',
  keywords: ['growth partners', 'revenue share', 'sustainable growth', 'business growth', 'B2B growth', 'execution partners'],
  authors: [{ name: 'DP5' }],
  openGraph: {
    title: 'DP5 - We Deliver Growth, Not Just Advice',
    description: 'Revenue-share aligned growth partners invested in your success. We only win when you win.',
    url: 'https://dp5.io',
    siteName: 'DP5',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DP5 - We Deliver Growth, Not Just Advice',
    description: 'Revenue-share aligned growth partners invested in your success. We only win when you win.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script async src="https://cdn.now4real.com/now4real.js"></script>
      <body className="min-h-screen">
        <ScrollProgress />
        <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  )
}
