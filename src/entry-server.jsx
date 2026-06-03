import { renderToString } from 'react-dom/server'
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router'
import AppShell from './App'
import routes from './app-routes'
import { renderHead, SITE_URL } from './seo'

const handler = createStaticHandler(routes)

function getHead(url, status) {
  if (status === 404) {
    return renderHead(url, {
      title: 'Page Not Found | FegigTech',
      description: 'The requested FegigTech page could not be found.',
      robots: 'noindex, nofollow',
    })
  }

  return renderHead(url)
}

export async function render(url) {
  const requestUrl = new URL(url || '/', SITE_URL)
  const request = new Request(requestUrl)
  const context = await handler.query(request)

  if (context instanceof Response) {
    return {
      status: context.status,
      headers: Object.fromEntries(context.headers.entries()),
      head: getHead(requestUrl.pathname, context.status),
      html: '',
    }
  }

  const router = createStaticRouter(handler.dataRoutes, context)
  const html = renderToString(
    <AppShell>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </AppShell>,
  )

  return {
    status: context.statusCode || 200,
    headers: {},
    head: getHead(requestUrl.pathname, context.statusCode || 200),
    html,
  }
}
