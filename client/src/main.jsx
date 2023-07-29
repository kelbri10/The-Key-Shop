import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import Landing from './pages/Landing.jsx'
import './index.css'
import ProductCollections from './pages/Shop.jsx'
import ContactForm from './pages/Contact.jsx'

const router = createBrowserRouter([
  { 
    path: "/home", 
    element: <Landing />
  }, 
  {
    path: "/shop", 
    element: <ProductCollections />
  }, 
  { 
    path: "/contact", 
    element: <ContactForm />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)