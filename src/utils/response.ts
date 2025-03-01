import type { AxiosResponse } from 'axios'
import process from 'node:process'
import consola from 'consola'

export default async function useResponse<T extends Record<string, any>>(responsePromise: Promise<AxiosResponse<any, any>>): Promise<T> {
  return responsePromise.then((response) => {
    const data = response.data

    if (data.flag !== 1) {
      const message = `${response.config.url} - ${data.msg}`
      consola.error(new Error(message))
      process.exit(1)
    }

    return data
  })
}
