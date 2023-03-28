import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface IThemeContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') ?? 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const removeTheme = theme === 'dark' ? 'light' : 'dark';
    root.classList.remove(removeTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): IThemeContext {
  return useContext<IThemeContext>(ThemeContext);
}

export default ThemeContextProvider;
