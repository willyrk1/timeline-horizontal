import React from 'react'
import ReactDOM from 'react-dom/client'
import WW2 from './WW2.js'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AustrianToNow from './AustrianToNow.js'
import App2 from './App2.js'
import AustrianSuccession from './AustrianSuccession.js'
import FirstSilesian from './FirstSilesian.js'
import EndUSSR from './EndUSSR.js'
import WW1 from './WW1.js'
import War1812 from './War1812.js'
import HundredYears from './HundredYears.js'

const router = createBrowserRouter([
  {
    path: "/timeline-horizontal",
    element: <AustrianToNow />,
  },
  {
    path: "/timeline-horizontal/WW1",
    element: <WW1 />,
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
  {
    path: "/timeline-horizontal/FirstSilesian",
    element: <FirstSilesian />,
  },
  {
    path: "/timeline-horizontal/EndUSSR",
    element: <EndUSSR />,
  },
  {
    path: "/timeline-horizontal/1812",
    element: <War1812 />,
  },
  {
    path: "/timeline-horizontal/100years",
    element: <HundredYears />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
