"use client"

import { useEffect, useState } from "react"

export default function Starfield() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: string; delay: number }>>([])

  useEffect(() => {
    const generateStars = () => {
      const starArray = []
      for (let i = 0; i < 150; i++) {
        const size = Math.random() > 0.8 ? "large" : Math.random() > 0.6 ? "medium" : "small"
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size,
          delay: Math.random() * 3,
        })
      }
      setStars(starArray)
    }

    generateStars()
  }, [])

  return (
    <div className="stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.size}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      <div className="shooting-star" style={{ top: "20%", animationDelay: "0s" }} />
      <div className="shooting-star" style={{ top: "60%", animationDelay: "8s" }} />
      <div className="shooting-star" style={{ top: "40%", animationDelay: "15s" }} />
    </div>
  )
}
