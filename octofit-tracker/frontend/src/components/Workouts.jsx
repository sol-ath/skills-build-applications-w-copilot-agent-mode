import CollectionView from './CollectionView.jsx'

function Workouts() {
  return (
    <CollectionView
      collection="workouts"
      title="Workouts"
      intro="Personalized workout suggestions for different fitness goals."
      fields={["title", "focusArea", "difficulty", "durationMinutes", "recommendedFor"]}
    />
  )
}

export default Workouts