import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './LayOut/Root/Root'
import Home from './LayOut/Home/Home'
import Login from './LayOut/Login/Login'
import Register from './LayOut/Register/Register'
import AuthProvider from './Provider/AuthProvider'
import CardDetails from './Components/CardDetails/CardDetails'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <PrivateRoute>
          <Home></Home>
        </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/card/:id',
        element: <PrivateRoute>
          <CardDetails></CardDetails>
        </PrivateRoute>,
        loader: () => fetch("/new.json")
      }
    ]
      
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
