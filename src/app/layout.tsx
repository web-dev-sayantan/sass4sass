import { Suspense } from 'react'
import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '@/lib/utils'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'SaaS-4-SaaS App',
  description: 'The one place for all your SaaS monitoring needs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={cn(
        geistSans.variable,
        geistMono.variable,
        eb_garamond.variable,
      )}>
      <body className='flex min-h-[calc(100vh-1px)] flex-col bg-brand-25 font-sans text-brand-950 antialiased'>
        <main className='relative flex flex-1 flex-col'>
          <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
        </main>
      </body>
    </html>
  )
}
