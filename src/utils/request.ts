import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.blueskyrescue.cn/index.php/Web'
})

export default instance
