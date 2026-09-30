import CollectionView from './CollectionView.jsx'
import { getApiEndpoint } from '../api.js'

function Leaderboard() {
  return (
    <CollectionView
      collection="leaderboard"
      endpoint={getApiEndpoint('leaderboard')}
      title="Leaderboard"
      intro="Current standings ranked by OctoFit performance points."
      fields={["rank", "user", "team", "points"]}
    />
  )
}

export default Leaderboard