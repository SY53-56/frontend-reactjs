import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/ContextProvider.jsx'
import { Provider } from 'react-redux'
import Store from "./store.js"
createRoot(document.getElementById('root')).render(
  <StrictMode>
<ContextProvider>
   <BrowserRouter>
   <Provider store={Store}>
     <App />
   </Provider>
 </BrowserRouter>
</ContextProvider>
  </StrictMode>,
)
