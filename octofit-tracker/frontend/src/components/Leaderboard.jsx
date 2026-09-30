import CollectionView from './CollectionView.jsx'

function Leaderboard() {
  return (
    <CollectionView
      collection="leaderboard"
      title="Leaderboard"
      intro="Current standings ranked by OctoFit performance points."
      fields={["rank", "user", "team", "points"]}
    />
  )
}

export default Leaderboard