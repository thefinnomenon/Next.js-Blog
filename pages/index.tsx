import { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

export default function Home(): JSX.Element {
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()
  const { locale, defaultLocale } = router
  const { t } = useTranslation('home')
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
    <div className="bg-gray-200 dark:bg-gray-900 h-screen flex justify-center items-center">
      <div className="p-6 max-w-sm max-h-80 bg-white dark:bg-gray-500 rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl font-medium text-black dark:text-white">{t('title')}</div>
          <p className="text-gray-500 dark:text-gray-300 mb-4">{t('description')}</p>
          <div className="mb-4 dark:text-white">
            <p>{t('currentLocale', { locale })}</p>
            <p>{t('defaultLocale', { defaultLocale })}</p>
            <ul>
              {router.locales.map((lcl) => (
                <li key={lcl} className="text-blue-400">
                  <Link href={router.asPath} locale={lcl}>
                    {lcl}
                  </Link>
                </li>
              ))}
            </ul>
            <p>{t('currentTheme', { theme })}</p>
          </div>
          <button
            type="button"
            className="p-2 border border-black dark:border-white dark:text-white"
            onClick={switchTheme}
          >
            {t('changeTheme')}
          </button>
        </div>
      </div>
    </div>
  )
}
