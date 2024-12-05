import React, { createContext, useState } from 'react'; 
export const ThemeContext = createContext(); 
// This context will provide the current theme value and the function to toggle it.

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); 
    // Use a function in `setTheme` to toggle the theme:
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Provide the `theme` and `toggleTheme` values to all components that consume this context.
          Any component using `ThemeContext` can access these values. */}

      <div className={theme}>
        {children}
        {/* Render all child components passed to this provider. */}
      </div>
    </ThemeContext.Provider>
  );
  // Return the `ThemeContext.Provider` component, 
  
};
