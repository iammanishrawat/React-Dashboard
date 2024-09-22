import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.tsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardComponent from './pages/dashboard';
import LoginComponent from './pages/login';
import { Gsaploader } from './Gsaploader';
import LogoutComponent from './pages/logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginComponent />,
    loader: Gsaploader
  },
  {
    path: '/login',
    element: <LoginComponent />,
    loader: Gsaploader
  },
  {
    path: '/home',
    element: <DashboardComponent />,
    loader: Gsaploader
  },
  {
    path: '/logout',
    element: <LogoutComponent />,
    loader: Gsaploader
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);