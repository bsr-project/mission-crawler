import path from 'node:path'
import process from 'node:process'
import fs from 'fs-extra'

const BASE_PATH = path.resolve(process.cwd(), 'datas')

type FilePath = [string, ...string[]]

export default class DataFile {
  private _path: string

  constructor(...filepath: FilePath) {
    this._path = path.resolve(BASE_PATH, ...filepath)
    ensureFile(this._path)
  }

  write(content: string) {
    fs.writeFileSync(this._path, content)
  }
}

function ensureFile(path: string) {
  if (!fs.existsSync(path)) {
    fs.ensureFileSync(path)
  }
}
