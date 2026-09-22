const fs = require('fs-extra')
const path = require('path')

const ROLES_CONFIG_DIR = path.resolve(__dirname, '../src/config/Role')
const ROLE_INDEX_FILE = path.resolve(__dirname, '../public/data/roles.json')
const ROLE_DETAIL_DIR = path.resolve(__dirname, '../public/data/roles')

const importRoleModule = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8')
  const match = content.match(/const\s+role\s*=\s*(\{[\s\S]*?\})\s*export\s+default\s+role/)
  if (match) {
    return JSON.parse(match[1])
  }
  const defaultMatch = content.match(/export\s+default\s+(\{[\s\S]*\})/)
  if (defaultMatch) {
    return JSON.parse(defaultMatch[1])
  }
  return null
}

const run = async () => {
  await fs.ensureDir(ROLE_DETAIL_DIR)

  const files = fs
    .readdirSync(ROLES_CONFIG_DIR)
    .filter((f) => f.endsWith('.js') && f !== 'index.js')

  const indexList = []

  for (const file of files) {
    const filePath = path.join(ROLES_CONFIG_DIR, file)
    const role = importRoleModule(filePath)
    if (!role) {
      console.warn(`[seed] skip unparseable file: ${file}`)
      continue
    }

    const detailFile = path.join(ROLE_DETAIL_DIR, `${role.id}.json`)
    await fs.writeJSON(detailFile, role, { spaces: 2 })

    indexList.push({
      id: role.id,
      name: role.name,
      elemental: role.elemental,
      header: role.header || ''
    })
  }

  indexList.sort((a, b) => a.id.localeCompare(b.id))
  await fs.writeJSON(ROLE_INDEX_FILE, indexList, { spaces: 2 })

  console.log(`[seed] done. ${indexList.length} roles imported → public/data/`)
}

run().catch((err) => {
  console.error('[seed] failed:', err)
  process.exit(1)
})