import path from 'node:path'
import process from 'node:process'
import consola from 'consola'
import dotenv from 'dotenv'
import functions from './functions'

dotenv.config({
  path: path.resolve(process.cwd(), '.env.local')
})

const [key] = process.argv.slice(2)

if (!key) {
  const keys = Object.keys(functions)
  consola.error(`请输入执行函数：${keys.join(' | ')}`)
  process.exit(1)
}

const fn = functions[key as keyof typeof functions]

if (typeof fn !== 'function') {
  consola.error(`未知函数：${key}`)
  process.exit(1)
}

consola.info(`执行函数：${key}`)

fn()
