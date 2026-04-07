// ════ FONTSOURCE — SUBSTITUIR POR CLIENTE ════
// Trocar os imports abaixo pelas fontes definidas no design-system.json
// tokens.typography.font-display.fontsource_imports[]
// tokens.typography.font-sans.fontsource_imports[]
import '@fontsource/cinzel/400.css'
import '@fontsource/cinzel/500.css'
import '@fontsource/nunito-sans/300.css'
import '@fontsource/nunito-sans/400.css'
import '@fontsource/nunito-sans/500.css'
// ════ FIM FONTSOURCE ════

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
