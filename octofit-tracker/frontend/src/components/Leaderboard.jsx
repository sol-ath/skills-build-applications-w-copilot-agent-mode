import CollectionView from './CollectionView.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  return (
    <CollectionView
      collection="leaderboard"
      endpoint={apiEndpoint}
      title="Leaderboard"
      intro="Current standings ranked by OctoFit performance points."
      fields={["rank", "user", "team", "points"]}
    />
  )
}

export default Leaderboard