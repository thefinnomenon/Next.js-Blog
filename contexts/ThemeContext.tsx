import { createContext, useState, useEffect } from 'react'

// eslint-disable-next-line no-shadow
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextProps = {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: (theme) => console.warn('no theme provider: ', theme),
})

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs === Theme.LIGHT ? Theme.LIGHT : Theme.DARK
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return Theme.DARK
    }
  }

  // Return Theme.DARK to use dark theme as default
  return Theme.LIGHT
}

type ThemeProviderProps = {
  initialTheme: Theme
  children: React.ReactNode | null
}

export const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement
    const isDark = rawTheme === Theme.DARK

    root.classList.remove(isDark ? Theme.LIGHT : Theme.DARK)
    root.classList.add(rawTheme)

    localStorage.setItem('color-theme', rawTheme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
