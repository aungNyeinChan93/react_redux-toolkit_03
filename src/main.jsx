import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './router.js'
import { Provider } from 'react-redux'
import store from './store.js'
import ThemeProvider from './contexts/ThemeProvider.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </Provider>
)
