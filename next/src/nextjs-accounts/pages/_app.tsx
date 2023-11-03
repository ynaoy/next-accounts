import '@/styles/global.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { LoginFlgContextProvider } from '../hooks/loginFlgContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white dark:bg-slate-800 flex flex-col justify-center items-center h-screen w-screen">
      <LoginFlgContextProvider>
        <Component {...pageProps} />
      </LoginFlgContextProvider>
    </div>
  )
}
