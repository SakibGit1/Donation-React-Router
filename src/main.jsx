import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainPage from './MainPage/MainPage.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={MainPage}>
    
   </RouterProvider>
  </React.StrictMode>,
)
