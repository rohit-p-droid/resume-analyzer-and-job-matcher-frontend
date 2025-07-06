import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store, { persistor } from './store/index.js'
import { Login, Register, Home, Dashboard, UploadResume, ViewResume, About, Contact } from './pages'
import { AuthLayout, Logout } from './components'
import { PersistGate } from 'redux-persist/integration/react'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "resume-analyzer",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: "upload",
            element: <UploadResume />
          },
          {
            path: "view/:resumeId",
            element: <ViewResume />
          }
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
)
