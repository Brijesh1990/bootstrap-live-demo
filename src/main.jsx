import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// bootstrap package
import 'bootstrap/dist/css/bootstrap.min.css'
// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'
// bootstrap js
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  </StrictMode>,
)
