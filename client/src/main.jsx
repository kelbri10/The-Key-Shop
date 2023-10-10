import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider
} from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import './index.css'
import Shop from './pages/Shop.jsx'
import ContactForm from './pages/Contact.jsx'
import Product, { productDetailsLoader } from './pages/fragments/Product.jsx'
import Questions from './pages/FAQ.jsx'
import ProductGrid, { productsLoader } from './pages/fragments/ProductGrid.jsx'
import { CartProvider } from './CartContext.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'

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
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={Checkout} />
      </Route>
      
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
