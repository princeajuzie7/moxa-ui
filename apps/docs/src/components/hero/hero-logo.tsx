"use client"

import { useEffect, useState } from "react"

export  function HeroText() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="">
      <svg width="100%" height="200" viewBox="0 0 800 200" className="max-w-4xl">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feFlood floodColor="#ffffff" floodOpacity="0.2" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glowBlur" />
            <feMerge>
              <feMergeNode in="glowBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className={`text-[160px] ${mounted ? "animate-appear" : "opacity-0"}`}
          fill="none"
          stroke="rgb(255, 255, 255)"
          strokeWidth="0.7"
          filter="url(#glow)"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 300,
            animation: mounted ? "pulseAnimation 4s infinite alternate" : "none",
          }}
        >
          MOXA
        </text>
      </svg>
    </div>
  )
}

