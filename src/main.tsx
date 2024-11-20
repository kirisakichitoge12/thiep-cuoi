import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom' 
import AlbumModal from './components/Modals/AlbumModal.tsx'
import EditModal from './components/Modals/EditModal.tsx'
import WidgetModal from './components/Modals/WidgetModal.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <AlbumModal   />
        <EditModal  />
        <WidgetModal />
    </BrowserRouter>
  </StrictMode>,
)
