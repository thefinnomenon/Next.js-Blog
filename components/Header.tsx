import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useRouter } from 'next/router'
import Link from 'next/link'
import US from '@/assets/svg/flags/us.svg'
import BR from '@/assets/svg/flags/br.svg'

export default function Header(): JSX.Element {
  // i18n
  const router = useRouter()
  const { locale } = router

  // Theme
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <div className="flex justify-between h-10 w-screen bg-gray-200 dark:bg-gray-900 dark:text-white">
      <div>
        <p>The Finnternet</p>
      </div>
      <div className="flex">
        <DarkModeSwitch checked={theme === 'dark'} onChange={switchTheme} size={40} />
        {locale === 'en-US' ? (
          <Link href={router.asPath} locale="pt-BR">
            <a>
              <US width={40} height={40} />
            </a>
          </Link>
        ) : (
          <Link href={router.asPath} locale="en-US">
            <a>
              <BR width={40} height={40} />
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
