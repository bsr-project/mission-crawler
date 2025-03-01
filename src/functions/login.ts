import process from 'node:process'
import consola from 'consola'
import useFiles from '../utils/files'
import axios from '../utils/request'
import useResponse from '../utils/response'

export default function login() {
  useResponse(
    axios.post('/User/login', {
      account: process.env.ACCOUNT,
      password: process.env.PASSWORD
    })
  )
    .then((response) => {
      const { useTokenFile } = useFiles()
      const file = useTokenFile()

      if (!response?.data?.token) {
        consola.error(new Error(`token 不存在`))
      }

      file.write(response.data.token)

      consola.success('登录成功')
    })
}
