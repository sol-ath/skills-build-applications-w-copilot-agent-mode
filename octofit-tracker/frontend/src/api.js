const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export const apiEndpoints = {
  activities: codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
    : 'http://localhost:8000/api/activities/',
  leaderboard: codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
    : 'http://localhost:8000/api/leaderboard/',
  teams: codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
    : 'http://localhost:8000/api/teams/',
  users: codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/users/`
    : 'http://localhost:8000/api/users/',
  workouts: codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
    : 'http://localhost:8000/api/workouts/',
}

export function getApiEndpoint(component, apiPath = `/${component}/`) {
  return apiEndpoints[component] ?? `${apiBaseUrl}${apiPath}`
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