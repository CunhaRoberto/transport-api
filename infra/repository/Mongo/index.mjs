// eslint-disable-next-line no-unused-vars
import dotenv from 'dotenv/config'
import { MongoMemoryServer } from 'mongodb-memory-server';
import Mongo from './Mongo.mjs'
import Application from '../../../src/support/Application.mjs'

let { 
  DB_HOST_LOCAL,
  DB_USER_LOCAL,
  DB_PASSWORD_LOCAL,
  SRV,
  DB_NAME,
  DB_PORT_LOCAL,
  DB_URI,
  NODE_TEST,
  PORT
} = process.env

DB_URI = `mongodb${SRV}://${DB_HOST_LOCAL}:${DB_PORT_LOCAL}` 

if (Application.isInLocalMode()) {
  DB_URI = `mongodb://${DB_HOST_LOCAL}:${DB_PORT_LOCAL}`  
}



if (NODE_TEST) {
  const mongod = await MongoMemoryServer.create()
  DB_URI = mongod.getUri()
  console.log('CONNECTION ==>', DB_URI)
}

const databaseClient = new Mongo(DB_URI, DB_NAME)
console.log(`⚡️ Mongo conectdado: ${DB_URI}.`)
console.log(`⚡️ Banco de dados: ${DB_NAME}.`)
databaseClient.connect()

export { databaseClient as Implementation }
export default databaseClient