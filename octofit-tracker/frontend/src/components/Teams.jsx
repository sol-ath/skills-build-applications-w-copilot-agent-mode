import CollectionView from './CollectionView.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

function Teams() {
  return (
    <CollectionView
      collection="teams"
      endpoint={apiEndpoint}
      title="Teams"
      intro="Training groups competing together across the OctoFit program."
      fields={["name", "city", "coach", "memberCount"]}
    />
  )
}

export default Teams