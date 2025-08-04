import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle, lighTheme } from './styles/'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lighTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
