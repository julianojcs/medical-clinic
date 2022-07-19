import { createServer } from '../server'
import Hapi from '@hapi/hapi'

const payload = {
  name: 'John Doe',
  email: `test.${Date.now()}@example.com`,
  password: '123456',
  phones: ['###########'],
  role: 'attendant'
}

describe('attendant endpoints', () => {
  let attendantId: string
  let server: Hapi.Server

  beforeAll(async () => {
    server = await createServer()
  })

  afterAll(async () => {
    await server.stop()
  })

  test('create attendant', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/attendants',
      payload: payload
    })
    expect(response.statusCode).toEqual(201)
    attendantId = JSON.parse(response.payload)?.id
    expect(attendantId).toBeTruthy()
  })

  test('create attendant validation', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/attendants',
      payload: {
        ...payload,
        name: undefined
      }
    })
    expect(response.statusCode).toEqual(400)
  })

  test('get attendant returns 404 for non existant attendant', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/attendants/0b314932-2901-4695-8594-a97087b27c42' // id does not exist
    })

    expect(response.statusCode).toEqual(404)
  })

  test('get attendants returns array of attendant', async () => {
    const response = await server.inject({
      method: 'GET',
      url: `/attendants`
    })
    expect(response.statusCode).toEqual(200)
    const attendants = JSON.parse(response.payload)

    expect(Array.isArray(attendants)).toBeTruthy()
    expect(attendants[0]?.id).toBeTruthy()
  })

  test('get attendant fails with invalid id', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/attendants/0b314932-2901-4695-8594-a97087b27c42' // id has invalid format
    })
    expect(response.statusCode).toEqual(404)
  })

  test('delete attendant', async () => {
    const response = await server.inject({
      method: 'DELETE',
      url: `/attendants/${attendantId}`
    })
    expect(response.statusCode).toEqual(204)
  })
})
