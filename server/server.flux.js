// @flow
import express from 'express'
import next from 'next'

type appHandler = (req: express$Request, res: express$Response) => void

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle: appHandler = app.getRequestHandler()

app.prepare().then((): void => {
  const server = express()

  server.get('/github', (req: express$Request, res: express$Response) =>
    res.redirect(301, 'https://github.com/andreiconstantinescu')
  )

  server.get('*', (req: express$Request, res: express$Response) =>
    handle(req, res)
  )

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
