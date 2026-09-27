import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kush Casino — официальный сайт и игра онлайн',
  description: 'Kush Casino: официальный сайт, рабочее зеркало и понятный вход для игры онлайн. Только для совершеннолетних игроков.',
  generator: 'v0.app',
  icons: {
    icon: '/kush-favicon.png',
    apple: '/kush-favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08111f',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="8258886162a9a668" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#08111f" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
