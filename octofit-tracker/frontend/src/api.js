const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function getApiEndpoint(component) {
  return `${apiBaseUrl}/${component}/`
}

export function normalizeApiData(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (Array.isArray(payload?.data)) {
    return payload.data
  }

  if (Array.isArray(payload?.results)) {
    return payload.results
  }

  if (Array.isArray(payload?.items)) {
    return payload.items
  }

  if (Array.isArray(payload?.docs)) {
    return payload.docs
  }

  return []
}

export async function fetchCollection(collection) {
  const response = await fetch(getApiEndpoint(collection))

  if (!response.ok) {
    throw new Error(`Unable to load ${collection}: ${response.status}`)
  }

  return normalizeApiData(await response.json())
}