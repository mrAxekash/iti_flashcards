import { useState } from 'react'

import { StarIcon } from '@/assets/icons/Star.tsx'
import { StarOutline } from '@/assets/icons/StarOutline.tsx'

export const Grade = () => {
  const [grade, setGrade] = useState(0)

  const handleRatingClick = (newGrade: number) => {
    setGrade(newGrade)
  }

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span key={index} onClick={() => handleRatingClick(index + 1)}>
          {index < grade ? <StarIcon /> : <StarOutline />}
        </span>
      ))}
    </div>
  )
}
