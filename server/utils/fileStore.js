const fs = require('fs-extra')
const path = require('path')

const DATA_DIR = path.resolve(__dirname, '../../public/data')
const ROLES_FILE = path.join(DATA_DIR, 'roles.json')
const ROLES_DIR = path.join(DATA_DIR, 'roles')
const STORAGE_HEADER_DIR = path.resolve(__dirname, '../../public/header')
const STORAGE_BANNER_DIR = path.resolve(__dirname, '../../public/banner')

const ensureDir = (dir) => fs.ensureDir(dir)

const ensureDataDirs = async () => {
  await Promise.all([
    ensureDir(DATA_DIR),
    ensureDir(ROLES_DIR),
    ensureDir(STORAGE_HEADER_DIR),
    ensureDir(STORAGE_BANNER_DIR)
  ])
}

const readJSON = async (file) => {
  const exists = await fs.pathExists(file)
  if (!exists) return null
  return fs.readJSON(file)
}

const writeJSON = async (file, data) => {
  await ensureDir(path.dirname(file))
  return fs.writeJSON(file, data, { spaces: 2 })
}

const readRolesIndex = async () => {
  const data = await readJSON(ROLES_FILE)
  return data || []
}

const writeRolesIndex = async (list) => writeJSON(ROLES_FILE, list)

const readRoleDetail = async (id) => {
  const file = path.join(ROLES_DIR, `${id}.json`)
  return readJSON(file)
}

const writeRoleDetail = async (role) => {
  const file = path.join(ROLES_DIR, `${role.id}.json`)
  return writeJSON(file, role)
}

const deleteRoleDetail = async (id) => {
  const file = path.join(ROLES_DIR, `${id}.json`)
  return fs.remove(file)
}

module.exports = {
  ensureDataDirs,
  readRolesIndex,
  writeRolesIndex,
  readRoleDetail,
  writeRoleDetail,
  deleteRoleDetail,
  ROLES_DIR,
  STORAGE_HEADER_DIR,
  STORAGE_BANNER_DIR
}