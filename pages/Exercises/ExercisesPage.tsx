import { exercises } from "../../data/exercisesData"
import ExerciseCard from "../../modules/exercises/ExerciseCard"

export default function ExercisesPage() {
  return (
    <div>
      {exercises.map(e => (
        <ExerciseCard key={e.id} exercise={e} />
      ))}
    </div>
  )
}
