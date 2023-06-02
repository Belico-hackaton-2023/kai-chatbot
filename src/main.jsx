import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import * as styles from '@mui/material/styles'
import App from './pages/App.jsx'
import theme from './styles/theme'

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <styles.ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </styles.ThemeProvider>
  </React.StrictMode>,
)
