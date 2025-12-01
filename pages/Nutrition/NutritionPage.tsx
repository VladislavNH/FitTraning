import { nutrition } from "../../data/nutritionData"
import NutritionCard from "../../modules/nutrition/NutritionCard"

export default function NutritionPage() {
  return (
    <div>
      {nutrition.map(n => (
        <NutritionCard key={n.id} item={n} />
      ))}
    </div>
  )
}
