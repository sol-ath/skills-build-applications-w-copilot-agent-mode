import CollectionView from './CollectionView.jsx'
import { getApiEndpoint } from '../api.js'

const apiPath = '/api/workouts/'

function Workouts() {
  return (
    <CollectionView
      collection="workouts"
      endpoint={getApiEndpoint('workouts', apiPath.replace('/api', ''))}
      title="Workouts"
      intro="Personalized workout suggestions for different fitness goals."
      fields={["title", "focusArea", "difficulty", "durationMinutes", "recommendedFor"]}
    />
  )
}

export default Workouts