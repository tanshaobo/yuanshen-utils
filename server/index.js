const Fastify = require('fastify')
const multipart = require('@fastify/multipart')
const path = require('path')

const roleRoutes = require('./routes/role')
const uploadRoutes = require('./routes/upload')

const app = Fastify({
  logger: true
})

app.register(multipart, {
  limits: { fileSize: 20 * 1024 * 1024 }
})

app.register(roleRoutes, { prefix: '/api' })
app.register(uploadRoutes, { prefix: '/api' })

app.get('/api/health', async () => ({ status: 'ok' }))

const PORT = Number(process.env.PORT) || 3001

const start = async () => {
  try {
    await app.listen({ port: PORT, host: 'localhost' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()