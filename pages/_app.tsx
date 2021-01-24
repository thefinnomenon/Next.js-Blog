import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    // @ts-ignore
    <ThemeProvider attribute="class" defaultTheme="system" forcedTheme={Component.theme || undefined}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
