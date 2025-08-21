import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle, lighTheme, darkTheme } from './styles/'

createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.Fragment>
)
