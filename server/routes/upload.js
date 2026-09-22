const path = require('path')
const fs = require('../utils/fileStore')

module.exports = async function uploadRoutes(app) {
  app.post('/upload/header', async (request, reply) => {
    const data = await request.file()
    if (!data) {
      return reply.code(400).send({ error: 'No file uploaded' })
    }
    const ext = path.extname(data.filename) || '.png'
    const safeName = `${Date.now()}${ext}`
    const dest = path.join(fs.STORAGE_HEADER_DIR, safeName)
    await data.toFile(dest)
    return reply.code(201).send({ url: `header/${safeName}` })
  })
}