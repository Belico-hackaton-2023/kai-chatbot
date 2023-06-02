import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserProvider from './context/UserContext'

import * as styles from '@mui/material/styles'
import App from './pages/App.jsx'
import theme from './styles/theme'

import './index.css'
import Login from './pages/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProvider><App /></UserProvider>,
  },
  {
    path: '/login',
    element: <UserProvider><Login /></UserProvider>
  },
  {
    path: '/test',
    element: <div><h1>Holi</h1></div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <styles.ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </styles.ThemeProvider>
  </React.StrictMode>,
)
