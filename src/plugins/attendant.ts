import Hapi from '@hapi/hapi'
import boom from '@hapi/boom'
import Joi from 'joi'
import { AttendantProps, UserProps } from '../@types'

const attendantInputValidator = Joi.object({
  name: Joi.string().alter({
    create: (schema) => schema.required(),
    update: (schema) => schema.optional()
  }),
  email: Joi.string()
    .email()
    .alter({
      create: (schema) => schema.lowercase().required(),
      update: (schema) => schema.lowercase().optional()
    }),
  phones: Joi.array()
    .items(Joi.string().default([]))
    .alter({
      create: (schema) => schema.required(),
      update: (schema) => schema.optional()
    })
    .optional(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,16}$/)
    .alter({
      create: (schema) => schema.required(),
      update: (schema) => schema.optional()
    }),
  role: Joi.string()
    .valid('attendant')
    .alter({
      create: (schema) => schema.required(),
      update: (schema) => schema.optional()
    })
})

const createAttendantValidator = attendantInputValidator.tailor('create')
const updateAttendantValidator = attendantInputValidator.tailor('update')

const attendantsPlugin: Hapi.Plugin<undefined> = {
  name: 'app/attendants',
  dependencies: ['prisma'],
  register: async (server: Hapi.Server) => {
    server.route([
      {
        method: 'POST',
        path: '/attendants',
        handler: createAttendantHandler,
        options: {
          validate: {
            payload: createAttendantValidator,
            failAction: (request, h, err) => {
              throw err
            }
          }
        }
      },
      {
        method: 'GET',
        path: '/attendants',
        handler: getAttendantsHandler,
        options: {
          validate: {
            failAction: (
              request: Hapi.Request,
              h: Hapi.ResponseToolkit,
              err: any
            ) => {
              // show validation errors to user https://github.com/hapijs/hapi/issues/3706
              throw err
            }
          }
        }
      },
      {
        method: 'GET',
        path: '/attendants/{id}',
        handler: getAttendantHandler,
        options: {
          validate: {
            params: Joi.object({
              id: Joi.string().guid({ version: 'uuidv4' })
            }),
            failAction: (
              request: Hapi.Request,
              h: Hapi.ResponseToolkit,
              err: any
            ) => {
              throw err
            }
          }
        }
      },
      {
        method: 'DELETE',
        path: '/attendants/{id}',
        handler: deleteAttendantHandler,
        options: {
          validate: {
            params: Joi.object({
              id: Joi.string().guid({ version: 'uuidv4' })
            }),
            failAction: (
              request: Hapi.Request,
              h: Hapi.ResponseToolkit,
              err: any
            ) => {
              throw err
            }
          }
        }
      },
      {
        method: 'PUT',
        path: '/attendants/{id}',
        handler: updateAttendantHandler,
        options: {
          validate: {
            params: Joi.object({
              id: Joi.string().guid({ version: 'uuidv4' })
            }),
            payload: updateAttendantValidator,
            failAction: (request, h, err) => {
              throw err
            }
          }
        }
      }
    ])
  }
}

const createAttendantHandler: any = async (
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) => {
  const { prisma } = request.server.app
  const payload = request.payload as UserProps
  try {
    const createdAttendant = await prisma.user.create({
      data: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        phones: payload.phones || [],
        role: payload.role
      }
    })
    return h.response(createdAttendant).code(201)
  } catch (error: any) {
    console.log(error)
    return boom.badImplementation('Error creating attendant')
  }
}
const getAttendantHandler: any = async (
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) => {
  const { prisma } = request.server.app
  const { id } = request.params

  const attendant = await prisma.user.findUnique({
    where: {
      id: id
    }
  })
  if (!attendant) {
    return boom.notFound('User not found')
  }
  return h.response(attendant).code(200)
}
const deleteAttendantHandler: any = async (
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) => {
  const { prisma } = request.server.app
  const { id } = request.params

  try {
    await prisma.user.delete({
      where: {
        id: id
      }
    })
    return h.response().code(204)
  } catch (error) {
    return boom.badImplementation('Fail to delete attendant')
  }
}
const getAttendantsHandler: any = async (
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) => {
  const { prisma } = request.server.app

  try {
    const attendants = await prisma.user.findMany({
      where: {
        role: 'attendant',
        isActive: true
      },
      select: {
        id: true,
        name: true,
        email: true,
        phones: true
      }
    })
    return h.response(attendants).code(200)
  } catch (err: any) {
    request.log('error', err)
    return boom.badImplementation('failed to get attendants')
  }
}
async function updateAttendantHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const { prisma } = request.server.app
  const attendantId = request.params.id
  const payload = request.payload as Partial<AttendantProps>

  try {
    const updatedAttendant = await prisma.user.update({
      where: {
        id: attendantId
      },
      data: payload
    })
    return h.response(updatedAttendant).code(200)
  } catch (err: any) {
    request.log('error', err)
    return boom.badImplementation('failed to update attendant')
  }
}

export default attendantsPlugin
