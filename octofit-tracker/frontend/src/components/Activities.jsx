import CollectionView from './CollectionView.jsx'
import { getApiEndpoint } from '../api.js'

const apiPath = '/api/activities/'

function Activities() {
  return (
    <CollectionView
      collection="activities"
      endpoint={getApiEndpoint('activities', apiPath.replace('/api', ''))}
      title="Activities"
      intro="Recent workouts and movement sessions logged by OctoFit users."
      fields={["user", "type", "durationMinutes", "caloriesBurned", "completedAt"]}
    />
  )
}

export default Activities