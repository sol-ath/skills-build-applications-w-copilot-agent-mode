import CollectionView from './CollectionView.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

function Workouts() {
  return (
    <CollectionView
      collection="workouts"
      endpoint={apiEndpoint}
      title="Workouts"
      intro="Personalized workout suggestions for different fitness goals."
      fields={["title", "focusArea", "difficulty", "durationMinutes", "recommendedFor"]}
    />
  )
}

export default Workouts