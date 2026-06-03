import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppShell from './App'
import routes from './app-routes'
import { applySeoToDocument } from './seo'
import './index.css'

const router = createBrowserRouter(routes)

router.subscribe((state) => {
  applySeoToDocument(`${state.location.pathname}${state.location.search}`)
})

hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <AppShell>
      <RouterProvider router={router} />
    </AppShell>
  </React.StrictMode>,
)
