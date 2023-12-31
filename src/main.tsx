import React from 'react'
import ReactDOM from 'react-dom/client'
import WW2 from './WW2.js'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AustrianToNow from './AustrianToNow.js'
import App2 from './App2.js'
import AustrianSuccession from './AustrianSuccession.js'

const router = createBrowserRouter([
  {
    path: "/timeline-horizontal",
    element: <AustrianToNow />,
  },
  {
    path: "/timeline-horizontal/WW2",
    element: <WW2 />,
  },
  {
    path: "/timeline-horizontal/App2",
    element: <App2 />,
  },
  {
    path: "/timeline-horizontal/AustrianSuccession",
    element: <AustrianSuccession />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
