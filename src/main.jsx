import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import counterSlice  from './redux/counterSlice.js'


export const store = configureStore({
  reducer: {counterSlice}
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
     <Provider store={store}>
      <App />
     </Provider>
   </BrowserRouter>
  </StrictMode>,
)
