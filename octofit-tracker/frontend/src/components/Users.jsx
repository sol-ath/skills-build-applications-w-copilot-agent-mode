import CollectionView from './CollectionView.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  return (
    <CollectionView
      collection="users"
      endpoint={apiEndpoint}
      title="Users"
      intro="Athletes, coaches, and team members registered in OctoFit."
      fields={["name", "email", "role", "team"]}
    />
  )
}

export default Users