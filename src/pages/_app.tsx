import 'modern-normalize/modern-normalize.css'
import '@/styles/globals.css'
import 'antd/dist/reset.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
