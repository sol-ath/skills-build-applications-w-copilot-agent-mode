import CollectionView from './CollectionView.jsx'
import { getApiEndpoint } from '../api.js'

const apiPath = '/api/leaderboard/'

function Leaderboard() {
  return (
    <CollectionView
      collection="leaderboard"
      endpoint={getApiEndpoint('leaderboard', apiPath.replace('/api', ''))}
      title="Leaderboard"
      intro="Current standings ranked by OctoFit performance points."
      fields={["rank", "user", "team", "points"]}
    />
  )
}

export default Leaderboard