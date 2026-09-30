import CollectionView from './CollectionView.jsx'
import { getApiEndpoint } from '../api.js'

function Users() {
  return (
    <CollectionView
      collection="users"
      endpoint={getApiEndpoint('users')}
      title="Users"
      intro="Athletes, coaches, and team members registered in OctoFit."
      fields={["name", "email", "role", "team"]}
    />
  )
}

export default Users