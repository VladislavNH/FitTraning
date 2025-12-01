import { reviews } from "../../data/reviewsData"
import ReviewCard from "../../modules/reviews/ReviewCard"

export default function ReviewsPage() {
  return (
    <div>
      {reviews.map(r => (
        <ReviewCard key={r.id} review={r} />
      ))}
    </div>
  )
}
