import Hapi from '@hapi/hapi'
import statusPlugin from './plugins/status'
import prismaPlugin from './plugins/prisma'
import attendantsPlugin from './plugins/attendant'

const server: Hapi.Server = new Hapi.Server({
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost'
  // routes: {
  //   cors: {
  //     origin: ['*'],
  //     headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match'],
  //     additionalHeaders: ['Cache-Control'],
  //     exposedHeaders: ['WWW-Authenticate'],
  //     credentials: true,
  //     maxAge: 3600,
  //     methods: ['GET', 'PUT', 'POST', 'DELETE'],
  //     preflightContinue: false,
  //     optionsSuccessStatus: 204,
  //   },
  // },
} as any)

export async function createServer(): Promise<Hapi.Server> {
  await server.register([statusPlugin, prismaPlugin, attendantsPlugin])
  await server.initialize() // initialize the plugins but do not open de server for connections
  return server
}

export async function startServer(server: Hapi.Server): Promise<Hapi.Server> {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
  return server
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})
