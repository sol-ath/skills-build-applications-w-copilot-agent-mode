import CollectionView from './CollectionView.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function Activities() {
  return (
    <CollectionView
      collection="activities"
      endpoint={apiEndpoint}
      title="Activities"
      intro="Recent workouts and movement sessions logged by OctoFit users."
      fields={["user", "type", "durationMinutes", "caloriesBurned", "completedAt"]}
    />
  )
}

export default Activities