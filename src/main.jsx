import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductDetail from './pages/ProductDetail'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductDetail />
  </StrictMode>,
)
