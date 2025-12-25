import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Pages/Home/Home.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './Pages/Login/Login.jsx';
import AuthLayout from './Layouts/AuthLayout.jsx';
import Register from './Pages/Regester/Register.jsx';
import About from './Pages/About/About.jsx';
import Donors from './Pages/Donors/Donors.jsx';
import BeADonor from '../src/Pages/BeADonor/BeADonor.jsx';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Profile from './Pages/Profile/Profile.jsx';
import AdminDashboard from './Pages/Dashboard/AdminDashboard/AdminDashboard.jsx';
import AdminRoute from './Provider/AdminRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'donors',
        element: <Donors></Donors>
      },
      {
        path: 'be-a-donor',
        element: <BeADonor></BeADonor>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      }
    ]
  },
  {
    path: '/',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <AdminRoute>
      <AdminDashboard>
      </AdminDashboard>
    </AdminRoute>
  }
]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
