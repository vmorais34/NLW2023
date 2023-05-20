import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamJuree } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = BaiJamJuree({ subsets: ['latin'], weight: "700", variable: '--font-bayjamjuree' })

export const metadata = {
  title: 'NLW - Space Time',
  description: 'Uma cápsula do tempo construida com React, Next.JS, TailwindCSS e TS.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans text-gray-100 bg-gray-900`}>{children}</body>
    </html>
  )
}
