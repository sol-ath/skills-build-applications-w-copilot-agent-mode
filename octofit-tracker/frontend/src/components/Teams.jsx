import CollectionView from './CollectionView.jsx'
import { getApiEndpoint } from '../api.js'

const apiPath = '/api/teams/'

function Teams() {
  return (
    <CollectionView
      collection="teams"
      endpoint={getApiEndpoint('teams', apiPath.replace('/api', ''))}
      title="Teams"
      intro="Training groups competing together across the OctoFit program."
      fields={["name", "city", "coach", "memberCount"]}
    />
  )
}

export default Teams