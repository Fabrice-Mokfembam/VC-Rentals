import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout/RootLayout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/Gallery/Gallery'

import Service from './pages/Services/Service'


const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [
    {
      path: '/',
      element:<Home/> 
    },
    {
      path: '/about',
      element:<About/>
    },
    {
      path: '/Contact',
      element:<Contact/>
    },
    {
      path: '/services',
      element:<Service/>
    },
    {
      path: '/gallery',
      element:<Gallery/>
    }
  ]
}])

function App() {

  return (
    <>
     <RouterProvider router={router}/>  
    </>
  )
}

export default App
