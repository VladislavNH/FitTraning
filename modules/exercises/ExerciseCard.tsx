type Props = {
    exercise: {
      id: number
      title: string
      desc: string
      tips: string
    }
  }
  
  export default function ExerciseCard({ exercise }: Props) {
    return (
      <div className="exercise-card">
        <h3>{exercise.title}</h3>
        <p>{exercise.desc}</p>
        <p>{exercise.tips}</p>
      </div>
    )
  }
  