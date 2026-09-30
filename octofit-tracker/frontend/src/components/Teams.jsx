import CollectionView from './CollectionView.jsx'
import { getApiEndpoint } from '../api.js'

function Teams() {
  return (
    <CollectionView
      collection="teams"
      endpoint={getApiEndpoint('teams')}
      title="Teams"
      intro="Training groups competing together across the OctoFit program."
      fields={["name", "city", "coach", "memberCount"]}
    />
  )
}

export default Teams