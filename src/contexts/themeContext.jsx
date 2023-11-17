import { createContext, useContext, useEffect, useReducer } from "react";
import { themeReducer } from "../reducers/themeReducer";

const ThemeContext = createContext();

// 这里打包了一个useTheme钩子，可以在外部直接引用，修改主题
export const useTheme = () => useContext(ThemeContext);

let THEME_DARK = 'light'

let isDarkActive = localStorage.getItem("isDarkActive");

// console.log(isDarkActive);

isDarkActive = (isDarkActive !== "false");

// console.log(isDarkActive);

if(isDarkActive){
  THEME_DARK = 'dark'
}else{
  THEME_DARK = 'light'
}

// console.log(THEME_DARK);

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, THEME_DARK);

  useEffect(() => {
    const body = document.body;
    body.classList.remove("light", "dark");
    body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
