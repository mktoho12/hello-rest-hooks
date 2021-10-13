import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider } from '@rest-hooks/core'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <Component {...pageProps} />
    </CacheProvider>
  )
}
export default MyApp
