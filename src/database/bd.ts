// import mysql from 'promise-mysql'
import { createPool } from 'promise-mysql'
import config from '../app/config'

const conect = createPool({
  user: config.user,
  password: config.pass,
  host: config.host,
  database: config.bd
})

export default conect
