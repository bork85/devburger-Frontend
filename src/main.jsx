import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../src/routes/index'
import { GlobalStyles } from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Elements>
      <GlobalStyles />
      <ToastContainer />
    </AppProvider>
  </StrictMode>,
)
