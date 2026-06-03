import fs from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('--prod')
const port = Number(process.env.PORT || 5173)
const clientRoot = path.resolve(__dirname, 'dist/client')

const mimeTypes = {
  '.css': 'text/css',
  '.gif': 'image/gif',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.map': 'application/json',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain',
  '.webp': 'image/webp',
  '.xml': 'application/xml',
}

let vite
let template
let render

if (isProduction) {
  template = await fs.readFile(path.join(clientRoot, 'index.html'), 'utf-8')
  render = (await import('./dist/server/entry-server.js')).render
} else {
  vite = await createViteServer({
    root: __dirname,
    appType: 'custom',
    server: {
      middlewareMode: true,
    },
  })
}

function isSafePath(filePath) {
  const relative = path.relative(clientRoot, filePath)
  return relative && !relative.startsWith('..') && !path.isAbsolute(relative)
}

async function serveStaticAsset(req, res) {
  const requestUrl = new URL(req.url || '/', 'http://localhost')
  const pathname = decodeURIComponent(requestUrl.pathname)

  if (pathname === '/') {
    return false
  }

  const filePath = path.resolve(clientRoot, `.${pathname}`)

  if (!isSafePath(filePath)) {
    return false
  }

  try {
    const stat = await fs.stat(filePath)

    if (!stat.isFile()) {
      return false
    }

    const extension = path.extname(filePath).toLowerCase()
    const contentType = mimeTypes[extension] || 'application/octet-stream'
    const content = await fs.readFile(filePath)

    res.statusCode = 200
    res.setHeader('Content-Type', contentType)

    if (pathname.startsWith('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    }

    res.end(content)
    return true
  } catch {
    return false
  }
}

async function handleSsr(req, res) {
  const url = req.url || '/'

  try {
    const rawTemplate = isProduction
      ? template
      : await fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8')
    const transformedTemplate = isProduction ? rawTemplate : await vite.transformIndexHtml(url, rawTemplate)
    const ssrRender = isProduction ? render : (await vite.ssrLoadModule('/src/entry-server.jsx')).render
    const rendered = await ssrRender(url)

    Object.entries(rendered.headers || {}).forEach(([key, value]) => {
      res.setHeader(key, value)
    })

    res.statusCode = rendered.status || 200

    if (res.statusCode >= 300 && res.statusCode < 400) {
      res.end()
      return
    }

    const html = transformedTemplate
      .replace('<!--app-head-->', rendered.head || '')
      .replace('<!--app-html-->', rendered.html || '')

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(html)
  } catch (error) {
    if (!isProduction) {
      vite.ssrFixStacktrace(error)
    }

    console.error(error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Internal Server Error')
  }
}

const server = http.createServer(async (req, res) => {
  if (isProduction) {
    const served = await serveStaticAsset(req, res)

    if (served) {
      return
    }

    await handleSsr(req, res)
    return
  }

  vite.middlewares(req, res, () => {
    handleSsr(req, res)
  })
})

server.listen(port, () => {
  console.log(`SSR server running at http://localhost:${port}`)
})
