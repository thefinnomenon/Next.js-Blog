import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function Home(): JSX.Element {
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
    <div className="bg-gray-200 dark:bg-gray-900 h-screen flex justify-center items-center">
      <div className="p-6 max-w-sm max-h-80 bg-white dark:bg-gray-500 rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl font-medium text-black dark:text-white">Home</div>
          <p className="text-gray-500 dark:text-gray-300 mb-4">This is the home screen styled with Tailwind.</p>
          <button
            type="button"
            className="p-2 border border-black dark:border-white dark:text-white"
            onClick={switchTheme}
          >
            Change theme
          </button>
        </div>
      </div>
    </div>
  )
}
