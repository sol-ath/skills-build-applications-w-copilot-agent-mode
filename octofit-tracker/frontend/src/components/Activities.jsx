import CollectionView from './CollectionView.jsx'

function Activities() {
  return (
    <CollectionView
      collection="activities"
      title="Activities"
      intro="Recent workouts and movement sessions logged by OctoFit users."
      fields={["user", "type", "durationMinutes", "caloriesBurned", "completedAt"]}
    />
  )
}

export default Activities