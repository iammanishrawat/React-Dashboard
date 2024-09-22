import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.tsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardComponent from './pages/dashboard';
import LoginComponent from './pages/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginComponent />,
  },
  {
    path: '/login',
    element: <LoginComponent />,
  },
  {
    path: '/home',
    element: <DashboardComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);