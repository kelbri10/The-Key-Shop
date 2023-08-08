import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, createRoutesFromElements, Route,
  Link,
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import Landing from './pages/Landing.jsx'
import './index.css'
import Shop from './pages/Shop.jsx'
import ContactForm from './pages/Contact.jsx'
import Product, { productDetailsLoader } from './pages/fragments/Product.jsx'
import Questions from './pages/FAQ.jsx'
import ProductGrid, { productsLoader } from './pages/fragments/ProductGrid.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
      <Route path="contact" element={<ContactForm />} />
      <Route path="shop" element={<Shop />}> 
        <Route path="all" 
        element={<ProductGrid/>}
        loader={productsLoader}
        />
        <Route 
        path=":id" 
        element={<Product />}
        loader={productDetailsLoader} />
      </Route>
      <Route path="faq" element={<Questions />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
