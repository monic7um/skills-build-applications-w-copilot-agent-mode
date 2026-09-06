const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export function getCollectionItems(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.results)) return payload.results
  return []
}

export async function fetchCollection(component) {
  const response = await fetch(`${API_BASE_URL}/api/${component}/`)
  if (!response.ok) throw new Error(`Unable to load ${component}`)
  return getCollectionItems(await response.json())
}