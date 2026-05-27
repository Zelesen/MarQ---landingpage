import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, IBM_Plex_Sans } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const _ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'marQ — The Quantized AI Model Registry',
  description: 'Download optimized AI model weights for local and edge inference. marQ provides pre-quantized models in GGUF, GPTQ, AWQ, and ONNX formats with zero egress fees.',
  keywords: ['quantized models', 'AI model registry', 'GGUF downloads', 'local inference', 'edge AI infrastructure', 'model weights'],
  authors: [{ name: 'marQ' }],
  openGraph: {
    title: 'marQ — The Quantized AI Model Registry',
    description: 'Download optimized AI model weights for local and edge inference.',
    type: 'website',
    siteName: 'marQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'marQ — The Quantized AI Model Registry',
    description: 'Download optimized AI model weights for local and edge inference.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
