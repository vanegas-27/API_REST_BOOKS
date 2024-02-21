import { config } from 'dotenv'

config()

export default {
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  pass: process.env.PASS,
  bd: process.env.BD
}
