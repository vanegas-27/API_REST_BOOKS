import express from 'express'
import env from './config'
import morgan from 'morgan'
import routerBooks from '../routes/books.routes'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.set('port', env.port)

app.use('/api/books/', routerBooks)

app.get('/api', (_, res) => {
  res.send('<h1>REST API DAV.VANEGAS</h1>')
})

export default app
