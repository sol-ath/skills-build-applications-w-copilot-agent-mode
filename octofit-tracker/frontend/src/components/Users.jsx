import CollectionView from './CollectionView.jsx'

function Users() {
  return (
    <CollectionView
      collection="users"
      title="Users"
      intro="Athletes, coaches, and team members registered in OctoFit."
      fields={["name", "email", "role", "team"]}
    />
  )
}

export default Users