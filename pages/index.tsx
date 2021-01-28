import useTranslation from 'next-translate/useTranslation'
import Header from '@/components/Header'

export default function Home(): JSX.Element {
  const { t } = useTranslation('home')
  return (
    <div>
      <Header />
      <div className="bg-gray-200 dark:bg-gray-900 h-screen flex justify-center items-center">
        <div className="p-6 max-w-sm max-h-80 bg-white dark:bg-gray-500 rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl font-medium text-black dark:text-white">{t('title')}</div>
            <p className="text-gray-500 dark:text-gray-300">{t('description')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
