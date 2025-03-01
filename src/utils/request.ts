import axios from 'axios'
import { useFormData } from './form-data'

const instance = axios.create({
  baseURL: 'https://api.blueskyrescue.cn/index.php/Web'
})

instance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  config.data = useFormData(config.data)
  return config
})

export default instance
