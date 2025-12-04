type Props = {
    review: {
      id: number
      name: string
      text: string
    }
  }
  
  export default function ReviewCard({ review }: Props) {
    return (
      <div className="review-card">
        <h3>{review.name}</h3>
        <p>{review.text}</p>
      </div>
    )
  }
  