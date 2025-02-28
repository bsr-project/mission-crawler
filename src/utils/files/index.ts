import { FILE_TOKEN } from './constants'
import DataFile from './data-file'

function useTokenFile() {
  return new DataFile(FILE_TOKEN)
}

export default function useFiles() {
  return {
    useTokenFile
  }
}
