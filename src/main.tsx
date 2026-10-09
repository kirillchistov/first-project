import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App.tsx'
import { ProgressProvider } from './progress.tsx'
import './styles.css'

const root = document.getElementById('root')
if (!root) throw new Error('Root element missing')

const baseUrl = import.meta.env.BASE_URL
const basename = baseUrl === '/' ? undefined : baseUrl.replace(/\/$/, '')

createRoot(root).render(
  <StrictMode>
    <ProgressProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  </StrictMode>,
)
