import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../src/routes/index'
import { GlobalStyles } from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
      <ToastContainer />
    </AppProvider>
  </StrictMode>,
)
