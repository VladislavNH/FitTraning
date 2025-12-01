type Props = {
    item: {
      id: number
      title: string
      desc: string
      calories: number
    }
  }
  
  export default function NutritionCard({ item }: Props) {
    return (
      <div className="nutrition-card">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <span>{item.calories} ккал</span>
      </div>
    )
  }
  