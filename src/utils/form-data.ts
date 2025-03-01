export function useFormData(data: Record<string, any>): URLSearchParams {
  const formData = new URLSearchParams()

  for (const key in data) {
    formData.append(key, data[key])
  }

  return formData
}
