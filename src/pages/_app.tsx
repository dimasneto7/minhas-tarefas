import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.Propssession}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
