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
import Product from './pages/Product.jsx'
import Questions from './pages/FAQ.jsx'
import ProductGrid from './components/product/ProductGrid.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
      <Route path="contact" element={<ContactForm />} />
      <Route path="shop" element={<Shop />}> 
        <Route path="all" element={<ProductGrid />} />
        <Route path=":id" element={<Product />} />
      </Route>
      <Route path="faq" element={<Questions />} />
    </Route>
  )
)

// const router = createBrowserRouter([
//   { 
//     path: "/", 
//     element: <Landing />
//   }, 
//   {
//     path: "/shop", 
//     element: <Shop />, 
//     children: ({
//       path:":id"
//     })
//   }, 
//   { 
//     path: "/shop/:id", 
//     element: <Product />
//   },
//   { 
//     path: "/contact", 
//     element: <ContactForm />
//   }, 
//   {
//     path: "/faq", 
//     element: <Questions />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
