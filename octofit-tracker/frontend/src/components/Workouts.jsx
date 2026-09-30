import CollectionView from './CollectionView.jsx'
import { getApiEndpoint } from '../api.js'

function Workouts() {
  return (
    <CollectionView
      collection="workouts"
      endpoint={getApiEndpoint('workouts')}
      title="Workouts"
      intro="Personalized workout suggestions for different fitness goals."
      fields={["title", "focusArea", "difficulty", "durationMinutes", "recommendedFor"]}
    />
  )
}

export default Workouts