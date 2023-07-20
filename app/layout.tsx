import type { Metadata } from 'next'
import '../src/styles/global.css'

import Head from 'next/head'
import favicon from "../public/favicon.png"


export const metadata: Metadata = {
  title: 'Inicio | Move.It',
  description: 'Generated by create next app',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../public/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
      </Head>
      <body>{children}</body>
    </html>
  )
}