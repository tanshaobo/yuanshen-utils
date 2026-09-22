const z = require('zod')
const fs = require('../utils/fileStore')

const roleSchema = z.object({
  id: z.string(),
  name: z.string(),
  elemental: z.string(),
  talent: z.number(),
  header: z.string().optional(),
  relics: z.array(z.any()).optional(),
  flower: z.any().optional(),
  plume: z.any().optional(),
  sands: z.any().optional(),
  goblet: z.any().optional(),
  circlet: z.any().optional()
})

const roleSummary = (role) => ({
  id: role.id,
  name: role.name,
  elemental: role.elemental,
  header: role.header || ''
})

module.exports = async function roleRoutes(app) {
  app.post('/roles', async (request, reply) => {
    const parsed = roleSchema.safeParse(request.body)
    if (!parsed.success) {
      return reply.code(400).send({ error: parsed.error.issues })
    }
    const role = parsed.data
    const index = await fs.readRolesIndex()
    if (index.some((i) => i.id === role.id)) {
      return reply.code(409).send({ error: `Role ${role.id} already exists` })
    }
    index.push(roleSummary(role))
    await fs.writeRolesIndex(index)
    await fs.writeRoleDetail(role)
    return reply.code(201).send({ ok: true, id: role.id })
  })

  app.put('/roles/:id', async (request, reply) => {
    const { id } = request.params
    const parsed = roleSchema.safeParse(request.body)
    if (!parsed.success) {
      return reply.code(400).send({ error: parsed.error.issues })
    }
    const role = parsed.data
    role.id = id
    const index = await fs.readRolesIndex()
    const idx = index.findIndex((i) => i.id === id)
    if (idx === -1) {
      return reply.code(404).send({ error: `Role ${id} not found` })
    }
    index[idx] = roleSummary(role)
    await fs.writeRolesIndex(index)
    await fs.writeRoleDetail(role)
    return reply.send({ ok: true, id })
  })

  app.delete('/roles/:id', async (request, reply) => {
    const { id } = request.params
    const index = await fs.readRolesIndex()
    const idx = index.findIndex((i) => i.id === id)
    if (idx === -1) {
      return reply.code(404).send({ error: `Role ${id} not found` })
    }
    index.splice(idx, 1)
    await fs.writeRolesIndex(index)
    await fs.deleteRoleDetail(id)
    return reply.send({ ok: true, id })
  })
}