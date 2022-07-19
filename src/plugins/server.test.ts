import { createServer } from '../server'
import Hapi, { PluginsListRegistered } from '@hapi/hapi'

let server: Hapi.Server

beforeAll(async () => {
  server = await createServer()
})

afterAll(async () => {
  await server.stop()
})

describe('Registered Plugins', () => {
  it('Status plugin (app/status) should be registered', async () => {
    // const statusPlugin = server.registrations['app/status']
    const statusPlugin: PluginsListRegistered | undefined = (
      Object.keys(server.registrations) as (keyof typeof server.registrations)[]
    ).find((key) => key === 'app/status')
    expect(statusPlugin).toBeDefined()
  })

  it('Users plugin (app/attendants) should be registered', async () => {
    const usersPlugin: PluginsListRegistered | undefined = (
      Object.keys(server.registrations) as (keyof typeof server.registrations)[]
    ).find((key) => key === 'app/attendants')
    expect(usersPlugin).toBeDefined()
  })

  it('Prisma plugin (prisma) should be registered', async () => {
    const prismaPlugin: PluginsListRegistered | undefined = (
      Object.keys(server.registrations) as (keyof typeof server.registrations)[]
    ).find((key) => key === 'prisma')
    expect(prismaPlugin).toBeDefined()
  })
})

describe('Status plugin', () => {
  it("POST / doesn't exist", async () => {
    const response = await server.inject({
      url: '/',
      method: 'POST'
    })
    expect(response.statusCode).toEqual(404)
  })

  it('GET / exist', async () => {
    const response = await server.inject({
      url: '/',
      method: 'GET'
    })
    expect(response.statusCode).toEqual(200)
    const payload = JSON.parse(response.payload)
    expect(payload.up).toBeTruthy()
  })
})
