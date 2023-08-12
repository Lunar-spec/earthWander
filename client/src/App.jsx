/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Outlet, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
import AOS from 'aos';

import { userData } from "./components/Helpers.jsx";
import Register from './pages/Register/Register.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './pages/About/About.jsx';
import Login from './pages/Login/Login.jsx';
import Notfound from './pages/Notfound/Notfound.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contact from './pages/Contact/Contact';
import History from './pages/History/History.jsx';
import TravelDetails from './pages/TravelDetails/TravelDetails.jsx';
import Lodging from './pages/Lodging/Lodging.jsx';
import LodgingDetails from './pages/LodgingDetails/LodgingDetails.jsx';
import Tnc from './pages/Extras/Tnc/Tnc.jsx';
import Policy from './pages/Extras/Policy/Policy.jsx';
import Faq from './pages/Extras/Faq/Faq.jsx';

import './App.scss'
import 'aos/dist/aos.css';
import Admin from './pages/Admin/Admin.jsx';

function App() {


  useEffect(() => {
    AOS.init({
      once: true,
      offset: 140,
      duration: 500,
      easing: 'ease-in-sine',
    })
  }, [])

  const name = userData;

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Footer />
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!name) {
      return (<Navigate to={'/login'} />)
    }
    return children
  }

  const AdminRoute = ({ children }) => {
    const isAdmin = true;

    if (!isAdmin) {
      return (<Navigate to={'/'} />)
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute>
        <Layout />
      </ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/extras/tnc',
          element: <Tnc />
        },
        {
          path: '/extras/policy',
          element: <Policy />
        },
        {
          path: '/history',
          element: <History />
        },
        {
          path: '/history/:id',
          element: <TravelDetails />
        },
        {
          path: '/extras/faq',
          element: <Faq />
        },
        {
          path: '/lodging',
          element: <Lodging />
        },
        {
          path: '/lodging/:id',
          element: <LodgingDetails />
        },
        {
          path: '/*',
          element: <Notfound />
        },
        {
          path: '/admin',
          element: <AdminRoute>
            <Admin />
          </AdminRoute>
        }
      ]
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
