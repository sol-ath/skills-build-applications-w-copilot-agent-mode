import CollectionView from './CollectionView.jsx'
import { getApiEndpoint } from '../api.js'

const apiPath = '/api/users/'

function Users() {
  return (
    <CollectionView
      collection="users"
      endpoint={getApiEndpoint('users', apiPath.replace('/api', ''))}
      title="Users"
      intro="Athletes, coaches, and team members registered in OctoFit."
      fields={["name", "email", "role", "team"]}
    />
  )
}

export default Users